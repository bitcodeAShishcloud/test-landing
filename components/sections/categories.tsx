'use client'

import { motion } from 'motion/react'
import {
  Globe2,
  Fingerprint,
  KeyRound,
  Search,
  Binary,
  Terminal,
  EyeOff,
  Cloud,
  Bot,
  Puzzle,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'

const categories = [
  { icon: Globe2, name: 'Web Exploitation' },
  { icon: Fingerprint, name: 'Digital Forensics' },
  { icon: KeyRound, name: 'Cryptography' },
  { icon: Search, name: 'OSINT' },
  { icon: Binary, name: 'Reverse Engineering' },
  { icon: Terminal, name: 'Pwn' },
  { icon: EyeOff, name: 'Steganography' },
  { icon: Cloud, name: 'Cloud Security' },
  { icon: Bot, name: 'AI / LLM Security' },
  { icon: Puzzle, name: 'Miscellaneous' },
]

export function Categories() {
  return (
    <section id="categories" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Challenge Categories"
          title="Ten domains. One battlefield."
          description="The full spectrum of offensive and defensive security — from classic exploitation to the newest frontier of AI. Master one, or chase them all."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <motion.div
              key={c.name}
              variants={staggerItem}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: '#0D1326' }}
            >
              <div
                className="absolute inset-x-0 -bottom-10 h-20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{ background: 'rgba(108, 92, 231, 0.12)' }}
              />
              <span
                className="relative grid size-14 place-items-center rounded-2xl transition-colors duration-300"
                style={{
                  border: '1px solid rgba(139, 92, 246, 0.18)',
                  background: '#10172B',
                }}
              >
                <c.icon
                  className="size-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#8B5CF6' }}
                  strokeWidth={1.7}
                />
              </span>
              <span
                className="relative text-sm font-medium leading-tight"
                style={{ color: '#F5F7FF' }}
              >
                {c.name}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
