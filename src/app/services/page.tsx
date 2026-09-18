import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CircleAlert, Code, Workflow, Globe, Database, Smartphone, Rocket, Wrench } from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { SectionTag } from "@/components/home/section-tag";
import { platforms } from "@/components/home/platforms";
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";

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

const pains = [
  "Proses operasional masih manual dan kompleks",
  "Legacy system terfragmentasi dan sulit diintegrasikan",
  "Alur kerja internal belum terdigitalisasi",
  "Hambatan operasional menahan pertumbuhan bisnis",
];

const services = [
  {
    tag: "DEVELOPMENT",
    title: "Custom Software Development",
    desc: "Solusi software yang direncanakan sesuai alur kerja dan kebutuhan spesifik perusahaan Anda.",
    features: ["Business Applications", "Internal Systems", "Management Systems", "System Integration", "Software Modernization"],
    href: "/services/layanan-customisasi-software-bisnis/",
    icon: Code,
  },
  {
    tag: "AUTOMATION",
    title: "Workflow & Automation",
    desc: "Implementasi AI untuk otomasi cerdas dan predictive analytics guna menyederhanakan operasional.",
    features: ["Process Automation", "Workflow Management", "AI Automation", "System Integration", "Data Automation"],
    href: "/services/analytic-solutions/",
    icon: Workflow,
  },
  {
    tag: "DEVELOPMENT",
    title: "Website Development",
    desc: "Membangun website scalable berperforma tinggi dengan struktur modern dan user journey yang berorientasi pada konversi.",
    features: ["Corporate Website", "Business Website", "Web Application", "E-Commerce", "Website Revamp"],
    href: "/services/layanan-pengembangan-website/",
    icon: Globe,
  },
  {
    tag: "ENTERPRISE",
    title: "ERP Customization",
    desc: "Menyesuaikan modul ERP dengan alur kerja bisnis untuk kontrol, akurasi, dan kelancaran operasional yang lebih baik.",
    features: ["Module Customization", "Workflow Customization", "System Integration", "Reporting & Analytics", "Data Migration"],
    href: "/services/odoo-erp-customization/",
    icon: Database,
  },
  {
    tag: "DEVELOPMENT",
    title: "Mobile App Development",
    desc: "Merancang dan membangun aplikasi mobile berperforma tinggi untuk Android dan iOS dengan backend yang scalable.",
    features: ["Android Apps", "iOS Apps", "Cross-Platform Apps", "Backend Integration", "App Enhancement"],
    href: "/services/layanan-pembuatan-aplikasi-mobile/",
    icon: Smartphone,
  },
  {
    tag: "PRODUCT",
    title: "MVP Development",
    desc: "Memastikan ide produk yang unggul dan tangguh untuk memvalidasi kebutuhan pasar serta mempercepat iterasi produk.",
    features: ["Product Planning", "Prototyping", "MVP Development", "Product Testing", "Product Scaling"],
    href: "/services/software-development/",
    icon: Rocket,
  },
  {
    tag: "SUPPORT",
    title: "Maintenance & Support",
    desc: "Dukungan berkelanjutan untuk menjaga aplikasi tetap aman, stabil, dan berkinerja optimal.",
    features: ["Application Maintenance", "Technical Support", "Performance Monitoring", "Security Updates", "Continuous Improvement"],
    href: "/services/cloud-devops/",
    icon: Wrench,
  },
];

