'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ShieldCheck, Lightbulb, GraduationCap, Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Cyber Security Department',
    body: 'A dedicated department driving specialised security education and applied research.',
  },
  {
    icon: Lightbulb,
    title: 'Centers of Excellence',
    body: 'Innovation labs and CoEs where students build with current industry tooling.',
  },
  {
    icon: GraduationCap,
    title: 'Industry Readiness',
    body: 'A practical, project-first curriculum that mirrors how security teams actually work.',
  },
  {
    icon: Briefcase,
    title: 'Placement Track Record',
    body: 'A strong placement ecosystem connecting students to leading technology employers.',
  },
]

export function Institution() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#070B18' }}
    >
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The Venue"
          title="Hosted at NIET Greater Noida"
          description="A technology-driven institution with a modern innovation ecosystem, a dedicated cyber security program and centers of excellence — the credible ground on which a national competition is staged."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl glass-strong"
            style={{ background: '#0D1326' }}
          >
            <Image
              src="/niet-campus.png"
              alt="NIET Greater Noida technology campus at dusk"
              width={900}
              height={640}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 p-6">
              <span
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: '#8B5CF6' }}
              >
                Greater Noida, India
              </span>
              <p
                className="font-display text-lg font-bold"
                style={{ color: '#F5F7FF' }}
              >
                Noida Institute of Engineering and Technology
              </p>
            </div>
          </motion.div>

          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="flex items-start gap-4 rounded-2xl glass p-5 transition-colors hover:bg-[#111936]"
                style={{ background: '#0D1326' }}
              >
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                  }}
                >
                  <p.icon className="size-5 text-white" />
                </span>
                <div>
                  <h3
                    className="font-display font-bold"
                    style={{ color: '#F5F7FF' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: '#A6AEC8' }}
                  >
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
