import { Metadata } from "next";
import { SITE_TITLES } from '@/lib/site-titles';
import { renderJsonLd } from "@/lib/structured-data";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import CtaSection from "@/components/sections/cta";
import { Cloud, GitBranch, Server, Shield, Aws, Container, Activity, Box } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['cloud-devops'],
  description: "Layanan cloud migration, infrastructure as code, CI/CD pipeline, dan DevOps consulting. Optimasi infrastruktur untuk performance dan scalability maksimal.",
  keywords: "cloud services, devops, cloud migration, AWS, Google Cloud, Azure, CI/CD, infrastructure automation, kubernetes, docker",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/services/cloud-devops"
  },
  openGraph: {
    title: SITE_TITLES.servicesBySlug['cloud-devops'],
    description: "Layanan cloud migration dan DevOps untuk optimasi infrastruktur aplikasi Anda.",
    url: "https://upsense.co.id/services/cloud-devops",
    type: "website",
  },
};

export default function CloudDevOpsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa Developer Aplikasi Cloud & DevOps - JasaKoding",
    "description": "☁️ JASA DEVELOPER CLOUD & DEVOPS TERPERCAYA! JasaKoding menyediakan jasa development aplikasi cloud-based dengan rating 4.9/5 dari 3805+ klien! Jasa software development cloud migration profesional. Developer aplikasi adalah keahlian kami dalam cloud infrastructure! Jasa pengembangan aplikasi berbasis cloud (AWS, GCP, Azure), jasa developer aplikasi dengan CI/CD automation, PT jasa pembuatan aplikasi cloud terpercaya, jasa aplikasi android cloud-enabled, jasa pembuatan aplikasi desktop cloud-based, aplikasi jasa desain arsitektur cloud!",
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
      icon: Cloud,
      title: "Cloud Migration",
      description: "Migrasi aplikasi ke cloud dengan strategi yang tepat untuk meminimalkan downtime dan risiko.",
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline",
      description: "Otomasi deployment dengan continuous integration dan continuous delivery untuk development yang efisien.",
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Pengelolaan infrastruktur dengan code untuk konsistensi, version control, dan repeatability.",
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Implementasi security best practices dan monitoring 24/7 untuk uptime maksimal.",
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
                Cloud & DevOps
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Optimasi infrastruktur cloud dan implementasi DevOps untuk deployment yang lebih cepat dan reliable. 
                AWS, Google Cloud, Azure, CI/CD pipeline, dan container orchestration.
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
                Transformasi <span className="text-primary">Infrastruktur Digital</span> Anda
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Cloud computing dan DevOps telah mengubah cara perusahaan mengelola infrastruktur IT mereka. 
                  UPSENSE membantu perusahaan dalam journey transformasi digital ini dengan layanan 
                  cloud migration, infrastructure automation, dan implementasi DevOps practices.
                </p>
                <p className="mb-4">
                  Kami memiliki expertise dalam berbagai platform cloud seperti AWS (Amazon Web Services), 
                  Google Cloud Platform (GCP), dan Microsoft Azure. Tim DevOps engineer kami berpengalaman 
                  dalam containerization (Docker, Kubernetes), CI/CD tools (Jenkins, GitLab CI, GitHub Actions), 
                  dan infrastructure as code (Terraform, CloudFormation).
                </p>
                <p>
                  Dengan pendekatan DevOps yang matang, kami membantu perusahaan mencapai faster time-to-market, 
                  improved collaboration antara development dan operations team, serta higher reliability 
                  dari aplikasi yang di-deploy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Layanan Kami
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
                Teknologi & Platform yang Kami Kuasai
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Cloud,
                    title: "AWS (Amazon Web Services)",
                    description: "Platform cloud computing dengan layanan lengkap untuk hosting, storage, dan computing",
                  },
                  {
                    icon: Cloud,
                    title: "Google Cloud Platform (GCP)",
                    description: "Infrastruktur cloud Google dengan AI/ML capabilities dan global network",
                  },
                  {
                    icon: Cloud,
                    title: "Microsoft Azure",
                    description: "Cloud platform Microsoft dengan integrasi enterprise tools dan hybrid cloud",
                  },
                  {
                    icon: Container,
                    title: "Docker & Kubernetes",
                    description: "Containerization dan orchestration untuk deployment aplikasi yang scalable",
                  },
                  {
                    icon: GitBranch,
                    title: "Jenkins, GitLab CI, GitHub Actions",
                    description: "CI/CD automation tools untuk streamline deployment pipeline",
                  },
                  {
                    icon: Server,
                    title: "Terraform & Infrastructure as Code",
                    description: "Automasi provisioning infrastruktur dengan code untuk konsistensi dan repeatability",
                  },
                  {
                    icon: Activity,
                    title: "Monitoring: Prometheus, Grafana, New Relic",
                    description: "Monitoring dan observability tools untuk tracking performa dan uptime",
                  },
                  {
                    icon: Box,
                    title: "Container Orchestration & Microservices",
                    description: "Arsitektur microservices dengan container orchestration untuk scalability",
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
