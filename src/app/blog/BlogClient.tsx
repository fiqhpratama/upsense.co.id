'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Calendar, Search, User } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import type { BlogPostItem } from '@/data/blog-posts';

function PostCard({ post }: { post: BlogPostItem }) {
  return <a href={`/blog/${post.slug}/`} className="block overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 overflow-hidden"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-300 hover:scale-105" /></div>
    <div className="p-5"><div className="mb-3 flex items-center gap-1 text-xs text-[#6C757D]"><Calendar className="h-3 w-3" />{new Date(post.post_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</div><h2 className="mb-3 min-h-[3rem] line-clamp-2 text-base font-bold text-black">{post.title}</h2><p className="mb-4 line-clamp-3 text-sm text-[#6C757D]">{post.description}</p><div className="flex items-center justify-between border-t border-[#DEE2E6] pt-3 text-sm"><span className="flex items-center gap-2 text-[#6C757D]"><User className="h-3 w-3" />{post.post_by}</span><span className="flex items-center gap-2 font-semibold text-[#013324]">Baca <ArrowRight className="h-4 w-4" /></span></div></div>
  </a>;
}

export default function BlogClient({ initialPosts }: { initialPosts: BlogPostItem[] }) {
  const [query, setQuery] = useState('');
  const visiblePosts = useMemo(() => { const value = query.trim().toLowerCase(); return value ? initialPosts.filter((post) => `${post.title} ${post.description} ${post.tags?.join(' ')}`.toLowerCase().includes(value)) : initialPosts; }, [initialPosts, query]);

  const featured = visiblePosts.filter((post) => post.featured);
  const regular = visiblePosts.filter((post) => !post.featured);
  return <><Navigation /><main className="pt-20"><section className="bg-[#0a1e43] py-20 text-white"><div className="container relative mx-auto px-6 text-center lg:px-12"><h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Our Related Content</h1><p className="mb-8 text-xl text-gray-300">Informasi terbaru seputar teknologi, software development, dan transformasi digital untuk bisnis Anda.</p><label className="mx-auto block max-w-2xl text-left"><span className="relative block"><Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari artikel..." className="w-full rounded-full border border-white bg-transparent py-4 pl-14 pr-6 text-white placeholder:text-white/70 focus:border-[#ffd497] focus:outline-none" /></span></label></div></section>{featured.length > 0 && <section className="bg-[#F8F9FA] py-16"><div className="container mx-auto px-6 lg:px-12"><h2 className="mb-8 text-3xl font-bold">Artikel <span className="text-[#013324]">Unggulan</span></h2><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{featured.map((post) => <PostCard key={post.slug} post={post} />)}</div></div></section>}<section className="bg-white py-16"><div className="container mx-auto px-6 lg:px-12"><h2 className="mb-8 text-3xl font-bold">Semua <span className="text-[#013324]">Artikel</span></h2><div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">{regular.map((post) => <PostCard key={post.slug} post={post} />)}</div>{visiblePosts.length === 0 && <p className="text-gray-600">Artikel tidak ditemukan.</p>}</div></section></main><Footer /></>;
}
