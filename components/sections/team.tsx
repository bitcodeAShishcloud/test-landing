'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import {
  GraduationCap,
  Users,
  Shield,
  Linkedin,
  Github,
  Mail,
  ExternalLink,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Award,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'

/* ─── Mentors & Faculty Guides Data ────────────────────────────────────────── */
const mentors = [
  {
    name: 'Dr. Mentor Name',
    role: 'Faculty Advisor & Head Guide',
    dept: 'Department of Computer Science & Engineering',
    institute: 'NIET Greater Noida',
    tag: 'LEAD ADVISOR',
    color: '#5e17eb',
    image: null, // Ready for photo url e.g. '/team/mentor-1.webp'
  },
  {
    name: 'Prof. Faculty Name',
    role: 'Technical Guide & Lab Director',
    dept: 'Cyber Security & Forensics CoE',
    institute: 'NIET Greater Noida',
    tag: 'TECHNICAL GUIDE',
    color: '#7c3aed',
    image: null, // Ready for photo url
  },
  {
    name: 'Dr. Advisor Name',
    role: 'Academic Mentor & Innovation Lead',
    dept: 'Center for Cyber Security Innovation',
    institute: 'NIET Greater Noida',
    tag: 'ACADEMIC MENTOR',
    color: '#e83e8c',
    image: null, // Ready for photo url
  },
]

/* ─── Core Student Leadership Data ─────────────────────────────────────────── */
const coreLeads = [
  {
    name: 'Core Lead Name',
    role: 'Tournament Director',
    team: 'Executive Council',
    tag: 'DIRECTOR',
    color: '#5e17eb',
    image: null,
  },
  {
    name: 'Core Lead Name',
    role: 'Technical Lead & Challenge Architect',
    team: 'Platform & Challenges',
    tag: 'TECH HEAD',
    color: '#7c3aed',
    image: null,
  },
  {
    name: 'Core Lead Name',
    role: 'Operations & Logistics Head',
    team: 'Arena Operations',
    tag: 'OPS HEAD',
    color: '#38bdf8',
    image: null,
  },
  {
    name: 'Core Lead Name',
    role: 'Infra & Attack-Defense Lead',
    team: 'Server & Lab Infra',
    tag: 'INFRA LEAD',
    color: '#f97316',
    image: null,
  },
  {
    name: 'Core Lead Name',
    role: 'Design & Visual Identity Lead',
    team: 'Creative & UI/UX',
    tag: 'DESIGN LEAD',
    color: '#e83e8c',
    image: null,
  },
  {
    name: 'Core Lead Name',
    role: 'PR, Sponsorship & Outreach Head',
    team: 'Outreach & Comms',
    tag: 'PR HEAD',
    color: '#22c55e',
    image: null,
  },
]

/* ─── Specialized Operational Squads ───────────────────────────────────────── */
const studentSquads = [
  {
    squad: 'Challenge Development Squad',
    roleDesc: 'Crafting, testing and auditing Jeopardy flags & Attack-Defense challenges.',
    icon: Code2,
    members: ['Lead Architect', 'Web Exploit Specialist', 'Reverse Engineer', 'Crypto Analyst'],
    color: '#5e17eb',
  },
  {
    squad: 'Server Infrastructure & Platform',
    roleDesc: 'High-availability CTFd hosting, scoreboard telemetry & arena local network.',
    icon: Cpu,
    members: ['Infra Lead', 'Cloud Architect', 'Network Admin', 'Security Monitor'],
    color: '#7c3aed',
  },
  {
    squad: 'Creative, Media & Visuals',
    roleDesc: 'Tournament identity, stream overlays, social broadcasts & stage presentation.',
    icon: Layers,
    members: ['Creative Director', 'Motion Designer', 'Content Lead', 'Broadcast Tech'],
    color: '#e83e8c',
  },
  {
    squad: 'Logistics, Hospitality & Outreach',
    roleDesc: 'Team registrations, campus hospitality, help desk & finalist hospitality.',
    icon: Award,
    members: ['Logistics Head', 'Registration Lead', 'Hospitality Coordinator', 'Help Desk Lead'],
    color: '#38bdf8',
  },
]

