import type { MetadataRoute } from 'next'
import { getAllClusters } from '@/lib/clusters'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://makeit.bot'

  const staticPages = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/shopify/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/chatbots/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/pwa/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/ia-first/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/portfolio/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact/', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog/', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/vetmib/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/solucoes/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solucoes/veterinarias/', priority: 0.9, changeFrequency: 'weekly' as const },
  ]

  const clusterPages: MetadataRoute.Sitemap = getAllClusters().flatMap((cluster) => [
    {
      url: `${baseUrl}${cluster.hub.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    ...cluster.spokes.map((spoke) => ({
      url: `${baseUrl}${spoke.url}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ])

  return [
    ...staticPages.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...clusterPages,
  ]
}
