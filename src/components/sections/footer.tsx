import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ArrowRight, Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { SectionTag } from '@/components/home/section-tag';

const contactCards = [
  {
    label: 'PHONE',
    value: 'Sales: +62 852 170000 41',
    href: 'tel:+6285217000041',
    icon: Phone,
  },
  {
    label: 'EMAIL',
    value: 'sales@upsense.co.id',
    href: 'mailto:sales@upsense.co.id',
    icon: Mail,
  },
  {
    label: 'KANTOR PERWAKILAN KAMI',
    value: 'Wisma SMR, Jl. Yos Sudarso Kav. 89, RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok, Jakarta Utara 14350',
    href: 'https://www.google.com/maps/search/?api=1&query=Wisma+SMR+Jl.+Yos+Sudarso+Kav.+89+Jakarta+Utara',
    icon: MapPin,
  },
];

const linkCols = [
  {
    head: 'TENTANG',
    links: [
      { name: 'Tentang Kami', href: '/#about-us' },
      { name: 'Visi & Misi', href: '/#about-us' },
      { name: 'Hubungi Kami', href: '/contact/' },
    ],
  },
  {
    head: 'LAYANAN',
    links: [
      { name: 'Custom Software', href: '/services/layanan-customisasi-software-bisnis/' },
      { name: 'Website Development', href: '/services/layanan-pengembangan-website/' },
      { name: 'Mobile App Development', href: '/services/layanan-pembuatan-aplikasi-mobile/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0a1e43] text-white">
      {/* Glow dekoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[640px] w-[640px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0) 70%)' }}
      />

      <div className="container relative mx-auto px-4 md:px-6 lg:px-12">
        {/* CTA Block */}
        <div className="grid gap-12 py-16 md:py-24 lg:grid-cols-[560px_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <SectionTag dark>MARI TERHUBUNG</SectionTag>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-[40px]">
              Hubungi Kami.
            </h2>
            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.6] text-[#8FA1BF]">
              Hubungi tim sales kami untuk konsultasi dan diskusi proyek. Siap membangun sistem yang siap
              berkembang bersama bisnis Anda.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6285217000041"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 bg-[#22C55E] px-[26px] py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#1eb353]"
            >
              <MessageCircle className="h-[18px] w-[18px]" strokeWidth={2.2} />
              Chat melalui WhatsApp
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>

          <div className="space-y-4">
            {contactCards.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 border border-[#1C3050] bg-[#0B1730] px-[26px] py-[22px] transition-colors hover:border-[#2a4a80]"
              >
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center bg-[#13264A]">
                  <Icon className="h-5 w-5 text-[#7DD3FC]" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[10.5px] tracking-[0.08em] text-[#8FA1BF]">{label}</span>
                  <span className="mt-1 block text-[15px] font-semibold leading-snug text-white">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Main */}
        <div className="grid gap-10 border-t border-[#1C3050] py-12 md:grid-cols-2 lg:grid-cols-[340px_1fr] lg:gap-16">
          <div>
            <Link href="/" className="flex items-center" aria-label="UPSENSE — Beranda">
              <Image
                src="https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png"
                alt="UPSENSE Logo"
                width={161}
                height={46}
                className="h-[2.3rem] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-[340px] text-[13px] leading-[1.6] text-[#8FA1BF]">
              Partner transformasi digital: IT consulting dan software development berbasis di Jakarta.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/upsense.id/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UPSENSE on Instagram"
                className="flex h-9 w-9 items-center justify-center border border-[#1C3050] text-[#8FA1BF] transition-colors hover:border-[#2a4a80] hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://id.linkedin.com/company/pt-upsense-teknologi-indonesia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UPSENSE on LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-[#1C3050] text-[#8FA1BF] transition-colors hover:border-[#2a4a80] hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UPSENSE on Facebook"
                className="flex h-9 w-9 items-center justify-center border border-[#1C3050] text-[#8FA1BF] transition-colors hover:border-[#2a4a80] hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {linkCols.map((col) => (
              <div key={col.head}>
                <p className="font-mono text-[11px] tracking-[0.08em] text-[#8FA1BF]">{col.head}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-[13px] text-white/90 transition-colors hover:text-[#FB923C]">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="font-mono text-[11px] tracking-[0.08em] text-[#8FA1BF]">LOKASI</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wisma+SMR+Jl.+Yos+Sudarso+Kav.+89+Jakarta+Utara"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[13px] text-white/90 transition-colors hover:text-[#FB923C]"
              >
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#1C3050] py-6 sm:flex-row">
          <p className="text-[13px] text-[#8FA1BF]">© 2026 PT.UPSENSE Teknologi Indonesia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact/" className="text-[13px] text-[#8FA1BF] transition-colors hover:text-white">
              Kontak
            </Link>
            <Link href="/services/" className="text-[13px] text-[#8FA1BF] transition-colors hover:text-white">
              Layanan
            </Link>
            <Link href="/blog/" className="text-[13px] text-[#8FA1BF] transition-colors hover:text-white">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
