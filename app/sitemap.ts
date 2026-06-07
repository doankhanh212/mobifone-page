import type { MetadataRoute } from 'next'
import { SITE_URL, SOLUTIONS } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = [
    { route: '/', priority: 1 },
    { route: '/giai-phap', priority: 0.9 },
    { route: '/ha-tang-so', priority: 0.7 },
    { route: '/he-sinh-thai', priority: 0.7 },
    { route: '/lien-he', priority: 0.6 },
    { route: '/van-phong-so', priority: 0.7 },
  ]

  return [
    ...staticRoutes.map(({ route, priority }) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority,
    })),
    ...SOLUTIONS.map((solution) => ({
      url: `${SITE_URL}/giai-phap/${solution.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
