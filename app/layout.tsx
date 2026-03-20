import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/use-theme'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'makeit.bot — Soluções de IA para Veterinárias',
    template: '%s | makeit.bot',
  },
  description:
    'Soluções de automação e inteligência artificial para clínicas veterinárias em Portugal.',
  metadataBase: new URL('https://makeit.bot'),
  openGraph: {
    siteName: 'makeit.bot',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
