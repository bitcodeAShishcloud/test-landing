'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const faqs = [
  {
    q: 'Who can participate in Ghost Protocol CTF 2.0?',
    a: 'Any student currently enrolled in an undergraduate or postgraduate program is eligible to participate. Teams can have up to 3 members. All members must be students at the time of the event.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'The online qualification round is free to participate. Selected teams invited for the offline grand finale may have a nominal participation fee covering on-campus logistics. Details will be shared in the announcement channel.',
  },
  {
    q: 'What is the team size limit?',
    a: 'Teams can have a minimum of 1 and a maximum of 3 members. Solo participants are welcome. All members must be registered individually under the same team.',
  },
  {
    q: 'What format does the CTF follow?',
    a: 'The online qualification is a Jeopardy-style CTF with challenges across Web Exploitation, Cryptography, Forensics, OSINT, Reverse Engineering, Pwn, Steganography, Cloud Security, AI/LLM Security, and Miscellaneous categories. The grand finale adds an 8-hour Attack & Defense round.',
  },
  {
    q: 'How many teams get selected for the grand finale?',
    a: 'Top-performing teams from the online qualification will be invited to the offline grand finale at NIET Greater Noida. The exact number of qualifying teams will be announced after the qualification round.',
  },
  {
    q: 'Will accommodation be provided for outstation teams?',
    a: 'Yes, accommodation arrangements will be made available for outstation teams selected for the finale. Detailed logistics, travel, and accommodation information will be communicated through the WhatsApp announcement channel.',
  },
  {
    q: 'What is the prize pool?',
    a: 'The total prize pool is ₹24,000 distributed across top-performing teams. Certificates, trophies, and goodies will also be awarded to winners and finalists.',
  },
  {
    q: 'How do I stay updated about announcements?',
    a: 'Join the official WhatsApp announcement channel — all updates, rule changes, deadlines and schedule changes will be communicated there. You can also follow the Cyber Invaders social handles for news.',
  },
  {
    q: 'Can I participate if I have never done a CTF before?',
    a: 'Absolutely. Ghost Protocol CTF is designed to be accessible to beginners while still challenging for experienced players. We recommend exploring beginner CTF platforms like PicoCTF and CTFtime to get familiar with the format.',
  },
  {
    q: 'How do I contact the organizing team?',
    a: 'Reach us at cyberinvaders@niet.co.in or through our social media channels. For urgent event-related queries, the WhatsApp channel is the fastest way to get a response.',
  },
]

function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-xl"
      style={{
        background: '#0D1425',
        border: open ? '1px solid rgba(94,23,235,0.38)' : '1px solid rgba(94,23,235,0.18)',
        transition: 'border-color 0.2s',
      }}
    >
      <button
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="font-display text-sm font-semibold leading-snug sm:text-base"
          style={{ color: '#F8FAFC' }}
        >
          {faq.q}
        </span>
        <span
          className="shrink-0 grid size-7 place-items-center rounded-md transition-colors duration-200"
          style={{
            background: open ? '#5e17eb' : 'rgba(94,23,235,0.12)',
            border: '1px solid rgba(94,23,235,0.28)',
          }}
          aria-hidden="true"
        >
          {open
            ? <Minus className="size-3.5 text-white" />
            : <Plus className="size-3.5 text-[#a78bfa]" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="px-6 pb-5 pt-0 text-sm leading-relaxed"
              style={{ color: '#9ca3af', borderTop: '1px solid rgba(94,23,235,0.12)' }}
            >
              <p className="pt-4">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(55% 35% at 50% 0%, rgba(94,23,235,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before you register. Can't find your answer? Drop us a message."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <p className="text-sm" style={{ color: '#68738D' }}>
              Still have questions?{' '}
              <a
                href="#contact"
                className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
                style={{ color: '#a78bfa' }}
              >
                Contact us
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
