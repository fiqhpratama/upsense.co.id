import { Metadata } from "next";
import { SITE_TITLES } from '@/lib/site-titles';
import { renderJsonLd } from "@/lib/structured-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta";
import { BarChart3, TrendingUp, Database, PieChart, LayoutDashboard, DollarSign, Settings, Users, Package, UserCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['analytic-solutions'],
  description: "Layanan analytic solutions dan business intelligence untuk mengubah data menjadi insight yang actionable. Dashboard, reporting, dan data visualization profesional.",
  keywords: "analytic solutions, business intelligence, data analytics, dashboard analytics, reporting system, data visualization, BI consultant jakarta",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services/analytic-solutions"
  },
  openGraph: {
    title: SITE_TITLES.servicesBySlug['analytic-solutions'],
    description: "Layanan analytic solutions untuk mengubah data menjadi insight yang actionable.",
    url: "https://upsense.co.id/services/analytic-solutions",
    type: "website",
  },
};

export default function AnalyticSolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Development Aplikasi Analytics & Business Intelligence - JasaKoding",
    "description": "📊 JASA DEVELOPER APLIKASI ANALYTICS TERBAIK! JasaKoding menyediakan jasa development aplikasi analytics dan BI dashboard dengan rating 4.9/5 dari 3805+ klien! Jasa software development analytics, jasa pengembangan aplikasi dashboard interaktif profesional. Developer aplikasi adalah keahlian kami dalam data visualization! PT jasa pembuatan aplikasi analytics terpercaya, jasa developer aplikasi reporting, aplikasi jasa desain dashboard modern, jasa app developer BI solutions, dan jasa aplikasi android untuk mobile analytics!",
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
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Dashboard interaktif yang memudahkan pemantauan KPI dan metrics bisnis secara real-time.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Analisis prediktif untuk membantu perencanaan bisnis dan pengambilan keputusan strategis.",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Integrasi data dari berbagai sumber untuk analisis yang komprehensif dan holistik.",
    },
    {
      icon: PieChart,
      title: "Custom Reports",
      description: "Laporan dan visualisasi data custom yang disesuaikan dengan kebutuhan bisnis Anda.",
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
                Analytic Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Ubah data menjadi insight yang actionable dengan solusi analytics canggih. 
                Dashboard interaktif, business intelligence, dan data visualization untuk pengambilan keputusan yang lebih baik.
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
                Maksimalkan Potensi <span className="text-primary">Data Bisnis</span> Anda
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Dalam era big data, kemampuan untuk menganalisis dan memahami data menjadi kunci kesuksesan bisnis. 
                  UPSENSE menyediakan solusi analytic dan business intelligence yang membantu perusahaan 
                  mengubah data mentah menjadi insight yang actionable.
                </p>
                <p className="mb-4">
                  Kami mengimplementasikan dashboard analytics, reporting system, dan data visualization tools 
                  yang powerful menggunakan teknologi seperti Power BI, Tableau, dan custom-built solutions 
                  yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
                </p>
                <p>
                  Tim data analyst kami yang berpengalaman akan bekerja sama dengan Anda untuk memahami 
                  KPI bisnis, merancang struktur data yang optimal, dan membangun solusi analytics yang 
                  memberikan value langsung untuk pengambilan keputusan strategis perusahaan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Fitur Unggulan
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
                Solusi Analytics yang Kami Tawarkan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: LayoutDashboard,
                    title: "Business Intelligence Dashboard",
                    description: "Dashboard BI interaktif dengan visualisasi real-time untuk monitoring KPI bisnis",
                  },
                  {
                    icon: TrendingUp,
                    title: "Sales & Marketing Analytics",
                    description: "Analisis performa sales dan campaign marketing untuk optimasi ROI",
                  },
                  {
                    icon: DollarSign,
                    title: "Financial Analytics & Reporting",
                    description: "Laporan keuangan otomatis dengan analisis mendalam untuk decision making",
                  },
                  {
                    icon: Settings,
                    title: "Operational Analytics",
                    description: "Monitoring operasional dan efisiensi proses bisnis secara real-time",
                  },
                  {
                    icon: Users,
                    title: "Customer Analytics & Segmentation",
                    description: "Analisis perilaku customer dan segmentasi untuk targeting yang lebih efektif",
                  },
                  {
                    icon: Package,
                    title: "Supply Chain Analytics",
                    description: "Optimasi supply chain dengan predictive analytics dan inventory insights",
                  },
                  {
                    icon: UserCheck,
                    title: "HR Analytics & Workforce Planning",
                    description: "Analisis workforce, produktivitas, dan perencanaan SDM berbasis data",
                  },
                  {
                    icon: PieChart,
                    title: "Custom Data Visualization",
                    description: "Visualisasi data custom yang disesuaikan dengan kebutuhan spesifik bisnis",
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
