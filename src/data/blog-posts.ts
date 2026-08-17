export type BlogPostItem = {
  slug: string;
  title: string;
  description: string;
  content: string;
  blog_keywords: string;
  image: string;
  post_date: string;
  post_by: string;
  featured?: boolean;
  seo?: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  tags?: string[];
};

export const blogPosts: BlogPostItem[] = [];
