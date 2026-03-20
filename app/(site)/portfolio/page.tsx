import type { Metadata } from 'next'
import PortfolioPage from '@/views/Portfolio'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'See our work — web apps, Shopify integrations, chatbots and more.',
  alternates: { canonical: 'https://makeit.bot/portfolio/' },
}

export default function Page() {
  return <PortfolioPage />
}
