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
          {categories.map((c, idx) => (
            <motion.div
              key={c.name}
              variants={staggerItem}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1 animate-card-drift"
              style={{ background: '#0D1425', animationDelay: `${idx * -1.5}s` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
                style={{ background: '#5e17eb' }}
              />
              <span
                className="relative grid size-12 place-items-center rounded-xl transition-colors duration-300"
                style={{
                  border: '1px solid rgba(94, 23, 235, 0.18)',
                  background: '#111A2E',
                }}
              >
                <c.icon
                  className="size-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: '#a78bfa' }}
                  strokeWidth={1.7}
                />
              </span>
              <span
                className="relative text-sm font-medium leading-tight"
                style={{ color: '#F8FAFC' }}
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
