import type { ReactNode } from 'react'
import { Reveal } from './motion-primitives'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
}) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.18em] ${
              isCenter ? 'mx-auto' : ''
            }`}
            style={{
              border: '1px solid rgba(139, 92, 246, 0.18)',
              background: '#0D1326',
              color: '#A6AEC8',
            }}
          >
            <span
              className="size-1.5 rounded-full animate-glow-pulse"
              style={{ background: '#E83E8C' }}
            />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
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
