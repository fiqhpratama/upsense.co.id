import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { getCmsBlogPosts } from '@/lib/cms-content';

export const metadata: Metadata = {
  title: 'Blog UPSENSE | Insight Teknologi Bisnis',
  description: 'Artikel UPSENSE tentang software enterprise, keamanan data, otomasi proses, dan transformasi digital untuk perusahaan Indonesia.',
  alternates: { canonical: '/blog/' },
};

export default async function BlogPage() {
  return <BlogClient initialPosts={(await getCmsBlogPosts()) ?? []} />;
}
