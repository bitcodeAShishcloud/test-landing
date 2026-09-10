'use client'

import { motion } from 'motion/react'
import { Users, UsersRound, Trophy, Globe, MonitorSmartphone, Building } from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { CountUp } from '@/components/count-up'

const metrics = [
  { icon: Users, count: 200, suffix: '', label: 'Teams', sub: 'competing nationwide' },
  { icon: UsersRound, count: 600, suffix: '', label: 'Participants', sub: 'across the country' },
  { icon: Trophy, count: 24000, prefix: '₹', suffix: '', label: 'Prize Pool', sub: 'in rewards' },
  { icon: Globe, count: null, static: 'National', label: 'Reach', sub: 'pan-India participation' },
  { icon: MonitorSmartphone, count: null, static: 'Online + Offline', label: 'Format', sub: 'qualify remotely, finale on-campus' },
  { icon: Building, count: null, static: 'Industry', label: 'Exposure', sub: 'real-world operations' },
]

export function Metrics() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl glass-strong p-8 transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: '#0D1326' }}
            >
              <div
                className="absolute -right-10 -top-10 size-32 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{ background: 'rgba(108, 92, 231, 0.12)' }}
              />
              <m.icon className="relative mb-6 size-7" style={{ color: '#8B5CF6' }} />
              <div
                className="relative font-display text-4xl font-bold tracking-tight md:text-5xl"
                style={{ color: '#F5F7FF' }}
              >
                {m.count !== null ? (
                  <CountUp to={m.count} prefix={m.prefix ?? ''} />
                ) : (
                  <span>{m.static}</span>
                )}
              </div>
              <div
                className="relative mt-2 font-display text-lg font-semibold"
                style={{ color: '#F5F7FF' }}
              >
                {m.label}
              </div>
              <div className="relative mt-1 text-sm" style={{ color: '#A6AEC8' }}>{m.sub}</div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
