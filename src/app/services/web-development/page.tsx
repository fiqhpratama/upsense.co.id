import { Metadata } from "next";
import { SITE_TITLES } from '@/lib/site-titles';
import { renderJsonLd } from "@/lib/structured-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta";
import { Globe, Smartphone, Zap, Shield, Building2, ShoppingBag, LayoutDashboard, Megaphone, FileText, Calendar, GraduationCap, Code } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['web-development'],
  description: "Layanan pembuatan website profesional dan web application custom. Company profile, e-commerce, web portal, dan sistem berbasis web untuk bisnis Anda.",
  keywords: "web development, pembuatan website, website company profile, web application, jasa website jakarta, web developer indonesia",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services/web-development"
  },
  openGraph: {
    title: SITE_TITLES.servicesBySlug['web-development'],
    description: "Layanan pembuatan website profesional dan web application custom untuk bisnis Anda.",
    url: "https://upsense.co.id/services/web-development",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Pengembangan Aplikasi Web & Website - JasaKoding",
    "description": "💻 JASA APP DEVELOPER WEB TERBAIK & TERCEPAT! JasaKoding adalah jasa pengembangan aplikasi web profesional dengan 3805+ website & aplikasi web sukses! Jasa developer aplikasi web, jasa software development website, jasa development aplikasi berbasis web dengan rating 4.9/5! Developer aplikasi adalah passion kami. Jasa aplikasi android juga tersedia! PT jasa pembuatan aplikasi web terpercaya dengan aplikasi jasa desain UI/UX modern, jasa pembuatan aplikasi desktop cloud-based, jasa android development responsive. Jasa developer dengan teknologi terkini: React, Next.js, Node.js untuk aplikasi developer skala enterprise!",
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
      icon: Globe,
      title: "Responsive Design",
      description: "Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone.",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimasi kecepatan loading untuk pengalaman pengguna yang optimal dan SEO yang lebih baik.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Keamanan tingkat enterprise dengan SSL, backup rutin, dan monitoring 24/7.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Didesain dengan pendekatan mobile-first untuk menjangkau pengguna mobile yang terus bertumbuh.",
    },
  ];

  const websiteTypes = [
    {
      icon: Building2,
      title: "Company Profile Website",
      description: "Website profesional untuk membangun brand identity dan kredibilitas perusahaan Anda di dunia digital."
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Online Store",
      description: "Toko online lengkap dengan sistem pembayaran, manajemen produk, dan tracking order untuk bisnis Anda."
    },
    {
      icon: LayoutDashboard,
      title: "Web Portal & Dashboard",
      description: "Portal informasi dan dashboard interaktif untuk monitoring data dan manajemen konten secara real-time."
    },
    {
      icon: Megaphone,
      title: "Landing Page & Campaign Site",
      description: "Landing page yang conversion-focused untuk campaign marketing dan lead generation yang efektif."
    },
    {
      icon: FileText,
      title: "Blog & Content Management System",
      description: "Platform blog dan CMS yang mudah digunakan untuk mengelola dan mempublikasikan konten Anda."
    },
    {
      icon: Calendar,
      title: "Booking & Reservation System",
      description: "Sistem booking online untuk mengelola reservasi, jadwal, dan appointment secara otomatis."
    },
    {
      icon: GraduationCap,
      title: "Learning Management System (LMS)",
      description: "Platform e-learning lengkap dengan fitur course management, quiz, dan tracking progress siswa."
    },
    {
      icon: Code,
      title: "Custom Web Application",
      description: "Aplikasi web custom sesuai kebutuhan spesifik bisnis Anda dengan fitur dan fungsionalitas yang tailormade."
    }
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
        <section className="relative text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://upsense.co.id/img/26.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Web Development
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Layanan pembuatan website profesional yang responsif, cepat, dan SEO-friendly. 
                Dari company profile hingga aplikasi web kompleks, kami siap mewujudkan kebutuhan digital Anda.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Solusi <span className="text-primary">Web Development</span> Terpercaya
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Di era digital ini, website bukan hanya sekadar online presence, tetapi merupakan aset penting 
                  untuk pertumbuhan bisnis. UPSENSE menyediakan layanan web development yang komprehensif, 
                  mulai dari website company profile yang elegan hingga web application yang kompleks.
                </p>
                <p className="mb-4">
                  Kami menggunakan teknologi web terkini seperti React, Next.js, Node.js, dan framework modern 
                  lainnya untuk memastikan website Anda tidak hanya tampil menarik, tetapi juga cepat, aman, 
                  dan mudah dikembangkan di masa depan.
                </p>
                <p>
                  Setiap proyek web development kami dirancang dengan pendekatan user-centric, SEO-friendly, 
                  dan mobile-responsive untuk memberikan pengalaman terbaik bagi pengunjung website Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Mengapa Memilih Kami?
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Jenis Website yang Kami Buat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {websiteTypes.map((website, index) => {
                const Icon = website.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all group"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{website.title}</h3>
                    <p className="text-muted-foreground">{website.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
