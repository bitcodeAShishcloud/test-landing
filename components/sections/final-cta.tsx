'use client'

import { Radio, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'

export function FinalCta() {
  return (
    <section
      id="register"
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: '#070B17' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(45% 45% at 50% 100%, rgba(94,23,235,0.1) 0%, transparent 65%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'rgba(94, 23, 235, 0.18)' }}
      />
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <span
            className="font-mono text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: '#68738D' }}
          >
            Hack. Secure. Evolve.
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: '#F8FAFC' }}
          >
            The System Is Waiting.
            <br />
            Are You Ready?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md px-7 py-4 font-semibold text-white transition-colors hover:bg-[#4a10c4] sm:w-auto"
              style={{
                background: '#5e17eb',
                boxShadow: '0 8px 24px -12px rgba(94, 23, 235, 0.55)',
              }}
            >
              Register Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#announcement"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md px-7 py-4 font-semibold transition-colors sm:w-auto"
              style={{
                border: '1px solid rgba(94, 23, 235, 0.18)',
                background: 'transparent',
                color: '#F8FAFC',
              }}
            >
              <Radio className="size-4" style={{ color: '#a78bfa' }} />
              Join Announcement Channel
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
