import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Renewal Radar — Understand your mortgage renewal before you sign',
  description:
    'A free web tool for Canadian homeowners whose fixed-rate mortgage is coming up for renewal. Read your renewal letter, compare offers, check the stress test, and estimate penalties.',
  openGraph: {
    title: 'Renewal Radar | Understand your mortgage renewal before you sign',
    description:
      'A free web tool for Canadian homeowners: read your renewal letter, compare offers, and see what switching or breaking could cost.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewal Radar | Understand your mortgage renewal before you sign',
    description:
      'A free web tool for Canadian homeowners: read your renewal letter, compare offers, and see what switching or breaking could cost.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0F766E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
