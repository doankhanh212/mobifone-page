import type { MetadataRoute } from 'next'
import { SITE_URL, SOLUTIONS } from '@/lib/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ['/', '/giai-phap', '/ha-tang-so', '/he-sinh-thai', '/lien-he', '/van-phong-so']

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1 : 0.8,
    })),
    ...SOLUTIONS.map((solution) => ({
      url: `${SITE_URL}/giai-phap/${solution.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]
}
