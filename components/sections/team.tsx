'use client'

import { motion } from 'motion/react'
import { GraduationCap, Users, Shield } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'

/* ─── Data ────────────────────────────────────────────────────────────────── */
const mentors = [
  {
    name: 'Dr. Mentor Name',
    role: 'Faculty Advisor',
    dept: 'Dept. of Computer Science',
    avatar: null,
  },
  {
    name: 'Prof. Faculty Name',
    role: 'Technical Guide',
    dept: 'Dept. of Information Technology',
    avatar: null,
  },
  {
    name: 'Dr. Advisor Name',
    role: 'Academic Mentor',
    dept: 'Cybersecurity Division',
    avatar: null,
  },
]

const studentTeams = [
  {
    squad: 'Core Operations',
    members: ['Member One', 'Member Two', 'Member Three', 'Member Four'],
    color: '#5e17eb',
  },
  {
    squad: 'Technical Squad',
    members: ['Member One', 'Member Two', 'Member Three'],
    color: '#7c3aed',
  },
  {
    squad: 'Design & Media',
    members: ['Member One', 'Member Two', 'Member Three'],
    color: '#e83e8c',
  },
  {
    squad: 'Logistics & Outreach',
    members: ['Member One', 'Member Two', 'Member Three'],
    color: '#5e17eb',
  },
]

const coreTeam = [
  { name: 'Core Lead', role: 'Event Director', avatar: null },
  { name: 'Core Lead', role: 'Technical Head', avatar: null },
  { name: 'Core Lead', role: 'Operations Head', avatar: null },
  { name: 'Core Lead', role: 'Design Head', avatar: null },
  { name: 'Core Lead', role: 'Media & PR', avatar: null },
  { name: 'Core Lead', role: 'Outreach Lead', avatar: null },
]

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function AvatarPlaceholder({ size = 'lg' }: { size?: 'lg' | 'sm' }) {
  const dim = size === 'lg' ? 'size-16' : 'size-10'
  return (
    <span
      className={`${dim} rounded-full grid place-items-center shrink-0`}
      style={{ background: 'rgba(94,23,235,0.12)', border: '1px solid rgba(94,23,235,0.28)' }}
    >
      <Shield className="size-5 text-[#a78bfa]" />
    </span>
  )
}

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span
        className="grid size-9 place-items-center rounded-lg"
        style={{ background: 'rgba(94,23,235,0.12)', border: '1px solid rgba(94,23,235,0.28)' }}
      >
        <Icon className="size-4 text-[#a78bfa]" />
      </span>
      <h3 className="font-display text-xl font-bold" style={{ color: '#F8FAFC' }}>
        {label}
      </h3>
    </div>
  )
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export function Team() {
  return (
    <section id="team" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ background: '#070B17', borderTop: '1px solid rgba(94,23,235,0.18)' }}
      />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The People"
          title="Our Mentors, Teams & Crew"
          description="Ghost Protocol CTF is built and run by passionate people — from faculty guides who shape the vision to student volunteers who make it happen."
        />

        {/* ── Mentors & Faculty ── */}
        <Reveal>
          <div className="mt-16">
            <SectionLabel icon={GraduationCap} label="Mentors & Faculty Guides" />
            <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mentors.map((m, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: '#0D1425',
                    border: '1px solid rgba(94,23,235,0.18)',
                  }}
                >
                  <AvatarPlaceholder size="lg" />
                  <div>
                    <p className="font-display font-semibold" style={{ color: '#F8FAFC' }}>
                      {m.name}
                    </p>
                    <p className="text-sm font-medium" style={{ color: '#a78bfa' }}>
                      {m.role}
                    </p>
                    <p className="mt-0.5 text-xs" style={{ color: '#68738D' }}>
                      {m.dept}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>

        {/* ── Student Teams ── */}
        <Reveal delay={0.05}>
          <div className="mt-16">
            <SectionLabel icon={Users} label="Student Teams" />
            <div className="grid gap-4 sm:grid-cols-2">
              {studentTeams.map((squad, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6"
                  style={{
                    background: '#0D1425',
                    border: '1px solid rgba(94,23,235,0.18)',
                  }}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span
                      className="size-2 rounded-full"
                      style={{ background: squad.color }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-display text-sm font-bold"
                      style={{ color: '#F8FAFC' }}
                    >
                      {squad.squad}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {squad.members.map((member, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 rounded-full px-3 py-1.5"
                        style={{
                          background: '#111A2E',
                          border: '1px solid rgba(94,23,235,0.15)',
                        }}
                      >
                        <AvatarPlaceholder size="sm" />
                        <span className="text-xs font-medium" style={{ color: '#9ca3af' }}>
                          {member}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Core Team ── */}
        <Reveal delay={0.08}>
          <div className="mt-16">
            <SectionLabel icon={Shield} label="Core Team" />
            <StaggerGroup className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {coreTeam.map((member, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: '#0D1425',
                    border: '1px solid rgba(94,23,235,0.18)',
                  }}
                >
                  <div
                    className="size-14 rounded-full grid place-items-center"
                    style={{
                      background: 'rgba(94,23,235,0.1)',
                      border: '1px solid rgba(94,23,235,0.3)',
                    }}
                  >
                    <Shield className="size-6 text-[#a78bfa]" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold" style={{ color: '#F8FAFC' }}>
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-xs" style={{ color: '#68738D' }}>
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
