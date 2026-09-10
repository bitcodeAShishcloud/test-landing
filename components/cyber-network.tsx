'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: number
}

/**
 * Restrained technical ambience: very low-density drifting nodes with faint
 * slate lines and a couple of subtle purple markers. No neon blobs.
 */
export function CyberNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let raf = 0

    const glowIndices = new Set<number>()

    function build() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const density = Math.min(32, Math.floor((width * height) / 48000))
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.1 + 0.5,
        pulse: Math.random() * Math.PI * 2,
      }))

      glowIndices.clear()
      const glowCount = Math.max(2, Math.floor(density / 18))
      while (glowIndices.size < glowCount) {
        glowIndices.add(Math.floor(Math.random() * nodes.length))
      }
    }

    const maxDist = 130

    function frame() {
      ctx!.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.012
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      // connections — faint slate, single hue
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08
            ctx!.strokeStyle = `rgba(94, 23, 235, ${alpha})`
            ctx!.lineWidth = 0.6
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // nodes
      nodes.forEach((n, i) => {
        const isGlow = glowIndices.has(i)
        if (isGlow) {
          const p = (Math.sin(n.pulse) + 1) / 2
          const radius = n.r + 1.5 + p * 1.5
          const g = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 3)
          g.addColorStop(0, `rgba(94, 23, 235, ${0.16 + p * 0.1})`)
          g.addColorStop(1, 'rgba(94, 23, 235, 0)')
          ctx!.fillStyle = g
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, radius * 3, 0, Math.PI * 2)
          ctx!.fill()

          ctx!.fillStyle = `rgba(167, 139, 250, ${0.7 + p * 0.15})`
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, n.r + 0.4, 0, Math.PI * 2)
          ctx!.fill()
        } else {
          ctx!.fillStyle = 'rgba(168, 177, 199, 0.28)'
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
          ctx!.fill()
        }
      })

      raf = requestAnimationFrame(frame)
    }

    build()
    if (reduce) {
      frame()
      cancelAnimationFrame(raf)
    } else {
      frame()
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        dpr = Math.min(window.devicePixelRatio || 1, 2)
        build()
      }, 200)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
