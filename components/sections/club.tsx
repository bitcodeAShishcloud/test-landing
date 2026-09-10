'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'
import { CountUp } from '@/components/count-up'

const stats = [
  { value: 40, suffix: '+', label: 'Hands-on workshops' },
  { value: 12, suffix: '', label: 'CTF events run' },
  { value: 500, suffix: '+', label: 'Members trained' },
  { value: 3, suffix: 'yrs', label: 'Building the community' },
]

export function Club() {
  return (
    <section
      id="club"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: '#070B17',
        borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        borderBottom: '1px solid rgba(94, 23, 235, 0.18)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="relative overflow-hidden rounded-xl glass-strong p-8"
                style={{ background: '#0D1425' }}
              >
                <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
                <Image
                  src="/cyber-invaders-logo.png"
                  alt="Cyber Invaders club logo"
                  width={420}
                  height={420}
                  className="relative mx-auto w-full max-w-[280px]"
                  priority={false}
                />
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="The Organizers"
              title="Powered by Cyber Invaders"
              description="Cyber Invaders is the cybersecurity club of NIET, focused on making cybersecurity practical, accessible and exciting through hands-on learning, workshops, attack-defense exercises and CTF competitions."
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <Reveal
                  key={s.label}
                  className="rounded-xl glass p-5 animate-card-drift"
                  style={{ background: '#0D1425' }}
                >
                  <div
                    className="font-display text-3xl font-bold"
                    style={{ color: '#F8FAFC' }}
                  >
                    <CountUp to={s.value} />
                    <span style={{ color: '#a78bfa' }}>{s.suffix}</span>
                  </div>
                  <div className="mt-1 text-sm" style={{ color: '#68738D' }}>{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
