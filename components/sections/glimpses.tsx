'use client'

import Image from 'next/image'
import { Camera } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

/* Photos are sequence-wise; the last three were re-ordered into position 4.
   Final display order:
   1, 2, 3, (old 8), (old 4), (old 5), (old 6), (old 7)
   Per the request: last three move to 4th, then 4->5, 5->6, 6->7, 7->8 */
const glimpses = [
  { src: '/archive-1.webp', alt: 'Hands-on workshop session with mentors', ratio: 1400 / 920 },
  { src: '/archive-2.webp', alt: 'Cyber Invaders group photo on stage', ratio: 1400 / 1024 },
  { src: '/archive-3.webp', alt: 'Cyber Invaders team on stage', ratio: 1400 / 1161 },
  { src: '/archive-8.webp', alt: 'Trophy handover moment', ratio: 1400 / 1378 },
  { src: '/archive-4.webp', alt: 'Students at competition workstations', ratio: 1400 / 730 },
  { src: '/archive-5.webp', alt: 'Workshop wide view', ratio: 1400 / 752 },
  { src: '/archive-6.webp', alt: 'Team collaboration shot', ratio: 1400 / 1041 },
  { src: '/archive-7.webp', alt: 'Hackers in action', ratio: 1400 / 985 },
]

export function Glimpses() {
  return (
    <section id="glimpses" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The Archive"
          title="Glimpses from the floor"
          description="A photo archive from past Cyber Invaders events, workshops and CTFs — the moments behind the competition."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {glimpses.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.04}>
              <div
                className="group relative overflow-hidden rounded-2xl drop-shadow-[0_0_18px_rgba(94,23,235,0.18)]"
                style={{
                  background: '#0D1425',
                  border: '2px solid #f4f3ee',
                  aspectRatio: '1 / 1',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* hover wash + caption */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(5,8,22,0.85) 0%, rgba(5,8,22,0.2) 45%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    <Camera className="size-4" style={{ color: '#a78bfa' }} />
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: '#a78bfa' }}
                    >
                      Glimpse {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-snug" style={{ color: '#cbd5e1' }}>
                    {img.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
