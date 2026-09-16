'use client'

import Image from 'next/image'
import { Globe, ExternalLink } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'
import { CountUp } from '@/components/count-up'
import { siteLinks } from '@/lib/links'

const stats = [
  { value: 10, suffix: '+', label: 'Hands-on workshops' },
  { value: 12, suffix: '', label: 'events run' },
  { value: 300, suffix: '+', label: 'Members trained' },
  { value: 3, suffix: 'yrs', label: 'Building the community' },
]

export function Club() {
  return (
    <section
      id="club"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        borderBottom: '1px solid rgba(94, 23, 235, 0.18)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div
                className="relative overflow-hidden rounded-xl glass-strong p-6 md:p-8"
                style={{ background: '#0D1425' }}
              >
                <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
                <Image
                  src="/cyber-invaders-logo.webp"
                  alt="Cyber Invaders club logo"
                  width={500}
                  height={500}
                  className="relative mx-auto w-full max-w-[320px] drop-shadow-[0_0_28px_rgba(167,139,250,0.35)]"
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

            <div className="mt-6">
              <Reveal delay={0.1}>
                <a
                  href={siteLinks.clubWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#4a10c4]"
                  style={{ background: '#5e17eb' }}
                >
                  <Globe className="size-3.5" />
                  <span>Visit cyberinvaders.tech</span>
                  <ExternalLink className="size-3" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
