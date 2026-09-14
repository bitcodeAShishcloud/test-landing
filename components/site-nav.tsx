'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on resize to desktop (xl+)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4"
      >
        <nav
          className="flex w-full max-w-6xl items-center justify-between rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 transition-all duration-300"
          style={
            scrolled
              ? {
                  background: 'rgba(5, 8, 22, 0.94)',
                  border: '1px solid rgba(94, 23, 235, 0.22)',
                  borderBottom: '1px solid rgba(94, 23, 235, 0.32)',
                  backdropFilter: 'blur(16px)',
                }
              : {
                  background: 'rgba(5, 8, 22, 0.65)',
                  border: '1px solid rgba(94, 23, 235, 0.1)',
                  backdropFilter: 'blur(10px)',
                }
          }
        >
          {/* Logo: NIET Full Logo x Cyber Invaders Full Logo */}
          <a href="#top" className="group flex shrink-0 items-center">
            <div className="flex items-center gap-1.5 sm:gap-2.5 py-0.5">
              <Image
                src="/niet-full-logo.webp"
                alt="NIET Greater Noida"
                width={120}
                height={40}
                className="h-5 sm:h-7 md:h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(232,62,140,0.3)] transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#a78bfa]">×</span>
              <Image
                src="/cyber-invaders-full-logo.webp"
                alt="Cyber Invaders"
                width={120}
                height={44}
                className="h-5 sm:h-7 md:h-8 w-auto object-contain drop-shadow-[0_0_8px_rgba(94,23,235,0.5)] transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </a>

          {/* Desktop links (visible on xl screens) */}
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

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <a
              href="#announcement"
              className="hidden rounded-md px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-[#4a10c4] sm:inline-flex"
              style={{ background: '#5e17eb' }}
            >
              Join Channel
            </a>

            {/* Hamburger button (visible on tablet & mobile below xl) */}
            <button
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              className="grid size-9 sm:size-10 place-items-center rounded-lg xl:hidden transition-colors"
              style={{
                border: '1px solid rgba(94, 23, 235, 0.3)',
                background: menuOpen ? 'rgba(94, 23, 235, 0.25)' : 'rgba(94, 23, 235, 0.1)',
              }}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5 text-white" /> : <Menu className="size-5 text-white" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Backdrop & Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm xl:hidden"
              aria-hidden="true"
            />

            {/* Mobile Drawer Menu */}
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-3 sm:inset-x-4 top-[4.25rem] sm:top-[4.75rem] z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-2xl p-4 sm:p-5 shadow-2xl xl:hidden"
              style={{
                background: 'rgba(9, 14, 28, 0.98)',
                border: '1px solid rgba(94, 23, 235, 0.28)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(94, 23, 235, 0.2)',
              }}
            >
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#CBD5E1] transition-all hover:bg-[#111A2E] hover:text-white active:bg-[#5e17eb]/20"
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-xs text-[#68738D]">→</span>
                  </a>
                ))}
                <div className="mt-2 border-t pt-3" style={{ borderColor: 'rgba(94,23,235,0.18)' }}>
                  <a
                    href="#announcement"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-center text-sm font-semibold text-white shadow-lg"
                    style={{ background: '#5e17eb' }}
                  >
                    Join Announcement Channel
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
