'use client'

import { useEffect, useRef } from 'react'

/**
 * High-performance, ultra-smooth Slow-Motion Binary Matrix Rain (0 & 1)
 * Atmospheric background ambient cyber stream designed for Ghost Protocol CTF
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
    let dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)
    let raf = 0

    const fontSize = 14
    const colWidth = 26
    let columns = 0

    interface ColumnDrop {
      x: number
      y: number
      speed: number
      length: number
      chars: string[]
      glowColor: string
      bodyColor: string
      lastChange: number
    }

    let drops: ColumnDrop[] = []

    const palette = [
      // Subtle Cyber Invaders green / cyan / lavender hues
      {
        glow: 'rgba(52, 211, 153, 0.85)',
        body: 'rgba(52, 211, 153, 0.22)',
      },
      {
        glow: 'rgba(167, 139, 250, 0.85)',
        body: 'rgba(167, 139, 250, 0.20)',
      },
      {
        glow: 'rgba(56, 189, 248, 0.85)',
        body: 'rgba(56, 189, 248, 0.20)',
      },
      {
        glow: 'rgba(255, 255, 255, 0.95)',
        body: 'rgba(94, 23, 235, 0.22)',
      },
    ]

    function init() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      columns = Math.floor(width / colWidth)
      drops = []

      for (let i = 0; i < columns; i++) {
        const streamLength = Math.floor(Math.random() * 14) + 8
        const initialChars = Array.from({ length: streamLength }, () =>
          Math.random() > 0.5 ? '1' : '0'
        )
        const theme = palette[i % palette.length]

        drops.push({
          x: i * colWidth + colWidth / 2,
          // Stagger starting Y across screen
          y: Math.random() * (height / fontSize) - (height / fontSize),
          // Even, slow motion speed (0.12 - 0.22 rows per frame)
          speed: Math.random() * 0.08 + 0.12,
          length: streamLength,
          chars: initialChars,
          glowColor: theme.glow,
          bodyColor: theme.body,
          lastChange: 0,
        })
      }
    }

    let lastTime = performance.now()

    function draw(now: number) {
      const delta = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      // Clear with subtle trail retention for fluid motion
      ctx!.clearRect(0, 0, width, height)

      ctx!.font = `600 ${fontSize}px var(--font-jetbrains-mono, monospace)`
      ctx!.textAlign = 'center'
      ctx!.textBaseline = 'middle'

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i]

        // Advance slow-motion drop
        drop.y += drop.speed * (delta * 60)

        // Reset drop when completely scrolled past bottom
        if (drop.y - drop.length > height / fontSize) {
          drop.y = -(Math.random() * 10 + 2)
          drop.speed = Math.random() * 0.08 + 0.12
          drop.length = Math.floor(Math.random() * 14) + 8
          drop.chars = Array.from({ length: drop.length }, () =>
            Math.random() > 0.5 ? '1' : '0'
          )
        }

        // Random character mutation (flipping 0s and 1s smoothly)
        if (Math.random() < 0.04) {
          const randIdx = Math.floor(Math.random() * drop.chars.length)
          drop.chars[randIdx] = drop.chars[randIdx] === '1' ? '0' : '1'
        }

        // Render each binary character in the column stream
        for (let j = 0; j < drop.length; j++) {
          const charY = (drop.y - j) * fontSize
          if (charY < -fontSize || charY > height + fontSize) continue

          const isHead = j === 0
          const char = drop.chars[j] || (Math.random() > 0.5 ? '1' : '0')

          if (isHead) {
            // Bright, luminous leader character
            ctx!.fillStyle = drop.glowColor
            ctx!.shadowColor = drop.glowColor
            ctx!.shadowBlur = 8
            ctx!.fillText(char, drop.x, charY)
            ctx!.shadowBlur = 0
          } else {
            // Faint, elegant trailing body characters
            const fadeProgress = (drop.length - j) / drop.length
            const alpha = fadeProgress * 0.28
            ctx!.fillStyle = `rgba(167, 139, 250, ${alpha})`
            ctx!.fillText(char, drop.x, charY)
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    init()

    if (reduce) {
      draw(performance.now())
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(draw)
    }

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)
        init()
      }, 150)
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-65 select-none"
    />
  )
}
