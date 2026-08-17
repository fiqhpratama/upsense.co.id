import { blogPosts, type BlogPostItem } from '@/data/blog-posts';
import { caseStudyPosts } from '@/data/case-study-posts';
import type { CaseStudyData } from '@/app/post/_components/CaseStudyTemplate';

type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
};

type ApiBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  cover_image: string;
  author_name: string;
  published_at: string;
  status: string;
  featured: boolean;
  seo?: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
  };
  tags?: string[];
  created_at: string;
  updated_at: string;
};

type ApiCaseStudy = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  hero_image: string;
  published_at: string;
  status: string;
  problem?: string;
  solution?: string;
  outcomes?: string[];
  tech_stack?: string[];
  seo?: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
  };
  created_at: string;
  updated_at: string;
};

const BASE_URL = process.env.BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL;

function normalizeAssetUrl(value?: string): string {
  if (!value) {
    return '';
  }

  if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:')) {
    return value;
  }

  if (value.startsWith('/')) {
    return BASE_URL ? `${BASE_URL}${value}` : value;
  }

  return BASE_URL ? `${BASE_URL}/${value}` : value;
}

function mapBlogPostApi(item: ApiBlogPost): BlogPostItem {
  const fallbackKeywords = item.tags ?? [];

  return {
    slug: item.slug,
    title: item.title,
    description: item.excerpt,
    content: item.content ?? item.excerpt,
    blog_keywords: (item.seo?.keywords ?? fallbackKeywords).join(', '),
    image: normalizeAssetUrl(item.cover_image),
    post_date: item.published_at,
    post_by: item.author_name,
    featured: item.featured,
    seo: {
      metaTitle: item.seo?.meta_title ?? item.title,
      metaDescription: item.seo?.meta_description ?? item.excerpt,
      keywords: item.seo?.keywords ?? fallbackKeywords,
    },
    tags: item.tags ?? [],
  };
}

function mapCaseStudyApi(item: ApiCaseStudy): CaseStudyData {
  return {
    slug: item.slug,
    title: item.title,
    category: item.category,
    summary: item.summary,
    heroImage: normalizeAssetUrl(item.hero_image),
    publishedDate: item.published_at,
    problem: item.problem ?? item.summary,
    solution: item.solution ?? item.summary,
    outcomes: item.outcomes ?? ['Improved visibility and stronger execution across key business operations.'],
    techStack: item.tech_stack ?? ['Custom Software', 'Business Workflow Design'],
  };
}

function mockBlogPostsResponse(): ApiEnvelope<ApiBlogPost[]> {
  return {
    success: true,
    message: 'Blog posts fetched successfully',
    data: blogPosts.map((post, index) => ({
      id: `blog_${String(index + 1).padStart(3, '0')}`,
      slug: post.slug,
      title: post.title,
      excerpt: post.description,
      content: post.content,
      cover_image: post.image,
      author_name: post.post_by,
      published_at: post.post_date,
      status: 'published',
      featured: Boolean(post.featured),
      seo: {
        meta_title: post.seo?.metaTitle ?? post.title,
        meta_description: post.seo?.metaDescription ?? post.description,
        keywords: post.seo?.keywords ?? post.blog_keywords.split(',').map((item) => item.trim()),
      },
      tags: post.tags ?? ['Digital Transformation', 'Software Development'],
      created_at: post.post_date,
      updated_at: post.post_date,
    })),
    meta: {
      page: 1,
      limit: blogPosts.length,
      total: blogPosts.length,
      total_pages: 1,
    },
  };
}

function mockCaseStudiesResponse(): ApiEnvelope<ApiCaseStudy[]> {
  return {
    success: true,
    message: 'Case studies fetched successfully',
    data: caseStudyPosts.map((post, index) => ({
      id: `case_${String(index + 1).padStart(3, '0')}`,
      slug: post.slug,
      title: post.title,
      category: post.category,
      summary: post.summary,
      hero_image: post.heroImage,
      published_at: post.publishedDate,
      status: 'published',
      problem: post.problem,
      solution: post.solution,
      outcomes: post.outcomes,
      tech_stack: post.techStack,
      seo: {
        meta_title: post.title,
        meta_description: post.summary,
        keywords: [post.title, post.category, 'digital transformation'],
      },
      created_at: post.publishedDate,
      updated_at: post.publishedDate,
    })),
    meta: {
      page: 1,
      limit: caseStudyPosts.length,
      total: caseStudyPosts.length,
      total_pages: 1,
    },
  };
}

async function fetchApiEnvelope<T>(path: string): Promise<ApiEnvelope<T> | null> {
  if (!BASE_URL) {
    return null;
  }

  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return (await response.json()) as ApiEnvelope<T>;
  } catch (error) {
    console.warn(`Content API fallback for ${path}:`, error);
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  const response = await fetchApiEnvelope<ApiBlogPost[]>('/api/blog-posts');
  const payload = response ?? mockBlogPostsResponse();
  return payload.data.map(mapBlogPostApi);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostItem | undefined> {
  const response = await fetchApiEnvelope<ApiBlogPost>(`/api/blog-posts/${slug}`);

  if (response?.data) {
    return mapBlogPostApi(response.data);
  }

  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getCaseStudyPosts(): Promise<CaseStudyData[]> {
  const response = await fetchApiEnvelope<ApiCaseStudy[]>('/api/case-studies');
  const payload = response ?? mockCaseStudiesResponse();
  return payload.data.map(mapCaseStudyApi);
}

export async function getCaseStudyPostBySlug(slug: string): Promise<CaseStudyData | undefined> {
  const response = await fetchApiEnvelope<ApiCaseStudy>(`/api/case-studies/${slug}`);

  if (response?.data) {
    return mapCaseStudyApi(response.data);
  }

  const posts = await getCaseStudyPosts();
  return posts.find((post) => post.slug === slug);
}
