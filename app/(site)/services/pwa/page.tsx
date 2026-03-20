import type { Metadata } from 'next'
import PWAPage from '@/views/services/PWA'

export const metadata: Metadata = {
  title: 'PWA Development',
  description: 'Progressive Web App development for fast, reliable, installable web experiences.',
  alternates: { canonical: 'https://makeit.bot/services/pwa/' },
}

export default function Page() {
  return <PWAPage />
}
