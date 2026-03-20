import type { Metadata } from 'next'
import BlogPage from '@/views/Blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos sobre automação, IA e gestão para veterinárias e outros negócios.',
  alternates: { canonical: 'https://makeit.bot/blog/' },
}

export default function Page() {
  return <BlogPage />
}
