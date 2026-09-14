'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, StaggerGroup, staggerItem } from '@/components/motion-primitives'

/* ─── Tier config ─────────────────────────────────────────────────────────── */
const tiers = [
  {
    id: 'diamond',
    label: 'Diamond',
    tagline: 'Premier Partner',
    accent: '#38bdf8',       // sky-400
    glow: 'rgba(56,189,248,0.18)',
    border: 'rgba(56,189,248,0.32)',
    slots: 2,
    logoSize: 'h-20',
  },
  {
    id: 'platinum',
    label: 'Platinum',
    tagline: 'Platinum Sponsor',
    accent: '#e2e8f0',       // slate-200
    glow: 'rgba(226,232,240,0.12)',
    border: 'rgba(226,232,240,0.28)',
    slots: 3,
    logoSize: 'h-14',
  },
  {
    id: 'gold',
    label: 'Gold',
    tagline: 'Gold Sponsor',
    accent: '#fbbf24',       // amber-400
    glow: 'rgba(251,191,36,0.15)',
    border: 'rgba(251,191,36,0.30)',
    slots: 4,
    logoSize: 'h-10',
  },
] as const

/* ─── Placeholder card ────────────────────────────────────────────────────── */
function PlaceholderCard({
  tier,
  index,
}: {
  tier: (typeof tiers)[number]
  index: number
}) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#0D1425',
        border: `1px solid ${tier.border}`,
        boxShadow: `inset 0 0 28px 0 ${tier.glow}`,
        minHeight: tier.id === 'diamond' ? '160px' : tier.id === 'platinum' ? '136px' : '112px',
      }}
    >
      {/* shimmer top bar */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: tier.accent }}
        aria-hidden="true"
      />

      {/* placeholder logo box */}
      <div
        className={`${tier.logoSize} w-full max-w-[180px] rounded-lg flex items-center justify-center`}
        style={{
          border: `1px dashed ${tier.accent}44`,
          background: `${tier.accent}08`,
        }}
      >
        <span
          className="font-mono text-xs font-medium tracking-widest uppercase"
          style={{ color: `${tier.accent}88` }}
        >
          Your Logo
        </span>
      </div>

      <span
        className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: `${tier.accent}66` }}
      >
        {tier.label} · Slot {index + 1}
      </span>
    </motion.div>
  )
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export function Sponsors() {
  return (
    <section id="sponsors" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 40% at 50% 100%, rgba(94,23,235,0.07) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Our Sponsors"
          title="Backed by the Best"
          description="Ghost Protocol CTF is made possible by industry leaders who believe in building the next generation of cybersecurity talent. Interested in sponsoring? Reach out to us."
        />

        <div className="mt-16 space-y-14">
          {tiers.map((tier) => (
            <Reveal key={tier.id}>
              <div>
                {/* Tier header */}
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="rounded-full px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wider"
                    style={{
                      background: `${tier.accent}12`,
                      border: `1px solid ${tier.border}`,
                      color: tier.accent,
                    }}
                  >
                    {tier.label}
                  </span>
                  <span
                    className="font-mono text-xs uppercase tracking-[0.2em]"
                    style={{ color: '#68738D' }}
                  >
                    {tier.tagline}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: `${tier.border}` }}
                    aria-hidden="true"
                  />
                </div>

                {/* Sponsor cards */}
                <StaggerGroup
                  className={`grid gap-4 ${
                    tier.id === 'diamond'
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : tier.id === 'platinum'
                        ? 'grid-cols-1 sm:grid-cols-3'
                        : 'grid-cols-2 sm:grid-cols-4'
                  }`}
                >
                  {Array.from({ length: tier.slots }).map((_, i) => (
                    <PlaceholderCard key={i} tier={tier} index={i} />
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <Reveal delay={0.1}>
          <div
            className="mt-16 rounded-2xl p-8 text-center"
            style={{ background: '#0D1425', border: '1px solid rgba(94,23,235,0.22)' }}
          >
            <p className="font-display text-lg font-semibold" style={{ color: '#F8FAFC' }}>
              Want to become a sponsor?
            </p>
            <p className="mt-2 text-sm" style={{ color: '#9ca3af' }}>
              Partner with us to reach 600+ talented cybersecurity students across the nation.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4a10c4]"
              style={{ background: '#5e17eb' }}
            >
              Get in Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
