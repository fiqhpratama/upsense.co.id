import type { BlogPostItem } from '@/data/blog-posts';
import type { CaseStudyData } from '@/app/post/_components/CaseStudyTemplate';
import { cmsGet } from '@/lib/cms-client';

type ApiBlogPost = {
  slug: string; title: string; excerpt: string; content?: string; cover_image: string;
  author_name: string; published_at: string; updated_at?: string; featured: boolean; tags?: string[];
  seo?: { meta_title: string; meta_description: string; keywords: string[] };
};

type ApiCaseStudy = {
  slug: string; title: string; category: string; summary: string; hero_image: string;
  published_at: string; problem?: string; solution?: string; outcomes?: string[]; tech_stack?: string[];
};

const CMS_ASSET_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://cms.upsense.co.id';
const asset = (value: string) => value.startsWith('http') ? value : `${CMS_ASSET_URL}/${value.replace(/^\/+/, '')}`;

function blog(item: ApiBlogPost): BlogPostItem {
  return {
    slug: item.slug, title: item.title, description: item.excerpt, content: item.content ?? item.excerpt,
    blog_keywords: (item.seo?.keywords ?? item.tags ?? []).join(', '), image: asset(item.cover_image),
    post_date: item.published_at, modified_date: item.updated_at, post_by: item.author_name, featured: item.featured,
    seo: { metaTitle: item.seo?.meta_title ?? item.title, metaDescription: item.seo?.meta_description ?? item.excerpt, keywords: item.seo?.keywords ?? item.tags ?? [] },
    tags: item.tags ?? [],
  };
}

function caseStudy(item: ApiCaseStudy): CaseStudyData {
  return {
    slug: item.slug, title: item.title, category: item.category, summary: item.summary, heroImage: asset(item.hero_image), publishedDate: item.published_at,
    problem: item.problem ?? item.summary, solution: item.solution ?? item.summary,
    outcomes: item.outcomes ?? [], techStack: item.tech_stack ?? [],
  };
}

export async function getCmsBlogPosts() {
  const data = await cmsGet<ApiBlogPost[]>('/api/blog-posts');
  return data?.map(blog) ?? null;
}

export async function getCmsBlogPost(slug: string) {
  const data = await cmsGet<ApiBlogPost>(`/api/blog-posts/${slug}`);
  return data ? blog(data) : null;
}

export async function getCmsCaseStudies() {
  const data = await cmsGet<ApiCaseStudy[]>('/api/case-studies');
  return data?.map(caseStudy) ?? null;
}

export async function getCmsCaseStudy(slug: string) {
  const data = await cmsGet<ApiCaseStudy>(`/api/case-studies/${slug}`);
  return data ? caseStudy(data) : null;
}
