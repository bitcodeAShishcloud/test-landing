'use client'

import { Radio, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'

export function FinalCta() {
  return (
    <section
      id="register"
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: '#070B18' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(45% 45% at 50% 100%, rgba(108,92,231,0.16) 0%, transparent 65%), radial-gradient(30% 30% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'rgba(139, 92, 246, 0.18)' }}
      />
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <Reveal>
          <span
            className="font-mono text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: '#A6AEC8' }}
          >
            Hack. Secure. Evolve.
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-5 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
            style={{ color: '#F5F7FF' }}
          >
            The System Is Waiting.
            <br />
            Are You Ready?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#announcement"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                boxShadow: '0 12px 28px -12px rgba(108, 92, 231, 0.6)',
              }}
            >
              <Radio className="size-5" />
              Join Announcement Channel
            </a>
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-7 py-4 font-semibold backdrop-blur-sm transition-colors hover:bg-[#111936] sm:w-auto"
              style={{
                border: '1px solid rgba(139, 92, 246, 0.18)',
                background: '#0D1326',
                color: '#F5F7FF',
              }}
            >
              Register Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
