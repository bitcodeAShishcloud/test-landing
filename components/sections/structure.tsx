'use client'

import { motion } from 'motion/react'
import {
  Globe,
  Building2,
  Swords,
  Clock,
  Compass,
  UserPlus,
  MessageCircle,
  CheckCircle2,
  Plane,
  Flag,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'

const phases = [
  {
    tag: 'Phase 01',
    badge: 'Online Round',
    title: 'Online Qualification',
    icon: Globe,
    desc: 'Compete remotely from anywhere in India in a high-intensity Jeopardy-style CTF across 10 specialized cyber domains.',
    points: ['Remote pan-India participation', 'Jeopardy-style challenge format', 'Live dynamic leaderboard', 'Top squads qualify for finale'],
    color: '#5e17eb',
  },
  {
    tag: 'Phase 02',
    badge: 'Offline Finale',
    title: 'Offline Grand Finale',
    icon: Building2,
    desc: 'Qualifying teams battle on-campus at NIET Greater Noida in an 8-hour dual-format showdown for the championship.',
    points: [
      'Hosted at NIET Greater Noida campus',
      'Jeopardy Round + Attack & Defense warfare',
      '8-hour continuous final showdown',
      '₹24,000 prize pool & national recognition',
    ],
    color: '#7c3aed',
    extraIcons: [Swords, Clock],
  },
]

const steps = [
  {
    icon: Compass,
    title: 'Discover Event',
    body: 'Learn the format, 10 challenge categories, scoring breakdown and what is at stake.',
    phase: 'Phase 1 · Prep',
    color: '#5e17eb',
  },
  {
    icon: UserPlus,
    title: 'Register Your Team',
    body: 'Assemble your squad (up to 3 members), complete the registration form and lock in your entry.',
    phase: 'Phase 1 · Entry',
    color: '#7c3aed',
  },
  {
    icon: MessageCircle,
    title: 'Join WhatsApp Channel',
    body: 'Stay in the loop — every official announcement, rule update and key deadline arrives here first.',
    phase: 'Phase 1 · Comms',
    color: '#5e17eb',
  },
  {
    icon: Globe,
    title: 'Online Qualification',
    body: 'Compete remotely in a Jeopardy-style CTF. Solve flags, climb the live leaderboard and prove your skills.',
    phase: 'Phase 1 · Battle',
    color: '#7c3aed',
  },
  {
    icon: CheckCircle2,
    title: 'Get Selected',
    body: 'Top-performing teams receive official qualification calls and advance to the on-campus grand finale.',
    phase: 'Phase 2 · Selection',
    color: '#5e17eb',
  },
  {
    icon: Plane,
    title: 'Travel to NIET',
    body: 'Head to Greater Noida for the on-campus finale. Campus orientation and lab setup provided.',
    phase: 'Phase 2 · Arrival',
    color: '#7c3aed',
  },
  {
    icon: Flag,
    title: 'Grand Finale Showdown',
    body: 'A high-intensity Jeopardy round followed by an 8-hour live Attack & Defense cyber operations battle.',
    phase: 'Phase 2 · Arena',
    color: '#5e17eb',
  },
  {
    icon: Award,
    title: 'Win Recognition & Prizes',
    body: 'Claim your share of the ₹24,000 prize pool, championship trophies, certificates and national acclaim.',
    phase: 'Phase 2 · Podium',
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
        <SectionHeading
          eyebrow="Enter The Protocol · Structure & Timeline"
          title="Beyond theory. Into real-world cyber operations."
          description="Ghost Protocol CTF 2.0 is designed to push participants past the classroom and into the pressure, tooling and mindset of genuine cyber operations. Follow the complete 2-phase roadmap from sign-up to the championship podium."
        />

        {/* 2-Phase Overview Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {phases.map((p, idx) => (
            <Reveal key={p.tag} y={24} className="h-full">
              <div
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7 md:p-8 glass-strong transition-all duration-300 hover:shadow-[0_0_28px_rgba(94,23,235,0.25)]"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.22)',
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${p.color}, transparent)`,
                  }}
                />

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid size-12 place-items-center rounded-xl"
                      style={{
                        background: `${p.color}22`,
                        border: `1px solid ${p.color}55`,
                      }}
                    >
                      <p.icon className="size-6 text-white" />
                    </span>
                    <span
                      className="rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider"
                      style={{
                        background: `${p.color}18`,
                        color: '#a78bfa',
                        border: `1px solid ${p.color}44`,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span
                      className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: '#a78bfa' }}
                    >
                      {p.tag}
                    </span>
                    <h3
                      className="mt-1 font-display text-2xl font-bold"
                      style={{ color: '#F8FAFC' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: '#9ca3af' }}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div
                    className="my-6 h-px w-full"
                    style={{ background: 'rgba(94, 23, 235, 0.16)' }}
                  />

                  <ul className="space-y-2.5 text-sm" style={{ color: '#CBD5E1' }}>
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full"
                          style={{ background: idx === 0 ? '#5e17eb' : '#e83e8c' }}
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-[rgba(94,23,235,0.14)] text-xs font-mono" style={{ color: '#68738D' }}>
                  <span>{idx === 0 ? 'Milestones 01 – 05' : 'Milestones 06 – 08'}</span>
                  <span className="flex items-center gap-1 text-[#a78bfa]">
                    Roadmap below <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Subheader: From Sign-Up to the Podium */}
        <div className="mt-24 text-center">
          <Reveal y={16}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.2em]"
              style={{
                border: '1px solid rgba(94, 23, 235, 0.35)',
                background: 'rgba(94, 23, 235, 0.1)',
                color: '#a78bfa',
              }}
            >
              <Sparkles className="size-3.5 text-[#a78bfa]" />
              Participant Journey
            </span>
            <h3
              className="mt-3 font-display text-2xl font-bold md:text-3xl"
              style={{ color: '#F8FAFC' }}
            >
              From Sign-Up to the Podium
            </h3>
            <p
              className="mx-auto mt-2 max-w-xl text-sm leading-relaxed"
              style={{ color: '#9ca3af' }}
            >
              Eight tactical milestones connecting your first team registration to the national championship stage.
            </p>
          </Reveal>
        </div>

        {/* Connected 8-Stage Timeline */}
        <div className="relative mt-16">
          {/* Central spine on desktop */}
          <div
            className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 lg:block"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(94,23,235,0.35) 6%, rgba(94,23,235,0.35) 94%, transparent 100%)',
            }}
          />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.6, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-0 lg:pb-12"
                >
                  {/* Card */}
                  <div
                    className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_24px_rgba(94,23,235,0.25)] ${
                      isLeft ? 'lg:mr-10' : 'lg:ml-10 lg:col-start-2'
                    }`}
                    style={{
                      background: '#0D1425',
                      border: '1px solid rgba(94, 23, 235, 0.18)',
                    }}
                  >
                    {/* Top indicator line */}
                    <div
                      className="absolute inset-x-0 top-0 h-0.5"
                      style={{ background: step.color }}
                    />

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <span
                        className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-xl"
                        style={{
                          background: `${step.color}22`,
                          border: `1px solid ${step.color}55`,
                        }}
                      >
                        <Icon className="size-5" style={{ color: step.color }} />
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <h4
                            className="font-display text-base font-bold leading-snug"
                            style={{ color: '#F8FAFC' }}
                          >
                            {step.title}
                          </h4>
                          <span
                            className="shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest"
                            style={{
                              background: `${step.color}18`,
                              color: step.color === '#e83e8c' ? '#e83e8c' : '#a78bfa',
                              border: `1px solid ${step.color}33`,
                            }}
                          >
                            {step.phase}
                          </span>
                        </div>
                        <p
                          className="mt-2 text-sm leading-relaxed"
                          style={{ color: '#9ca3af' }}
                        >
                          {step.body}
                        </p>
                      </div>
                    </div>

                    {/* Step number watermark */}
                    <span
                      className="absolute bottom-2 right-4 font-display text-6xl font-bold leading-none select-none pointer-events-none"
                      aria-hidden="true"
                      style={{ color: 'rgba(104, 115, 141, 0.1)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Desktop Spine Dot — always perfectly centered on spine */}
                  <div
                    className="absolute left-1/2 top-8 hidden size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full lg:flex z-10"
                    aria-hidden="true"
                  >
                    <span
                      className="size-3 rounded-full transition-transform duration-300"
                      style={{
                        background: step.color,
                        boxShadow: `0 0 10px 3px ${step.color}66`,
                      }}
                    />
                  </div>

                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div
                      className="mx-auto my-2 h-6 w-px lg:hidden"
                      style={{ background: 'rgba(94, 23, 235, 0.28)' }}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
