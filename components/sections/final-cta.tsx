'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Radio } from 'lucide-react'
import { siteLinks } from '@/lib/links'

/**
 * Cinematic finale section — the last thing visitors see before footer.
 * Near-black, giant system typography, digital grid + cyan radar pulse.
 */
export function FinalCta() {
  const [ready, setReady] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setReady(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="register"
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#020408',
      }}
    >
      {/* Animated digital grid */}
      <div className="cyber-grid" aria-hidden="true" />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 50%, transparent 15%, rgba(2,4,8,0.95) 100%)',
        }}
      />

      {/* Cyan radar pulse — slow sweep from center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="radar-pulse"
          style={{ animationDelay: '0s', opacity: 0.2 }}
        />
        <div
          className="radar-pulse"
          style={{ animationDelay: '2s', opacity: 0.12 }}
        />
      </div>

      {/* Horizontal scan line */}
      <div className="hud-scan" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          width: 500,
          height: 500,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(56,189,248,0.04) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Tagline */}
        <div
          className={`transition-all duration-1000 ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em]"
            style={{ color: '#38bdf8' }}
          >
            {'//'} SYSTEM ONLINE
          </span>
        </div>

        {/* Giant Title */}
        <h1
          className={`mt-8 font-display font-black uppercase leading-[0.9] tracking-tight transition-all duration-[1200ms] delay-200 ${
            ready
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            color: '#f8fafc',
            textShadow:
              '0 0 80px rgba(56,189,248,0.08), 0 0 160px rgba(94,23,235,0.04)',
          }}
        >
          THE SYSTEM
          <br />
          <span style={{ color: '#38bdf8' }}>IS WAITING.</span>
        </h1>

        {/* Secondary Line */}
        <p
          className={`mt-6 font-display text-xl font-semibold uppercase tracking-[0.15em] transition-all duration-1000 delay-[400ms] sm:text-2xl md:text-3xl ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ color: 'rgba(248,250,252,0.55)' }}
        >
          ARE YOU
          <span className="ml-2" style={{ color: '#a78bfa' }}>
            READY?
          </span>
        </p>

        {/* Decorative divider */}
        <div
          className={`mx-auto mt-10 h-px transition-all duration-1000 delay-[600ms] ${
            ready ? 'opacity-100 w-32' : 'opacity-0 w-0'
          }`}
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(56,189,248,0.45), transparent)',
          }}
        />

        {/* Buttons */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 delay-[700ms] ${
            ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={siteLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="sys-btn group"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              {'['}
              <span className="hidden sm:inline">INITIALIZE</span>
              <span className="sm:hidden">REGISTER</span>
              REGISTRATION
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              {']'}
            </span>
          </a>

          <a
            href="#announcement"
            className="sys-btn sys-btn-purple group"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              {'['}
              <Radio className="size-3.5" style={{ color: '#a78bfa' }} />
              JOIN COMMAND CHANNEL
              {']'}
            </span>
          </a>
        </div>

        {/* Status indicators */}
        <div
          className={`mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 transition-all duration-1000 delay-[900ms] ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {[
            { label: 'SYSTEM SECURE', color: '#38bdf8' },
            { label: 'PROTOCOL ACTIVE', color: '#a78bfa' },
            { label: 'ENCRYPTED', color: '#34d399' },
          ].map((s) => (
            <span
              key={s.label}
              className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.15em]"
              style={{ color: '#68738D' }}
            >
              <span className="status-dot" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
