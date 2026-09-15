'use client'

/**
 * Ghost Protocol CTF 2.0 — vector hero emblem (matches the reference artwork).
 *
 *   Row 1: "GHOST" with the O position replaced by a hooded-ghost medallion
 *   Row 2: "PROTOCOL" in heavy condensed block caps
 *   Row 3: "CTF 2.0" angled, 2.0 in a brighter green
 *
 * Pure inline SVG — no images, no external fonts. Green gradient fills,
 * dark outline strokes, plus grain/scratch layers for a weathered look.
 */
export function HeroLogoSvg({
  className = '',
  opacity = 0.2,
  blurPx = 3,
}: {
  className?: string
  opacity?: number
  blurPx?: number
}) {
  const font =
    '"Arial Black", Impact, "Franklin Gothic Heavy", sans-serif'
  const fw = '900'

  return (
    <svg
      viewBox="0 0 820 470"
      preserveAspectRatio="xMidYMid meet"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        opacity,
        filter: blurPx ? `blur(${blurPx}px)` : undefined,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hp-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c7a3f" />
          <stop offset="45%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
        <linearGradient id="hp-bright" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <radialGradient id="hp-glow" cx="50%" cy="40%" r="58%">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
        </radialGradient>

        <filter id="hp-noise" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n" />
          <feColorMatrix
            in="n"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
            result="an"
          />
          <feComposite in="an" in2="SourceGraphic" operator="in" result="m" />
          <feBlend in="SourceGraphic" in2="m" mode="multiply" />
        </filter>
        <filter id="hp-scratch" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0.04 0.4" numOctaves="2" seed="3" result="t" />
          <feColorMatrix
            in="t"
            type="matrix"
            values="0 0 0 0 0.1  0 0 0 0 0.4  0 0 0 0 0.15  0 0 0 0.35 0"
          />
        </filter>
        <radialGradient id="hp-vignette" cx="50%" cy="50%" r="72%">
          <stop offset="55%" stopColor="#050816" stopOpacity="0" />
          <stop offset="100%" stopColor="#050816" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Ambient green wash */}
      <ellipse cx="410" cy="200" rx="370" ry="200" fill="url(#hp-glow)" />

      {/* ═══════════ Row 1: G H [ghost-O] S T ═══════════ */}
      <g fontFamily={font} fontWeight={fw} textAnchor="middle">
        <text x="196" y="158" fontSize="132" fill="url(#hp-green)" stroke="#082012" strokeWidth={3} paintOrder="stroke">
          G
        </text>
        <text x="300" y="158" fontSize="132" fill="url(#hp-green)" stroke="#082012" strokeWidth={3} paintOrder="stroke">
          H
        </text>

        {/* Ghost medallion in place of the O */}
        <g>
          <circle cx="408" cy="104" r="58" fill="#082012" stroke="url(#hp-green)" strokeWidth={4} />
          <g transform="translate(408 104)">
            <path
              d="M -32 -40 C -32 -55 -17 -65 0 -65 C 17 -65 32 -55 32 -40 C 32 -26 22 -13 11 -5 L -11 -5 C -22 -13 -32 -26 -32 -40 Z"
              fill="#0b2417"
              stroke="url(#hp-green)"
              strokeWidth={2.5}
            />
            <path
              d="M -20 -44 C -20 -55 -8 -61 0 -61 C 8 -61 20 -55 20 -44 C 20 -33 11 -23 0 -23 C -11 -23 -20 -33 -20 -44 Z"
              fill="#02070a"
            />
            <circle cx="-9" cy="-42" r="3.2" fill="#86efac" />
            <circle cx="9" cy="-42" r="3.2" fill="#86efac" />
            <path
              d="M -11 -5 C -28 -1 -40 9 -44 21 L 44 21 C 40 9 28 -1 11 -5 Z"
              fill="#0b2417"
              stroke="url(#hp-green)"
              strokeWidth={2}
            />
            <path d="M 0 3 L 7 11 L 0 19 L -7 11 Z" fill="url(#hp-bright)" opacity="0.7" />
          </g>
        </g>

        <text x="516" y="158" fontSize="132" fill="url(#hp-green)" stroke="#082012" strokeWidth={3} paintOrder="stroke">
          S
        </text>
        <text x="624" y="158" fontSize="132" fill="url(#hp-green)" stroke="#082012" strokeWidth={3} paintOrder="stroke">
          T
        </text>
      </g>

      {/* ═══════════ Row 2: PROTOCOL (fits full width, P & L not clipped) ═══ */}
      <text
        x="410"
        y="298"
        fontFamily={font}
        fontWeight={fw}
        textLength="710"
        lengthAdjust="spacingAndGlyphs"
        textAnchor="middle"
        fontSize="128"
        fill="url(#hp-green)"
        stroke="#082012"
        strokeWidth={3}
        paintOrder="stroke"
      >
        PROTOCOL
      </text>

      {/* ═══════════ Row 3: CTF 2.0 (angled) ═══════════ */}
      <g transform="rotate(-4 410 360)" fontFamily={font} fontWeight={fw} textAnchor="middle">
        <text x="322" y="392" fontSize="94" fill="url(#hp-green)" stroke="#082012" strokeWidth={2.5} paintOrder="stroke">
          CTF
        </text>
        <text x="520" y="392" fontSize="94" fill="url(#hp-bright)" stroke="#082012" strokeWidth={2.5} paintOrder="stroke">
          2.0
        </text>
      </g>

      {/* Weathered scratch + grain layers */}
      <rect width="820" height="470" fill="url(#hp-green)" filter="url(#hp-scratch)" opacity="0.16" style={{ mixBlendMode: 'overlay' }} />
      <rect width="820" height="470" fill="#052014" filter="url(#hp-noise)" opacity="0.5" style={{ mixBlendMode: 'soft-light' }} />

      {/* Vignette to fade edges into the page */}
      <rect width="820" height="470" fill="url(#hp-vignette)" opacity="0.8" style={{ mixBlendMode: 'multiply' }} />
    </svg>
  )
}
