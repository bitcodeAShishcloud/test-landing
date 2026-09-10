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
            className="inline-flex items-center gap-2.5 rounded border px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.24em]"
            style={{
              border: '1px solid rgba(94, 23, 235, 0.18)',
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
            className="mt-6 text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl"
            style={{ color: '#F8FAFC' }}
          >
            GHOST PROTOCOL
            <span className="text-gradient mt-1 block">CTF 2.0</span>
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
            className="mx-auto mt-4 flex max-w-lg flex-col items-center gap-1 font-mono text-[13px] lg:mx-0 lg:items-start"
            style={{ color: '#9ca3af' }}
          >
            <span>
              <span style={{ color: '#F8FAFC' }}>Online Qualification Round</span>
              <span className="mx-2" style={{ color: '#68738D' }}>+</span>
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
            className="mx-auto mt-8 grid max-w-lg grid-cols-3 gap-3 lg:mx-0"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg px-3 py-4 text-center"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.18)',
                }}
              >
                <s.icon className="mx-auto mb-2 size-4" style={{ color: '#a78bfa' }} />
                <div
                  className="font-display text-xl font-bold sm:text-2xl"
                  style={{ color: '#F8FAFC' }}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs" style={{ color: '#68738D' }}>{s.label}</div>
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
              href="#register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#4a10c4] sm:w-auto"
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
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 font-semibold transition-colors sm:w-auto"
              style={{
                border: '1px solid rgba(94, 23, 235, 0.18)',
                background: 'transparent',
                color: '#F8FAFC',
              }}
            >
              <Radio className="size-4" style={{ color: '#a78bfa' }} />
              Join Announcement Channel
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
