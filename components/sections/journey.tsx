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
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'

const steps = [
  { icon: Compass, title: 'Discover Event', body: 'Learn the format, categories and what is at stake.' },
  { icon: UserPlus, title: 'Register Team', body: 'Assemble your squad and lock in your entry.' },
  { icon: MessageCircle, title: 'Join WhatsApp Channel', body: 'Get every announcement, deadline and update.' },
  { icon: Globe, title: 'Online Qualification', body: 'Compete remotely in a Jeopardy-style CTF.' },
  { icon: CheckCircle2, title: 'Get Selected', body: 'Top teams advance to the grand finale.' },
  { icon: Plane, title: 'Travel to NIET', body: 'Head to Greater Noida for the on-campus finale.' },
  { icon: Flag, title: 'Grand Finale', body: 'Jeopardy plus an 8-hour Attack & Defense showdown.' },
  { icon: Award, title: 'Win Recognition', body: 'Claim the prize pool and national recognition.' },
]

export function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Participant Journey"
          title="From sign-up to the podium"
          description="Eight steps map the official journey — every participant follows the same path from discovery to recognition."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-xl glass p-6 transition-all duration-300 hover:-translate-y-1 animate-card-drift"
              style={{ background: '#0D1425', animationDelay: `${i * -1.5}s` }}
            >
              <span
                className="absolute right-4 top-3 font-display text-5xl font-bold"
                aria-hidden="true"
                style={{ color: 'rgba(104, 115, 141, 0.22)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="relative mb-4 grid size-10 place-items-center rounded-lg"
                style={{ background: '#5e17eb' }}
              >
                <s.icon className="size-5 text-white" />
              </span>
              <h3
                className="relative font-display font-bold"
                style={{ color: '#F8FAFC' }}
              >
                {s.title}
              </h3>
              <p
                className="relative mt-1.5 text-sm leading-relaxed"
                style={{ color: '#9ca3af' }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
