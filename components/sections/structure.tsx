'use client'

import { motion } from 'motion/react'
import {
  Globe,
  Building2,
  Compass,
  UserPlus,
  MessageCircle,
  CheckCircle2,
  Flag,
  Award,
  Sparkles,
  ShieldAlert,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const phase1Points = [
  'Remote pan-India participation',
  'Jeopardy-style challenge format across 10 domains',
  'Live dynamic leaderboard',
  'Top squads advance to Grand Finale',
]

const phase2Points = [
  'Hosted on-campus at NIET Greater Noida',
  'Jeopardy Round + Live Attack & Defense warfare',
  '8-hour continuous final showdown',
  '₹24,000 prize pool, trophies & national recognition',
]

const phase1Steps = [
  {
    num: '01',
    icon: Compass,
    title: 'Discover Event',
    body: 'Learn the format, 10 challenge categories, scoring breakdown and what is at stake.',
    badge: 'Phase 1 · Prep',
    color: '#5e17eb',
  },
  {
    num: '02',
    icon: UserPlus,
    title: 'Register Your Team',
    body: 'Assemble your squad (up to 3 members), complete the registration form and lock in your entry.',
    badge: 'Phase 1 · Entry',
    color: '#7c3aed',
  },
  {
    num: '03',
    icon: MessageCircle,
    title: 'Join WhatsApp Channel',
    body: 'Stay in the loop — every official announcement, rule update and key deadline arrives here first.',
    badge: 'Phase 1 · Comms',
    color: '#5e17eb',
  },
  {
    num: '04',
    icon: Globe,
    title: 'Online Qualification',
    body: 'Compete remotely in a Jeopardy-style CTF. Solve flags, climb the live leaderboard and prove your skills.',
    badge: 'Phase 1 · Battle',
    color: '#7c3aed',
  },
]

const phase2Steps = [
  {
    num: '05',
    icon: CheckCircle2,
    title: 'Get Selected',
    body: 'Top-performing teams receive official qualification calls and advance to the on-campus grand finale.',
    badge: 'Phase 2 · Selection',
    color: '#5e17eb',
  },
  {
    num: '06',
    icon: Flag,
    title: 'Grand Finale Showdown',
    body: 'A high-intensity Jeopardy round followed by an 8-hour live Attack & Defense cyber operations battle at NIET.',
    badge: 'Phase 2 · Arena',
    color: '#7c3aed',
  },
  {
    num: '07',
    icon: Award,
    title: 'Win Recognition & Prizes',
    body: 'Claim your share of the ₹24,000 prize pool, championship trophies, certificates and national acclaim.',
    badge: 'Phase 2 · Podium',
    color: '#e83e8c',
  },
]

export function Structure() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: '#070B17',
        borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        borderBottom: '1px solid rgba(94, 23, 235, 0.18)',
      }}
    >
      {/* Anchor for backward compatibility with #structure */}
      <span id="structure" className="absolute -top-24" aria-hidden="true" />

      {/* Background cyber grid */}
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050816] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Single Unified Section Heading */}
        <SectionHeading
          eyebrow="Enter The Protocol · Structure & Timeline"
          title="Beyond theory. Into real-world cyber operations."
          description="From initial sign-up to the championship podium — follow the complete tactical roadmap across two intense phases that separate the curious from the capable."
        />

        {/* ── 2 Unified Phase Blocks along a continuous spine ── */}
        <div className="mt-16 space-y-20">
          {/* ════════════ PHASE 1 BLOCK: ONLINE QUALIFICATION ════════════ */}
          <div className="relative">
            {/* Phase 1 Header Banner Card */}
            <Reveal y={20}>
              <div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8 glass-strong mb-10"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.28)',
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #5e17eb, #7c3aed, transparent)' }}
                />

                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-11 place-items-center rounded-xl"
                        style={{
                          background: 'rgba(94, 23, 235, 0.15)',
                          border: '1px solid rgba(94, 23, 235, 0.4)',
                        }}
                      >
                        <Globe className="size-5 text-[#a78bfa]" />
                      </span>
                      <div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#a78bfa]">
                          Phase 01 · Online Round
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                          Online Qualification
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">
                      Compete remotely from anywhere in India in a high-intensity Jeopardy-style CTF across 10 specialized cyber domains to secure your squad&apos;s ticket to the Grand Finale.
                    </p>
                  </div>

                  <div className="rounded-xl p-4 bg-[#111A2E]/70 border border-[rgba(94,23,235,0.18)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#a78bfa] block mb-2.5 font-semibold">
                      Phase 1 Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-[#CBD5E1]">
                      {phase1Points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-[#5e17eb] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Phase 1 Steps Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {phase1Steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <Reveal key={step.title} y={20} delay={idx * 0.06} className="h-full">
                    <div
                      className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl p-5 glass transition-all duration-300 hover:-translate-y-1 hover:border-[#5e17eb]"
                      style={{
                        background: '#0D1425',
                        border: '1px solid rgba(94, 23, 235, 0.18)',
                      }}
                    >
                      <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: step.color }} />

                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className="grid size-9 place-items-center rounded-lg"
                            style={{
                              background: `${step.color}18`,
                              border: `1px solid ${step.color}33`,
                            }}
                          >
                            <Icon className="size-4" style={{ color: step.color }} />
                          </span>
                          <span className="font-display text-2xl font-bold font-mono text-[#68738D]/30">
                            {step.num}
                          </span>
                        </div>

                        <div className="mt-4">
                          <span
                            className="text-[10px] font-mono font-semibold uppercase tracking-wider block"
                            style={{ color: '#a78bfa' }}
                          >
                            {step.badge}
                          </span>
                          <h4 className="mt-0.5 font-display text-base font-bold text-white leading-tight">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-[#9ca3af]">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* ════════════ PHASE 2 BLOCK: OFFLINE GRAND FINALE ════════════ */}
          <div className="relative">
            {/* Phase 2 Header Banner Card */}
            <Reveal y={20}>
              <div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8 glass-strong mb-10"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(232, 62, 140, 0.28)',
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #7c3aed, #e83e8c, transparent)' }}
                />

                <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="grid size-11 place-items-center rounded-xl"
                        style={{
                          background: 'rgba(232, 62, 140, 0.15)',
                          border: '1px solid rgba(232, 62, 140, 0.4)',
                        }}
                      >
                        <Building2 className="size-5 text-[#e83e8c]" />
                      </span>
                      <div>
                        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#e83e8c]">
                          Phase 02 · On-Campus Showdown
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                          Offline Grand Finale
                        </h3>
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">
                      The top qualified teams battle live at the NIET Greater Noida campus arena in an intense 8-hour showdown combining Jeopardy questions and real-time Attack & Defense cyber warfare.
                    </p>
                  </div>

                  <div className="rounded-xl p-4 bg-[#111A2E]/70 border border-[rgba(232,62,140,0.18)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#e83e8c] block mb-2.5 font-semibold">
                      Phase 2 Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-[#CBD5E1]">
                      {phase2Points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-[#e83e8c] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Phase 2 Steps Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              {phase2Steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <Reveal key={step.title} y={20} delay={idx * 0.08} className="h-full">
                    <div
                      className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl p-5 glass transition-all duration-300 hover:-translate-y-1 hover:border-[#e83e8c]"
                      style={{
                        background: '#0D1425',
                        border: '1px solid rgba(94, 23, 235, 0.18)',
                      }}
                    >
                      <div className="absolute inset-x-0 top-0 h-0.5" style={{ background: step.color }} />

                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className="grid size-9 place-items-center rounded-lg"
                            style={{
                              background: `${step.color}18`,
                              border: `1px solid ${step.color}33`,
                            }}
                          >
                            <Icon className="size-4" style={{ color: step.color }} />
                          </span>
                          <span className="font-display text-2xl font-bold font-mono text-[#68738D]/30">
                            {step.num}
                          </span>
                        </div>

                        <div className="mt-4">
                          <span
                            className="text-[10px] font-mono font-semibold uppercase tracking-wider block"
                            style={{ color: step.color === '#e83e8c' ? '#e83e8c' : '#a78bfa' }}
                          >
                            {step.badge}
                          </span>
                          <h4 className="mt-0.5 font-display text-base font-bold text-white leading-tight">
                            {step.title}
                          </h4>
                          <p className="mt-2 text-xs leading-relaxed text-[#9ca3af]">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
