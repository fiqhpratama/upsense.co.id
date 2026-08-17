import { Metadata } from "next";
import { SITE_TITLES } from '@/lib/site-titles';
import { renderJsonLd } from "@/lib/structured-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta";
import { Smartphone, Tablet, Zap, Heart, ShoppingBag, MessageCircle, Briefcase, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['app-design'],
  description: "Layanan design aplikasi mobile untuk Android dan iOS. UI/UX design yang native, intuitive, dan mengikuti design guidelines platform.",
  keywords: "app design, mobile app design, android app design, iOS app design, mobile UI UX, app interface design, jasa design aplikasi jakarta",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services/app-design"
  },
  openGraph: {
    title: SITE_TITLES.servicesBySlug['app-design'],
    description: "Layanan design aplikasi mobile untuk Android dan iOS dengan UI/UX yang intuitive.",
    url: "https://upsense.co.id/services/app-design",
    type: "website",
  },
};

export default function AppDesignPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa App Developer & Aplikasi Jasa Desain Mobile UI/UX - JasaKoding",
    "description": "🎨 APLIKASI JASA DESAIN MOBILE #1 TERBAIK! JasaKoding adalah jasa app developer dengan keahlian design UI/UX mobile profesional! Rating 4.9/5 dari 3805+ klien puas. Jasa developer aplikasi Android & iOS dengan aplikasi jasa desain modern. Developer aplikasi adalah passion kami! Jasa development aplikasi dengan design yang intuitif, jasa software development mobile terlengkap, jasa pengembangan aplikasi Android native, jasa aplikasi android dengan UI/UX terbaik, PT jasa pembuatan aplikasi mobile terpercaya!",
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
      icon: Smartphone,
      title: "Native Design",
      description: "Design yang mengikuti guidelines Android Material Design dan iOS Human Interface Guidelines.",
    },
    {
      icon: Tablet,
      title: "Multi-Device Support",
      description: "Optimasi design untuk berbagai ukuran layar, dari smartphone hingga tablet.",
    },
    {
      icon: Zap,
      title: "Intuitive Interface",
      description: "Interface yang mudah dipahami dan digunakan dengan navigation flow yang jelas.",
    },
    {
      icon: Heart,
      title: "Delightful Experience",
      description: "Micro-interactions dan animations yang membuat pengalaman menggunakan app lebih menyenangkan.",
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
                App Design
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Desain aplikasi mobile yang intuitif dan engaging untuk iOS dan Android. 
                Kombinasi sempurna antara estetika modern dan fungsionalitas yang user-friendly.
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
                Mobile Experience yang <span className="text-primary">Memorable</span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Mobile app adalah salah satu touchpoint terpenting antara brand dan customers. 
                  UPSENSE menyediakan layanan app design yang fokus pada creating exceptional 
                  mobile experience yang native, intuitive, dan engaging.
                </p>
                <p className="mb-4">
                  Tim mobile designer kami memahami perbedaan fundamental antara design untuk Android dan iOS. 
                  Kami mengikuti Material Design guidelines untuk Android dan Human Interface Guidelines untuk iOS, 
                  sambil tetap mempertahankan brand identity yang konsisten across platforms.
                </p>
                <p>
                  Dari onboarding flow yang smooth, navigation yang intuitif, hingga micro-interactions 
                  yang delightful - setiap detail dirancang dengan cermat untuk memberikan pengalaman 
                  mobile terbaik bagi users Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Keunggulan App Design Kami
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
                Jenis App Design yang Kami Tawarkan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: "Android App UI/UX Design",
                    description: "Design native Android dengan Material Design guidelines untuk pengalaman optimal",
                  },
                  {
                    icon: Smartphone,
                    title: "iOS App UI/UX Design",
                    description: "Design native iOS mengikuti Human Interface Guidelines untuk seamless experience",
                  },
                  {
                    icon: Tablet,
                    title: "Cross-Platform App Design",
                    description: "Design konsisten untuk multi-platform dengan adaptasi untuk setiap OS",
                  },
                  {
                    icon: ShoppingBag,
                    title: "E-Commerce Mobile App",
                    description: "Design toko online mobile dengan fokus pada conversion dan user engagement",
                  },
                  {
                    icon: MessageCircle,
                    title: "Social Media App",
                    description: "Design aplikasi sosial dengan fokus pada interaksi user dan content sharing",
                  },
                  {
                    icon: Briefcase,
                    title: "Productivity & Business App",
                    description: "Design aplikasi produktivitas dan bisnis yang efisien dan user-friendly",
                  },
                  {
                    icon: Gamepad2,
                    title: "Gaming & Entertainment App",
                    description: "Design aplikasi gaming dan entertainment dengan UI yang engaging dan immersive",
                  },
                  {
                    icon: Heart,
                    title: "Healthcare & Fitness App",
                    description: "Design aplikasi kesehatan dan fitness dengan fokus pada usability dan tracking",
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
