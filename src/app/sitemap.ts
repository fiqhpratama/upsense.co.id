import type { MetadataRoute } from 'next';
import { getCmsBlogPosts, getCmsCaseStudies } from '@/lib/cms-content';
import { caseStudyPosts } from '@/data/case-study-posts';
import { getPortfolioSlugs } from '@/lib/portfolio-content';

export const revalidate = 300; // ponytail: sitemap ikut ISR, artikel CMS baru masuk dalam 5 menit tanpa rebuild

const SITE_URL = process.env.SITE_URL ?? 'https://upsense.co.id';
const BUILD_DATE = new Date(); // ponytail: tanggal build riil, bukan new Date() per-entry yang mengklaim semua halaman berubah tiap render
const staticPaths = [
  '/', '/about/', '/services/', '/portfolio/', '/blog/', '/contact/',
  '/services/software-development/', '/services/web-development/', '/services/analytic-solutions/',
  '/services/cloud-devops/', '/services/product-design/', '/services/app-design/', '/services/odoo-erp-customization/', '/services/learning-management-system/', '/services/core-hris-mobile-attendance/',
  '/services/layanan-pengembangan-website/',
  '/services/layanan-pembuatan-aplikasi-mobile/',
  '/services/layanan-customisasi-software-bisnis/',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ponytail: ?? [] — kalau CMS down, sitemap tetap berisi halaman statis
  const [cmsPosts, cmsStudies] = await Promise.all([
    getCmsBlogPosts().catch(() => null),
    getCmsCaseStudies().catch(() => null),
  ]);

  return [
    ...staticPaths.map((path) => ({
      url: `${SITE_URL}${path === '/' ? '' : path}`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    ...(cmsPosts ?? []).map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: post.modified_date ? new Date(post.modified_date) : new Date(post.post_date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...(cmsStudies ?? []).map((study) => ({
      url: `${SITE_URL}/post/${study.slug}/`,
      lastModified: new Date(study.publishedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // ponytail: fallback statis hanya jika CMS gagal, agar case study tetap discoverable
    ...(cmsStudies ? [] : caseStudyPosts.map((post) => ({ url: `${SITE_URL}/post/${post.slug}/`, lastModified: new Date(post.publishedDate), changeFrequency: 'monthly' as const, priority: 0.7 }))),
    ...getPortfolioSlugs().map((slug) => ({ url: `${SITE_URL}/portfolio/${slug}/`, lastModified: BUILD_DATE, changeFrequency: 'monthly' as const, priority: 0.6 })),
  ];
}
