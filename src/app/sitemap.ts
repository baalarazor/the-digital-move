import type { MetadataRoute } from 'next';
import { healthcareProfiles } from '@/lib/healthcare';
import { cityNodes, industryNodes, serviceNodes } from '@/lib/seo-ecosystem';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: 'https://thedigitalmove.com', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://thedigitalmove.com/services', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://thedigitalmove.com/solutions', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://thedigitalmove.com/industries', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://thedigitalmove.com/locations', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://thedigitalmove.com/resources', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://thedigitalmove.com/about', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://thedigitalmove.com/portfolio', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://thedigitalmove.com/case-studies', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://thedigitalmove.com/pricing', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://thedigitalmove.com/contact', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://thedigitalmove.com/healthcare', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://thedigitalmove.com/business-health-check', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://thedigitalmove.com/website-plans', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://thedigitalmove.com/blog', lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const staticServicePages: MetadataRoute.Sitemap = [
    'ai-automation',
    'workflow-automation',
    'website-development',
    'custom-software',
    'system-integration',
    'tattoo-artist-websites',
  ].map((slug) => ({
    url: `https://thedigitalmove.com/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const dynamicServicePages: MetadataRoute.Sitemap = serviceNodes.map((node) => ({
    url: `https://thedigitalmove.com/services/${node.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const healthcareSolutionPages: MetadataRoute.Sitemap = healthcareProfiles.map((profile) => ({
    url: `https://thedigitalmove.com/solutions/${profile.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = industryNodes.map((industry) => ({
    url: `https://thedigitalmove.com/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = cityNodes.map((city) => ({
    url: `https://thedigitalmove.com/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    'website-development-berlin-small-businesses-2026',
    'ai-automation-german-smes-where-to-start',
  ].map((slug) => ({
    url: `https://thedigitalmove.com/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const allEntries: MetadataRoute.Sitemap = [
    ...corePages,
    ...staticServicePages,
    ...dynamicServicePages,
    ...healthcareSolutionPages,
    ...industryPages,
    ...locationPages,
    ...blogPages,
  ];

  return allEntries.filter((entry, index, arr) => arr.findIndex((item) => item.url === entry.url) === index);
}
