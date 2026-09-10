'use client'

import { motion } from 'motion/react'
import { Radio, Bell } from 'lucide-react'
import { Reveal } from '@/components/motion-primitives'

export function Announcement() {
  return (
    <section id="announcement" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div
          className="relative overflow-hidden rounded-3xl glass-strong p-8 text-center md:p-14"
          style={{ background: '#0D1326' }}
        >
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(50% 40% at 50% 0%, rgba(108, 92, 231, 0.14) 0%, transparent 65%)',
            }}
          />
          <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />

          <Reveal>
            <span
              className="relative mx-auto grid size-14 place-items-center rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                boxShadow: '0 10px 24px -12px rgba(108, 92, 231, 0.55)',
              }}
            >
              <Bell className="size-7 text-white" />
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="relative mt-6 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl"
              style={{ color: '#F5F7FF' }}
            >
              Never Miss An Update
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="relative mx-auto mt-4 max-w-2xl text-pretty leading-relaxed"
              style={{ color: '#A6AEC8' }}
            >
              Join the official Ghost Protocol announcement channel for
              registration updates, deadlines, qualification announcements,
              schedules and important event information.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative mt-8 inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-lg font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                boxShadow: '0 12px 28px -12px rgba(108, 92, 231, 0.6)',
              }}
            >
              <Radio className="size-5" />
              Join Announcement Channel
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