const steps = [
  { num: "01", title: "Discovery Call", desc: "Memahami kebutuhan operasional, tantangan proses, dan tujuan bisnis Anda." },
  { num: "02", title: "Perencanaan", desc: "Merancang solusi, ruang lingkup, dan arsitektur sistem yang tepat." },
  { num: "03", title: "Pengembangan", desc: "Membangun sistem dengan delivery terstruktur dan update berkala." },
  { num: "04", title: "Test & Revisi", desc: "Memastikan sistem berjalan sesuai alur kerja sebelum digunakan penuh." },
  { num: "05", title: "Peluncuran & Support", desc: "Rilis, pendampingan, serta maintenance berkelanjutan." },
];

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
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1730]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-24 h-[620px] w-[620px] rounded-full opacity-70"
            style={{
              background:
                'radial-gradient(circle at 65% 35%, rgba(125,211,252,0.28) 0%, rgba(28,58,102,0.35) 35%, rgba(10,23,48,0) 68%), radial-gradient(circle at 30% 70%, rgba(249,115,22,0.14) 0%, rgba(10,23,48,0) 55%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-56 top-32 h-[440px] w-[440px] rounded-full opacity-60"
            style={{ background: 'radial-gradient(circle at 60% 40%, rgba(125,211,252,0.2) 0%, rgba(10,23,48,0) 65%)' }}
          />
          <div className="container relative mx-auto flex flex-col items-center px-4 pb-20 pt-32 text-center md:px-6 md:pt-36 lg:px-12">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[54px]">
              Layanan
              <br />
              UPSENSE Indonesia
            </h1>
            <p className="mt-6 max-w-[640px] text-base leading-[1.64] text-[#8FA1BF] md:text-[16.5px]">
              Kami membangun custom software, mengotomasi alur kerja, dan menghubungkan sistem agar
              operasional lebih cepat, rapi, dan efisien.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F97316] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
              >
                Jadwalkan Discovery Call
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link
                href="/portfolio/"
                className="inline-flex items-center rounded-xl border border-[#1C3050] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:border-[#2a4a80]"
              >
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-white py-16 md:py-[72px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionTag>APA YANG BISA KAMI BANTU ?</SectionTag>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0C1425] md:text-[30px]">
                Apakah tantangan ini terdengar familiar?
              </h2>
            </div>
            <div className="mt-10 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pains.map((pain) => (
                <div
                  key={pain}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E4E9F2] bg-[#F6F8FB] px-[18px] py-4"
                >
                  <CircleAlert className="h-[17px] w-[17px] shrink-0 text-[#F97316]" strokeWidth={2} aria-hidden="true" />
                  <p className="text-[13.5px] leading-[1.5] text-[#0C1425]">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan Utama */}
        <section className="bg-[#F6F8FB] py-16 md:py-[88px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="max-w-[520px]">
              <SectionTag>LAYANAN UTAMA KAMI</SectionTag>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
                Solusi yang dirancang sesuai cara bisnis beroperasi
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="flex w-full flex-col gap-3.5 rounded-2xl border border-[#E4E9F2] bg-white p-7 lg:w-[calc(50%-10px)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#0A1E43]">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#56637A]">{service.tag}</span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-[1.25] tracking-tight text-[#0C1425]">
                      {service.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.6] text-[#56637A]">{service.desc}</p>

                    <ul className="flex-1 space-y-[7px] pt-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-[9px] text-[12.5px] text-[#56637A]">
                          <Check className="h-[13px] w-[13px] shrink-0 text-[#F97316]" strokeWidth={2.5} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="group mt-2 inline-flex w-fit items-center gap-[7px] pt-2 text-[13px] font-semibold text-[#F97316]"
                    >
                      Pelajari layanan
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proses Kerja */}
        <section className="bg-white py-16 md:py-[88px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <SectionTag>CARA KAMI BEKERJA</SectionTag>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
              Delivery terstruktur, dari discovery hingga rilis
            </h2>

            <div className="mt-12 grid border-b border-r border-[#E4E9F2] sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col gap-3 border-l border-t border-[#E4E9F2] px-6 py-[26px]">
                  <span className="font-[family-name:var(--font-display)] text-[30px] font-bold leading-none text-[#F97316]">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-[15.5px] font-bold leading-[1.3] text-[#0C1425]">
                    {step.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.6] text-[#56637A]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layanan Lainnya */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[560px]">
                <SectionTag>ENTERPRISE PLATFORMS</SectionTag>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[40px]">
                  Layanan Lainnya
                </h2>
              </div>
              <p className="max-w-[460px] text-[15.5px] leading-[1.6] text-[#56637A]">
                Platform software andal untuk governance, kepatuhan operasional, dan pertumbuhan
                enterprise yang berkelanjutan.
              </p>
            </div>

            <div className="mt-12 space-y-5">
              {platforms.map((platform) => (
                <article
                  key={platform.title}
                  className="grid overflow-hidden rounded-[20px] border border-[#E4E9F2] bg-[#F6F8FB] lg:grid-cols-[420px_1fr]"
                >
                  <div className="relative h-[220px] lg:h-auto">
                    <Image
                      src={platform.image}
                      alt={platform.title}
                      fill
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 p-6 md:p-7">
                    <h3 className="font-[family-name:var(--font-display)] text-[23px] font-bold tracking-tight text-[#0C1425]">
                      {platform.title}
                    </h3>
                    <p className="max-w-[720px] text-sm leading-[1.6] text-[#56637A]">{platform.desc}</p>
                    <ul className="space-y-2.5">
                      {platform.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-[13px] text-[#0C1425]">
                          <Check className="h-3.5 w-3.5 shrink-0 text-[#F97316]" strokeWidth={2.5} aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={platform.href}
                      className="mt-3 inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#0A1E43] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#13264A]"
                    >
                      Selengkapnya
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white pb-24 pt-2">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div
              className="relative overflow-hidden rounded-[24px] px-8 py-12 md:px-[72px] md:py-16"
              style={{ background: 'linear-gradient(225deg, #13264A 0%, #0A1E43 100%)' }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-32 h-[460px] w-[460px] rounded-full opacity-70"
                style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0) 70%)' }}
              />
              <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                <div className="max-w-[829px]">
                  <SectionTag dark>MULAI DARI DISCOVERY CALL</SectionTag>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.2] tracking-tight text-white md:text-[36px]">
                    Punya kebutuhan sistem atau ide yang ingin dikembangkan?
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.65] text-[#8FA1BF]">
                    Mulai dari kebutuhan operasional hingga implementasi, tim UPSENSE siap membantu
                    merancang solusi yang tepat.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#F97316] px-[26px] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
                >
                  Diskusikan Kebutuhan Anda
                  <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
