'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import {
  GraduationCap,
  Users,
  Shield,
  Mail,
  ExternalLink,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Award,
  Quote,
  Building2,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'

/* ─── Institutional Leadership & Chief Patrons Data ──────────────────────── */
const leadershipPatrons = [
  {
    name: 'Dr. Om Prakash Agarwal',
    designation: 'Managing Director, NIET Greater Noida',
    role: 'Chief Patron & Managing Director',
    quote:
      'Success is not a one-shot process. It is the result of continuous improvement after each challenge. At NIET, we empower students to lead with resilience, technical mastery and ethical innovation on the national cybersecurity stage.',
    dept: 'Noida Institute of Engineering & Technology (NIET)',
    tag: 'CHIEF PATRON',
    image: '/dr-op-agarwal.webp',
    color: '#e83e8c',
  },
  {
    name: 'Dr. Vinod M. Kapse',
    designation: 'Director, NIET Greater Noida',
    role: 'Patron-in-Chief & Institutional Director',
    quote:
      'At NIET, we champion practical, hands-on innovation over theoretical learning. Ghost Protocol CTF 2.0 embodies our mission to cultivate elite cyber talent, ethical hackers, and defensive strategists capable of securing our nation\'s critical digital frontiers.',
    dept: 'Noida Institute of Engineering and Technology (NIET)',
    tag: 'PATRON-IN-CHIEF',
    image: '/director-niet.webp',
    color: '#5e17eb',
  },
  {
    name: 'Dr. Neema Agarwal',
    designation: 'Additional Managing Director, NIET Greater Noida',
    role: 'Patron & Additional Managing Director',
    quote:
      'Education is the most powerful weapon which you can use to change the world. At NIET, we bring leading-edge technical education and hands-on platforms like Ghost Protocol CTF to groom confident cyber leaders for real-world operations.',
    dept: 'Noida Institute of Engineering & Technology (NIET)',
    tag: 'ADDL. MANAGING DIRECTOR',
    image: '/dr-neema-agarwal.webp',
    color: '#38bdf8',
  },
  {
    name: 'Dr. Naresh Kumar',
    designation: 'Associate Director, Academics, NIET Greater Noida',
    role: 'Patron & Associate Director, Academics',
    quote:
      'I take immense pride in being part of an institution dedicated to academic excellence, holistic growth, and nation-building through quality education. NIET shapes learners into achievers — building future-ready professionals who are technically competent, ethically grounded, and carry the courage to innovate and the wisdom to lead.',
    dept: 'Noida Institute of Engineering and Technology (NIET)',
    tag: 'ASSOC. DIRECTOR · ACADEMICS',
    image: '/dr-naresh-kumar.webp',
    color: '#38bdf8',
  },
]

/* ─── Faculty Guides & Advisory Mentors Data ──────────────────────────────── */
const mentors = [
  {
    name: 'Dr. Arun Kumar Tripathi',
    role: 'Dean of Emerging Technology',
    dept: 'School of Emerging Technology, NIET',
    institute: 'NIET Greater Noida',
    tag: 'DEAN · EMERGING TECHNOLOGY',
    color: '#5e17eb',
    image: '/dr-arun-kumar-tripathi.webp',
  },
  {
    name: 'Dr. Rashmi Sharma',
    role: 'HOD & Faculty Guide',
    dept: 'Dept. of CSE (Cyber Security), NIET',
    institute: 'NIET Greater Noida',
    tag: 'HOD · CYBER SECURITY',
    color: '#7c3aed',
    image: '/dr-rashmi-sharma.webp',
  },
  {
    name: 'Dr. Vikas Sagar',
    role: 'Deputy Head & Faculty Advisor',
    dept: 'Dept. of CSE (Cyber Security), NIET',
    institute: 'NIET Greater Noida',
    tag: 'DY. HEAD & ADVISOR',
    color: '#e83e8c',
    image: '/dr-vikas-sagar.webp',
  },
]

