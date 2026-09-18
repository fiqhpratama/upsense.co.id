import fs from 'node:fs';
import path from 'node:path';

export type PortfolioContent = {
  title: string;
  slug: string;
  category?: string;
  cardTitle?: string;
  cardTag?: string;
  order?: string;
  industry?: string;
  solution?: string;
  platform?: string;
  client?: string;
  brand_group?: string;
  brand?: string;
  thumbnail?: string;
  heroImage?: string;
  overview: string[];
  sections: Record<string, string[]>;
  highlights: { title: string; content: string[] }[];
};

const contentDirectory = path.join(process.cwd(), 'content', 'portfolio');

function portfolioFiles() {
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith('.md'));
}

function paragraphs(value: string) {
  return value.trim().split(/\n\s*\n/).flatMap((paragraph) => paragraph.startsWith('- ') ? paragraph.split('\n') : [paragraph]).map((paragraph) => paragraph.trim()).filter(Boolean);
}

function parsePortfolio(source: string): PortfolioContent {
  const [, frontmatter = '', body = ''] = source.replace(/^\uFEFF/, '').match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/) ?? [];
  const fields = Object.fromEntries([...frontmatter.matchAll(/^([\w]+):\s*["']?(.*?)["']?\s*$/gm)].map(([, key, value]) => [key, value]));
  const parts = [...body.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
  const overview = body.match(/^# Project Overview\n([\s\S]*?)(?=^## |$(?![\s\S]))/m)?.[1] ?? '';
  const sections = Object.fromEntries(parts.map(([, heading, content]) => [heading, paragraphs(content)]));
  const highlights = [...(sections['Project Highlights']?.join('\n\n').matchAll(/^### (.+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm) ?? [])]
    .map(([, title, content]) => ({ title, content: paragraphs(content) }));

  return { ...fields, title: fields.title, slug: fields.slug, overview: paragraphs(overview), sections, highlights };
}

export function getPortfolioSlugs() {
  return portfolioFiles().map((file) => parsePortfolio(fs.readFileSync(path.join(contentDirectory, file), 'utf8')).slug);
}

export function getAllPortfolios() {
  return portfolioFiles()
    .map((file) => parsePortfolio(fs.readFileSync(path.join(contentDirectory, file), 'utf8')))
    .sort((a, b) => Number(a.order ?? 99) - Number(b.order ?? 99));
}

export function getPortfolio(slug: string) {
  return portfolioFiles().map((file) => parsePortfolio(fs.readFileSync(path.join(contentDirectory, file), 'utf8'))).find((portfolio) => portfolio.slug === slug);
}
