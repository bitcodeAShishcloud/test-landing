'use client'

import { motion } from 'motion/react'
import { Users, UsersRound, Trophy, Globe, MonitorSmartphone, Building, Sparkles } from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { CountUp } from '@/components/count-up'

const metrics = [
  {
    icon: Users,
    count: 500,
    prefix: '',
    suffix: '+',
    label: 'Expected Teams',
    sub: 'Pan-India student registrations',
    badge: 'EXPECTED',
    back: 'Projected Turnout: 500+ collegiate squads (up to 3 members per team) estimated to register from universities across India.',
  },
  {
    icon: UsersRound,
    count: 1500,
    prefix: '',
    suffix: '+',
    label: 'Expected Students',
    sub: 'Student cybersecurity hackers',
    badge: 'EXPECTED',
    back: 'Projected Participation: 1,500+ passionate undergraduate & postgraduate ethical hackers competing in the qualification round.',
  },
  {
    icon: Trophy,
    count: 24000,
    prefix: '₹',
    suffix: '+',
    label: 'Prize Pool',
    sub: 'Guaranteed rewards & bounties',
    badge: 'REWARDS',
    back: 'Guaranteed Pool: ₹24,000+ cash prizes, prestigious champion trophies, certificates of merit & exclusive goodies for winners.',
  },
  {
    icon: Globe,
    count: null,
    static: 'National',
    label: 'Reach',
    sub: 'Pan-India open qualifier',
    badge: 'SCOPE',
    back: 'Open Nationally: Remote qualification round welcoming registered student teams from colleges across all Indian states.',
  },
  {
    icon: MonitorSmartphone,
    count: null,
    static: 'Online + Offline',
    label: 'Tournament Format',
    sub: 'Remote prelims → NIET Finale',
    badge: 'FORMAT',
    back: 'Two-Stage Combat: 24-hr remote Jeopardy prelims followed by an 8-hour live on-ground Attack & Defense siege at NIET.',
  },
  {
    icon: Building,
    count: null,
    static: 'Industry',
    label: 'Exposure & Rigor',
    sub: 'Real-world attack operations',
    badge: 'IMPACT',
    back: 'Real-world Scenarios: Practical challenges modeled after enterprise incident responses and current threat-actor TTPs.',
  },
]

export function Metrics() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="flip-scene group relative min-h-[240px] sm:min-h-[260px]"
            >
              <div className="flip-inner flex flex-col">
                {/* ── Front face ── */}
                <div
                  className="flip-face flip-face-front flex flex-col justify-between overflow-hidden rounded-xl glass-strong p-5 sm:p-7 md:p-8"
                  style={{ background: '#0D1425' }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                    style={{ background: '#5e17eb' }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                      <m.icon className="size-5 sm:size-6" style={{ color: '#a78bfa' }} />
                      <span
                        className="rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider"
                        style={{
                          background: m.badge === 'EXPECTED' ? 'rgba(232, 62, 140, 0.15)' : 'rgba(94, 23, 235, 0.15)',
                          color: m.badge === 'EXPECTED' ? '#e83e8c' : '#a78bfa',
                          border: m.badge === 'EXPECTED' ? '1px solid rgba(232, 62, 140, 0.3)' : '1px solid rgba(94, 23, 235, 0.3)',
                        }}
                      >
                        {m.badge}
                      </span>
                    </div>

                    <div
                      className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                      style={{ color: '#F8FAFC' }}
                    >
                      {m.count !== null ? (
                        <CountUp to={m.count} prefix={m.prefix ?? ''} suffix={m.suffix ?? ''} />
                      ) : (
                        <span>{m.static}</span>
                      )}
                    </div>
                    <div
                      className="mt-1.5 sm:mt-2 font-display text-base sm:text-lg font-semibold"
                      style={{ color: '#F8FAFC' }}
                    >
                      {m.label}
                    </div>
                  </div>

                  <div className="mt-2 text-xs sm:text-sm" style={{ color: '#68738D' }}>{m.sub}</div>
                </div>

                {/* ── Back face ── */}
                <div
                  className="flip-face flip-face-back flex flex-col overflow-hidden rounded-xl p-5 sm:p-7 md:p-8"
                  style={{
                    background: 'linear-gradient(150deg, #5e17eb 0%, #4a10c4 55%, #0D1425 130%)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                  }}
                >
                  <div className="flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="grid size-8 sm:size-9 place-items-center rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)' }}
                        >
                          <m.icon className="size-4 text-white" />
                        </span>
                        <span className="font-display text-sm sm:text-base font-bold text-white">{m.label}</span>
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
                        {m.badge}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#E9E4FF]">{m.back}</p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/15 flex items-center justify-between text-[10px] font-mono text-[#E9E4FF]/60">
                    <span>Ghost Protocol 2.0</span>
                    <span>Metrics Breakdown</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
