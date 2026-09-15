'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Radio, ArrowRight, Users, UsersRound, Trophy } from 'lucide-react'
import { MatrixRain } from '@/components/matrix-rain'
import { HeroLogoSvg } from '@/components/hero-logo-svg'
import { FlameEffect } from '@/components/flame-effect'
import { GlitchText } from '@/components/glitch-text'

const stats = [
  { icon: Users, value: '500+', label: 'Expected Teams' },
  { icon: UsersRound, value: '1,500+', label: 'Expected Students' },
  { icon: Trophy, value: '₹24,000+', label: 'Prize Pool' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-mesh pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
    >
      {/* Slow-motion 0 & 1 Binary Matrix Rain Background */}
      <MatrixRain className="pointer-events-none absolute inset-0 h-full w-full z-0 opacity-70" />
      <div className="z-0 absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />

      {/* SVG GHOST PROTOCOL CTF watermark — light vector, no image asset */}
      <HeroLogoSvg
        className="z-0 opacity-20 sm:opacity-25"
        opacity={0.22}
        blurPx={3}
      />

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-[#050816] to-transparent z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 sm:gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border px-3 sm:px-3.5 py-1 sm:py-1.5 font-mono text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] sm:tracking-[0.24em]"
            style={{
              border: '1px solid rgba(94, 23, 235, 0.22)',
              background: '#0D1425',
              color: '#9ca3af',
            }}
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: '#a78bfa' }}
            />
            Hack. Secure. Evolve.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-6 text-balance font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.02] sm:leading-[0.95] tracking-tight"
            style={{ color: '#F8FAFC' }}
          >
            <GlitchText />
            <span className="relative mt-2 inline-block">
              {/* Animated realistic burning flame rising from underneath */}
              <FlameEffect />
              <span className="text-gradient relative z-10 block tracking-wide">
                CTF 2.0
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-4 sm:mt-6 max-w-xl text-pretty text-base sm:text-lg text-muted-foreground lg:mx-0"
          >
            National-Level Student Cybersecurity Competition
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-3 sm:mt-4 flex max-w-lg flex-col items-center gap-0.5 sm:gap-1 font-mono text-xs sm:text-[13px] lg:mx-0 lg:items-start"
            style={{ color: '#9ca3af' }}
          >
            <span>
              <span style={{ color: '#F8FAFC' }}>Online Qualification Round</span>
              <span className="mx-1.5 sm:mx-2" style={{ color: '#68738D' }}>+</span>
            </span>
            <span style={{ color: '#F8FAFC' }}>
              Offline Grand Finale at NIET Greater Noida
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-6 sm:mt-8 grid max-w-lg grid-cols-3 gap-2 sm:gap-3 lg:mx-0"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-2 sm:px-3 py-3 sm:py-4 text-center glass transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.18)',
                }}
              >
                <s.icon className="mx-auto mb-1.5 sm:mb-2 size-3.5 sm:size-4" style={{ color: '#a78bfa' }} />
                <div
                  className="font-display text-lg sm:text-2xl font-bold"
                  style={{ color: '#F8FAFC' }}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-[10px] sm:text-xs" style={{ color: '#68738D' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-7 sm:mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#4a10c4] active:scale-[0.98] sm:w-auto"
              style={{
                background: '#5e17eb',
                boxShadow: '0 8px 24px -12px rgba(94, 23, 235, 0.6)',
              }}
            >
              Register Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#announcement"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 sm:py-3.5 text-sm font-semibold transition-all hover:bg-[#111A2E] active:scale-[0.98] sm:w-auto"
              style={{
                border: '1px solid rgba(94, 23, 235, 0.22)',
                background: '#0D1425',
                color: '#F8FAFC',
              }}
            >
              <Radio className="size-4" style={{ color: '#a78bfa' }} />
              Join Announcement Channel
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-lg lg:max-w-xl"
        >
          <div className="relative overflow-hidden rounded-2xl drop-shadow-[0_0_35px_rgba(94,23,235,0.35)]">
            <Image
              src="/hero-banner.webp"
              alt="NIET Presents Cyber Invaders Capture The Flag"
              width={1400}
              height={580}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
