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
  phaseIdx: number
  bucket: number
  glow: number
  settled: boolean
}

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const BASE_LINK_DIST = 120
const MOUSE_LINK_DIST = 180
const MOUSE_LINK_DIST2 = MOUSE_LINK_DIST * MOUSE_LINK_DIST
const REPEL_DIST = 130
const REPEL_DIST2 = REPEL_DIST * REPEL_DIST
const GLOW_DIST = 220
const GLOW_DIST2 = GLOW_DIST * GLOW_DIST

// Quantized alpha levels — dots are stamped in a few batched passes
const BUCKETS = 4
const BUCKET_ALPHA = [0.32, 0.52, 0.72, 0.95]
// Shared twinkle phases — 8 sin() calls per frame instead of ~4500
const PHASES = 8
const TAU = Math.PI * 2

/** Pre-rendered soft dot: white-hot core fading into color halo. */
function makeDotSprite(core: string, mid: string): HTMLCanvasElement {
  const S = 48
  const c = document.createElement('canvas')
  c.width = S
  c.height = S
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2)
  grad.addColorStop(0, 'rgba(255,255,255,1)')
  grad.addColorStop(0.22, core)
  grad.addColorStop(0.55, mid)
  grad.addColorStop(1, 'rgba(5,8,22,0)')
  g.fillStyle = grad
  g.fillRect(0, 0, S, S)
  return c
}

