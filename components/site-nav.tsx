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
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6 ${
          scrolled
            ? 'shadow-2xl'
            : 'border border-transparent'
        }`}
        style={
          scrolled
            ? {
                background: 'rgba(7, 11, 24, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(139, 92, 246, 0.18)',
              }
            : undefined
        }
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="grid size-9 place-items-center rounded-lg"
            style={{
              background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
              boxShadow: '0 6px 18px -8px rgba(108, 92, 231, 0.6)',
            }}
          >
            <Shield className="size-5 text-white" strokeWidth={2.2} />
          </span>
          <span className="font-display text-sm font-bold leading-tight tracking-tight">
            Ghost Protocol
            <span className="block text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
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
          className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
          style={{
            background: 'linear-gradient(135deg, #6C5CE7 0%, #8B5CF6 100%)',
            boxShadow: '0 8px 20px -10px rgba(108, 92, 231, 0.6)',
          }}
        >
          Join Channel
        </a>
      </nav>
    </motion.header>
  )
}
