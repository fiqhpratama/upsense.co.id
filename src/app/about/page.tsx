import { Metadata } from "next";
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Suspense, lazy } from 'react';

// Lazy load AboutSection
const AboutSection = lazy(() => import('@/components/sections/about'));

// Loading skeleton
const SectionSkeleton = () => (
  <div className="py-24 lg:py-32 bg-white">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="h-[500px] bg-gray-200 rounded-2xl"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const metadata: Metadata = {
  title: "Tentang UPSENSE | Partner Teknologi Jakarta",
  description: "Kenali UPSENSE, partner teknologi Jakarta untuk custom software, otomatisasi proses, dan sistem digital perusahaan.",
  keywords: UPSENSE_META_KEYWORDS,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/about"
  },
  openGraph: {
    title: "Tentang UPSENSE | Konsultan Teknologi & Software House Jakarta",
    description: "Kenali UPSENSE, partner teknologi Jakarta untuk custom software, otomatisasi proses, dan sistem digital perusahaan.",
    url: "https://upsense.co.id/about",
    type: "website",
  }
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://upsense.co.id/#organization",
      "name": "UPSENSE",
      "alternateName": "JasaKoding",
      "url": "https://upsense.co.id",
      "description": "💎 JASA DEVELOPER TERPERCAYA #1! UPSENSE (JasaKoding) adalah jasa software development dengan 3805+ proyek sukses! Jasa development aplikasi profesional, jasa developer aplikasi handal, jasa pengembangan aplikasi terlengkap. Developer aplikasi adalah passion kami! PT jasa pembuatan aplikasi yang telah dipercaya ratusan perusahaan. Jasa aplikasi android, jasa pembuatan aplikasi desktop, jasa android development, aplikasi jasa desain, dan jasa app developer berkelas internasional!",
      "foundingDate": "2018",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3805"
      },
      "slogan": "Build your future impact with UPSENSE - Jasa Developer Aplikasi Super SEO Terbaik!",
      "knowsAbout": [
        "Jasa development aplikasi",
        "Jasa developer profesional",
        "Jasa software development",
        "Jasa developer aplikasi",
        "Jasa aplikasi android",
        "Jasa aplikasi custom",
        "Jasa app developer",
        "Jasa pengembangan aplikasi",
        "Developer aplikasi adalah keahlian kami",
        "Aplikasi jasa desain",
        "PT jasa pembuatan aplikasi",
        "Aplikasi developer",
        "Jasa pembuatan aplikasi desktop",
        "Jasa android development",
        "JasaKoding"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-16">
        <header className="container mx-auto px-6 pt-12 lg:px-12"><h1 className="text-4xl font-bold text-[#013e78] md:text-5xl">Tentang UPSENSE</h1></header>
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
