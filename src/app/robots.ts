import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    host: 'https://thedigitalmove.com',
    sitemap: 'https://thedigitalmove.com/sitemap.xml',
  };
}
