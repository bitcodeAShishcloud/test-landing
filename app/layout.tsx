import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ghost Protocol CTF 2.0 — National Student Cybersecurity Competition',
  description:
    'Ghost Protocol CTF 2.0 is a national-level student cybersecurity competition by Cyber Invaders, the cybersecurity club of NIET Greater Noida. Online qualification round and an offline grand finale. Hack. Secure. Evolve.',
  generator: 'v0.app',
  keywords: [
    'CTF',
    'Ghost Protocol CTF',
    'Cyber Invaders',
    'NIET',
    'cybersecurity competition',
    'capture the flag',
    'ethical hacking',
  ],
  openGraph: {
    title: 'Ghost Protocol CTF 2.0 — National Student Cybersecurity Competition',
    description:
      'Hack. Secure. Evolve. A national-level student cybersecurity competition by Cyber Invaders, NIET Greater Noida.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050816',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
