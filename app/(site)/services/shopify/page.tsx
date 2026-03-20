import type { Metadata } from 'next'
import ShopifyPage from '@/views/services/Shopify'

export const metadata: Metadata = {
  title: 'Shopify Apps',
  description: 'Custom Shopify app development to supercharge your e-commerce store.',
  alternates: { canonical: 'https://makeit.bot/services/shopify/' },
}

export default function Page() {
  return <ShopifyPage />
}
