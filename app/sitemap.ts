import { MetadataRoute } from 'next'
import { getSlugs } from '../lib/posts'

const BASE_URL = 'https://chaeah.com'

const postRoutes = getSlugs().map((slug) => ({
  url: `${BASE_URL}/blog/${slug}`,
  priority: 0.5,
}))

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: BASE_URL + '/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...postRoutes,
  ]
}
