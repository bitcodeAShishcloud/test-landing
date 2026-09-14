'use client'

import { useEffect, useRef } from 'react'

/**
 * Ultra-smooth, even, and slow-motion Binary Matrix Rain (0 & 1)
 * Exactly matching the atmospheric, rhythmic digital rain of cyberinvader
 */
export function MatrixRain({ className = '' }: { className?: string }) {
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

    const fontSize = 15
    const colWidth = 24 // Even horizontal spacing between columns
    let colCount = 0

    interface Stream {
      x: number
      y: number
      speed: number
      length: number
      chars: string[]
      headGlow: string
      bodyColor: string
      mutationCounter: number
    }

    let streams: Stream[] = []

    // Palette with Cyber Invaders green, cyan, and electric white heads
    const colorThemes = [
      {
        head: 'rgba(52, 211, 153, 0.95)',    // Emerald green
        trail: 'rgba(52, 211, 153, 0.22)',
      },
      {
        head: 'rgba(56, 189, 248, 0.95)',    // Cyber sky/cyan
        trail: 'rgba(56, 189, 248, 0.20)',
      },
      {
        head: 'rgba(167, 139, 250, 0.95)',   // Lavender
        trail: 'rgba(167, 139, 250, 0.20)',
      },
      {
        head: 'rgba(255, 255, 255, 0.95)',   // Pure white glow head
        trail: 'rgba(94, 23, 235, 0.24)',
      },
    ]

    function init() {
      width = canvas!.clientWidth
      height = canvas!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      colCount = Math.floor(width / colWidth)
      streams = []

      for (let i = 0; i < colCount; i++) {
        const streamLen = Math.floor(Math.random() * 16) + 10
        const initialChars = Array.from({ length: streamLen }, () =>
          Math.random() > 0.5 ? '1' : '0'
        )
        const theme = colorThemes[i % colorThemes.length]

        streams.push({
          x: i * colWidth + colWidth / 2,
          // Even, staggered distribution across vertical space
          y: Math.random() * (height / fontSize + 20) - 20,
          // Uniform slow-motion speed (gentle, steady drop)
          speed: 0.18 + Math.random() * 0.12,
          length: streamLen,
          chars: initialChars,
          headGlow: theme.head,
          bodyColor: theme.trail,
          mutationCounter: Math.floor(Math.random() * 20),
        })
      }
    }

    let lastTime = performance.now()

    function draw(now: number) {
      const dt = Math.min((now - lastTime) / 1000, 0.1)
      lastTime = now

      // Clear the frame smoothly
      ctx!.clearRect(0, 0, width, height)

      ctx!.font = `600 ${fontSize}px var(--font-jetbrains-mono, "SFMono-Regular", Consolas, monospace)`
      ctx!.textAlign = 'center'
      ctx!.textBaseline = 'middle'

      for (let i = 0; i < streams.length; i++) {
        const s = streams[i]

        // Advance vertical position smoothly
        s.y += s.speed * (dt * 60)

        // Reset column smoothly after it falls off the bottom
        if (s.y - s.length > height / fontSize) {
          s.y = -(Math.random() * 8 + 2)
          s.speed = 0.18 + Math.random() * 0.12
          s.length = Math.floor(Math.random() * 16) + 10
          s.chars = Array.from({ length: s.length }, () =>
            Math.random() > 0.5 ? '1' : '0'
          )
        }

        // Random subtle character flipping (slow rhythmic mutation)
        s.mutationCounter++
        if (s.mutationCounter > 12) {
          s.mutationCounter = 0
          const randPos = Math.floor(Math.random() * s.chars.length)
          s.chars[randPos] = s.chars[randPos] === '1' ? '0' : '1'
        }

        // Render each 0 and 1 character in the falling stream
        for (let j = 0; j < s.length; j++) {
          const charY = (s.y - j) * fontSize
          if (charY < -fontSize || charY > height + fontSize) continue

          const char = s.chars[j] || (Math.random() > 0.5 ? '1' : '0')
          const isHead = j === 0

          if (isHead) {
            // Luminous glowing head character
            ctx!.fillStyle = s.headGlow
            ctx!.shadowColor = s.headGlow
            ctx!.shadowBlur = 8
            ctx!.fillText(char, s.x, charY)
            ctx!.shadowBlur = 0
          } else {
            // Elegant fading body characters
            const fade = (s.length - j) / s.length
            const alpha = fade * 0.28
            ctx!.fillStyle = `rgba(52, 211, 153, ${alpha})`
            ctx!.fillText(char, s.x, charY)
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
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
