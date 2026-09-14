'use client'

import { useEffect, useRef } from 'react'

export function FlameEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth || 340)
    let height = (canvas.height = canvas.offsetHeight || 65)

    const onResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth || 340
      height = canvas.height = canvas.offsetHeight || 65
    }
    window.addEventListener('resize', onResize)

    // Realistic Fire Particle System (Low height & calm licking flames)
    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      size: number
      startSize: number
      type: 'core' | 'flame' | 'spark'
    }

    const particles: Particle[] = []
    const maxParticles = 75

    const createParticle = (): Particle => {
      // Spawn right along the baseline of "CTF 2.0"
      const x = Math.random() * (width * 0.88) + width * 0.06
      const y = height - Math.random() * 4
      const pType = Math.random()
      
      if (pType < 0.35) {
        // Hot white/golden core - small, bright base
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -(Math.random() * 0.45 + 0.25),
          life: 0,
          maxLife: Math.random() * 25 + 18,
          size: Math.random() * 12 + 8,
          startSize: Math.random() * 12 + 8,
          type: 'core',
        }
      } else if (pType < 0.85) {
        // Controlled, gentle flame tongues
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -(Math.random() * 0.65 + 0.35),
          life: 0,
          maxLife: Math.random() * 32 + 22,
          size: Math.random() * 15 + 9,
          startSize: Math.random() * 15 + 9,
          type: 'flame',
        }
      } else {
        // Subtle rising embers
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.9,
          vy: -(Math.random() * 0.9 + 0.5),
          life: 0,
          maxLife: Math.random() * 40 + 25,
          size: Math.random() * 2.5 + 1,
          startSize: Math.random() * 2.5 + 1,
          type: 'spark',
        }
      }
    }

    // Pre-populate particles
    for (let i = 0; i < maxParticles; i++) {
      const p = createParticle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    let time = 0

    const render = () => {
      time += 0.015
      ctx.clearRect(0, 0, width, height)

      // Additive blend mode for luminous organic fire glow
      ctx.globalCompositeOperation = 'lighter'

      // Soft baseline heat glow
      const baseGlow = ctx.createRadialGradient(
        width / 2,
        height - 2,
        4,
        width / 2,
        height - 2,
        width * 0.4
      )
      baseGlow.addColorStop(0, 'rgba(255, 120, 0, 0.4)')
      baseGlow.addColorStop(0.45, 'rgba(232, 62, 140, 0.2)')
      baseGlow.addColorStop(0.8, 'rgba(94, 23, 235, 0.08)')
      baseGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = baseGlow
      ctx.fillRect(0, 0, width, height)

      // Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.life++

        if (p.life >= p.maxLife) {
          particles[i] = createParticle()
          continue
        }

        const progress = p.life / p.maxLife
        p.x += p.vx + Math.sin(time + p.y * 0.06) * 0.35
        p.y += p.vy
        p.size = p.startSize * (1 - progress * 0.75)

        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0.4, p.size), 0, Math.PI * 2)

        if (p.type === 'core') {
          // White-hot to bright amber
          const alpha = (1 - progress) * 0.75
          ctx.fillStyle = `rgba(255, ${Math.floor(255 - progress * 90)}, ${Math.floor(
            160 * (1 - progress)
          )}, ${alpha})`
          ctx.fill()
        } else if (p.type === 'flame') {
          // Golden orange to cyber crimson
          const alpha = (1 - progress) * 0.55
          const r = 255
          const g = Math.floor(140 * (1 - progress))
          const b = Math.floor(20 * (1 - progress))
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          ctx.fill()
        } else if (p.type === 'spark') {
          // Crisp spark ember
          const alpha = (1 - progress) * 0.9
          ctx.fillStyle = `rgba(255, ${Math.floor(210 * (1 - progress * 0.4))}, 50, ${alpha})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      className="pointer-events-none absolute inset-x-0 -bottom-2 h-14 sm:h-16 -z-10 overflow-visible flex items-end justify-center lg:justify-start"
      aria-hidden="true"
    >
      {/* 1. Underlying Baseline Glow */}
      <div
        className="absolute -bottom-1 h-8 w-full max-w-xs rounded-full blur-xl"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(255, 140, 0, 0.4) 0%, rgba(232, 62, 140, 0.2) 50%, transparent 80%)',
        }}
      />

      {/* 2. Low Height Fire Particle Simulation */}
      <canvas
        ref={canvasRef}
        className="relative w-full max-w-[340px] sm:max-w-[400px] h-full"
        style={{ filter: 'blur(1.2px)' }}
      />
    </div>
  )
}
