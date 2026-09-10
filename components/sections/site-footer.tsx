'use client'

import { Shield, AtSign, Globe, Mail, Send, Share2 } from 'lucide-react'

const socials = [
  { icon: AtSign, label: 'Instagram', href: '#' },
  { icon: Send, label: 'WhatsApp Channel', href: '#' },
  { icon: Share2, label: 'Share', href: '#' },
  { icon: Globe, label: 'Club Website', href: '#' },
]

const columns = [
  {
    title: 'Event',
    links: [
      { label: 'Overview', href: '#overview' },
      { label: 'Structure', href: '#structure' },
      { label: 'Categories', href: '#categories' },
      { label: 'Participant Journey', href: '#journey' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Cyber Invaders', href: '#club' },
      { label: 'NIET Greater Noida', href: '#' },
      { label: 'Club Website', href: '#' },
      { label: 'Announcement Channel', href: '#announcement' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer
      className="relative"
      style={{
        borderTop: '1px solid rgba(139, 92, 246, 0.18)',
        background: '#050816',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="grid size-9 place-items-center rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
                }}
              >
                <Shield className="size-5 text-white" strokeWidth={2.2} />
              </span>
              <span
                className="font-display text-base font-bold leading-tight"
                style={{ color: '#F5F7FF' }}
              >
                Ghost Protocol CTF 2.0
              </span>
            </div>
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: '#A6AEC8' }}
            >
              A national-level student cybersecurity competition organized by
              Cyber Invaders, the cybersecurity club of NIET Greater Noida.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-lg glass transition-colors hover:bg-[#111936]"
                  style={{ color: '#A6AEC8' }}
                >
                  <s.icon className="size-4" />
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
            href="mailto:cyberinvaders@niet.co.in"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-3.5" />
            cyberinvaders@niet.co.in
          </a>
        </div>
      </div>
    </footer>
  )
}
