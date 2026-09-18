import { Metadata } from "next";
import { Phone, Mail, Timer, MapPin, MessageCircle, ArrowRight, Check, Facebook, Instagram, Linkedin } from "lucide-react";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { SectionTag } from '@/components/home/section-tag';
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";
import { SITE_TITLES } from "@/lib/site-titles";

const WA_URL = "https://api.whatsapp.com/send?phone=6285217000041";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Wisma+SMR+Jl.+Yos+Sudarso+Kav.+89+Jakarta+Utara";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303.66812175978373!2d106.88782108618176!3d-6.1500479279683224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e62dc8c8f9%3A0x843e39662b4dbdc7!2sPT.%20UPSENSE%20Teknologi%20Indonesia!5e1!3m2!1sid!2sid!4v1784961998096!5m2!1sid!2sid&output=embed";

export const metadata: Metadata = {
  title: SITE_TITLES.seo.contact,
  description: "Hubungi UPSENSE untuk konsultasi custom software, ERP, HRIS, aplikasi web dan mobile, serta transformasi digital perusahaan.",
  keywords: UPSENSE_META_KEYWORDS,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/contact"
  },
  openGraph: {
    title: SITE_TITLES.seo.contact,
    description: "Hubungi UPSENSE untuk konsultasi custom software, ERP, HRIS, aplikasi web dan mobile, serta transformasi digital perusahaan.",
    url: "https://upsense.co.id/contact",
    type: "website",
  }
};

const contactInfo = [
  { label: "TELEPON", value: "Sales: +62 852 170000 41", href: WA_URL, icon: Phone },
  { label: "EMAIL", value: "sales@upsense.co.id", href: "mailto:sales@upsense.co.id", icon: Mail },
  { label: "JAM OPERASIONAL", value: "Senin - Sabtu, 10.00 - 20.00 WIB", icon: Timer },
  {
    label: "ALAMAT",
    value: "Wisma SMR, Jl. Yos Sudarso Lt 9, Unit 904, RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350",
    href: MAPS_URL,
    icon: MapPin,
  },
];

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/upsense.id/", icon: Instagram },
  { name: "LinkedIn", href: "https://id.linkedin.com/company/pt-upsense-teknologi-indonesia", icon: Linkedin },
];

const expectations = [
  "Ceritakan kebutuhan atau tantangan operasional Anda",
  "Tim kami akan merespons secepat mungkin.",
  "Jadwalkan discovery call untuk pembahasan mendalam",
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "LocalBusiness",
        "@id": "https://upsense.co.id/#localbusiness",
        "name": "UPSENSE",
        "description": "UPSENSE siap membantu kebutuhan software development, ERP, HRIS, dan solusi digital perusahaan Anda.",
        "image": "https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "3805"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Wisma SMR, Jl. Yos Sudarso Lt 9, Unit 904, RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok",
          "addressLocality": "Kota Jakarta Utara",
          "addressRegion": "DKI Jakarta",
          "postalCode": "14350",
          "addressCountry": "ID"
        },
        "telephone": "+62-852-1700-0041",
        "email": "sales@upsense.co.id",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "20:00"
        },
        "priceRange": "$$",
        "url": "https://upsense.co.id"
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
            <h1 className="max-w-[860px] font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[52px]">
              Siap mendiskusikan kebutuhan digital bisnis Anda?
            </h1>
            <p className="mt-6 max-w-[640px] text-base leading-[1.64] text-[#8FA1BF] md:text-[16.5px]">
              Tim UPSENSE siap membantu merancang solusi digital yang relevan untuk meningkatkan
              efisiensi dan efektivitas operasional perusahaan.
            </p>
          </div>
        </section>

        {/* Contact Main */}
        <section className="bg-white py-16 md:py-[88px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
              {/* Left Column */}
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-3.5">
                  <SectionTag>HUBUNGI KAMI</SectionTag>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
                    Mari Bangun Solusi Anda
                  </h2>
                  <p className="text-[15.5px] leading-[1.6] text-[#56637A]">
                    Kami siap membantu mewujudkan transformasi digital bisnis Anda.
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-[#56637A]">INFORMASI KONTAK</p>
                  <div className="mt-2 pt-2">
                    {contactInfo.map(({ label, value, href, icon: Icon }, index) => {
                      const row = (
                        <>
                          <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-[#0A1E43]">
                            <Icon className="h-[19px] w-[19px] text-white" strokeWidth={1.8} aria-hidden="true" />
                          </span>
                          <span className="flex flex-col gap-1">
                            <span className="font-mono text-[10px] tracking-[0.2em] text-[#56637A]">{label}</span>
                            <span className="text-[14.5px] font-semibold leading-[1.5] text-[#0C1425]">{value}</span>
                          </span>
                        </>
                      );
                      const rowClass = "flex items-center gap-4 px-1 py-4";
                      return href ? (
                        <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`${rowClass} border-t border-[#E4E9F2] transition-colors ${index === contactInfo.length - 1 ? 'border-b' : ''} hover:bg-[#F6F8FB]`}>
                          {row}
                        </a>
                      ) : (
                        <div key={label} className={`${rowClass} border-t border-[#E4E9F2] ${index === contactInfo.length - 1 ? 'border-b' : ''}`}>
                          {row}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[11px] tracking-[0.08em] text-[#56637A]">IKUTI KAMI</p>
                  <div className="flex items-center gap-2.5">
                    {socials.map(({ name, href, icon: Icon }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`UPSENSE on ${name}`}
                        className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#0A1E43] text-white transition-colors hover:bg-[#13264A]"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div
                className="relative h-fit overflow-hidden rounded-[20px] p-9"
                style={{ background: 'linear-gradient(225deg, #13264A 0%, #0A1E43 100%)' }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-24 h-[380px] w-[380px] rounded-full opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0) 70%)' }}
                />
                <div className="relative flex flex-col gap-[18px]">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white">
                    Konsultasikan Kebutuhan Anda
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-[#8FA1BF]">
                    Hubungi kami melalui WhatsApp untuk konsultasi gratis dan respons yang lebih cepat.
                  </p>

                  <ul className="flex flex-col gap-2.5 pb-1 pt-1.5">
                    {expectations.map((text) => (
                      <li key={text} className="flex items-center gap-2.5 text-[13.5px] leading-[1.5] text-[#DCE4F2]">
                        <Check className="h-[15px] w-[15px] shrink-0 text-[#6EE7B7]" strokeWidth={2.5} aria-hidden="true" />
                        {text}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#22C55E] px-6 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#1eb353]"
                  >
                    <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
                    Chat melalui WhatsApp
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lokasi Kami */}
        <section className="bg-[#F6F8FB] py-16 md:py-[88px]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionTag>LOKASI KAMI</SectionTag>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
                  Kunjungi Kantor Kami
                </h2>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-[#0A1E43] px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#13264A]"
              >
                <MapPin className="h-[15px] w-[15px]" aria-hidden="true" />
                Lihat di Google Maps
              </a>
            </div>

            <div className="relative mt-9 overflow-hidden rounded-[20px]">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="440"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi kantor UPSENSE — Wisma SMR, Jakarta Utara"
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-[#1C3050] bg-[#0A1428]/90 px-[18px] py-3.5 backdrop-blur-sm">
                <p className="font-[family-name:var(--font-display)] text-[14.5px] font-bold text-white">
                  Wisma SMR — Sunter, Jakarta Utara
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.08em] text-[#8FA1BF]">
                  JL. YOS SUDARSO LT 9, UNIT 904 · 14350
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
