'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { SectionTag } from '@/components/home/section-tag';
import type { BlogPostItem } from '@/data/blog-posts';

const PAGE_SIZE = 5;

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();

const initials = (name: string) =>
  name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('');

function pageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, index) => index + 1);
  const items: (number | '...')[] = [1];
  if (current > 3) items.push('...');
  for (let page = Math.max(2, current - 1); page <= Math.min(total - 1, current + 1); page++) items.push(page);
  if (current < total - 2) items.push('...');
  items.push(total);
  return items;
}

function Author({ name, size = 'sm' }: { name: string; size?: 'sm' | 'xs' }) {
  const box = size === 'sm' ? 'h-[22px] w-[22px] text-[9px]' : 'h-5 w-5 text-[8px]';
  return (
    <span className="flex items-center gap-2">
      <span className={`flex items-center justify-center rounded-full bg-[#0A1E43] font-bold text-white ${box}`} aria-hidden="true">
        {initials(name)}
      </span>
      <span className="text-xs font-semibold text-[#0C1425]">{name}</span>
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPostItem }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group grid overflow-hidden rounded-[20px] border border-[#E4E9F2] bg-white shadow-[0_16px_40px_#0A1E431A] transition-shadow hover:shadow-[0_20px_50px_#0A1E4326] lg:grid-cols-[620px_1fr]"
    >
      <div className="relative h-[240px] lg:h-[420px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 620px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-6 lg:p-10">
        <span className="font-mono text-[11px] tracking-[0.12em] text-[#56637A]">{formatDate(post.post_date)}</span>
        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.25] tracking-tight text-[#0C1425] lg:text-[30px]">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-[14.5px] leading-[1.65] text-[#56637A]">{post.description}</p>
        <div className="flex items-center justify-between pt-2">
          <Author name={post.post_by} />
          <span className="inline-flex items-center gap-2 rounded-[10px] bg-[#F97316] px-[18px] py-[11px] text-[13.5px] font-semibold text-white">
            Baca Artikel
            <ArrowRight className="h-[15px] w-[15px] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function MiniCard({ post }: { post: BlogPostItem }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E9F2] bg-white shadow-[0_10px_26px_#0A1E4312] transition-colors hover:border-[#0A1E43]/30"
    >
      <div className="relative h-[184px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 p-[18px]">
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[10px] tracking-[0.12em] text-[#56637A]">{formatDate(post.post_date)}</span>
          <h3 className="line-clamp-3 font-[family-name:var(--font-display)] text-[15.5px] font-bold leading-[1.3] tracking-tight text-[#0C1425]">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-xs leading-[1.6] text-[#56637A]">{post.description}</p>
        </div>
        <div className="flex items-center justify-between pt-1.5">
          <span className="text-[11.5px] font-semibold text-[#0C1425]">{post.post_by}</span>
          <ArrowRight className="h-[15px] w-[15px] text-[#F97316] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ post }: { post: BlogPostItem }) {
  const tag = post.tags?.[0]?.toUpperCase();
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E9F2] bg-white transition-colors hover:border-[#0A1E43]/30 sm:flex-row sm:items-center"
    >
      <div className="relative h-[160px] shrink-0 sm:h-[172px] sm:w-[240px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 640px) 240px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-[18px] sm:justify-center sm:px-6">
        <div className="flex flex-wrap items-center gap-2.5">
          {tag && (
            <span className="rounded-full bg-[#FFF4EB] px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.12em] text-[#F97316]">
              {tag}
            </span>
          )}
          <span className="font-mono text-[10.5px] tracking-[0.12em] text-[#56637A]">{formatDate(post.post_date)}</span>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-[19px] font-bold leading-[1.3] tracking-tight text-[#0C1425]">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-[13px] leading-[1.6] text-[#56637A]">{post.description}</p>
        <div className="flex items-center gap-2 pt-1">
          <Author name={post.post_by} size="xs" />
          <span className="flex-1" />
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316]">
            Baca
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogClient({ initialPosts }: { initialPosts: BlogPostItem[] }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<'new' | 'old'>('new');
  const [page, setPage] = useState(1);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query, sort]);

  const visible = useMemo(() => {
    const value = query.trim().toLowerCase();
    const filtered = value
      ? initialPosts.filter((post) => `${post.title} ${post.description} ${post.tags?.join(' ')}`.toLowerCase().includes(value))
      : initialPosts;
    const direction = sort === 'new' ? -1 : 1;
    return [...filtered].sort((a, b) => direction * (new Date(a.post_date).getTime() - new Date(b.post_date).getTime()));
  }, [initialPosts, query, sort]);

  const featuredPosts = visible.filter((post) => post.featured);
  const hero = featuredPosts[0] ?? visible[0];
  const minis = featuredPosts.length > 0 ? featuredPosts.slice(1, 5) : visible.slice(1, 5);
  const excluded = new Set([hero?.slug, ...minis.map((post) => post.slug)]);
  const listed = visible.filter((post) => !excluded.has(post.slug));

  const totalPages = Math.max(1, Math.ceil(listed.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = listed.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1730]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-24 h-[600px] w-[600px] rounded-full opacity-70"
            style={{
              background:
                'radial-gradient(circle at 65% 35%, rgba(125,211,252,0.28) 0%, rgba(28,58,102,0.35) 35%, rgba(10,23,48,0) 68%), radial-gradient(circle at 30% 70%, rgba(249,115,22,0.14) 0%, rgba(10,23,48,0) 55%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-56 top-24 h-[430px] w-[430px] rounded-full opacity-60"
            style={{ background: 'radial-gradient(circle at 60% 40%, rgba(125,211,252,0.2) 0%, rgba(10,23,48,0) 65%)' }}
          />
          <div className="container relative mx-auto flex flex-col items-center px-4 pb-16 pt-32 text-center md:px-6 md:pt-36 lg:px-12">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-7 bg-[#FB923C]" aria-hidden="true" />
              <span className="font-mono text-xs tracking-[0.08em] text-[#FB923C]">BLOG &amp; INSIGHT</span>
              <span className="h-0.5 w-7 bg-[#FB923C]" aria-hidden="true" />
            </div>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[50px]">
              Our Related Content
            </h1>
            <p className="mt-5 max-w-[580px] text-base leading-[1.64] text-[#8FA1BF] md:text-[16.5px]">
              Informasi terbaru seputar teknologi, software development, dan transformasi digital untuk
              bisnis Anda.
            </p>
            <label className="relative mt-8 block w-full max-w-[560px]">
              <span className="flex items-center gap-3 rounded-full border border-[#1C3050] bg-[#13264A]/80 px-[22px] py-4 shadow-[0_12px_30px_#00000044] backdrop-blur-sm transition-colors focus-within:border-[#2a4a80]">
                <Search className="h-[17px] w-[17px] shrink-0 text-[#8FA1BF]" aria-hidden="true" />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari artikel, topik, atau kata kunci..."
                  aria-label="Cari artikel"
                  className="w-full bg-transparent text-[14.5px] text-white placeholder:text-[#8FA1BF] focus:outline-none"
                />
                <span className="hidden shrink-0 font-mono text-[11px] text-[#8FA1BF] sm:block">⌘K</span>
              </span>
            </label>
          </div>
        </section>

        {/* Artikel Unggulan */}
        {hero && (
          <section className="bg-white py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionTag>ARTIKEL UNGGULAN</SectionTag>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
                    Artikel Sorotan
                  </h2>
                </div>
                <Link href="#semua-artikel" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#F97316]">
                  Lihat Semua Artikel
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-9">
                <FeaturedCard post={hero} />
              </div>

              {minis.length > 0 && (
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {minis.map((post) => (
                    <MiniCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Semua Artikel */}
        <section id="semua-artikel" className="bg-[#F6F8FB] py-16 md:py-[88px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionTag>SEMUA ARTIKEL</SectionTag>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
                  Jelajahi Semua Insight
                </h2>
              </div>
              <div className="relative w-fit">
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as 'new' | 'old')}
                  aria-label="Urutkan artikel"
                  className="cursor-pointer appearance-none rounded-[10px] border border-[#E4E9F2] bg-white py-2.5 pl-4 pr-10 text-[13px] font-semibold text-[#0C1425] focus:border-[#0A1E43]/30 focus:outline-none"
                >
                  <option value="new">Terbaru</option>
                  <option value="old">Terlama</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-[15px] w-[15px] -translate-y-1/2 text-[#56637A]" aria-hidden="true" />
              </div>
            </div>

            {paged.length > 0 ? (
              <div className="mt-8 flex flex-col gap-4">
                {paged.map((post) => (
                  <ArticleCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="mt-8 text-[#56637A]">Artikel tidak ditemukan.</p>
            )}

            {listed.length > 0 && (
              <div className="mt-8 flex flex-col items-center justify-between gap-5 pt-3 md:flex-row">
                <p className="order-2 font-mono text-[10.5px] tracking-[0.08em] text-[#56637A] md:order-1">
                  MENAMPILKAN {paged.length} DARI {listed.length} ARTIKEL
                </p>
                <nav className="order-1 flex flex-wrap items-center justify-center gap-2 md:order-2" aria-label="Navigasi halaman">
                  <button
                    type="button"
                    onClick={() => setPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Halaman sebelumnya"
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#E4E9F2] bg-white text-[#56637A] transition-colors hover:border-[#0A1E43]/30 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {pageNumbers(currentPage, totalPages).map((item, index) =>
                    item === '...' ? (
                      <span key={`gap-${index}`} className="flex h-10 w-10 items-center justify-center font-mono text-[13px] text-[#56637A]">
                        ...
                      </span>
                    ) : (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPage(item)}
                        aria-current={item === currentPage ? 'page' : undefined}
                        className={`flex h-10 w-10 items-center justify-center rounded-[10px] font-mono text-[13px] transition-colors ${
                          item === currentPage
                            ? 'bg-[#F97316] font-bold text-white'
                            : 'border border-[#E4E9F2] bg-white text-[#56637A] hover:border-[#0A1E43]/30'
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() => setPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#0A1E43] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#13264A] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Berikutnya
                    <ChevronRight className="h-[15px] w-[15px]" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
