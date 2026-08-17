import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { caseStudyPosts } from '@/data/case-study-posts';

export const dynamic = 'force-static';

const SITE_URL = process.env.SITE_URL ?? 'https://upsense.co.id';
const staticPaths = [
  '/', '/about/', '/services/', '/portfolio/', '/blog/', '/contact/',
  '/services/software-development/', '/services/web-development/', '/services/analytic-solutions/',
  '/services/cloud-devops/', '/services/product-design/', '/services/app-design/', '/services/odoo-erp-customization/', '/services/learning-management-system/', '/services/core-hris-mobile-attendance/',
  '/services/layanan-pengembangan-website/',
  '/services/layanan-pembuatan-aplikasi-mobile/',
  '/services/layanan-customisasi-software-bisnis/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    ...blogPosts.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}/`, lastModified: new Date(post.post_date), changeFrequency: 'daily' as const, priority: 0.7 })),
    ...caseStudyPosts.map((post) => ({ url: `${SITE_URL}/post/${post.slug}/`, lastModified: new Date(post.publishedDate), changeFrequency: 'daily' as const, priority: 0.7 })),
  ];
}
