import type { Metadata } from 'next'
import ServicesPage from '@/views/Services'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Shopify apps, AI chatbots, PWA development and more from makeit.bot.',
  alternates: { canonical: 'https://makeit.bot/services/' },
}

export default function Page() {
  return <ServicesPage />
}
