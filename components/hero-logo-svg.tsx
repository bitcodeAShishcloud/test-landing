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

        {/* Ghost medallion in place of the O — a hooded hacker silhouette
            (faithful to the reference: tall pointed hood, white headband arc,
            two bright glowing eyes, black face, binary data stream on chest) */}
        <g>
          <circle cx="408" cy="104" r="58" fill="#082012" stroke="url(#hp-green)" strokeWidth={4} />
          <g transform="translate(408 104)">
            {/* ── Tall pointed hood (the "O" shape) ── */}
            <path
              d="M 0 -66
                 C 22 -66 34 -52 34 -30
                 C 34 -10 24 6 14 14
                 L -14 14
                 C -24 6 -34 -10 -34 -30
                 C -34 -52 -22 -66 0 -66 Z"
              fill="#0b2417"
              stroke="url(#hp-green)"
              strokeWidth={2.5}
            />
            {/* hood apex highlight */}
            <path
              d="M 0 -66 C 12 -66 22 -58 28 -44 C 18 -54 8 -60 0 -60
                 C -8 -60 -18 -54 -28 -44 C -22 -58 -12 -66 0 -66 Z"
              fill="url(#hp-bright)"
              opacity="0.25"
            />

            {/* ── White headband arc (bright band across the hood) ── */}
            <path
              d="M -30 -22
                 C -18 -38 18 -38 30 -22
                 C 22 -34 12 -42 0 -42
                 C -12 -42 -22 -34 -30 -22 Z"
              fill="url(#hp-bright)"
            />
            {/* headband inner seam */}
            <path
              d="M -26 -24 C -14 -36 14 -36 26 -24"
              fill="none"
              stroke="#052014"
              strokeWidth={1.2}
              opacity="0.6"
            />

            {/* ── Black face void (below the band) ── */}
            <path
              d="M -20 -18
                 C -20 -4 -10 8 0 8
                 C 10 8 20 -4 20 -18
                 C 12 -10 -12 -10 -20 -18 Z"
              fill="#02070a"
            />

            {/* ── Two bright glowing eyes ── */}
            <ellipse cx="-9" cy="-10" rx="6.5" ry="4.2" fill="url(#hp-bright)">
              <animate attributeName="opacity" values="1;0.6;1" dur="3.2s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="9" cy="-10" rx="6.5" ry="4.2" fill="url(#hp-bright)">
              <animate attributeName="opacity" values="1;0.6;1" dur="3.2s" repeatCount="indefinite" />
            </ellipse>
            {/* eye glow halos */}
            <circle cx="-9" cy="-10" r="10" fill="url(#hp-glow)" opacity="0.5" />
            <circle cx="9" cy="-10" r="10" fill="url(#hp-glow)" opacity="0.5" />

            {/* ── Shoulders / chest with binary data stream ── */}
            <path
              d="M -14 14
                 C -30 18 -42 26 -46 34
                 L 46 34
                 C 42 26 30 18 14 14 Z"
              fill="#0b2417"
              stroke="url(#hp-green)"
              strokeWidth={2}
            />
            {/* binary digits dripping down the chest (the reference's data stream) */}
            <g fontFamily="monospace" fontSize="7" fill="url(#hp-bright)" opacity="0.85" textAnchor="middle">
              <text x="-30" y="30">0</text>
              <text x="-18" y="33">1</text>
              <text x="-6" y="30">1</text>
              <text x="6" y="33">0</text>
              <text x="18" y="30">1</text>
              <text x="30" y="33">0</text>
              <text x="-24" y="24" opacity="0.5">1</text>
              <text x="0" y="24" opacity="0.5">0</text>
              <text x="24" y="24" opacity="0.5">1</text>
            </g>
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
