'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Shield, Menu, X } from 'lucide-react'

const links = [
  { label: 'Overview',  href: '#overview' },
  { label: 'Timeline',  href: '#timeline' },
  { label: 'Category',  href: '#categories' },
  { label: 'About',     href: '#club' },
  { label: 'Sponsors',  href: '#sponsors' },
  { label: 'Team',      href: '#team' },
  { label: "FAQ's",     href: '#faq' },
  { label: 'Contact',   href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on resize to lg+
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-300 md:px-5`}
          style={
            scrolled
              ? {
                  background: 'rgba(5, 8, 22, 0.92)',
                  border: '1px solid rgba(94, 23, 235, 0.18)',
                  borderBottom: '1px solid rgba(94, 23, 235, 0.28)',
                  backdropFilter: 'blur(16px)',
                }
              : {
                  background: 'rgba(5, 8, 22, 0.55)',
                  backdropFilter: 'blur(8px)',
                }
          }
        >
          {/* Logo: NIET Full Logo x Cyber Invaders Full Logo */}
          <a href="#top" className="group flex shrink-0 items-center">
            <div className="flex items-center gap-2.5 py-0.5">
              <Image
                src="/niet-full-logo.webp"
                alt="NIET Greater Noida"
                width={130}
                height={42}
                className="h-7 sm:h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(232,62,140,0.3)] transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
              <span className="font-mono text-xs font-bold text-[#a78bfa]">×</span>
              <Image
                src="/cyber-invaders-full-logo.webp"
                alt="Cyber Invaders"
                width={130}
                height={48}
                className="h-7 sm:h-8.5 w-auto object-contain drop-shadow-[0_0_8px_rgba(94,23,235,0.5)] transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <a
              href="#announcement"
              className="hidden rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4a10c4] sm:inline-flex"
              style={{ background: '#5e17eb' }}
            >
              Join Channel
            </a>

            {/* Hamburger — visible below xl */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="grid size-9 place-items-center rounded-md xl:hidden"
              style={{ border: '1px solid rgba(94, 23, 235, 0.28)', background: 'rgba(94,23,235,0.08)' }}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5 text-white" /> : <Menu className="size-5 text-white" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[4.5rem] z-40 rounded-xl p-4 xl:hidden"
            style={{
              background: 'rgba(5, 8, 22, 0.97)',
              border: '1px solid rgba(94, 23, 235, 0.22)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-[#111A2E] hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 border-t pt-3" style={{ borderColor: 'rgba(94,23,235,0.18)' }}>
                <a
                  href="#announcement"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-4 py-2.5 text-center text-sm font-semibold text-white"
                  style={{ background: '#5e17eb' }}
                >
                  Join Channel
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
