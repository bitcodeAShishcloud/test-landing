'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ShieldCheck, Lightbulb, GraduationCap, Briefcase, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'

const campusImages = [
  {
    src: '/niet-campus-aerial.webp',
    alt: 'NIET Greater Noida — Campus Panorama & Grounds',
    badge: 'Campus View 01 · Aerial',
    location: 'Knowledge Park II, Greater Noida',
    title: 'NIET Institutional Campus & Technology Grounds',
  },
  {
    src: '/niet-campus.webp',
    alt: 'NIET Greater Noida Academic Block & Cyber Labs',
    badge: 'Campus View 02 · Academic Block',
    location: 'Academic & Cyber Lab Arena',
    title: 'Department of Computer Science & Cyber Security Labs',
  },
]

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
  const [currentIdx, setCurrentIdx] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll images every 4 seconds
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % campusImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % campusImages.length)
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + campusImages.length) % campusImages.length)

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: '#070B17',
        borderBottom: '1px solid rgba(94, 23, 235, 0.18)',
      }}
    >
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="The Venue"
          title="Hosted at NIET Greater Noida"
          description="A technology-driven institution with a modern innovation ecosystem, a dedicated cyber security program and centers of excellence — the credible ground on which a national competition is staged."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* ── Auto-Scrolling Campus Image Carousel (Borderless like Hero Banner) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[380px] sm:h-[460px] overflow-hidden rounded-2xl drop-shadow-[0_0_35px_rgba(94,23,235,0.35)] group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Images with Smooth Crossfade */}
            {campusImages.map((img, idx) => (
              <div
                key={img.src}
                className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${
                  currentIdx === idx
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 pointer-events-none z-0'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="h-full w-full object-cover rounded-2xl"
                  priority={idx === 0}
                />
              </div>
            ))}

            {/* Dark Gradient Vignette for Text Legibility */}
            <div
              className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-[#050816] via-[#050816]/35 to-transparent"
              aria-hidden="true"
            />

            {/* Top Badge: Slide Indicator */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md text-white flex items-center gap-1.5"
                style={{
                  background: 'rgba(5, 8, 22, 0.85)',
                  border: '1px solid rgba(94, 23, 235, 0.35)',
                }}
              >
                <span className="size-1.5 rounded-full bg-[#34d399] animate-pulse" />
                {campusImages[currentIdx].badge}
              </span>
            </div>

            {/* Manual Slide Arrows (Visible on hover) */}
            <div className="absolute inset-y-0 inset-x-3 z-30 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevSlide}
                className="pointer-events-auto grid size-9 place-items-center rounded-full bg-[#050816]/85 text-white border border-[rgba(94,23,235,0.4)] backdrop-blur-md hover:bg-[#5e17eb] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto grid size-9 place-items-center rounded-full bg-[#050816]/85 text-white border border-[rgba(94,23,235,0.4)] backdrop-blur-md hover:bg-[#5e17eb] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Bottom Caption & Pagination Dots */}
            <div className="absolute bottom-0 inset-x-0 p-6 z-30 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span
                  className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em]"
                  style={{ color: '#a78bfa' }}
                >
                  <MapPin className="size-3.5 text-[#e83e8c]" />
                  {campusImages[currentIdx].location}
                </span>
                <p className="mt-1 font-display text-base sm:text-lg font-bold text-white max-w-md">
                  {campusImages[currentIdx].title}
                </p>
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-2">
                {campusImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: currentIdx === i ? '24px' : '8px',
                      background: currentIdx === i ? '#5e17eb' : 'rgba(167, 139, 250, 0.3)',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── 4 Pillars List ── */}
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((p, idx) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="flex items-start gap-4 rounded-xl glass p-5 transition-colors hover:bg-[#111A2E] animate-card-drift"
                style={{ background: '#0D1425', animationDelay: `${idx * -1.5}s` }}
              >
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-lg"
                  style={{ background: '#5e17eb' }}
                >
                  <p.icon className="size-5 text-white" />
                </span>
                <div>
                  <h3
                    className="font-display font-bold"
                    style={{ color: '#F8FAFC' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: '#9ca3af' }}
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