/* ─── Core Organizing Council Data ─────────────────────────────────────────── */
const coreLeads = [
  {
    name: 'Harsh Chauhan',
    role: 'Faculty Coordinator',
    team: 'Faculty Council',
    tag: 'FACULTY',
    color: '#5e17eb',
    image: null,
  },
  {
    name: 'Deepika Singh',
    role: 'Faculty Coordinator',
    team: 'Faculty Council',
    tag: 'FACULTY',
    color: '#7c3aed',
    image: '/deepika-singh.webp',
  },
  {
    name: 'Sumit Sir',
    role: 'Faculty Coordinator',
    team: 'Faculty Council',
    tag: 'FACULTY',
    color: '#5e17eb',
    image: '/sumit-sir.webp',
  },
  {
    name: 'Ashish Gupta',
    role: 'Technical Head',
    team: 'Cyber Invaders Club',
    tag: 'TECH HEAD',
    color: '#38bdf8',
    image: '/ashish-gupta.webp',
  },
  {
    name: 'Ananya Paliwal',
    role: 'President',
    team: 'Cyber Invaders Club',
    tag: 'PRESIDENT',
    color: '#e83e8c',
    image: '/ananya-paliwal.webp',
  },
  {
    name: 'Sudhanshu Raj',
    role: 'Vice President',
    team: 'Cyber Invaders Club',
    tag: 'VICE PRESIDENT',
    color: '#f97316',
    image: '/sudhanshu-raj.webp',
  },
  {
    name: 'Aditya Kumar Singh',
    role: 'Vice President',
    team: 'Cyber Invaders Club',
    tag: 'VICE PRESIDENT',
    color: '#22c55e',
    image: '/aditya-kumar-singh.webp',
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
        }}
      />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Leadership & Organizing Crew"
          title="Our Mentors, Teams & Crew"
          description="Ghost Protocol CTF 2.0 is staged under the institutional leadership of NIET Greater Noida and driven by the cybersecurity students of Cyber Invaders."
        />

        {/* ════════════════════════ 1. INSTITUTIONAL LEADERSHIP & PATRONS SPOTLIGHT (BORDERLESS) ════════════════════════ */}
        <div className="mt-16 space-y-8">
          {leadershipPatrons.map((patron, idx) => (
            <Reveal key={patron.name} y={20} delay={idx * 0.08}>
              <div
                className="relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 drop-shadow-[0_0_40px_rgba(94,23,235,0.25)]"
                style={{
                  background: 'linear-gradient(135deg, #0D1425 0%, #090E1C 100%)',
                }}
              >
                {/* Top Cyber Laser Accent Line */}
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{
                    background:
                      idx === 0
                        ? 'linear-gradient(90deg, #e83e8c 0%, #ff5500 50%, #5e17eb 100%)'
                        : 'linear-gradient(90deg, #5e17eb 0%, #a78bfa 50%, #e83e8c 100%)',
                  }}
                />

                <div className="grid gap-8 lg:grid-cols-[300px_1fr] items-center">
                  {/* Patron Photo Frame (100% Borderless) */}
                  <div className="flex justify-center">
                    <div className="relative w-56 sm:w-64 aspect-[4/5] overflow-hidden rounded-2xl drop-shadow-[0_0_35px_rgba(94,23,235,0.35)] transition-transform duration-300 hover:scale-[1.02]">
                      <Image
                        src={patron.image}
                        alt={`${patron.name} - ${patron.designation}`}
                        fill
                        className="object-cover object-top rounded-2xl"
                        priority={idx === 0}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-50 pointer-events-none rounded-2xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Patron Info & Vision Message */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span
                          className="rounded-full px-3 py-1 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white"
                          style={{
                            background:
                              idx === 0
                                ? 'linear-gradient(90deg, #e83e8c, #ff5500)'
                                : 'linear-gradient(90deg, #5e17eb, #7c3aed)',
                            boxShadow: `0 0 14px ${patron.color}66`,
                          }}
                        >
                          {patron.tag}
                        </span>
                        <span className="font-mono text-xs text-[#a78bfa]">
                          NIET Leadership
                        </span>
                      </div>

                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                        {patron.name}
                      </h3>
                      <p className="mt-1 font-display text-sm sm:text-base font-semibold text-[#a78bfa]">
                        {patron.designation}
                      </p>
                      <p className="mt-0.5 text-xs text-[#68738D] font-mono">
                        {patron.dept}
                      </p>

                      <div
                        className="my-5 h-px w-full"
                        style={{ background: 'rgba(94, 23, 235, 0.12)' }}
                      />

                      {/* Vision Quote Box (Borderless) */}
                      <div className="relative rounded-2xl p-4 sm:p-5 bg-[#111A2E]/60">
                        <Quote className="size-6 text-[#a78bfa]/40 mb-2" />
                        <p className="text-xs sm:text-sm leading-relaxed text-[#CBD5E1] italic">
                          &ldquo;{patron.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#68738D]">
                      <span className="flex items-center gap-1.5 text-[#CBD5E1]">
                        <Building2 className="size-3.5 text-[#5e17eb]" />
                        Noida Institute of Engineering and Technology
                      </span>
                      <span className="text-[#a78bfa]">Greater Noida, Uttar Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ════════════════════════ 2. FACULTY GUIDES & ADVISORY MENTORS (BORDERLESS) ════════════════════════ */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-3 pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl"
                  style={{
                    background: 'rgba(94, 23, 235, 0.15)',
                  }}
                >
                  <GraduationCap className="size-5 text-[#a78bfa]" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Faculty Advisors & Guides
                  </h3>
                  <p className="text-xs text-[#9ca3af]">Academic mentorship & department guidance</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#68738D]">
                Department of CSE / CoE
              </span>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((m) => (
              <motion.div
                key={m.role}
                variants={staggerItem}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 drop-shadow-[0_0_24px_rgba(94,23,235,0.2)]"
                style={{
                  background: '#0D1425',
                }}
              >
                {/* Top Line Accent */}
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: m.color }}
                />

                <div>
                  {/* Photo Frame Container (100% Borderless) */}
                  <div className="relative mx-auto mb-6 flex justify-center">
                    <div className="relative size-28 sm:size-32 overflow-hidden rounded-2xl drop-shadow-[0_0_20px_rgba(94,23,235,0.3)] transition-transform duration-300 group-hover:scale-105">
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#111A2E] flex items-center justify-center">
                        {m.image ? (
                          <Image
                            src={m.image}
                            alt={m.name}
                            fill
                            className="object-cover object-top rounded-2xl"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-1.5 text-center p-2">
                            <GraduationCap className="size-8 text-[#a78bfa]" />
                            <span className="font-mono text-[8px] uppercase tracking-wider text-[#68738D]">
                              Faculty Photo
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <span
                      className="inline-block rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider mb-2"
                      style={{
                        background: `${m.color}18`,
                        color: m.color === '#e83e8c' ? '#e83e8c' : '#a78bfa',
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

                <div className="mt-6 pt-3 text-center">
                  <span className="font-mono text-[11px] text-[#68738D]">
                    {m.institute}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        {/* ════════════════════════ 3. CORE STUDENT LEADERSHIP (BORDERLESS) ════════════════════════ */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-3 pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl"
                  style={{
                    background: 'rgba(232, 62, 140, 0.15)',
                  }}
                >
                  <Shield className="size-5 text-[#e83e8c]" />
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Core Organizing Council
                  </h3>
                  <p className="text-xs text-[#9ca3af]">Faculty coordinators and executive leadership of Cyber Invaders</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#a78bfa]">
                Cyber Invaders Club
              </span>
            </div>
          </Reveal>

          {/* Faculty Coordinators sub-heading */}
          <Reveal>
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(94,23,235,0.4)] to-[rgba(94,23,235,0.4)]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#a78bfa]">
                Faculty Coordinators
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[rgba(94,23,235,0.4)] to-[rgba(94,23,235,0.4)]" />
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-4 grid-cols-2 sm:grid-cols-3">
            {coreLeads
              .filter((l) => l.tag === 'FACULTY')
              .map((lead) => (
                <motion.div
                  key={lead.name}
                  variants={staggerItem}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1.5 drop-shadow-[0_0_20px_rgba(94,23,235,0.25)]"
                  style={{
                    background: '#0D1425',
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ background: lead.color }}
                  />

                  <div>
                    {/* Photo Slot (100% Borderless) */}
                    <div className="mx-auto mb-3 flex justify-center">
                      <div className="relative size-20 sm:size-24 overflow-hidden rounded-2xl drop-shadow-[0_0_16px_rgba(94,23,235,0.3)] transition-transform duration-300 group-hover:scale-105">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#111A2E] flex items-center justify-center">
                          {lead.image ? (
                            <Image
                              src={lead.image}
                              alt={lead.name}
                              fill
                              className="object-cover object-top rounded-2xl"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center gap-1">
                              <Shield className="size-6 text-[#a78bfa]" />
                              <span className="font-mono text-[7px] uppercase tracking-wider text-[#68738D]">
                                Faculty
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <span
                      className="inline-block rounded px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider mb-1"
                      style={{
                        background: `${lead.color}15`,
                        color: lead.color === '#e83e8c' ? '#e83e8c' : '#a78bfa',
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

                  <div className="mt-3 pt-2">
                    <span className="font-mono text-[9px] text-[#68738D]">
                      {lead.team}
                    </span>
                  </div>
                </motion.div>
              ))}
          </StaggerGroup>

          {/* Executive Leadership sub-heading */}
          <Reveal>
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(232,62,140,0.35)] to-[rgba(232,62,140,0.35)]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#e83e8c]">
                Executive Leadership of Cyber Invaders
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[rgba(232,62,140,0.35)] to-[rgba(232,62,140,0.35)]" />
            </div>
          </Reveal>

          {/* Remaining council members (non-faculty) — 4 cards in a single row */}
          <StaggerGroup className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {coreLeads
              .filter((l) => l.tag !== 'FACULTY')
              .map((lead) => (
                <motion.div
                  key={lead.name}
                  variants={staggerItem}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1.5 drop-shadow-[0_0_20px_rgba(94,23,235,0.25)]"
                  style={{
                    background: '#0D1425',
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ background: lead.color }}
                  />

                  <div>
                    {/* Photo Slot (100% Borderless) */}
                    <div className="mx-auto mb-3 flex justify-center">
                      <div className="relative size-20 sm:size-24 overflow-hidden rounded-2xl drop-shadow-[0_0_16px_rgba(94,23,235,0.3)] transition-transform duration-300 group-hover:scale-105">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#111A2E] flex items-center justify-center">
                          {lead.image ? (
                            <Image
                              src={lead.image}
                              alt={lead.name}
                              fill
                              className="object-cover object-top rounded-2xl"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center gap-1">
                              <Shield className="size-6 text-[#a78bfa]" />
                              <span className="font-mono text-[7px] uppercase tracking-wider text-[#68738D]">
                                Faculty
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <span
                      className="inline-block rounded px-2 py-0.5 font-mono text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider mb-1"
                      style={{
                        background: `${lead.color}15`,
                        color: lead.color === '#e83e8c' ? '#e83e8c' : '#a78bfa',
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

                  <div className="mt-3 pt-2">
                    <span className="font-mono text-[9px] text-[#68738D]">
                      {lead.team}
                    </span>
                  </div>
                </motion.div>
              ))}
          </StaggerGroup>
        </div>

        {/* ════════════════════════ 4. OPERATIONAL SQUADS (BORDERLESS) ════════════════════════ */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center justify-between gap-3 pb-4">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl"
                  style={{
                    background: 'rgba(56, 189, 248, 0.15)',
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
                    className="relative h-full flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 drop-shadow-[0_0_24px_rgba(94,23,235,0.2)]"
                    style={{
                      background: '#0D1425',
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
