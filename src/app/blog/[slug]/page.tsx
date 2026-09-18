import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calendar, Layers, Code, Globe, Smartphone, Database, Workflow, Rocket, Wrench, ChevronRight } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import ShareRow from '@/components/share-row';
import { SectionTag } from '@/components/home/section-tag';
import { getCmsBlogPost, getCmsBlogPosts } from '@/lib/cms-content';
import { MiniCard } from '../BlogClient';

type PageProps = { params: Promise<{ slug: string }> };

const siteUrl = 'https://www.upsense.co.id';
const isHtml = (value: string) => /<\/?[a-z][\s\S]*>/i.test(value);
const articleUrl = (slug: string) => `${siteUrl}/blog/${slug}/`;
const serializeJsonLd = (value: object) => JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

export const dynamicParams = true;
export const revalidate = 60; // ponytail: ISR 1 menit; pilih /api/revalidate kalau butuh instan

const sidebarServices = [
  { name: 'Custom Software', href: '/services/layanan-customisasi-software-bisnis/', icon: Code },
  { name: 'Website Development', href: '/services/layanan-pengembangan-website/', icon: Globe },
  { name: 'Mobile App Development', href: '/services/layanan-pembuatan-aplikasi-mobile/', icon: Smartphone },
  { name: 'ERP Customization (Odoo)', href: '/services/odoo-erp-customization/', icon: Database },
  { name: 'Workflow & Automation', href: '/services/analytic-solutions/', icon: Workflow },
  { name: 'MVP Development', href: '/services/software-development/', icon: Rocket },
  { name: 'Maintenance & Support', href: '/services/cloud-devops/', icon: Wrench },
];

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

