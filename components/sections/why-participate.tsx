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
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: '#0D1326' }}
            >
              <div
                className="absolute -right-8 -top-8 size-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{ background: 'rgba(108, 92, 231, 0.14)' }}
              />
              <div
                className="relative mb-5 grid size-12 place-items-center rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                  boxShadow: '0 8px 20px -10px rgba(108, 92, 231, 0.5)',
                }}
              >
                <c.icon className="size-6 text-white transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3
                className="relative font-display text-lg font-bold"
                style={{ color: '#F5F7FF' }}
              >
                {c.title}
              </h3>
              <p
                className="relative mt-2 text-sm leading-relaxed"
                style={{ color: '#A6AEC8' }}
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
