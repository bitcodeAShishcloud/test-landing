'use client'

import { motion } from 'motion/react'
import { Globe, Building2, Swords, Clock } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const phases = [
  {
    tag: 'Phase 1',
    title: 'Online Qualification',
    icon: Globe,
    points: ['Remote participation', 'Jeopardy-style CTF', 'Top teams qualify'],
  },
  {
    tag: 'Phase 2',
    title: 'Offline Grand Finale',
    icon: Building2,
    points: [
      'Hosted at NIET Greater Noida',
      'Jeopardy Round',
      'Attack & Defense Round',
      '8-hour final showdown',
    ],
    extraIcons: [Swords, Clock],
  },
]

export function Structure() {
  return (
    <section
      id="structure"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: '#070B18' }}
    >
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Enter The Protocol"
          title="Beyond theory. Into real-world cyber operations."
          description="Ghost Protocol CTF 2.0 is a national-level student cybersecurity competition designed to push participants past the classroom and into the pressure, tooling and mindset of genuine cyber operations. Two phases separate the curious from the capable."
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* animated central pathway (desktop) */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            aria-hidden="true"
            style={{ background: 'rgba(139, 92, 246, 0.18)' }}
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              className="h-full w-full origin-top"
              style={{ background: 'linear-gradient(to bottom, #6C5CE7, rgba(139,92,246,0.2))' }}
            />
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-0">
            {phases.map((p, idx) => (
              <div
                key={p.tag}
                className={
                  idx === 0
                    ? 'md:pr-16 md:text-right'
                    : 'md:col-start-2 md:mt-40 md:pl-16'
                }
              >
                <Reveal y={30}>
                  <div
                    className="relative overflow-hidden rounded-2xl glass-strong p-7"
                    style={{ background: '#0D1326' }}
                  >
                    <div
                      className={`mb-4 flex items-center gap-3 ${
                        idx === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span
                        className="grid size-11 shrink-0 place-items-center rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                        }}
                      >
                        <p.icon className="size-5 text-white" />
                      </span>
                      <div className={idx === 0 ? 'md:text-right' : ''}>
                        <span
                          className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                          style={{ color: '#8B5CF6' }}
                        >
                          {p.tag}
                        </span>
                        <h3
                          className="font-display text-xl font-bold"
                          style={{ color: '#F5F7FF' }}
                        >
                          {p.title}
                        </h3>
                      </div>
                    </div>
                    <ul
                      className={`space-y-2 text-sm ${
                        idx === 0 ? 'md:ml-auto' : ''
                      }`}
                      style={{ color: '#A6AEC8' }}
                    >
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className={`flex items-center gap-2 ${
                            idx === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <span
                            className="size-1.5 shrink-0 rounded-full"
                            style={{ background: '#E83E8C' }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
