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
        className="relative overflow-hidden rounded-lg"
        style={{
          background: '#050816',
          border: '1px solid rgba(94, 23, 235, 0.18)',
        }}
      >
        {/* title bar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ borderBottom: '1px solid rgba(94, 23, 235, 0.18)', background: '#0A1020' }}
        >
          <span className="size-2.5 rounded-full" style={{ background: '#E83E8C' }} />
          <span className="size-2.5 rounded-full" style={{ background: '#a78bfa' }} />
          <span className="size-2.5 rounded-full" style={{ background: '#68738D' }} />
          <span className="ml-2 font-mono text-[11px] tracking-[0.14em]" style={{ color: '#9ca3af' }}>
            ghost_protocol — bash
          </span>
        </div>

        {/* scanline */}
        <div className="relative">
          <div className="min-h-[220px] p-5 font-mono text-[13px] leading-relaxed">
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
                    ? { color: '#F8FAFC' }
                    : line.kind === 'ok'
                      ? { color: '#34d399' }
                      : { color: '#9ca3af' }
                }
              >
                {line.kind === 'out' && (
                  <span className="mr-2" style={{ color: '#a78bfa' }}>
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
