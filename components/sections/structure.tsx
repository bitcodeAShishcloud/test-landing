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
  Swords,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Terminal,
  Activity,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const phase1Highlights = [
  'Remote pan-India live participation',
  'Jeopardy-style challenge format across 10 domains',
  'Live dynamic flag scoring & leaderboard',
  'Top qualifying squads advance to NIET finale',
]

const phase2Highlights = [
  'Hosted on-ground at NIET Greater Noida campus',
  'Dual-format: Jeopardy Round + Live Attack & Defense',
  '8-hour continuous war-room showdown',
  '₹24,000 prize pool, trophies & national acclaim',
]

const pipelineSteps = [
  {
    num: '01',
    code: 'INIT.01',
    phaseTag: 'Phase 1 · Prep',
    icon: Compass,
    title: 'Discover Event',
    desc: 'Explore the tournament format, 10 challenge categories, scoring dynamics and the ₹24,000 prize stakes.',
    accent: '#5e17eb',
    glow: 'rgba(94, 23, 235, 0.35)',
  },
  {
    num: '02',
    code: 'AUTH.02',
    phaseTag: 'Phase 1 · Entry',
    icon: UserPlus,
    title: 'Register Squad',
    desc: 'Assemble your team of up to 3 cybersecurity gladiators, submit verification credentials and lock in your slot.',
    accent: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.35)',
  },
  {
    num: '03',
    code: 'COMM.03',
    phaseTag: 'Phase 1 · Comms',
    icon: MessageCircle,
    title: 'Join Ops Channel',
    desc: 'Connect to the official WhatsApp broadcast for real-time challenge drops, hints, rule updates and live telemetry.',
    accent: '#5e17eb',
    glow: 'rgba(94, 23, 235, 0.35)',
  },
  {
    num: '04',
    code: 'BATTLE.04',
    phaseTag: 'Phase 1 · Battle',
    icon: Globe,
    title: 'Online Qualification',
    desc: 'Engage in a 24-hour remote Jeopardy CTF. Breach challenges, exploit systems, submit flags and scale the leaderboard.',
    accent: '#7c3aed',
    glow: 'rgba(124, 58, 237, 0.35)',
  },
  {
    num: '05',
    code: 'SELECT.05',
    phaseTag: 'Phase 2 · Selection',
    icon: CheckCircle2,
    title: 'Finalist Shortlist',
    desc: 'Top-tier squads receive official qualification clearances, NIET campus passes and finale briefings.',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.35)',
  },
  {
    num: '06',
    code: 'ARENA.06',
    phaseTag: 'Phase 2 · Warfare',
    icon: Swords,
    title: 'On-Campus Showdown',
    desc: '8-hour continuous cyber combat at NIET Greater Noida featuring live attack-defense warfare and high-tier challenges.',
    accent: '#f97316',
    glow: 'rgba(249, 115, 22, 0.35)',
  },
  {
    num: '07',
    code: 'VICTORY.07',
    phaseTag: 'Phase 2 · Podium',
    icon: Award,
    title: 'Championship Podium',
    desc: 'Win recognition, claim your share of the ₹24,000 cash pool, prestige trophies, certificates and industry acclaim.',
    accent: '#e83e8c',
    glow: 'rgba(232, 62, 140, 0.4)',
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

      {/* Cyber Circuit Mesh Background */}
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#050816] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-48 top-1/4 size-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #5e17eb 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 top-2/3 size-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #e83e8c 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Tournament Protocol · Structure & Timeline"
          title="Beyond theory. Into real-world cyber operations."
          description="Ghost Protocol CTF 2.0 is engineered as a two-phase cyber tournament bridging classroom fundamentals to live offensive and defensive operations. Track the full pipeline from your first registration to the championship podium."
        />

        {/* ── 2 Main Phase Battleground Overview Cards ── */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* ── Phase 1: Online Qualification Card ── */}
          <Reveal y={24} className="h-full">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 glass-strong transition-all duration-300 hover:shadow-[0_0_35px_rgba(94,23,235,0.28)] group"
              style={{
                background: 'linear-gradient(180deg, #0D1425 0%, #090E1C 100%)',
                border: '1px solid rgba(94, 23, 235, 0.28)',
              }}
            >
              {/* Top Cyber Laser Line */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #5e17eb 0%, #a78bfa 50%, transparent 100%)',
                }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid size-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: 'rgba(94, 23, 235, 0.18)',
                        border: '1px solid rgba(94, 23, 235, 0.45)',
                        boxShadow: '0 0 16px rgba(94, 23, 235, 0.25)',
                      }}
                    >
                      <Globe className="size-6 text-[#a78bfa]" />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a78bfa] flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-[#a78bfa] animate-ping" />
                        Phase 01
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        Online Qualification
                      </h3>
                    </div>
                  </div>

                  <span
                    className="hidden sm:inline-flex rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#a78bfa]"
                    style={{
                      background: 'rgba(94, 23, 235, 0.12)',
                      border: '1px solid rgba(94, 23, 235, 0.3)',
                    }}
                  >
                    Remote Jeopardy
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#9ca3af]">
                  Compete remotely across India in a Jeopardy-style CTF across 10 challenge domains. Score flags on the dynamic leaderboard to qualify for the on-campus showdown.
                </p>

                {/* Tech Pills Bar */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    ⚔️ 10 Domains
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    📡 Pan-India Remote
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(94,23,235,0.18)]">
                    ⏱️ Dynamic Scoring
                  </span>
                </div>

                <div
                  className="my-5 h-px w-full"
                  style={{ background: 'rgba(94, 23, 235, 0.18)' }}
                />

                {/* Points List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  {phase1Highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#5e17eb] shadow-[0_0_6px_#5e17eb]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Indicator */}
              <div
                className="mt-6 flex items-center justify-between pt-4 border-t border-[rgba(94,23,235,0.15)] text-xs font-mono"
                style={{ color: '#68738D' }}
              >
                <span className="text-[#a78bfa]">Milestones 01 → 04</span>
                <span className="flex items-center gap-1 text-white font-medium">
                  Pipeline Step 1–4 <ArrowRight className="size-3 text-[#a78bfa]" />
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Phase 2: Offline Grand Finale Card ── */}
          <Reveal y={24} delay={0.08} className="h-full">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 glass-strong transition-all duration-300 hover:shadow-[0_0_35px_rgba(232,62,140,0.28)] group"
              style={{
                background: 'linear-gradient(180deg, #0D1425 0%, #090E1C 100%)',
                border: '1px solid rgba(232, 62, 140, 0.28)',
              }}
            >
              {/* Top Cyber Laser Line */}
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, #e83e8c 0%, #ff5500 50%, transparent 100%)',
                }}
              />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid size-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: 'rgba(232, 62, 140, 0.18)',
                        border: '1px solid rgba(232, 62, 140, 0.45)',
                        boxShadow: '0 0 16px rgba(232, 62, 140, 0.25)',
                      }}
                    >
                      <Building2 className="size-6 text-[#e83e8c]" />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e83e8c] flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-[#e83e8c] animate-ping" />
                        Phase 02
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        Offline Grand Finale
                      </h3>
                    </div>
                  </div>

                  <span
                    className="hidden sm:inline-flex rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#e83e8c]"
                    style={{
                      background: 'rgba(232, 62, 140, 0.12)',
                      border: '1px solid rgba(232, 62, 140, 0.3)',
                    }}
                  >
                    NIET Campus Arena
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#9ca3af]">
                  Qualifying squads assemble on-ground at NIET Greater Noida for an intense 8-hour showdown combining high-complexity Jeopardy questions and real-time live Attack & Defense cyber warfare.
                </p>

                {/* Tech Pills Bar */}
                <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    🏛️ NIET Greater Noida
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    ⚔️ Attack & Defense
                  </span>
                  <span className="rounded-lg px-2.5 py-1 bg-[#111A2E] text-[#CBD5E1] border border-[rgba(232,62,140,0.2)]">
                    🏆 ₹24,000 Rewards
                  </span>
                </div>

                <div
                  className="my-5 h-px w-full"
                  style={{ background: 'rgba(232, 62, 140, 0.18)' }}
                />

                {/* Points List */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  {phase2Highlights.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#e83e8c] shadow-[0_0_6px_#e83e8c]" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Indicator */}
              <div
                className="mt-6 flex items-center justify-between pt-4 border-t border-[rgba(232,62,140,0.15)] text-xs font-mono"
                style={{ color: '#68738D' }}
              >
                <span className="text-[#e83e8c]">Milestones 05 → 07</span>
                <span className="flex items-center gap-1 text-white font-medium">
                  Championship Stage <ArrowRight className="size-3 text-[#e83e8c]" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Visual Section Divider with Energy Beam ── */}
        <div className="relative my-16 flex items-center justify-center">
          <div
            className="h-px w-full"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(94,23,235,0.4) 30%, rgba(232,62,140,0.4) 70%, transparent 100%)',
            }}
          />
          <div className="absolute flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#a78bfa] backdrop-blur-md"
            style={{
              background: 'rgba(13, 20, 37, 0.95)',
              border: '1px solid rgba(94, 23, 235, 0.35)',
              boxShadow: '0 0 20px rgba(94, 23, 235, 0.3)',
            }}
          >
            <Activity className="size-3.5 text-[#a78bfa] animate-pulse" />
            <span>Tactical Execution Pipeline (01 → 07)</span>
          </div>
        </div>

        {/* ── 7-Stage Tactical HUD Pipeline ── */}
        <div className="grid gap-3.5 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 items-stretch">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <Reveal key={step.num} y={18} delay={idx * 0.05} className="h-full">
                <div
                  className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1.5 group"
                  style={{
                    background: '#0D1425',
                    border: `1px solid ${step.accent}33`,
                    boxShadow: `0 4px 20px -8px ${step.glow}`,
                  }}
                >
                  {/* Top Glowing Indicator Line */}
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: step.accent }}
                  />

                  <div>
                    {/* Header: Number & Code */}
                    <div className="flex items-center justify-between">
                      <span
                        className="grid size-8 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                        style={{
                          background: `${step.accent}18`,
                          border: `1px solid ${step.accent}44`,
                        }}
                      >
                        <Icon className="size-4" style={{ color: step.accent }} />
                      </span>
                      <span
                        className="font-mono text-[10px] font-bold tracking-wider"
                        style={{ color: step.accent }}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div className="mt-3">
                      <span
                        className="font-mono text-[9px] font-semibold uppercase tracking-wider block"
                        style={{ color: '#68738D' }}
                      >
                        {step.phaseTag}
                      </span>
                      <h4 className="mt-0.5 font-display text-sm font-bold text-white leading-snug">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-[#9ca3af]">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Pipeline Progress Notches */}
                  <div className="mt-4 pt-2.5 border-t border-[rgba(94,23,235,0.12)] flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#68738D]">{step.code}</span>
                    <span
                      className="size-1.5 rounded-full"
                      style={{ background: step.accent }}
                    />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
