import {
  boolean,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blog_posts', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImage: text('cover_image').notNull(),
  authorName: text('author_name').notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  status: text('status').notNull().default('draft'),
  featured: boolean('featured').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex('idx_blog_posts_slug').on(table.slug),
  statusPublishedIdx: index('idx_blog_posts_status_published_at').on(table.status, table.publishedAt),
}));

export const blogPostSeo = pgTable('blog_post_seo', {
  id: text('id').primaryKey(),
  blogPostId: text('blog_post_id').notNull().references(() => blogPosts.id, { onDelete: 'cascade' }),
  metaTitle: text('meta_title'),
  metaDescription: text('meta_description'),
  keywords: text('keywords').array().notNull().default([]),
});

export const blogPostTags = pgTable('blog_post_tags', {
  id: text('id').primaryKey(),
  blogPostId: text('blog_post_id').notNull().references(() => blogPosts.id, { onDelete: 'cascade' }),
  tag: text('tag').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
});

export const caseStudies = pgTable('case_studies', {
  id: text('id').primaryKey(),
  slug: text('slug').notNull(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  summary: text('summary').notNull(),
  heroImage: text('hero_image').notNull(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
  status: text('status').notNull().default('draft'),
  problem: text('problem').notNull(),
  solution: text('solution').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  slugIdx: uniqueIndex('idx_case_studies_slug').on(table.slug),
  statusPublishedIdx: index('idx_case_studies_status_published_at').on(table.status, table.publishedAt),
}));

export const caseStudySeo = pgTable('case_study_seo', {
  id: text('id').primaryKey(),
  caseStudyId: text('case_study_id').notNull().references(() => caseStudies.id, { onDelete: 'cascade' }),
  metaTitle: text('meta_title'),
  metaDescription: text('meta_description'),
  keywords: text('keywords').array().notNull().default([]),
});

export const caseStudyOutcomes = pgTable('case_study_outcomes', {
  id: text('id').primaryKey(),
  caseStudyId: text('case_study_id').notNull().references(() => caseStudies.id, { onDelete: 'cascade' }),
  content: text('content').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
});

export const caseStudyTechStacks = pgTable('case_study_tech_stacks', {
  id: text('id').primaryKey(),
  caseStudyId: text('case_study_id').notNull().references(() => caseStudies.id, { onDelete: 'cascade' }),
  content: text('content').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
});

export const services = pgTable('services', {
  id: text('id').primaryKey(),
  category: text('category').notNull(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  icon: text('icon').notNull(),
  color: text('color').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
}, (table) => ({
  activeSortIdx: index('idx_services_active_sort').on(table.isActive, table.sortOrder),
}));

export const serviceSeo = pgTable('service_seo', {
  id: text('id').primaryKey(),
  serviceId: text('service_id').notNull().references(() => services.id, { onDelete: 'cascade' }),
  keywords: text('keywords').array().notNull().default([]),
});
