'use client'

import Image from 'next/image'
import { Shield, AtSign, Globe, Mail, Send, Share2 } from 'lucide-react'
import { siteLinks } from '@/lib/links'

const socials = [
  { icon: AtSign, label: 'Instagram', href: siteLinks.instagram },
  { icon: Send, label: 'WhatsApp Channel', href: siteLinks.whatsappChannel },
  { icon: Globe, label: 'Club Official Portal', href: siteLinks.clubWebsite },
  { image: '/niet-crest.webp', label: 'NIET Official Website', href: siteLinks.nietWebsite },
]

const columns = [
  {
    title: 'Event',
    links: [
      { label: 'Overview', href: siteLinks.nav.overview },
      { label: 'Timeline & Structure', href: siteLinks.nav.timeline },
      { label: 'Categories', href: siteLinks.nav.categories },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'About Cyber Invaders', href: siteLinks.nav.about },
      { label: 'Club Official Website ↗', href: siteLinks.clubWebsite },
      { label: 'Sponsors', href: siteLinks.nav.sponsors },
      { label: 'Organizing Team', href: siteLinks.nav.team },
      { label: "FAQ's", href: siteLinks.nav.faq },
      { label: 'Contact Support', href: siteLinks.nav.contact },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: '1px solid rgba(94, 23, 235, 0.18)',
        background: '#050816',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 py-0.5">
                <Image
                  src="/niet-full-logo.webp"
                  alt="NIET Greater Noida"
                  width={120}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
                <span className="font-mono text-xs font-bold text-[#a78bfa]">×</span>
                <Image
                  src="/cyber-invaders-full-logo.webp"
                  alt="Cyber Invaders"
                  width={110}
                  height={40}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span
                className="font-display text-base font-bold leading-tight"
                style={{ color: '#F8FAFC' }}
              >
                Ghost Protocol CTF 2.0
              </span>
            </div>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: '#9ca3af' }}
            >
              A national-level student cybersecurity competition organized by
              Cyber Invaders, the cybersecurity club of NIET Greater Noida.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-md glass transition-colors hover:bg-[#111A2E] p-1.5"
                  style={{ color: '#9ca3af' }}
                >
                  {s.image ? (
                    <Image
                      src={s.image}
                      alt={s.label}
                      width={20}
                      height={20}
                      className="size-4.5 object-contain"
                    />
                  ) : s.icon ? (
                    <s.icon className="size-4" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cyber Invaders · NIET Greater Noida. All
            rights reserved.
          </p>
          <a
            href={siteLinks.mailto}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-3.5" />
            {siteLinks.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
