import type { ReactNode } from 'react'
import { Reveal } from './motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  index,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  index?: string
}) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2.5 rounded-md px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${
              isCenter ? 'mx-auto' : ''
            }`}
            style={{
              border: '1px solid rgba(94, 23, 235, 0.18)',
              background: '#0D1425',
              color: '#9ca3af',
            }}
          >
            {index ? (
              <span style={{ color: '#a78bfa' }}>{index} // </span>
            ) : (
              <span
                className="size-1.5 rounded-full animate-glow-pulse"
                style={{ background: '#E83E8C' }}
              />
            )}
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          style={{ color: '#F8FAFC' }}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
