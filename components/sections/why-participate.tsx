'use client'

import { motion } from 'motion/react'
import { Bug, Fingerprint, Cpu, BrainCircuit } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'

const cards = [
  {
    icon: Bug,
    title: 'Ethical Hacking',
    body: 'Probe live systems, exploit real misconfigurations and think like an adversary in controlled, legal environments.',
  },
  {
    icon: Fingerprint,
    title: 'Digital Forensics',
    body: 'Reconstruct incidents from disk images, memory dumps and network captures to trace how a breach unfolded.',
  },
  {
    icon: Cpu,
    title: 'Reverse Engineering',
    body: 'Disassemble binaries, understand protections and uncover hidden logic the way analysts dissect real malware.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & LLM Security',
    body: 'Attack and defend modern AI systems — prompt injection, model abuse and the emerging frontier of ML security.',
  },
]

export function WhyParticipate() {
  return (
    <section id="overview" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Why Participate?"
          title={<>Skills you actually walk away with</>}
          description="Ghost Protocol is built around hands-on operations, not slides. Every challenge maps to a discipline security teams hire for — you leave with practical experience, not theory."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-xl glass p-6 transition-all duration-300 hover:-translate-y-1 animate-card-drift"
              style={{ background: '#0D1425', animationDelay: `${idx * -1.5}s` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{ background: '#5e17eb' }}
              />
              <div
                className="relative mb-5 grid size-11 place-items-center rounded-lg"
                style={{ background: '#5e17eb' }}
              >
                <c.icon className="size-5 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3
                className="relative font-display text-lg font-bold"
                style={{ color: '#F8FAFC' }}
              >
                {c.title}
              </h3>
              <p
                className="relative mt-2 text-sm leading-relaxed"
                style={{ color: '#9ca3af' }}
              >
                {c.body}
              </p>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
