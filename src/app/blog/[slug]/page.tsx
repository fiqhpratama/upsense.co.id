import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { getCmsBlogPost, getCmsBlogPosts } from '@/lib/cms-content';

type PageProps = { params: Promise<{ slug: string }> };

const siteUrl = 'https://www.upsense.co.id';
const isHtml = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);
const articleUrl = (slug: string) => `${siteUrl}/blog/${slug}/`;
const serializeJsonLd = (value: object) => JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

export const dynamicParams = true;
export const revalidate = 300; // ponytail: ISR 5 menit, cukup untuk blog; force-dynamic kalau butuh real-time

export async function generateStaticParams() {
  const posts = await getCmsBlogPosts();
  return posts?.map(({ slug }) => ({ slug })) ?? [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCmsBlogPost(slug);
  if (!post) return {};

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.description;
  const url = articleUrl(post.slug);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'article', title, description, url, images: [{ url: post.image, alt: post.title }] },
    twitter: { card: 'summary_large_image', title, description, images: [post.image] },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getCmsBlogPost(slug);
  if (!post) notFound();

  const url = articleUrl(post.slug);
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `${url}#article`, headline: post.title,
    description: post.seo?.metaDescription || post.description, image: [post.image], datePublished: post.post_date,
    ...(post.modified_date ? { dateModified: post.modified_date } : {}),
    author: { '@type': 'Person', name: post.post_by },
    publisher: { '@type': 'Organization', '@id': 'https://www.upsense.co.id/#organization', name: 'UPSENSE', url: siteUrl },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, url,
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20"><article>
      <section className="bg-[#0a1e43] py-16 text-white md:py-24"><div className="container mx-auto grid max-w-8xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:px-12">
        <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-3xl"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
        <div><div className="mb-5 flex flex-wrap gap-4 text-sm text-white/80"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{new Date(post.post_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span><span className="flex items-center gap-2"><User className="h-4 w-4" />{post.post_by}</span></div>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">{post.title}</h1><p className="mt-6 max-w-6xl text-lg leading-relaxed text-white/85 md:text-xl">{post.description}</p></div>
      </div></section>
      <section className="py-16 md:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-12">
        {isHtml(post.content) ? <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-black prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-black prose-a:text-[#013e78]" dangerouslySetInnerHTML={{ __html: post.content }} /> : <p className="text-lg leading-relaxed text-gray-700">{post.content}</p>}
        {post.tags?.length ? <div className="mt-12 flex flex-wrap gap-2 border-t border-gray-200 pt-6">{post.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f5f8fc] px-3 py-1 text-sm font-medium text-[#013e78]">{tag}</span>)}</div> : null}
        <div className="mt-12 rounded-3xl bg-[#fff4e0] p-8"><h2 className="text-2xl font-bold text-[#013e78]">Butuh solusi digital untuk bisnis Anda?</h2><p className="mt-3 text-gray-600">Diskusikan kebutuhan sistem, proses, atau transformasi digital bersama tim UPSENSE.</p><a href="/contact/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-6 py-3 font-semibold text-white">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></a></div>
      </div></section>
    </article></main>
    <Footer />
  </>;
}
