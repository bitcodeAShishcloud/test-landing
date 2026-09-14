'use client'

import { motion } from 'motion/react'
import { Users, UsersRound, Trophy, Globe, MonitorSmartphone, Building } from 'lucide-react'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { CountUp } from '@/components/count-up'

const metrics = [
  { icon: Users, count: 200, label: 'Teams', sub: 'competing nationwide', back: 'Up to 3 members each — solo entries welcome.' },
  { icon: UsersRound, count: 600, label: 'Participants', sub: 'across the country', back: 'One of the largest student CTFs in the region.' },
  { icon: Trophy, count: 24000, prefix: '₹', label: 'Prize Pool', sub: 'in rewards', back: 'Cash, trophies, certificates & industry recognition.' },
  { icon: Globe, count: null, static: 'National', label: 'Reach', sub: 'pan-India participation', back: 'Remote qualification open to universities across India.' },
  { icon: MonitorSmartphone, count: null, static: 'Online + Offline', label: 'Format', sub: 'qualify remotely, finale on-campus', back: 'Jeopardy round plus live Attack & Defense warfare.' },
  { icon: Building, count: null, static: 'Industry', label: 'Exposure', sub: 'real-world operations', back: 'Mentored by faculty & working security professionals.' },
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
              className="flip-scene group relative min-h-[170px] sm:min-h-[190px]"
            >
              <div className="flip-inner">
                {/* ── Front face ── */}
                <div
                  className="flip-face flip-face-front overflow-hidden rounded-xl glass-strong p-5 sm:p-7 md:p-8"
                  style={{ background: '#0D1425' }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                    style={{ background: '#5e17eb' }}
                  />
                  <m.icon className="relative mb-4 sm:mb-6 size-5 sm:size-6" style={{ color: '#a78bfa' }} />
                  <div
                    className="relative font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
                    style={{ color: '#F8FAFC' }}
                  >
                    {m.count !== null ? (
                      <CountUp to={m.count} prefix={m.prefix ?? ''} />
                    ) : (
                      <span>{m.static}</span>
                    )}
                  </div>
                  <div
                    className="relative mt-1.5 sm:mt-2 font-display text-base sm:text-lg font-semibold"
                    style={{ color: '#F8FAFC' }}
                  >
                    {m.label}
                  </div>
                  <div className="relative mt-0.5 sm:mt-1 text-xs sm:text-sm" style={{ color: '#68738D' }}>{m.sub}</div>
                </div>

                {/* ── Back face ── */}
                <div
                  className="flip-face flip-face-back flex flex-col justify-between overflow-hidden rounded-xl p-5 sm:p-7 md:p-8"
                  style={{
                    background: 'linear-gradient(150deg, #5e17eb 0%, #4a10c4 55%, #0D1425 130%)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                  }}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span
                      className="grid size-9 sm:size-11 place-items-center rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                      <m.icon className="size-4 sm:size-5 text-white" />
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-white">{m.label}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#E9E4FF]">{m.back}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
