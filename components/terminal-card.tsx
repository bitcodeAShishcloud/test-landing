'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

type Line = { text: string; kind: 'cmd' | 'out' | 'ok' }

const script: Line[] = [
  { text: 'root@ghostprotocol:~$ ./init.sh', kind: 'cmd' },
  { text: 'Initializing attack surface...', kind: 'out' },
  { text: 'Scanning vulnerabilities...', kind: 'out' },
  { text: 'Mapping protocol nodes [====================] 100%', kind: 'out' },
  { text: 'Protocol Activated.', kind: 'ok' },
]

export function TerminalCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (visibleLines >= script.length) return
    const delay = visibleLines === 0 ? 400 : 750
    const t = setTimeout(() => setVisibleLines((n) => n + 1), delay)
    return () => clearTimeout(t)
  }, [inView, visibleLines])

  return (
    <div ref={ref} className="relative">
      <div
        className="absolute -inset-3 rounded-3xl opacity-100 blur-xl"
        aria-hidden="true"
        style={{ background: 'rgba(108, 92, 231, 0.12)' }}
      />
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        style={{
          background: '#070b18',
          border: '1px solid rgba(139, 92, 246, 0.18)',
          boxShadow: '0 24px 48px -24px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(139, 92, 246, 0.18)', background: '#0A0F1F' }}
        >
          <span className="size-3 rounded-full" style={{ background: '#E83E8C' }} />
          <span className="size-3 rounded-full" style={{ background: '#8B5CF6' }} />
          <span className="size-3 rounded-full" style={{ background: '#6F7895' }} />
          <span className="ml-2 font-mono text-xs" style={{ color: '#A6AEC8' }}>
            ghost_protocol — bash
          </span>
        </div>

        {/* scanline */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan"
            aria-hidden="true"
            style={{ background: 'linear-gradient(to bottom, rgba(139,92,246,0.07), transparent)' }}
          />
          <div className="min-h-[220px] p-5 font-mono text-sm leading-relaxed">
            {script.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className={
                  line.kind === 'cmd'
                    ? 'font-medium'
                    : line.kind === 'ok'
                      ? 'font-semibold'
                      : ''
                }
                style={
                  line.kind === 'cmd'
                    ? { color: '#F5F7FF' }
                    : line.kind === 'ok'
                      ? { color: '#34d399' }
                      : { color: '#A6AEC8' }
                }
              >
                {line.kind === 'out' && (
                  <span className="mr-2" style={{ color: '#8B5CF6' }}>
                    ›
                  </span>
                )}
                {line.text}
                {i === visibleLines - 1 && (
                  <span
                    className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse"
                    style={{ background: '#34d399' }}
                  />
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
