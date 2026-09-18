import { Metadata } from "next";
import { UPSENSE_META_DESCRIPTION } from "@/lib/site-meta";
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";
import { SITE_TITLES } from "@/lib/site-titles";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

import Hero from '@/components/home/hero';
import ClientStrip from '@/components/home/client-strip';
import About from '@/components/home/about';
import Services from '@/components/home/services';
import Platforms from '@/components/home/platforms';
import CaseStudies from '@/components/home/case-studies';
import Industries from '@/components/home/industries';
import TestimonialSection from '@/components/sections/testimonials';

export const metadata: Metadata = {
  title: SITE_TITLES.seo.home,
  description: UPSENSE_META_DESCRIPTION,
  keywords: UPSENSE_META_KEYWORDS,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id"
  },
  openGraph: {
    title: SITE_TITLES.seo.home,
    description: UPSENSE_META_DESCRIPTION,
    url: "https://upsense.co.id",
    siteName: "UPSENSE",
    locale: "id_ID",
    type: "website",
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    "@id": "https://upsense.co.id/#organization",
    "name": "PT UPSENSE Teknologi Indonesia",
    "alternateName": "UPSENSE",
    "url": "https://upsense.co.id/",
    "logo": "https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png",
    "image": "https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png",
    "description": UPSENSE_META_DESCRIPTION,
    "slogan": "Digital Transformation Partner and Digitalisation Enabler for Enterprises",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-852-1700-0041",
      "contactType": "sales",
      "email": "sales@upsense.co.id",
      "availableLanguage": ["Indonesia", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Wisma SMR, Jl. Yos Sudarso Lt 9, Unit 904, RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok",
      "addressLocality": "Jakarta Utara",
      "addressRegion": "DKI Jakarta",
      "postalCode": "14350",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.15005,
      "longitude": 106.88782
    },
    "areaServed": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "sameAs": [
      "https://www.instagram.com/upsense.id/",
      "https://id.linkedin.com/company/pt-upsense-teknologi-indonesia"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan UPSENSE",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development",
            "description": "Custom software solutions designed to support enterprise digitalisation, workflow modernisation, and operational control."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HRIS & Enterprise Systems",
            "description": "Enterprise and HR systems designed to unify business processes and strengthen digital transformation across departments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Responsive web platforms and digital systems that support enterprise digitalisation and connected business operations."
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
      <main>
        <Hero />
        <ClientStrip />
        <About />
        <Services />
        <Platforms />
        <CaseStudies />
        <TestimonialSection />
        <Industries />
      </main>
      <Footer />
    </>
  );
}
