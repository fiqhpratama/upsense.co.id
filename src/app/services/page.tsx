import { Metadata } from "next";
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Suspense, lazy } from 'react';

const CoreServicesSection = lazy(() => import('@/components/sections/about'));
import ProcessSection from '@/components/sections/process';

const SectionSkeleton = () => (
  <div className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
          <div className="h-64 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  </div>
);

export const metadata: Metadata = {
  title: "Layanan UPSENSE | Software & Transformasi Digital",
  description: "Layanan UPSENSE mencakup custom software, ERP, HRIS, aplikasi web dan mobile, integrasi sistem, serta otomasi proses bisnis.",
  keywords: UPSENSE_META_KEYWORDS,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services"
  },
  openGraph: {
    title: "Layanan UPSENSE | IT Consulting, Custom Software & Digital Transformation",
    description: "Layanan UPSENSE mencakup custom software, ERP, HRIS, aplikasi web dan mobile, integrasi sistem, serta otomasi proses bisnis.",
    url: "https://upsense.co.id/services",
    type: "website",
  }
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Jasa Development Aplikasi dan Software Development",
    "provider": {
      "@type": "Organization",
      "@id": "https://upsense.co.id/#organization",
      "name": "UPSENSE - JasaKoding"
    },
    "description": "Layanan software development profesional: Custom Software Development, Integration Specialist, Website Development, Mobile App Development, dan Custom AI Driven Development.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3805"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Katalog Layanan Jasa Development Aplikasi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Bespoke software solutions meticulously engineered to align with your proprietary workflows."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integration Specialist",
            "description": "Orchestrating the seamless convergence of disparate systems to synchronize data architecture."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "High-caliber digital platforms featuring sophisticated architecture and responsive design."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Sophisticated mobile and web ecosystems delivering superior user experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom AI Driven Development",
            "description": "Advanced AI implementations engineered for cognitive automation and predictive analytics."
          }
        }
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
        <header className="container mx-auto px-6 pt-12 lg:px-12"><h1 className="text-4xl font-bold text-[#013e78] md:text-5xl">Layanan Transformasi Digital UPSENSE</h1></header>
        <Suspense fallback={<SectionSkeleton />}>
          <CoreServicesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProcessSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
