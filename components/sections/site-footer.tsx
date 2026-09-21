'use client'

import Image from 'next/image'
import { AtSign, Send, Mail, ExternalLink } from 'lucide-react'
import { siteLinks } from '@/lib/links'

const socials = [
  { icon: AtSign, label: 'Instagram', href: siteLinks.instagram },
  { icon: Send, label: 'WhatsApp Channel', href: siteLinks.whatsappChannel },
  { image: '/cyber-invaders-crest.webp', label: 'Club Portal', href: siteLinks.clubWebsite },
  { image: '/niet-crest.webp', label: 'NIET Website', href: siteLinks.nietWebsite },
]

const navColumns = [
  {
    title: 'NAVIGATE',
    links: [
      { label: 'Overview', href: siteLinks.nav.overview },
      { label: 'Timeline', href: siteLinks.nav.timeline },
      { label: 'Categories', href: siteLinks.nav.categories },
      { label: 'Sponsors', href: siteLinks.nav.sponsors },
    ],
  },
  {
    title: 'OPERATIONS',
    links: [
      { label: 'Club Portal', href: siteLinks.clubWebsite, external: true },
      { label: 'Organizing Team', href: siteLinks.nav.team },
      { label: 'FAQ', href: siteLinks.nav.faq },
      { label: 'Contact', href: siteLinks.nav.contact },
    ],
  },
]

/**
 * Futuristic minimal footer — tech metadata strip + navigation.
 * Styled as a system status readout.
 */
export function SiteFooter() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: '1px solid rgba(56, 189, 248, 0.12)',
        background: '#020408',
      }}
    >
      {/* Top metadata bar */}
      <div
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
        style={{
          borderColor: 'rgba(56, 189, 248, 0.08)',
          color: '#4a6078',
        }}
      >
        <span className="flex items-center gap-2">
          <span className="status-dot" style={{ background: '#38bdf8' }} />
          SYSTEM VERSION: 2.0
        </span>
        <span>|</span>
        <span>PROTOCOL: GHOST</span>
        <span>|</span>
        <span>YEAR: 2026</span>
        <span>|</span>
        <span className="flex items-center gap-2">
          <span className="status-dot" style={{ background: '#34d399' }} />
          STATUS: OPERATIONAL
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/niet-full-logo.webp"
                  alt="NIET Greater Noida"
                  width={120}
                  height={40}
                  className="h-6 w-auto object-contain"
                />
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: '#38bdf8' }}
                >
                  ×
                </span>
                <Image
                  src="/cyber-invaders-full-logo.webp"
                  alt="Cyber Invaders"
                  width={110}
                  height={40}
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>

            <p
              className="mt-3 font-display text-base font-bold uppercase tracking-wide"
              style={{ color: '#f8fafc' }}
            >
              GHOST PROTOCOL{' '}
              <span style={{ color: '#38bdf8' }}>// CTF 2.0</span>
            </p>

            <div className="mt-3 space-y-1">
              <p
                className="font-mono text-xs font-medium uppercase tracking-wider"
                style={{ color: '#68738D' }}
              >
                CYBER INVADERS
              </p>
              <p
                className="font-mono text-xs font-medium uppercase tracking-wider"
                style={{ color: '#68738D' }}
              >
                NIET GREATER NOIDA
              </p>
            </div>

            {/* Social row */}
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    s.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded transition-all hover:bg-[rgba(56,189,248,0.08)]"
                  style={{
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    color: '#68738D',
                  }}
                >
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt={s.label}
                      width={18}
                      height={18}
                      className="object-contain"
                    />
                  ) : s.icon ? (
                    <s.icon className="size-3.5" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h3
                className="font-mono text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: '#38bdf8' }}
              >
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-1.5 text-sm transition-colors hover:text-[#f8fafc]"
                      style={{ color: '#9ca3af' }}
                    >
                      {l.label}
                      {l.external && (
                        <ExternalLink className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: 'rgba(56, 189, 248, 0.08)' }}
        >
          <p
            className="font-mono text-[10px] font-medium uppercase tracking-[0.15em]"
            style={{ color: '#4a6078' }}
          >
            © {new Date().getFullYear()} Cyber Invaders · NIET Greater Noida.
            All rights reserved.
          </p>
          <a
            href={siteLinks.mailto}
            className="inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-[#f8fafc]"
            style={{ color: '#4a6078' }}
          >
            <Mail className="size-3" />
            {siteLinks.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
