'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Radio, ArrowRight, Users, UsersRound, Trophy } from 'lucide-react'
import { FlameEffect } from '@/components/flame-effect'
import { GlitchText } from '@/components/glitch-text'

const stats = [
  { icon: Users, value: '500+', label: 'Expected Teams' },
  { icon: UsersRound, value: '1,500+', label: 'Expected Students' },
  { icon: Trophy, value: '₹24,000+', label: 'Prize Pool' },
]

const swipeImages = [
  { src: '/hero-swipe-1.webp', alt: 'Cyber Invaders event — classroom wide shot' },
  { src: '/hero-swipe-2.webp', alt: 'Cyber Invaders event — students and mentor' },
  { src: '/hero-swipe-3.webp', alt: 'Cyber Invaders event — team at workstation' },
  { src: '/hero-swipe-4.webp', alt: 'Cyber Invaders event — workshop overview' },
  { src: '/hero-swipe-5.webp', alt: 'Cyber Invaders event — hackers in action' },
]

export function Hero() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    if (swipeImages.length === 0) return
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % swipeImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
    >
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

          {/* Auto-swap carousel (fixed-height frame, crossfade) */}
          <div className="relative mt-4 h-44 sm:h-52 overflow-hidden rounded-2xl drop-shadow-[0_0_24px_rgba(94,23,235,0.25)]">
            {swipeImages.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 500px"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

            {/* Progress dots */}
            <div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-1.5 z-20">
              {swipeImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Show image ${i + 1}`}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIdx ? '20px' : '6px',
                    background:
                      i === activeIdx ? '#5e17eb' : 'rgba(167, 139, 250, 0.4)',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