/**
 * Giant dotted "CTF 2.0" + dynamic particle node-link network.
 * Fast path: pre-rendered sprites (no per-dot arc/string allocs),
 * sleeping settled dots, shared pulse table, adaptive DPR + pixel
 * budget, auto quality governor, true pause offscreen.
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

    const spriteLav = makeDotSprite('#e3d9ff', 'rgba(167,139,250,0.35)')
    const spriteCyan = makeDotSprite('#cffafe', 'rgba(56,189,248,0.35)')

    let w = 0
    let h = 0
    let raf = 0
    let last = 0
    let frameNo = 0
    let visible = true
    let entered = false
    let dotsLav: Dot[] = []
    let dotsCyan: Dot[] = []
    let nodes: Node[] = []
    // Raw + smoothed cursor (smoothing kills jitter, looks buttery)
    const target = { x: -9999, y: -9999, active: false }
    const mouse = { x: -9999, y: -9999, active: false }
    // Shared per-frame pulse table + derived base buckets
    const pulseVals = new Array<number>(PHASES).fill(0.7)
    const baseBucket = new Array<number>(PHASES).fill(2)
    // Auto quality governor state
    let emaMs = 16.7
    let badFrames = 0
    let goodFrames = 0
    let qLevel = 0
    let linkDist = BASE_LINK_DIST
    let linkDist2 = BASE_LINK_DIST * BASE_LINK_DIST
    let activeNodes = 0

    function pickDpr(): number {
      const saveData = (navigator as any).connection?.saveData === true
      if (saveData) return 1
      const hw = Math.min(window.devicePixelRatio || 1, 1.5)
      let dpr = w < 640 ? Math.min(hw, 1) : hw
      // Pixel budget: huge 4K strips scale DPR down instead of melting GPUs
      const budget = 1_100_000
      const px = w * h * dpr * dpr
      if (px > budget) dpr *= Math.sqrt(budget / px)
      return Math.max(1, dpr)
    }

    function build() {
      const rect = wrap!.getBoundingClientRect()
      w = Math.max(1, Math.floor(rect.width))
      h = Math.max(1, Math.floor(rect.height))
      const dpr = pickDpr()
      canvas!.width = Math.floor(w * dpr)
      canvas!.height = Math.floor(h * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      // ── Sample "CTF 2.0" at half res (getImageData costs 1/4) ──
      const SS = 2
      const sw = Math.max(1, Math.ceil(w / SS))
      const sh = Math.max(1, Math.ceil(h / SS))
      const off = document.createElement('canvas')
      off.width = sw
      off.height = sh
      const octx = off.getContext('2d', { willReadFrequently: true })
      dotsLav = []
      dotsCyan = []
      if (octx) {
        octx.clearRect(0, 0, sw, sh)
        const fontSize = Math.min(sw / 5.4, sh * 0.58)
        octx.font = `800 ${fontSize}px "Space Grotesk", Inter, system-ui, sans-serif`
        octx.textAlign = 'center'
        octx.textBaseline = 'middle'
        octx.fillStyle = '#fff'
        octx.fillText('CTF 2.0', sw / 2, sh / 2 + fontSize * 0.04)

        const gap = w < 640 ? 3 : 4 // effective 6/8 px at full res
        const data = octx.getImageData(0, 0, sw, sh).data
        for (let y = 0; y < sh; y += gap) {
          for (let x = 0; x < sw; x += gap) {
            if (data[(y * sw + x) * 4 + 3] > 128) {
              const d: Dot = {
                bx: x * SS,
                by: y * SS,
                x: x * SS,
                y: y * SS,
                vx: 0,
                vy: 0,
                r: 1 + Math.random() * 1.1,
                phaseIdx: (Math.random() * PHASES) | 0,
                bucket: 2,
                glow: 0,
                settled: true,
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
      activeNodes = nodes.length
    }

    /** Scatter dots so they spring into place on first scroll-in. */
    function scatterDots() {
      for (const list of [dotsLav, dotsCyan]) {
        for (const d of list) {
          d.x = d.bx + (Math.random() - 0.5) * 70
          d.y = d.by + (Math.random() - 0.5) * 70 + 34
          d.vx = 0
          d.vy = 0
          d.settled = false
        }
      }
    }

    function stampDots(list: Dot[], sprite: HTMLCanvasElement) {
      for (let b = 0; b < BUCKETS; b++) {
        ctx!.globalAlpha = BUCKET_ALPHA[b]
        for (let i = 0; i < list.length; i++) {
          const d = list[i]
          if (d.bucket !== b) continue
          // Sprite core (~22% of tile) maps to dot radius; halo comes free
          const s = (d.r + d.glow * 0.9) * 4.5
          ctx!.drawImage(sprite, d.x - s / 2, d.y - s / 2, s, s)
        }
      }
      ctx!.globalAlpha = 1
    }

    function drawStatic() {
      ctx!.fillStyle = '#050816'
      ctx!.fillRect(0, 0, w, h)
      ctx!.globalAlpha = 0.85
      for (const list of [dotsLav, dotsCyan]) {
        const sprite = list === dotsLav ? spriteLav : spriteCyan
        for (const d of list) {
          const s = d.r * 4.5
          ctx!.drawImage(sprite, d.bx - s / 2, d.by - s / 2, s, s)
        }
      }
      ctx!.globalAlpha = 0.7
      ctx!.fillStyle = '#a78bfa'
      ctx!.beginPath()
      for (const n of nodes) {
        ctx!.moveTo(n.x + n.r, n.y)
        ctx!.arc(n.x, n.y, n.r, 0, TAU)
      }
      ctx!.fill()
      ctx!.globalAlpha = 1
    }

    function updateDots(list: Dot[], dt: number) {
      const mx = mouse.x
      const my = mouse.y
      const mActive = mouse.active
      for (let i = 0; i < list.length; i++) {
        const d = list[i]
        // Fast path: is the cursor anywhere near this dot?
        let near = false
        if (mActive) {
          const mdx = d.x - mx
          const mdy = d.y - my
          near =
            mdx < GLOW_DIST &&
            mdx > -GLOW_DIST &&
            mdy < GLOW_DIST &&
            mdy > -GLOW_DIST
        }
        // Settled + untouched → just take the shared phase bucket, zero math
        if (!near && d.settled) {
          d.bucket = baseBucket[d.phaseIdx]
          d.glow = 0
          continue
        }

        let glow = 0
        if (near) {
          const dx = d.x - mx
          const dy = d.y - my
          const d2 = dx * dx + dy * dy
          if (d2 < REPEL_DIST2 && d2 > 0.01) {
            const dist = Math.sqrt(d2)
            const force = ((REPEL_DIST - dist) / REPEL_DIST) * 2.6 * dt
            d.vx += (dx / dist) * force
            d.vy += (dy / dist) * force
          }
          if (d2 < GLOW_DIST2) {
            glow = 1 - Math.sqrt(d2) / GLOW_DIST
          }
        }
        const hx = d.bx - d.x
        const hy = d.by - d.y
        d.vx += hx * 0.022 * dt
        d.vy += hy * 0.022 * dt
        const damp = Math.pow(0.88, dt)
        d.vx *= damp
        d.vy *= damp
        d.x += d.vx * dt
        d.y += d.vy * dt

        d.settled =
          Math.abs(d.vx) < 0.06 &&
          Math.abs(d.vy) < 0.06 &&
          Math.abs(hx) < 0.2 &&
          Math.abs(hy) < 0.2

        const a = 0.3 + pulseVals[d.phaseIdx] * 0.5 + glow * 0.4
        d.glow = glow
        d.bucket = a > 0.85 ? 3 : a > 0.65 ? 2 : a > 0.45 ? 1 : 0
      }
    }

    function ensureLoop() {
      if (!reduce && visible && !document.hidden && !raf) {
        last = performance.now()
        raf = requestAnimationFrame(frame)
      }
    }

    function stopLoop() {
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    function frame(time: number) {
      // True pause: release the rAF slot entirely while hidden/offscreen
      if (!visible || document.hidden) {
        raf = 0
        return
      }
      raf = requestAnimationFrame(frame)

      // Delta-normalized motion: smooth on 60/120/144Hz alike
      const dt = Math.max(0.5, Math.min(2.5, (time - last) / 16.667 || 1))
      const ms = time - last
      last = time
      frameNo++

      // ── Auto quality governor (silent, hysteresis-guarded) ──
      if (ms > 0 && ms < 250) {
        emaMs += (ms - emaMs) * 0.05
        if (emaMs > 20) {
          badFrames++
          goodFrames = 0
        } else if (emaMs < 13) {
          goodFrames++
          badFrames = 0
        } else {
          badFrames = 0
          goodFrames = 0
        }
        if (badFrames > 30 && qLevel < 2) {
          qLevel++
          badFrames = 0
          linkDist = qLevel >= 1 ? 90 : BASE_LINK_DIST
          linkDist2 = linkDist * linkDist
          activeNodes =
            qLevel >= 2 ? Math.ceil(nodes.length / 2) : nodes.length
        } else if (goodFrames > 300 && qLevel > 0) {
          qLevel--
          goodFrames = 0
          linkDist = qLevel >= 1 ? 90 : BASE_LINK_DIST
          linkDist2 = linkDist * linkDist
          activeNodes =
            qLevel >= 2 ? Math.ceil(nodes.length / 2) : nodes.length
        }
      }

      // Shared twinkle table: 8 sin() calls for all ~4500 dots
      for (let p = 0; p < PHASES; p++) {
        const v = 0.55 + 0.45 * Math.sin(time * 0.0022 + (p * TAU) / PHASES)
        pulseVals[p] = v
        const a = 0.3 + v * 0.5
        baseBucket[p] = a > 0.85 ? 3 : a > 0.65 ? 2 : a > 0.45 ? 1 : 0
      }

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

      // ── Node links: ONE batched stroke ──
      ctx!.lineWidth = 1
      ctx!.strokeStyle = 'rgba(124,58,237,0.20)'
      ctx!.beginPath()
      for (let i = 0; i < activeNodes; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < activeNodes; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          if (dx > linkDist || dx < -linkDist) continue
          const dy = a.y - b.y
          if (dy > linkDist || dy < -linkDist) continue
          if (dx * dx + dy * dy < linkDist2) {
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
          }
        }
      }
      ctx!.stroke()

      // ── Mouse links: ONE batched stroke (halved rate under load) ──
      if (mouse.active && (qLevel < 1 || (frameNo & 1) === 0)) {
        ctx!.strokeStyle = 'rgba(56,189,248,0.35)'
        ctx!.beginPath()
        for (let i = 0; i < activeNodes; i++) {
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
      for (let i = 0; i < activeNodes; i++) {
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

      // ── Dotted CTF 2.0: pre-rendered sprites, sleeping dots skip math ──
      updateDots(dotsLav, dt)
      updateDots(dotsCyan, dt)
      stampDots(dotsLav, spriteLav)
      stampDots(dotsCyan, spriteCyan)
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

    // Jank-free rebuild: debounced + idle-scheduled, never mid-frame
    let resizeTimer: ReturnType<typeof setTimeout>
    let buildQueued = false
    const runQueuedBuild = () => {
      buildQueued = false
      build()
      if (reduce) drawStatic()
    }
    const scheduleBuild = () => {
      if (buildQueued) return
      buildQueued = true
      const ric = (window as any).requestIdleCallback
      if (typeof ric === 'function') ric(runQueuedBuild, { timeout: 300 })
      else setTimeout(runQueuedBuild, 80)
    }
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(scheduleBuild, 200)
    }
    const onVisibility = () => {
      if (document.hidden) stopLoop()
      else ensureLoop()
    }

    const io = new IntersectionObserver(
      (entries) => {
        const nowVisible = entries[0]?.isIntersecting ?? true
        visible = nowVisible
        if (nowVisible) {
          // Entrance: scatter once so dots spring into "CTF 2.0" on scroll-in
          if (!entered) {
            entered = true
            if (!reduce) scatterDots()
          }
          ensureLoop()
        } else {
          stopLoop()
        }
      },
      { threshold: 0.02 },
    )
    io.observe(wrap)

    build()
    if (reduce) {
      drawStatic()
    } else {
      ensureLoop()
    }

    wrap.addEventListener('pointermove', onMove, { passive: true })
    wrap.addEventListener('pointerleave', onLeave, { passive: true })
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    document.fonts?.ready
      .then(() => {
        scheduleBuild()
      })
      .catch(() => {})

    return () => {
      stopLoop()
      clearTimeout(resizeTimer)
      io.disconnect()
      wrap.removeEventListener('pointermove', onMove)
      wrap.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
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
