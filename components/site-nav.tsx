'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Shield } from 'lucide-react'

const links = [
  { label: 'Overview', href: '#overview' },
  { label: 'Structure', href: '#structure' },
  { label: 'Categories', href: '#categories' },
  { label: 'Club', href: '#club' },
  { label: 'Journey', href: '#journey' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-300 md:px-5 ${
          scrolled ? '' : 'border border-transparent'
        }`}
        style={
          scrolled
            ? {
                background: 'rgba(5, 8, 22, 0.92)',
                border: '1px solid rgba(94, 23, 235, 0.18)',
                borderBottom: '1px solid rgba(94, 23, 235, 0.28)',
              }
            : {
                background: 'rgba(5, 8, 22, 0.55)',
              }
        }
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="grid size-9 place-items-center rounded-md"
            style={{
              border: '1px solid rgba(94, 23, 235, 0.55)',
              background: 'rgba(94, 23, 235, 0.12)',
            }}
          >
            <Shield className="size-5 text-white" strokeWidth={2.2} />
          </span>
          <span className="font-display text-sm font-bold leading-tight tracking-tight">
            <span style={{ color: '#F8FAFC' }}>Ghost Protocol</span>
            <span
              className="block font-mono text-[10px] font-medium tracking-[0.2em]"
              style={{ color: '#68738D' }}
            >
              CTF 2.0
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#announcement"
          className="rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4a10c4]"
          style={{ background: '#5e17eb' }}
        >
          Join Channel
        </a>
      </nav>
    </motion.header>
  )
}
