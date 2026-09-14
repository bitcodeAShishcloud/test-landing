'use client'

import { motion } from 'motion/react'
import {
  Compass,
  UserPlus,
  MessageCircle,
  Globe,
  CheckCircle2,
  Plane,
  Flag,
  Award,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    icon: Compass,
    title: 'Discover Event',
    body: 'Learn the format, categories and what is at stake. Understand the challenge structure and prizes.',
    tag: 'Phase 01',
    color: '#5e17eb',
  },
  {
    icon: UserPlus,
    title: 'Register Your Team',
    body: 'Assemble your squad (up to 3 members), fill the registration form and lock in your entry.',
    tag: 'Phase 02',
    color: '#7c3aed',
  },
  {
    icon: MessageCircle,
    title: 'Join WhatsApp Channel',
    body: 'Stay in the loop — every announcement, rule update and key deadline arrives here first.',
    tag: 'Phase 03',
    color: '#5e17eb',
  },
  {
    icon: Globe,
    title: 'Online Qualification',
    body: 'Compete remotely in a Jeopardy-style CTF. Earn points, climb the leaderboard and prove your skills.',
    tag: 'Phase 04',
    color: '#7c3aed',
  },
  {
    icon: CheckCircle2,
    title: 'Get Selected',
    body: 'Top-performing teams receive selection calls and advance to the on-campus grand finale.',
    tag: 'Phase 05',
    color: '#5e17eb',
  },
  {
    icon: Plane,
    title: 'Travel to NIET',
    body: 'Head to Greater Noida for the on-campus finale. Accommodation and hospitality details shared separately.',
    tag: 'Phase 06',
    color: '#7c3aed',
  },
  {
    icon: Flag,
    title: 'Grand Finale',
    body: 'A high-intensity Jeopardy round followed by an 8-hour live Attack & Defense showdown.',
    tag: 'Phase 07',
    color: '#5e17eb',
  },
  {
    icon: Award,
    title: 'Win Recognition',
    body: 'Claim your share of the ₹24,000 prize pool, trophies, certificates and national recognition.',
    tag: 'Phase 08',
    color: '#e83e8c',
  },
]

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 md:py-32">
      {/* subtle grid bg */}
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      {/* top fade */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050816] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Participant Journey"
          title="From Sign-Up to the Podium"
          description="Eight milestones. One path. Follow every step from your first click to the championship stage."
        />

        {/* Timeline DL */}
        <div className="mt-16 lg:mt-20">
          <dl className="relative">
            {/* central spine — desktop */}
            <div
              className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 lg:block"
              aria-hidden="true"
              style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(94,23,235,0.35) 8%, rgba(94,23,235,0.35) 92%, transparent 100%)' }}
            />

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative mb-10 flex flex-col lg:mb-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:pb-14 ${
                    isLeft ? '' : 'lg:[&>div]:col-start-2'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(94,23,235,0.4)] ${
                      isLeft ? 'lg:mr-10' : 'lg:ml-10 lg:col-start-2'
                    }`}
                    style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.18)' }}
                  >
                    {/* top bar */}
                    <div
                      className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl"
                      style={{ background: step.color }}
                    />

                    <div className="flex items-start gap-4">
                      {/* icon */}
                      <span
                        className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-xl"
                        style={{ background: `${step.color}22`, border: `1px solid ${step.color}55` }}
                      >
                        <Icon className="size-5" style={{ color: step.color }} />
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <dt
                            className="font-display text-base font-bold leading-snug"
                            style={{ color: '#F8FAFC' }}
                          >
                            {step.title}
                          </dt>
                          <span
                            className="shrink-0 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest"
                            style={{ background: `${step.color}18`, color: step.color, border: `1px solid ${step.color}33` }}
                          >
                            {step.tag}
                          </span>
                        </div>
                        <dd
                          className="mt-2 text-sm leading-relaxed"
                          style={{ color: '#9ca3af' }}
                        >
                          {step.body}
                        </dd>
                      </div>
                    </div>

                    {/* step number watermark */}
                    <span
                      className="absolute bottom-3 right-4 font-display text-6xl font-bold leading-none select-none"
                      aria-hidden="true"
                      style={{ color: 'rgba(104, 115, 141, 0.12)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Spine dot — desktop */}
                  <div
                    className={`absolute top-6 hidden size-4 -translate-y-1/2 items-center justify-center rounded-full lg:flex ${
                      isLeft ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className="size-3 rounded-full"
                      style={{ background: step.color, boxShadow: `0 0 10px 3px ${step.color}55` }}
                    />
                  </div>

                  {/* Mobile connector */}
                  {i < steps.length - 1 && (
                    <div
                      className="mx-auto my-2 h-8 w-px lg:hidden"
                      style={{ background: 'rgba(94,23,235,0.28)' }}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
