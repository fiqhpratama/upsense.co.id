'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, Search, User } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { blogPosts as fallbackPosts, type BlogPostItem } from '@/data/blog-posts';
import { getCmsBlogPost } from '@/lib/cms-content';

const isHtml = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);

function PostCard({ post }: { post: BlogPostItem }) {
  return <a href={`/blog/${post.slug}/`} className="block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 overflow-hidden"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-300 hover:scale-105" /></div>
    <div className="p-5"><div className="mb-3 flex items-center gap-1 text-xs text-[#6C757D]"><Calendar className="h-3 w-3" />{new Date(post.post_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</div><h2 className="mb-3 min-h-[3rem] line-clamp-2 text-base font-bold text-black">{post.title}</h2><p className="mb-4 line-clamp-3 text-sm text-[#6C757D]">{post.description}</p><div className="flex items-center justify-between border-t border-[#DEE2E6] pt-3 text-sm"><span className="flex items-center gap-2 text-[#6C757D]"><User className="h-3 w-3" />{post.post_by}</span><span className="flex items-center gap-2 font-semibold text-[#013324]">Baca <ArrowRight className="h-4 w-4" /></span></div></div>
  </a>;
}

function BlogArticle({ slug }: { slug: string }) {
  const fallback = fallbackPosts.find((item) => item.slug === slug) ?? null;
  const [post, setPost] = useState<BlogPostItem | null>(fallback);
  const [missing, setMissing] = useState(false);

  useEffect(() => { getCmsBlogPost(slug).then((item) => { if (item) setPost(item); else if (!fallback) setMissing(true); }); }, [slug]);
  useEffect(() => {
    if (post) document.title = `${post.seo?.metaTitle ?? post.title} | UPSENSE`;
  }, [post]);

  if (!post) return <><Navigation /><main className="flex min-h-[70vh] items-center justify-center bg-white px-6 pt-24 text-center"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Article</p><h1 className="mt-4 text-3xl font-bold text-[#013e78]">{missing ? 'Artikel tidak ditemukan.' : 'Memuat artikel...'}</h1></div></main><Footer /></>;

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', '@id': `https://upsense.co.id/blog/${post.slug}/#article`, headline: post.title, description: post.seo?.metaDescription ?? post.description,
    image: [post.image], datePublished: post.post_date, dateModified: post.post_date,
    author: { '@type': 'Person', name: post.post_by }, publisher: { '@type': 'Organization', '@id': 'https://upsense.co.id/#organization', name: 'UPSENSE', url: 'https://upsense.co.id' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://upsense.co.id/blog/${post.slug}/` }, url: `https://upsense.co.id/blog/${post.slug}/`, keywords: post.seo?.keywords ?? post.tags ?? [],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20"><article>
      <section className="bg-[#0a1e43] py-16 text-white md:py-24"><div className="container mx-auto grid max-w-8xl items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:px-12">
        <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-3xl"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
        <div><div className="mb-5 flex flex-wrap gap-4 text-sm text-white/80"><span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{new Date(post.post_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span><span className="flex items-center gap-2"><User className="h-4 w-4" />{post.post_by}</span></div>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">{post.title}</h1>
        <p className="mt-6 max-w-6xl text-lg leading-relaxed text-white/85 md:text-xl">{post.description}</p></div>
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

export default function BlogClient({ initialPosts }: { initialPosts: BlogPostItem[] }) {
  const [query, setQuery] = useState('');
  const [routeSlug, setRouteSlug] = useState<string | null>(null);

  useEffect(() => {
    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments[0] === 'blog' && segments[1]) setRouteSlug(segments[1]);
  }, []);
  const visiblePosts = useMemo(() => { const value = query.trim().toLowerCase(); return value ? initialPosts.filter((post) => `${post.title} ${post.description} ${post.tags?.join(' ')}`.toLowerCase().includes(value)) : initialPosts; }, [initialPosts, query]);
  if (routeSlug) return <BlogArticle slug={routeSlug} />;

  const featured = visiblePosts.filter((post) => post.featured);
  const regular = visiblePosts.filter((post) => !post.featured);
  return <><Navigation /><main className="pt-20"><section className="bg-[#0a1e43] py-20 text-white"><div className="container relative mx-auto px-6 text-center lg:px-12"><h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Our Related Content</h1><p className="mb-8 text-xl text-gray-300">Informasi terbaru seputar teknologi, software development, dan transformasi digital untuk bisnis Anda.</p><label className="mx-auto block max-w-2xl text-left"><span className="relative block"><Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari artikel..." className="w-full rounded-full border border-white bg-transparent py-4 pl-14 pr-6 text-white placeholder:text-white/70 focus:border-[#ffd497] focus:outline-none" /></span></label></div></section>{featured.length > 0 && <section className="bg-[#F8F9FA] py-16"><div className="container mx-auto px-6 lg:px-12"><h2 className="mb-8 text-3xl font-bold">Artikel <span className="text-[#013324]">Unggulan</span></h2><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{featured.map((post) => <PostCard key={post.slug} post={post} />)}</div></div></section>}<section className="bg-white py-16"><div className="container mx-auto px-6 lg:px-12"><h2 className="mb-8 text-3xl font-bold">Semua <span className="text-[#013324]">Artikel</span></h2><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{regular.map((post) => <PostCard key={post.slug} post={post} />)}</div>{visiblePosts.length === 0 && <p className="text-gray-600">Artikel tidak ditemukan.</p>}</div></section></main><Footer /></>;
}
