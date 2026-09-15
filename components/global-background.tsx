'use client'

import { MatrixRain } from '@/components/matrix-rain'
import { HeroLogoSvg } from '@/components/hero-logo-svg'

/**
 * Site-wide background layer, rendered once in the root layout so the
 * cyber ambience is continuous and stable across the entire landing page
 * (not re-created per section).
 *
 *   - `fixed inset-0` pins it to the viewport, so scrolling reveals the
 *     same stable layer rather than a new background per section.
 *   - `z-0` keeps it behind all section content (sections use `relative`
 *     stacks / `z-10` for their content).
 *   - Matrix rain + grid lines + the GHOST PROTOCOL CTF vector emblem
 *     (as a faint, blurred watermark) sit on the dark base.
 */
export function GlobalBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dark base so sections with transparent areas show the same tone */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 38% at 50% 0%, rgba(94, 23, 235, 0.09) 0%, transparent 62%), radial-gradient(55% 42% at 50% 100%, rgba(74, 16, 196, 0.05) 0%, transparent 60%), #050816',
        }}
      />

      {/* Slow-motion 0 & 1 binary matrix rain (single stable instance) */}
      <MatrixRain className="absolute inset-0 h-full w-full opacity-70" />

      {/* Faint technical grid */}
      <div className="absolute inset-0 grid-lines opacity-40" />

      {/* GHOST PROTOCOL CTF vector emblem as a faint watermark */}
      <HeroLogoSvg
        className="absolute inset-0 opacity-20 sm:opacity-25"
        opacity={0.22}
        blurPx={3}
      />

      {/* Bottom fade so the tail of the rain melts into the page */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40"
        style={{
          background: 'linear-gradient(to top, #050816 0%, transparent 100%)',
        }}
      />
    </div>
  )
}
