'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Mail,
  Send,
  MessageCircle,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Navigation,
  Clock,
  Share2,
  Star,
  Compass,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('cyberinvaders@niet.co.in')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      {/* Background cyber grid & glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(50% 40% at 50% 100%, rgba(94,23,235,0.08) 0%, transparent 70%)',
          borderTop: '1px solid rgba(94,23,235,0.18)',
        }}
      />
      <div className="absolute inset-0 grid-lines opacity-25" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contact & Location"
          title="Get in Touch"
          description="Have questions regarding the tournament, team registration, rules or travel? Connect directly with the organizing desk or find us at the NIET Greater Noida campus arena."
        />

        {/* ── Main Mixed Grid: Compact Contact Cards (Left) + Interactive Map Card (Right) ── */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.35fr] items-stretch">
          {/* Left Column: Compact Action Boxes */}
          <div className="flex flex-col gap-3.5 justify-between">
            {/* Box 1: Official Email (Compact) */}
            <Reveal y={16}>
              <div
                className="relative overflow-hidden rounded-xl p-4 sm:p-5 glass-strong transition-all duration-200 hover:border-[#5e17eb]"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(94, 23, 235, 0.22)',
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid size-9 shrink-0 place-items-center rounded-lg"
                      style={{
                        background: 'rgba(94, 23, 235, 0.15)',
                        border: '1px solid rgba(94, 23, 235, 0.35)',
                      }}
                    >
                      <Mail className="size-4 text-[#a78bfa]" />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white leading-tight">
                        Email Support
                      </h4>
                      <span className="text-[11px] font-mono text-[#68738D]">
                        Verification & queries
                      </span>
                    </div>
                  </div>

                  <span
                    className="rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#a78bfa]"
                    style={{
                      background: 'rgba(94, 23, 235, 0.1)',
                      border: '1px solid rgba(94, 23, 235, 0.25)',
                    }}
                  >
                    &lt;24h reply
                  </span>
                </div>

                <div
                  className="mt-3 flex items-center justify-between gap-2 rounded-lg px-3 py-2"
                  style={{
                    background: '#111A2E',
                    border: '1px solid rgba(94, 23, 235, 0.14)',
                  }}
                >
                  <span className="font-mono text-xs text-[#CBD5E1] truncate">
                    cyberinvaders@niet.co.in
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={copyEmail}
                      className="rounded p-1 text-[#a78bfa] hover:bg-[#5e17eb]/20 transition-colors"
                      title="Copy Email"
                      aria-label="Copy Email Address"
                    >
                      {copied ? <Check className="size-3.5 text-green-400" /> : <Copy className="size-3.5" />}
                    </button>
                    <a
                      href="mailto:cyberinvaders@niet.co.in?subject=Ghost%20Protocol%20CTF%20Query"
                      className="rounded p-1 text-[#a78bfa] hover:bg-[#5e17eb]/20 transition-colors"
                      title="Open in Mail App"
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Box 2: WhatsApp Announcement Channel (Compact) */}
            <Reveal y={16} delay={0.05}>
              <div
                className="relative overflow-hidden rounded-xl p-4 sm:p-5 glass-strong transition-all duration-200 hover:border-green-500/50"
                style={{
                  background: '#0D1425',
                  border: '1px solid rgba(34, 197, 94, 0.22)',
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid size-9 shrink-0 place-items-center rounded-lg"
                      style={{
                        background: 'rgba(34, 197, 94, 0.12)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                      }}
                    >
                      <Send className="size-4 text-green-400" />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white leading-tight">
                        WhatsApp Channel
                      </h4>
                      <span className="text-[11px] font-mono text-[#68738D]">
                        Live broadcast & hints
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] font-mono font-semibold uppercase text-green-400" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
                    Active
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <a
                    href="#announcement"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold text-white transition-colors hover:bg-green-600"
                    style={{ background: '#16a34a' }}
                  >
                    <MessageCircle className="size-3.5" />
                    <span>Join Official Broadcast Channel</span>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Box 3: Sponsorship & Organizer Desk (Compact 2-col mini boxes) */}
            <div className="grid grid-cols-2 gap-3.5">
              <Reveal y={16} delay={0.1}>
                <div
                  className="rounded-xl p-3.5 glass h-full flex flex-col justify-between"
                  style={{
                    background: '#0D1425',
                    border: '1px solid rgba(94, 23, 235, 0.16)',
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="size-3.5 text-[#a78bfa]" />
                      <h5 className="font-display text-xs font-bold text-white">Sponsorship</h5>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-[#9ca3af]">
                      Partnership & prize sponsorships.
                    </p>
                  </div>
                  <a
                    href="mailto:cyberinvaders@niet.co.in?subject=Ghost%20Protocol%20Sponsorship"
                    className="mt-2 block font-mono text-[10px] text-[#a78bfa] hover:underline"
                  >
                    cyberinvaders@niet.co.in →
                  </a>
                </div>
              </Reveal>

              <Reveal y={16} delay={0.12}>
                <div
                  className="rounded-xl p-3.5 glass h-full flex flex-col justify-between"
                  style={{
                    background: '#0D1425',
                    border: '1px solid rgba(94, 23, 235, 0.16)',
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="size-3.5 text-amber-400" />
                      <h5 className="font-display text-xs font-bold text-white">Help Desk</h5>
                    </div>
                    <p className="mt-1 text-[11px] leading-snug text-[#9ca3af]">
                      10:00 AM – 09:00 PM IST (Active)
                    </p>
                  </div>
                  <span className="mt-2 block font-mono text-[10px] text-[#68738D]">
                    Cyber Invaders Club
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Location Card (Styled like user photo) */}
          <Reveal y={20} delay={0.08} className="h-full">
            <div
              className="relative flex h-full min-h-[380px] sm:min-h-[440px] flex-col overflow-hidden rounded-2xl glass-strong"
              style={{
                background: '#0D1425',
                border: '1px solid rgba(94, 23, 235, 0.28)',
              }}
            >
              {/* Top Accent Gradient Strip */}
              <div
                className="absolute inset-x-0 top-0 z-20 h-1"
                style={{
                  background: 'linear-gradient(90deg, #5e17eb, #e83e8c, #fbbf24)',
                }}
              />

              {/* ── Embedded Interactive Google Map ── */}
              <iframe
                title="NIET Greater Noida Location Map"
                src="https://maps.google.com/maps?q=Noida+Institute+of+Engineering+and+Technology,+19+Knowledge+Park+II,+Greater+Noida,+Uttar+Pradesh+201306&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                style={{
                  filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                  opacity: 0.85,
                }}
                loading="lazy"
                aria-hidden="false"
              />

              {/* Dark Vignette Overlay along borders */}
              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  boxShadow: 'inset 0 0 40px rgba(5, 8, 22, 0.7)',
                }}
                aria-hidden="true"
              />

              {/* ── Floating Google Maps Location Info Box (Exact layout like user attachment) ── */}
              <div className="relative z-20 m-3.5 sm:m-4 max-w-xs sm:max-w-sm rounded-xl p-4 shadow-2xl backdrop-blur-md"
                style={{
                  background: 'rgba(13, 20, 37, 0.92)',
                  border: '1px solid rgba(94, 23, 235, 0.35)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-bold text-white leading-tight">
                      NIET Greater Noida
                    </h4>
                    <span className="mt-0.5 block text-[11px] font-mono text-[#a78bfa]">
                      Grand Finale Arena · CSE Dept.
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <a
                      href="https://maps.google.com/?q=Noida+Institute+of+Engineering+and+Technology+Greater+Noida"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-7 place-items-center rounded-lg text-[#a78bfa] hover:bg-[#5e17eb]/20 transition-colors"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Noida+Institute+of+Engineering+and+Technology,+Greater+Noida"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-7 place-items-center rounded-lg text-amber-400 hover:bg-amber-500/20 transition-colors"
                      title="Get Directions"
                    >
                      <Navigation className="size-3.5" />
                    </a>
                  </div>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#9ca3af]">
                  19, Knowledge Park II, Institutional Area, Greater Noida, Uttar Pradesh 201306
                </p>

                <div className="mt-3 flex items-center justify-between border-t border-[rgba(94,23,235,0.18)] pt-2.5 text-[11px]">
                  <div className="flex items-center gap-1.5 text-amber-400 font-mono">
                    <span className="font-bold">4.2</span>
                    <span className="flex text-amber-400">
                      {'★'.repeat(4)}<span className="opacity-40">★</span>
                    </span>
                    <span className="text-[#68738D]">(NIET Campus)</span>
                  </div>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Noida+Institute+of+Engineering+and+Technology,+Greater+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-xs text-amber-400 hover:underline"
                  >
                    <span>Directions</span>
                    <Navigation className="size-3" />
                  </a>
                </div>
              </div>

              {/* Bottom Right Floating Badge: Satellite / Map Switch Indicator */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=Noida+Institute+of+Engineering+and+Technology+Greater+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-mono font-medium backdrop-blur-md transition-colors hover:text-white text-[#CBD5E1]"
                  style={{
                    background: 'rgba(5, 8, 22, 0.85)',
                    border: '1px solid rgba(94, 23, 235, 0.25)',
                  }}
                >
                  <MapPin className="size-3 text-[#e83e8c]" />
                  <span>View Full Map</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
