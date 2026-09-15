'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const GLYPHS = '!<>-_\\/[]{}—=+*^?#_01$@%&:~'
const TARGET_TEXT = 'GHOST PROTOCOL'

function getSafeRandomIndex(max: number): number {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    const arr = new Uint32Array(1)
    window.crypto.getRandomValues(arr)
    return arr[0] % max
  }
  return 0
}

export function GlitchText({ className = '' }: { className?: string }) {
  const [displayText, setDisplayText] = useState(TARGET_TEXT)
  const [isGlitching, setIsGlitching] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isRunningRef = useRef(false)

  const triggerGlitch = useCallback(() => {
    if (isRunningRef.current) return
    isRunningRef.current = true
    setIsGlitching(true)

    const totalSteps = 16
    let step = 0

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      step++
      // Progressively resolve characters from left to right
      const resolveThreshold = Math.floor((step / totalSteps) * TARGET_TEXT.length)

      const scrambled = TARGET_TEXT.split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          if (index < resolveThreshold) {
            return TARGET_TEXT[index]
          }
          // Random cyber glyph
          const randomIndex = getSafeRandomIndex(GLYPHS.length)
          return GLYPHS[randomIndex]
        })
        .join('')

      setDisplayText(scrambled)

      if (step >= totalSteps) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setDisplayText(TARGET_TEXT)
        setIsGlitching(false)
        isRunningRef.current = false
      }
    }, 45)
  }, [])

  // Auto-trigger periodic cyber glitch every 7 seconds
  useEffect(() => {
    // Initial glitch on mount after short delay
    const initialTimeout = setTimeout(() => {
      triggerGlitch()
    }, 900)

    autoTimerRef.current = setInterval(() => {
      triggerGlitch()
    }, 7000)

    return () => {
      clearTimeout(initialTimeout)
      if (autoTimerRef.current) clearInterval(autoTimerRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [triggerGlitch])

  return (
    <span
      className={`cyber-glitch-container relative inline-block cursor-pointer select-none ${
        isGlitching ? 'cyber-glitch-active' : ''
      } ${className}`}
      onClick={triggerGlitch}
      onMouseEnter={triggerGlitch}
      title="Click or hover to glitch"
      aria-label={TARGET_TEXT}
    >
      {/* ── Cyan / Blue Chromatic Aberration Layer ── */}
      <span
        aria-hidden="true"
        className={`glitch-layer glitch-layer-cyan pointer-events-none absolute inset-0 z-0 font-display font-bold leading-none tracking-tight transition-opacity duration-150 ${
          isGlitching ? 'opacity-85' : 'opacity-0'
        }`}
        style={{
          color: '#38bdf8',
          textShadow: '0 0 12px rgba(56, 189, 248, 0.8)',
          userSelect: 'none',
        }}
      >
        {displayText}
      </span>

      {/* ── Red / Magenta Chromatic Aberration Layer ── */}
      <span
        aria-hidden="true"
        className={`glitch-layer glitch-layer-red pointer-events-none absolute inset-0 z-0 font-display font-bold leading-none tracking-tight transition-opacity duration-150 ${
          isGlitching ? 'opacity-85' : 'opacity-0'
        }`}
        style={{
          color: '#e83e8c',
          textShadow: '0 0 12px rgba(232, 62, 140, 0.8)',
          userSelect: 'none',
        }}
      >
        {displayText}
      </span>

      {/* ── Main Foreground Glitch Text ── */}
      <span
        className="relative z-10 block font-display font-bold tracking-tight text-[#F8FAFC] transition-all duration-200"
        style={{
          textShadow: isGlitching
            ? '0 0 24px rgba(167, 139, 250, 0.8), 0 0 45px rgba(94, 23, 235, 0.6)'
            : '0 0 18px rgba(167, 139, 250, 0.25)',
        }}
      >
        {displayText}
      </span>

      {/* ── Slicing Glitch Scanline ── */}
      {isGlitching && (
        <span
          aria-hidden="true"
          className="glitch-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent"
        />
      )}
    </span>
  )
}
