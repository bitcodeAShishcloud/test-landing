'use client'

import { motion } from 'motion/react'
import { Radio, ArrowRight, Users, UsersRound, Trophy } from 'lucide-react'
import { CyberNetwork } from '@/components/cyber-network'
import { TerminalCard } from '@/components/terminal-card'

const stats = [
  { icon: Users, value: '200', label: 'Teams' },
  { icon: UsersRound, value: '600', label: 'Participants' },
  { icon: Trophy, value: '₹24,000', label: 'Prize Pool' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-mesh pt-28 pb-16"
    >
      <CyberNetwork />
      <div className="absolute inset-0 grid-lines opacity-80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em]"
            style={{
              border: '1px solid rgba(139, 92, 246, 0.18)',
              background: '#0D1326',
              color: '#A6AEC8',
            }}
          >
            <span
              className="size-1.5 rounded-full animate-glow-pulse"
              style={{ background: '#E83E8C' }}
            />
            Hack. Secure. Evolve.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-gradient">GHOST PROTOCOL</span>
            <span className="mt-1 block text-foreground">CTF 2.0</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground lg:mx-0"
          >
            National-Level Student Cybersecurity Competition
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-4 flex max-w-lg flex-col items-center gap-1 font-mono text-sm lg:mx-0 lg:items-start"
            style={{ color: '#A6AEC8' }}
          >
            <span>
              <span style={{ color: '#F5F7FF' }}>Online Qualification Round</span>
              <span className="mx-2" style={{ color: '#E83E8C' }}>+</span>
            </span>
            <span style={{ color: '#F5F7FF' }}>
              Offline Grand Finale at NIET Greater Noida
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3 lg:mx-0"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-xl px-3 py-4 text-center"
              >
                <s.icon className="mx-auto mb-2 size-5" style={{ color: '#8B5CF6' }} />
                <div
                  className="font-display text-xl font-bold sm:text-2xl"
                  style={{ color: '#F5F7FF' }}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs" style={{ color: '#A6AEC8' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href="#announcement"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                boxShadow: '0 10px 28px -12px rgba(108, 92, 231, 0.55)',
              }}
            >
              <Radio className="size-5" />
              Join Announcement Channel
            </a>
            <a
              href="#register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl glass px-6 py-3.5 font-semibold transition-colors hover:bg-[#111936] sm:w-auto"
              style={{ color: '#F5F7FF' }}
            >
              Register Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-md"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  )
}
