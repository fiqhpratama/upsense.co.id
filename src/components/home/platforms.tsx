import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { SectionTag } from './section-tag';

export const platforms = [
  {
    title: 'Odoo ERP Customization',
    desc: 'Modul Odoo ERP yang dikonfigurasi sesuai alur kerja bisnis untuk kontrol keuangan dan visibilitas gudang yang lebih baik.',
    features: ['Sistem Akuntansi & Keuangan', 'Manajemen Inventaris & Gudang'],
    href: '/services/odoo-erp-customization/',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_odoo.png',
  },
  {
    title: 'Learning Management System',
    desc: 'Platform pembelajaran terstruktur untuk mengelola program pelatihan, kompetensi karyawan, penilaian, dan visibilitas progres.',
    features: ['Jalur belajar & penilaian', 'Data pelatihan terpusat'],
    href: '/services/learning-management-system/',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_lms.png',
  },
  {
    title: 'Core HRIS & Mobile Attendance',
    desc: 'Fondasi HR terintegrasi untuk data karyawan, kehadiran, persetujuan, dan operasional tenaga kerja lintas lokasi.',
    features: ['Manajemen siklus hidup karyawan', 'Absensi & persetujuan mobile'],
    href: '/services/core-hris-mobile-attendance/',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_hris.png',
  },
];

export default function Platforms() {
  return (
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
            Platform software andal untuk governance, kepatuhan operasional, dan pertumbuhan enterprise
            yang berkelanjutan.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {platforms.map((platform) => (
            <article
              key={platform.title}
              className="grid items-center gap-8 border border-[#E4E9F2] bg-white p-7 lg:grid-cols-[420px_1fr] lg:gap-12"
            >
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={platform.image}
                  alt={platform.title}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[23px] font-bold tracking-tight text-[#0C1425]">
                  {platform.title}
                </h3>
                <p className="mt-3 max-w-[812px] text-[15.5px] leading-[1.6] text-[#56637A]">
                  {platform.desc}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-[14px] text-[#0C1425]">
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#F97316]" strokeWidth={2.5} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={platform.href}
                  className="mt-6 inline-flex items-center gap-2 bg-[#F97316] px-[26px] py-[13px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
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
  );
}
