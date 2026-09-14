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
    back: 'Offense lab: recon, exploitation & controlled escalation.',
  },
  {
    icon: Fingerprint,
    title: 'Digital Forensics',
    body: 'Reconstruct incidents from disk images, memory dumps and network captures to trace how a breach unfolded.',
    back: 'Defense lab: artifact triage, timeline & breach reconstruction.',
  },
  {
    icon: Cpu,
    title: 'Reverse Engineering',
    body: 'Disassemble binaries, understand protections and uncover hidden logic the way analysts dissect real malware.',
    back: 'Malware lab: static/dynamic analysis & obfuscation teardown.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & LLM Security',
    body: 'Attack and defend modern AI systems — prompt injection, model abuse and the emerging frontier of ML security.',
    back: 'AI lab: prompt injection, model abuse & ML-system defense.',
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
              className="flip-scene group relative min-h-[230px]"
              style={{ animationDelay: `${idx * -1.5}s` }}
            >
              <div className="flip-inner">
                {/* ── Front face ── */}
                <div
                  className="flip-face flip-face-front overflow-hidden rounded-xl glass p-6"
                  style={{ background: '#0D1425' }}
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
                    <c.icon className="size-5 text-white" />
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
                  <span
                    className="absolute bottom-4 right-5 font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: '#a78bfa' }}
                    aria-hidden="true"
                  >
                    hover to flip
                  </span>
                </div>

                {/* ── Back face ── */}
                <div
                  className="flip-face flip-face-back flex flex-col justify-between overflow-hidden rounded-xl p-6"
                  style={{
                    background: 'linear-gradient(150deg, #5e17eb 0%, #4a10c4 55%, #0D1425 130%)',
                    border: '1px solid rgba(167, 139, 250, 0.4)',
                  }}
                >
                  <div>
                    <div
                      className="mb-5 grid size-11 place-items-center rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                      <c.icon className="size-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#E9E4FF]">{c.back}</p>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: 'rgba(233,228,255,0.75)' }}
                  >
                    {c.title} · Discipline
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