export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Cyber Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 0%, rgba(94,23,235,0.08) 0%, transparent 60%), radial-gradient(50% 35% at 50% 100%, rgba(232,62,140,0.06) 0%, transparent 60%)',
          borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        }}
      />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The Organizing Crew · Faculty & Students"
          title="Our Mentors, Teams & Crew"
          description="Ghost Protocol CTF 2.0 is powered by the faculty leadership of NIET Greater Noida and the student hackers of Cyber Invaders club."
        />

        {/* ════════════════════════ 1. MENTORS & FACULTY GUIDES ════════════════════════ */}
        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-[rgba(94,23,235,0.18)] pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl"
                  style={{
                    background: 'rgba(94, 23, 235, 0.15)',
                    border: '1px solid rgba(94, 23, 235, 0.35)',
                  }}
                >
                  <GraduationCap className="size-5 text-[#a78bfa]" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Faculty Guides & Mentors
                  </h3>
                  <p className="text-xs text-[#9ca3af]">Academic oversight and tournament patronage</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#68738D]">
                NIET Faculty Board
              </span>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((m, idx) => (
              <motion.div
                key={m.role}
                variants={staggerItem}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 glass-strong transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(94,23,235,0.25)]"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.22)',
                }}
              >
                {/* Top Glowing Color Line */}
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: m.color }}
                />

                <div>
                  {/* Photo Frame Container */}
                  <div className="relative mx-auto mb-6 flex justify-center">
                    <div
                      className="relative size-28 sm:size-32 overflow-hidden rounded-2xl p-1 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${m.color} 0%, rgba(94,23,235,0.2) 100%)`,
                        boxShadow: `0 0 20px -4px ${m.color}66`,
                      }}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#111A2E] flex items-center justify-center">
                        {m.image ? (
                          <Image
                            src={m.image}
                            alt={m.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-1.5 text-center p-2">
                            <GraduationCap className="size-8 text-[#a78bfa]" />
                            <span className="font-mono text-[9px] uppercase tracking-wider text-[#68738D]">
                              Faculty Photo
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Corner HUD Accent */}
                      <span className="absolute top-1 left-1 size-2 border-t-2 border-l-2 border-white/60" />
                      <span className="absolute bottom-1 right-1 size-2 border-b-2 border-r-2 border-white/60" />
                    </div>
                  </div>

                  <div className="text-center">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider mb-2"
                      style={{
                        background: `${m.color}18`,
                        color: m.color === '#e83e8c' ? '#e83e8c' : '#a78bfa',
                        border: `1px solid ${m.color}33`,
                      }}
                    >
                      {m.tag}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white">
                      {m.name}
                    </h4>
                    <p className="mt-1 font-mono text-xs font-medium text-[#a78bfa]">
                      {m.role}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#9ca3af]">
                      {m.dept}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[rgba(94,23,235,0.14)] text-center">
                  <span className="font-mono text-[11px] text-[#68738D]">
                    {m.institute}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* ════════════════════════ 2. CORE STUDENT LEADERSHIP ════════════════════════ */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-[rgba(94,23,235,0.18)] pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl"
                  style={{
                    background: 'rgba(232, 62, 140, 0.15)',
                    border: '1px solid rgba(232, 62, 140, 0.35)',
                  }}
                >
                  <Shield className="size-5 text-[#e83e8c]" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Core Organizing Council
                  </h3>
                  <p className="text-xs text-[#9ca3af]">Student conveners and department heads of Cyber Invaders</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#a78bfa]">
                Cyber Invaders Club
              </span>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {coreLeads.map((lead, idx) => (
              <motion.div
                key={lead.role}
                variants={staggerItem}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 text-center glass transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_24px_rgba(94,23,235,0.3)]"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.2)',
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: lead.color }}
                />

                <div>
                  {/* Photo Slot */}
                  <div className="mx-auto mb-3 flex justify-center">
                    <div
                      className="relative size-16 sm:size-20 overflow-hidden rounded-xl p-0.5 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${lead.color} 0%, rgba(94,23,235,0.2) 100%)`,
                        boxShadow: `0 0 14px -4px ${lead.color}55`,
                      }}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-[#111A2E] flex items-center justify-center">
                        {lead.image ? (
                          <Image
                            src={lead.image}
                            alt={lead.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <Shield className="size-6 text-[#a78bfa]" />
                        )}
                      </div>
                    </div>
                  </div>

                  <span
                    className="inline-block rounded px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider mb-1"
                    style={{
                      background: `${lead.color}15`,
                      color: lead.color === '#e83e8c' ? '#e83e8c' : '#a78bfa',
                      border: `1px solid ${lead.color}33`,
                    }}
                  >
                    {lead.tag}
                  </span>

                  <h5 className="font-display text-xs sm:text-sm font-bold text-white leading-snug">
                    {lead.name}
                  </h5>
                  <p className="mt-1 font-mono text-[10px] leading-tight text-[#a78bfa]">
                    {lead.role}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[rgba(94,23,235,0.12)]">
                  <span className="font-mono text-[9px] text-[#68738D]">
                    {lead.team}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* ════════════════════════ 3. OPERATIONAL SQUADS ════════════════════════ */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-3 border-b border-[rgba(94,23,235,0.18)] pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl"
                  style={{
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                  }}
                >
                  <Users className="size-5 text-sky-400" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Specialized Operational Squads
                  </h3>
                  <p className="text-xs text-[#9ca3af]">Technical and logistical execution divisions</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#68738D]">
                Student Volunteer Wings
              </span>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {studentSquads.map((squad, idx) => {
              const Icon = squad.icon
              return (
                <Reveal key={squad.squad} y={16} delay={idx * 0.06} className="h-full">
                  <div
                    className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 glass transition-all duration-300 hover:border-[#5e17eb]"
                    style={{
                      background: '#0D1425',
                      border: '1px solid rgba(94, 23, 235, 0.2)',
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ background: squad.color }}
                    />

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="grid size-9 place-items-center rounded-lg"
                          style={{
                            background: `${squad.color}18`,
                            border: `1px solid ${squad.color}35`,
                          }}
                        >
                          <Icon className="size-4.5" style={{ color: squad.color }} />
                        </span>
                        <div>
                          <h4 className="font-display text-base font-bold text-white leading-snug">
                            {squad.squad}
                          </h4>
                          <span className="font-mono text-[10px] text-[#a78bfa]">
                            Division {idx + 1}
                          </span>
                        </div>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-[#9ca3af]">
                        {squad.roleDesc}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {squad.members.map((m, j) => (
                          <div
                            key={j}
                            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                            style={{
                              background: '#111A2E',
                              border: '1px solid rgba(94, 23, 235, 0.16)',
                            }}
                          >
                            <span
                              className="size-1.5 rounded-full"
                              style={{ background: squad.color }}
                            />
                            <span className="font-mono text-xs text-[#CBD5E1]">
                              {m}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
