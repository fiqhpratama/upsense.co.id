import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import PortfolioSection from '@/components/sections/portfolio';
import { SITE_TITLES } from '@/lib/site-titles';

export const metadata: Metadata = {
  title: SITE_TITLES.seo.portfolio,
  description: 'Portfolio UPSENSE untuk custom software, ERP, HRIS, warehouse system, budgeting, e-commerce, dan digital solutions perusahaan.',
  alternates: { canonical: 'https://upsense.co.id/portfolio/' },
  openGraph: {
    title: SITE_TITLES.seo.portfolio,
    description: 'Lihat portfolio solusi digital dan sistem enterprise yang dibangun oleh UPSENSE.',
    url: 'https://upsense.co.id/portfolio/',
    type: 'website',
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfolio Custom Software, ERP & HRIS UPSENSE',
    description: 'Kumpulan solusi custom software, ERP, HRIS, warehouse, budgeting, e-commerce, dan sistem digital perusahaan dari UPSENSE.',
    url: 'https://upsense.co.id/portfolio/',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1266',
    },
    about: { '@type': 'Organization', '@id': 'https://upsense.co.id/#organization' },
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0b1730]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-24 h-[640px] w-[640px] rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(circle at 65% 35%, rgba(125,211,252,0.28) 0%, rgba(28,58,102,0.35) 35%, rgba(10,23,48,0) 68%), radial-gradient(circle at 30% 70%, rgba(249,115,22,0.14) 0%, rgba(10,23,48,0) 55%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-56 top-32 h-[420px] w-[420px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(125,211,252,0.2) 0%, rgba(10,23,48,0) 65%)' }}
        />
        <div className="container relative mx-auto px-4 pb-21 pt-32 md:px-6 md:pt-36 lg:px-12">
          <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
            
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[56px]">
              Solusi yang Kami Bangun untuk Bisnis
            </h1>
            <p className="mt-5 max-w-[660px] text-base leading-[1.64] text-[#8FA1BF] md:text-[16.5px]">
              Eksplorasi sistem enterprise, workflow, warehouse, budgeting, dan platform digital yang
              dirancang untuk menjawab kebutuhan operasional nyata.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 bg-[#F97316] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
            >
              Diskusikan Sistem Anda
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <PortfolioSection />

      {/* CTA Section */}
      <section className="bg-white pb-24 pt-2 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div
            className="relative overflow-hidden rounded-[24px] px-8 py-12 md:p-16"
            style={{ background: 'linear-gradient(225deg, #13264A 0%, #0A1E43 100%)' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0) 70%)' }}
            />
            <div className="relative flex max-w-[680px] flex-col items-start">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.2] tracking-tight text-white md:text-[38px]">
                Punya kebutuhan sistem atau ide yang ingin dikembangkan?
              </h2>
              <p className="mt-4 max-w-[560px] text-[15.5px] leading-[1.6] text-[#8FA1BF]">
                Mulai dari kebutuhan operasional hingga implementasi, tim UPSENSE siap membantu
                merancang solusi yang tepat.
              </p>
              <Link
                href="/contact/"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-[26px] py-[15px] text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
              >
                Hubungi UPSENSE
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
