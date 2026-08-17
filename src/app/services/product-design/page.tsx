import { Metadata } from "next";
import { SITE_TITLES } from '@/lib/site-titles';
import { renderJsonLd } from "@/lib/structured-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta";
import { Palette, Users, Layout, Sparkles, Search, Layers, TestTube, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['product-design'],
  description: "Layanan product design dan UI/UX design profesional. User research, wireframing, prototyping, dan visual design untuk produk digital yang user-friendly.",
  keywords: "product design, UI design, UX design, user experience, user interface, wireframing, prototyping, design thinking, jasa design UI UX jakarta",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services/product-design"
  },
  openGraph: {
    title: SITE_TITLES.servicesBySlug['product-design'],
    description: "Layanan product design dan UI/UX design untuk produk digital yang user-friendly.",
    url: "https://upsense.co.id/services/product-design",
    type: "website",
  },
};

export default function ProductDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aplikasi Jasa Desain Product & UI/UX - JasaKoding",
    "description": "✨ APLIKASI JASA DESAIN PRODUCT #1 TERBAIK! JasaKoding adalah aplikasi jasa desain UI/UX profesional dengan 3805+ proyek sukses dan rating 4.9/5! Jasa developer aplikasi dengan keahlian product design terbaik. Developer aplikasi adalah passion kami dalam creating user-centric design! Jasa development aplikasi dengan design thinking approach, jasa software development berbasis user research, jasa pengembangan aplikasi dengan prototyping interaktif, jasa app developer UI/UX modern, PT jasa pembuatan aplikasi dengan aplikasi jasa desain premium, jasa aplikasi android dengan UX terbaik!",
    "brand": {
      "@type": "Brand",
      "name": "UPSENSE - JasaKoding"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3805"
    },
    "provider": {
      "@type": "Organization",
      "@id": "https://upsense.co.id/#organization"
    }
  };

  const features = [
    {
      icon: Users,
      title: "User Research",
      description: "Riset mendalam tentang kebutuhan user untuk memastikan produk yang relevan dan bermanfaat.",
    },
    {
      icon: Layout,
      title: "Wireframing & Prototyping",
      description: "Prototype interaktif untuk validasi konsep sebelum masuk ke tahap development.",
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Desain visual yang menarik, konsisten, dan aligned dengan brand identity perusahaan.",
    },
    {
      icon: Sparkles,
      title: "Usability Testing",
      description: "Testing dengan real users untuk memastikan produk mudah digunakan dan intuitif.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJsonLd(jsonLd)}
      />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0a1e43] py-20 text-white lg:py-28">
          <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Product Design
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Desain produk digital yang user-centric dengan fokus pada UX/UI excellence. 
                Dari riset user hingga prototype interaktif, kami ciptakan pengalaman digital yang memorable.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
            <img src="https://images.unsplash.com/photo-1651129518142-e0830a4c184b" alt="Product design collaboration and interface planning" className="w-full rounded-[28px] border border-white/20 shadow-2xl" />
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Design yang Berfokus pada <span className="text-primary">User Experience</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Great product dimulai dengan great design. UPSENSE menyediakan layanan product design 
                  yang komprehensif, mulai dari user research, information architecture, wireframing, prototyping, 
                  hingga visual design yang polished.
                </p>
                <p className="mb-4">
                  Tim product designer kami menggunakan pendekatan design thinking dan user-centered design 
                  untuk memastikan setiap keputusan design didukung oleh data dan insights tentang user behavior. 
                  Kami bekerja dengan tools modern seperti Figma, Adobe XD, dan Sketch untuk menciptakan 
                  design yang pixel-perfect dan ready untuk development.
                </p>
                <p>
                  Baik Anda memerlukan redesign untuk produk existing atau design dari scratch untuk produk baru, 
                  kami siap membantu menciptakan interface yang intuitive, accessible, dan delightful untuk 
                  end users Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Proses Design Kami
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Layanan Product Design Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Search,
                    title: "User Research & Personas",
                    description: "Riset mendalam tentang user behavior dan pembuatan personas untuk informed design decisions",
                  },
                  {
                    icon: Layers,
                    title: "Information Architecture",
                    description: "Struktur informasi yang intuitif untuk navigasi yang mudah dan user-friendly",
                  },
                  {
                    icon: Layout,
                    title: "Wireframing & Prototyping",
                    description: "Prototype interaktif untuk validasi konsep dan testing sebelum development",
                  },
                  {
                    icon: Palette,
                    title: "UI Visual Design",
                    description: "Desain visual yang menarik, modern, dan aligned dengan brand identity",
                  },
                  {
                    icon: Layers,
                    title: "Design System Development",
                    description: "Komponen design system yang konsisten untuk skalabilitas dan efisiensi",
                  },
                  {
                    icon: TestTube,
                    title: "Usability Testing",
                    description: "Testing dengan real users untuk memastikan produk mudah digunakan dan intuitif",
                  },
                  {
                    icon: Layout,
                    title: "Responsive Web Design",
                    description: "Design yang optimal untuk semua device dari mobile hingga desktop",
                  },
                  {
                    icon: FileText,
                    title: "Design Handoff & Documentation",
                    description: "Dokumentasi lengkap dan handoff yang smooth untuk developer team",
                  },
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 bg-secondary rounded-lg hover:bg-primary/5 hover:border-primary transition-all border border-transparent hover:shadow-md"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
