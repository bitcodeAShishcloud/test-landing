'use client'

import { useEffect, useRef } from 'react'

type Dot = {
  bx: number
  by: number
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
  bucket: number
  glow: number
}

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const LINK_DIST = 120
const LINK_DIST2 = LINK_DIST * LINK_DIST
const MOUSE_LINK_DIST = 180
const MOUSE_LINK_DIST2 = MOUSE_LINK_DIST * MOUSE_LINK_DIST
const REPEL_DIST = 130
const REPEL_DIST2 = REPEL_DIST * REPEL_DIST
const GLOW_DIST = 220

// Quantized alpha levels — lets us batch thousands of dots into a few fills
const BUCKETS = 4
const BUCKET_ALPHA = [0.32, 0.52, 0.72, 0.95]
const TAU = Math.PI * 2

/**
 * Giant dotted "CTF 2.0" + dynamic particle node-link network.
 * Optimized for 60fps: batched canvas paths, squared-distance checks,
 * DPR cap, delta-time motion, offscreen pause.
 */
export function CtfParticleOutro() {
  const wrapRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    // Opaque + desynced canvas is faster than transparent clearRect
    const ctx = canvas.getContext('2d', {
      alpha: false,
      desynchronized: true,
    } as CanvasRenderingContext2DSettings)
    if (!ctx) return

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let w = 0
    let h = 0
    let raf = 0
    let last = 0
    let visible = true
    let dotsLav: Dot[] = []
    let dotsCyan: Dot[] = []
    let nodes: Node[] = []
    // Raw + smoothed cursor (smoothing kills jitter, looks buttery)
    const target = { x: -9999, y: -9999, active: false }
    const mouse = { x: -9999, y: -9999, active: false }

    function build() {
      const rect = wrap!.getBoundingClientRect()
      w = Math.max(1, Math.floor(rect.width))
      h = Math.max(1, Math.floor(rect.height))
      // Cap DPR: 2x quadruples fill cost, 1.5x is visually identical here
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas!.width = Math.floor(w * dpr)
      canvas!.height = Math.floor(h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      // ── Sample "CTF 2.0" into dotted points ──
      const off = document.createElement('canvas')
      off.width = w
      off.height = h
      const octx = off.getContext('2d', { willReadFrequently: true })
      dotsLav = []
      dotsCyan = []
      if (octx) {
        octx.clearRect(0, 0, w, h)
        const fontSize = Math.min(w / 5.4, h * 0.58)
        octx.font = `800 ${fontSize}px "Space Grotesk", Inter, system-ui, sans-serif`
        octx.textAlign = 'center'
        octx.textBaseline = 'middle'
        octx.fillStyle = '#fff'
        octx.fillText('CTF 2.0', w / 2, h / 2 + fontSize * 0.04)

        const gap = w < 640 ? 6 : 8
        const data = octx.getImageData(0, 0, w, h).data
        for (let y = 0; y < h; y += gap) {
          for (let x = 0; x < w; x += gap) {
            if (data[(y * w + x) * 4 + 3] > 128) {
              const d: Dot = {
                bx: x,
                by: y,
                x,
                y,
                vx: 0,
                vy: 0,
                r: 1 + Math.random() * 1.1,
                phase: Math.random() * TAU,
                bucket: 2,
                glow: 0,
              }
              if (Math.random() < 0.12) dotsCyan.push(d)
              else dotsLav.push(d)
            }
          }
        }
        // Hard perf cap on huge screens
        const total = dotsLav.length + dotsCyan.length
        if (total > 4500) {
          dotsLav = dotsLav.filter((_, i) => i % 2 === 0)
          dotsCyan = dotsCyan.filter((_, i) => i % 2 === 0)
        }
      }

      // ── Background particle network ──
      const count = Math.max(
        24,
        Math.min(60, Math.floor((w * h) / 22000)),
      )
      nodes = new Array(count)
      for (let i = 0; i < count; i++) {
        nodes[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          r: 1 + Math.random() * 1.4,
        }
      }
    }

    function drawStatic() {
      ctx!.fillStyle = '#050816'
      ctx!.fillRect(0, 0, w, h)
      ctx!.fillStyle = '#a78bfa'
      ctx!.globalAlpha = 0.75
      ctx!.beginPath()
      for (const d of dotsLav) {
        ctx!.moveTo(d.bx + d.r, d.by)
        ctx!.arc(d.bx, d.by, d.r, 0, TAU)
      }
      for (const d of dotsCyan) {
        ctx!.moveTo(d.bx + d.r, d.by)
        ctx!.arc(d.bx, d.by, d.r, 0, TAU)
      }
      for (const n of nodes) {
        ctx!.moveTo(n.x + n.r, n.y)
        ctx!.arc(n.x, n.y, n.r, 0, TAU)
      }
      ctx!.fill()
      ctx!.globalAlpha = 1
    }

    function updateAndDrawDots(
      list: Dot[],
      time: number,
      dt: number,
    ) {
      // 1) physics + bucket classify (no drawing yet)
      const mx = mouse.x
      const my = mouse.y
      const mActive = mouse.active
      for (let i = 0; i < list.length; i++) {
        const d = list[i]
        let glow = 0
        if (mActive) {
          const dx = d.x - mx
          const dy = d.y - my
          // cheap reject before sqrt
          if (dx < GLOW_DIST && dx > -GLOW_DIST && dy < GLOW_DIST && dy > -GLOW_DIST) {
            const d2 = dx * dx + dy * dy
            if (d2 < REPEL_DIST2 && d2 > 0.01) {
              const dist = Math.sqrt(d2)
              const force =
                ((REPEL_DIST - dist) / REPEL_DIST) * 2.6 * dt
              d.vx += (dx / dist) * force
              d.vy += (dy / dist) * force
            }
            if (d2 < GLOW_DIST * GLOW_DIST) {
              glow = 1 - Math.sqrt(d2) / GLOW_DIST
            }
          }
        }
        d.vx += (d.bx - d.x) * 0.022 * dt
        d.vy += (d.by - d.y) * 0.022 * dt
        const damp = Math.pow(0.88, dt)
        d.vx *= damp
        d.vy *= damp
        d.x += d.vx * dt
        d.y += d.vy * dt

        const pulse = 0.55 + 0.45 * Math.sin(time * 0.0022 + d.phase)
        const a = 0.3 + pulse * 0.5 + glow * 0.4
        d.glow = glow
        // quantize 0..1 -> bucket 0..3 (branchless-ish)
        d.bucket = a > 0.85 ? 3 : a > 0.65 ? 2 : a > 0.45 ? 1 : 0
      }
    }

    function fillBuckets(list: Dot[], color: string) {
      ctx!.fillStyle = color
      for (let b = 0; b < BUCKETS; b++) {
        ctx!.globalAlpha = BUCKET_ALPHA[b]
        ctx!.beginPath()
        let empty = true
        for (let i = 0; i < list.length; i++) {
          const d = list[i]
          if (d.bucket !== b) continue
          const r = d.r + d.glow * 0.9
          ctx!.moveTo(d.x + r, d.y)
          ctx!.arc(d.x, d.y, r, 0, TAU)
          empty = false
        }
        if (!empty) ctx!.fill()
      }
      ctx!.globalAlpha = 1
    }

    function frame(time: number) {
      raf = requestAnimationFrame(frame)
      if (!visible || document.hidden) {
        last = time
        return
      }
      // Delta-normalized motion: smooth on 60/120/144Hz alike
      const dt = Math.max(0.5, Math.min(2.5, (time - last) / 16.667 || 1))
      last = time

      // Smooth cursor toward target (kills jitter)
      if (target.active) {
        const k = 1 - Math.pow(0.7, dt)
        mouse.x += (target.x - mouse.x) * k
        mouse.y += (target.y - mouse.y) * k
        mouse.active = true
      } else {
        mouse.active = false
      }

      // Opaque bg fill (faster than clearRect on alpha canvas)
      ctx!.fillStyle = '#050816'
      ctx!.fillRect(0, 0, w, h)

      // ── Nodes drift ──
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx * dt
        n.y += n.vy * dt
        if (n.x < 0) {
          n.x = 0
          n.vx *= -1
        } else if (n.x > w) {
          n.x = w
          n.vx *= -1
        }
        if (n.y < 0) {
          n.y = 0
          n.vy *= -1
        } else if (n.y > h) {
          n.y = h
          n.vy *= -1
        }
      }

      // ── Node links: ONE batched stroke (was ~1000 strokes) ──
      ctx!.lineWidth = 1
      ctx!.strokeStyle = 'rgba(124,58,237,0.20)'
      ctx!.beginPath()
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          if (dx > LINK_DIST || dx < -LINK_DIST) continue
          const dy = a.y - b.y
          if (dy > LINK_DIST || dy < -LINK_DIST) continue
          if (dx * dx + dy * dy < LINK_DIST2) {
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
          }
        }
      }
      ctx!.stroke()

      // ── Mouse links: ONE batched stroke ──
      if (mouse.active) {
        ctx!.strokeStyle = 'rgba(56,189,248,0.35)'
        ctx!.beginPath()
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i]
          const dx = n.x - mouse.x
          if (dx > MOUSE_LINK_DIST || dx < -MOUSE_LINK_DIST) continue
          const dy = n.y - mouse.y
          if (dy > MOUSE_LINK_DIST || dy < -MOUSE_LINK_DIST) continue
          if (dx * dx + dy * dy < MOUSE_LINK_DIST2) {
            ctx!.moveTo(n.x, n.y)
            ctx!.lineTo(mouse.x, mouse.y)
          }
        }
        ctx!.stroke()
      }

      // ── Nodes: ONE batched fill ──
      ctx!.fillStyle = '#a78bfa'
      ctx!.globalAlpha = 0.9
      ctx!.beginPath()
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        ctx!.moveTo(n.x + n.r, n.y)
        ctx!.arc(n.x, n.y, n.r, 0, TAU)
      }
      ctx!.fill()
      if (mouse.active) {
        ctx!.fillStyle = '#38bdf8'
        ctx!.beginPath()
        ctx!.arc(mouse.x, mouse.y, 2.2, 0, TAU)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      // ── Dotted CTF 2.0: 8 batched fills total (was ~4000) ──
      updateAndDrawDots(dotsLav, time, dt)
      updateAndDrawDots(dotsCyan, time, dt)
      fillBuckets(dotsLav, '#a78bfa')
      fillBuckets(dotsCyan, '#38bdf8')
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
      target.active = true
      // snap on first touch so links feel instant
      if (!mouse.active) {
        mouse.x = target.x
        mouse.y = target.y
      }
    }
    const onLeave = () => {
      target.active = false
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        build()
        if (reduce) drawStatic()
      }, 150)
    }

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true
      },
      { threshold: 0.02 },
    )
    io.observe(wrap)

    build()
    if (reduce) {
      drawStatic()
    } else {
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }

    wrap.addEventListener('pointermove', onMove, { passive: true })
    wrap.addEventListener('pointerleave', onLeave, { passive: true })
    window.addEventListener('resize', onResize)
    document.fonts?.ready
      .then(() => {
        build()
        if (reduce) drawStatic()
      })
      .catch(() => {})

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(resizeTimer)
      io.disconnect()
      wrap.removeEventListener('pointermove', onMove)
      wrap.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      ref={wrapRef}
      aria-label="CTF 2.0 particle outro"
      className="relative overflow-hidden"
      style={{
        height: '52vh',
        minHeight: 380,
        maxHeight: 560,
        background: '#050816',
        borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        touchAction: 'pan-y',
        contentVisibility: 'auto',
      }}
    >
      <span className="sr-only">CTF 2.0</span>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 55%, transparent 40%, rgba(5,8,22,0.55) 100%), radial-gradient(40% 35% at 50% 100%, rgba(94,23,235,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between py-6">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#68738D]">
          {'//'} End of transmission
        </p>
        <div />
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#68738D]">
          Ghost Protocol — Hack. Secure. Evolve.
        </p>
      </div>
    </section>
  )
}
