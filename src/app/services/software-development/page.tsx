import { Metadata } from "next";
import { SITE_TITLES } from '@/lib/site-titles';
import { renderJsonLd } from "@/lib/structured-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta";
import { Code2, Cog, Layers, Rocket, Settings, ShoppingCart, Wallet, Users, Package, Globe, FileText, Shield, Cloud } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['software-development'],
  description: "Layanan software development profesional untuk ERP, HRIS, CRM, dan sistem bisnis custom. Solusi tailormade dengan teknologi terkini untuk perusahaan Anda.",
  keywords: "software development, custom software, ERP development, HRIS development, CRM development, tailormade software, jasa software development jakarta",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services/software-development"
  },
  openGraph: {
    title: SITE_TITLES.servicesBySlug['software-development'],
    description: "Layanan software development profesional untuk ERP, HRIS, CRM, dan sistem bisnis custom.",
    url: "https://upsense.co.id/services/software-development",
    type: "website",
  },
};

export default function SoftwareDevelopmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Software Development Custom - JasaKoding",
    "description": "🚀 JASA SOFTWARE DEVELOPMENT #1 TERBAIK DI INDONESIA! JasaKoding (UPSENSE) adalah jasa developer aplikasi profesional dengan 3805+ proyek sukses dan rating 4.9/5! Jasa development aplikasi ERP, HRIS, CRM custom terlengkap. Developer aplikasi adalah keahlian utama kami! Jasa pengembangan aplikasi tailormade, jasa developer aplikasi enterprise, jasa aplikasi android native, jasa pembuatan aplikasi desktop Windows/Mac, jasa android development modern. PT jasa pembuatan aplikasi terpercaya dengan aplikasi jasa desain UI/UX profesional, jasa app developer bersertifikat internasional, dan aplikasi developer berpengalaman 5+ tahun!",
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
      icon: Code2,
      title: "Custom Development",
      description: "Pengembangan software sesuai kebutuhan bisnis Anda dengan teknologi terkini dan best practices.",
    },
    {
      icon: Cog,
      title: "System Integration",
      description: "Integrasi sistem yang mulus dengan aplikasi existing untuk meningkatkan efisiensi operasional.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Arsitektur yang dapat berkembang seiring pertumbuhan bisnis Anda tanpa hambatan.",
    },
    {
      icon: Rocket,
      title: "Fast Deployment",
      description: "Proses development yang efisien dengan metodologi Agile untuk delivery yang cepat.",
    },
  ];

  const softwareTypes = [
    {
      icon: Settings,
      title: "ERP Customizable",
      description: "Sistem ERP yang dapat disesuaikan dengan proses bisnis perusahaan Anda untuk mengelola seluruh operasional secara terintegrasi."
    },
    {
      icon: ShoppingCart,
      title: "Sales Order System",
      description: "Aplikasi manajemen pesanan penjualan yang memudahkan tracking order, invoice, dan pembayaran pelanggan."
    },
    {
      icon: Wallet,
      title: "Finance & Budget System",
      description: "Sistem keuangan dan budgeting untuk monitoring cash flow, laporan keuangan, dan perencanaan anggaran perusahaan."
    },
    {
      icon: Users,
      title: "HRIS (Human Resource Information System)",
      description: "Solusi HR lengkap untuk payroll, absensi, cuti, performance review, dan manajemen karyawan."
    },
    {
      icon: Package,
      title: "Inventory & Supply Chain System",
      description: "Sistem manajemen inventory dan supply chain untuk kontrol stok, warehouse, dan distribusi barang."
    },
    {
      icon: Globe,
      title: "Website Company Profile",
      description: "Website profesional untuk company profile dengan desain modern, SEO-friendly, dan responsive di semua device."
    },
    {
      icon: FileText,
      title: "Bill of Materials System",
      description: "Aplikasi untuk mengelola Bill of Materials (BOM), product structure, dan komponen produksi manufaktur."
    },
    {
      icon: Shield,
      title: "Membership Gate System",
      description: "Sistem manajemen keanggotaan dan akses kontrol untuk mengelola member, subscription, dan hak akses secara otomatis."
    },
    {
      icon: Cloud,
      title: "Cloud Software Application",
      description: "Aplikasi berbasis cloud yang dapat diakses kapan saja, dimana saja dengan keamanan tinggi dan skalabilitas optimal."
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
        <section className="relative text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://upsense.co.id/img/26.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Software Development Custom
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Solusi pengembangan software tailormade untuk ERP, HRIS, CRM, dan sistem bisnis lainnya. 
                Kami membantu perusahaan Anda dalam transformasi digital dengan aplikasi yang tepat sasaran.
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
                Kenapa Memilih <span className="text-primary">Software Development</span> Kami?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  UPSENSE adalah mitra terpercaya untuk pengembangan software custom yang dirancang 
                  khusus sesuai kebutuhan bisnis Anda. Dengan pengalaman lebih dari 5 tahun, kami telah membantu 
                  berbagai perusahaan dari berbagai industri untuk mengoptimalkan proses bisnis mereka.
                </p>
                <p className="mb-4">
                  Kami mengkhususkan diri dalam pengembangan sistem ERP (Enterprise Resource Planning), 
                  HRIS (Human Resource Information System), CRM (Customer Relationship Management), 
                  dan berbagai aplikasi bisnis lainnya yang dapat disesuaikan dengan workflow perusahaan Anda.
                </p>
                <p>
                  Tim developer kami yang berpengalaman akan bekerja sama dengan Anda dari tahap konsultasi, 
                  perencanaan, development, hingga deployment dan maintenance untuk memastikan solusi yang 
                  kami berikan memberikan value maksimal bagi bisnis Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Keunggulan Layanan Kami
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
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Layanan & Aplikasi yang kami kembangkan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softwareTypes.map((software, index) => {
                  const Icon = software.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{software.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{software.description}</p>
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