function authorInitials(name: string) {
  return name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? '').join('');
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getCmsBlogPost(slug);
  if (!post) notFound();

  const allPosts = (await getCmsBlogPosts()) ?? [];
  const related = allPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

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
    <main>
      <article>
        {/* Article Hero */}
        <section className="relative overflow-hidden bg-[#0b1730]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-24 h-[580px] w-[580px] rounded-full opacity-70"
            style={{
              background:
                'radial-gradient(circle at 65% 35%, rgba(125,211,252,0.28) 0%, rgba(28,58,102,0.35) 35%, rgba(10,23,48,0) 68%), radial-gradient(circle at 30% 70%, rgba(249,115,22,0.14) 0%, rgba(10,23,48,0) 55%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-56 top-24 h-[420px] w-[420px] rounded-full opacity-60"
            style={{ background: 'radial-gradient(circle at 60% 40%, rgba(125,211,252,0.2) 0%, rgba(10,23,48,0) 65%)' }}
          />
          <div className="container relative mx-auto flex flex-col gap-[22px] px-4 pb-16 pt-32 md:px-6 md:pt-36 lg:px-12">
            <h1 className="max-w-[900px] font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.14] tracking-tight text-white sm:text-4xl lg:text-[48px]">
              {post.title}
            </h1>
            <p className="max-w-[760px] text-base leading-[1.66] text-[#8FA1BF] md:text-[16.5px]">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2.5">
              <span className="flex items-center gap-2.5">
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F97316] text-xs font-bold text-white" aria-hidden="true">
                  {authorInitials(post.post_by)}
                </span>
                <span className="text-[13.5px] font-semibold text-white">{post.post_by}</span>
              </span>
              <span className="flex items-center gap-[7px] font-mono text-[11.5px] text-[#DCE4F2]">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {new Date(post.post_date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white px-4 pt-2 md:px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="relative h-[240px] overflow-hidden rounded-[20px] sm:h-[340px] lg:h-[480px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 1312px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-white pb-[88px] pt-16">
          <div className="container mx-auto grid gap-14 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_476px] lg:px-12">
            {/* Article Column */}
            <div className="max-w-[780px]">
              {isHtml(post.content) ? (
                <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-[15.5px] leading-[1.7] text-[#334155]">{post.content}</p>
              )}

              {/* Tags Row */}
              {post.tags?.length ? (
                <div className="mt-10 flex flex-wrap items-center gap-2.5 border-t border-[#E4E9F2] pt-4">
                  <span className="font-mono text-[10.5px] tracking-[0.08em] text-[#56637A]">TOPIK:</span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#E4E9F2] bg-[#F6F8FB] px-[13px] py-[7px] text-xs text-[#56637A]">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* Author Card (API) */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#E4E9F2] bg-white px-6 py-[22px]">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0A1E43] text-lg font-bold text-white" aria-hidden="true">
                  {authorInitials(post.post_by)}
                </span>
                <div>
                  <span className="font-mono text-[9.5px] tracking-[0.08em] text-[#F97316]">DITULIS OLEH</span>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-[17px] font-bold text-[#0C1425]">{post.post_by}</p>
                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#56637A]">
                    Tim UPSENSE — menulis tentang software custom, ERP, dan transformasi digital untuk bisnis.
                  </p>
                </div>
              </div>

              {/* Post Content CTA (Template) */}
              <div className="mt-8 flex flex-col gap-3.5 rounded-2xl border border-[#F97316]/25 bg-[#FFF4EB] p-[30px]">
                <h2 className="font-[family-name:var(--font-display)] text-[22px] font-bold tracking-tight text-[#0C1425]">
                  Butuh solusi digital untuk bisnis Anda?
                </h2>
                <p className="text-[13.5px] leading-[1.65] text-[#56637A]">
                  Diskusikan kebutuhan sistem, proses, atau transformasi digital bersama tim UPSENSE.
                  Konsultasi awal gratis, tanpa komitmen.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#0A1E43] px-5 py-[13px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#13264A]"
                >
                  Hubungi UPSENSE
                  <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
              {/* Layanan Kami */}
              <div className="rounded-2xl border border-[#E4E9F2] bg-white px-[22px] pb-[22px] pt-2">
                <div className="flex items-center gap-2 border-b border-[#E4E9F2] pb-3 pt-3.5">
                  <Layers className="h-[15px] w-[15px] text-[#F97316]" aria-hidden="true" />
                  <span className="font-mono text-[11px] tracking-[0.16em] text-[#0C1425]">LAYANAN KAMI</span>
                </div>
                <div>
                  {sidebarServices.map(({ name, href, icon: Icon }) => (
                    <Link key={name} href={href} className="group flex items-center gap-3 py-2.5">
                      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg bg-[#0A1E43]">
                        <Icon className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                      </span>
                      <span className="text-[13.5px] text-[#0C1425]">{name}</span>
                      <span className="flex-1" />
                      <ChevronRight className="h-3.5 w-3.5 text-[#56637A] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <Link href="/services/" className="flex items-center gap-[7px] border-t border-[#E4E9F2] pt-3.5 text-[12.5px] font-semibold text-[#F97316]">
                  Lihat Semua Layanan
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              {/* Sidebar CTA */}
              <div
                className="relative overflow-hidden rounded-2xl px-6 py-[26px]"
                style={{ background: 'linear-gradient(225deg, #13264A 0%, #0A1E43 100%)' }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 h-[300px] w-[300px] rounded-full opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0) 70%)' }}
                />
                <div className="relative flex flex-col gap-3.5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white">
                    Butuh solusi digital untuk bisnis Anda?
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-[#8FA1BF]">
                    Diskusikan kebutuhan sistem, proses, atau transformasi digital bersama tim UPSENSE.
                  </p>
                  <a
                    href="https://api.whatsapp.com/send?phone=6285217000041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center justify-center gap-2.5 rounded-[10px] bg-[#23C55E] px-[18px] py-[13px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#1da350]"
                  >
                    Hubungi UPSENSE
                    <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Share Card */}
              <div className="flex flex-col gap-3 rounded-2xl border border-[#E4E9F2] bg-white px-[22px] py-5">
                <span className="font-mono text-[11px] tracking-[0.08em] text-[#56637A]">BAGIKAN ARTIKEL</span>
                <ShareRow url={url} />
              </div>
            </aside>
          </div>
        </section>

        {/* Artikel Terkait */}
        {related.length > 0 && (
          <section className="bg-[#F6F8FB] py-16 md:py-[72px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionTag>LANJUTKAN MEMBACA</SectionTag>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[32px]">
                    Artikel Terkait
                  </h2>
                </div>
                <Link href="/blog/" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#F97316]">
                  Lihat Blog
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <MiniCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </main>
    <Footer />
  </>;
}
