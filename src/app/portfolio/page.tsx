import type { Metadata } from 'next';
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
    <main className="bg-white pt-20">
      <section className="bg-[#0a1e43] py-20 text-white md:py-28">
        <div className="container mx-auto max-w-6xl px-6 text-center lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Portfolio UPSENSE</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">{SITE_TITLES.portfolio.heading}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">Eksplorasi sistem enterprise, workflow, warehouse, budgeting, dan platform digital yang dirancang untuk menjawab kebutuhan operasional nyata.</p>
          <a href="/contact/" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-[#013e78] hover:bg-[#f5f8fc]">Diskusikan Sistem Anda <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
      <PortfolioSection />
      <section className="py-20 md:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><h2 className="text-3xl font-bold text-[#013e78] md:text-5xl">{SITE_TITLES.portfolio.cta}</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mulai dari kebutuhan operasional hingga implementasi, tim UPSENSE siap membantu merancang solusi yang tepat.</p><a href="/contact/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></a></div></div></section>
    </main>
    <Footer />
  </>;
}
