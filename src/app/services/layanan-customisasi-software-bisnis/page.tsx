import type { Metadata } from 'next';
import { SITE_TITLES } from '@/lib/site-titles';
import Link from 'next/link';
import { ArrowRight, BarChart3, Blocks, Bot, ChartNoAxesCombined, Database, FileCheck2, ShieldCheck, UsersRound, Warehouse } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['layanan-customisasi-software-bisnis'],
  description: 'Custom software untuk ERP, CRM, HRIS, warehouse, dashboard, dan workflow bisnis yang dirancang sesuai kebutuhan perusahaan.',
  alternates: { canonical: 'https://upsense.co.id/services/layanan-customisasi-software-bisnis/' },
};

const capabilities = [
  { icon: Blocks, title: 'ERP & Operations', text: 'Menyatukan finance, procurement, inventory, dan proses operasional dalam alur yang lebih terkontrol.' },
  { icon: UsersRound, title: 'CRM & HRIS', text: 'Mengelola relasi pelanggan maupun data SDM berdasarkan proses kerja yang benar-benar digunakan tim.' },
  { icon: Warehouse, title: 'Warehouse & Supply Flow', text: 'Kontrol stok, pergerakan barang, dan visibilitas supply chain yang dapat disesuaikan dengan bisnis Anda.' },
  { icon: Bot, title: 'Workflow Automation', text: 'Mengurangi pekerjaan manual dengan approval, notifikasi, dan proses digital yang lebih konsisten.' },
  { icon: Database, title: 'Data & Integration', text: 'Menghubungkan sistem internal, API pihak ketiga, serta data bisnis yang sebelumnya terpisah.' },
  { icon: ShieldCheck, title: 'Access & Audit Control', text: 'Hak akses berbasis peran dan jejak aktivitas untuk menjaga proses penting tetap akuntabel.' },
];

export default function CustomSoftwarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Layanan Customisasi Software Bisnis',
    description: 'Pengembangan custom software untuk ERP, CRM, HRIS, warehouse, dashboard, dan automation workflow bisnis.',
    image: 'https://images.unsplash.com/photo-1648134859187-71dadc9f815a',
    url: 'https://upsense.co.id/services/layanan-customisasi-software-bisnis/',
    provider: { '@type': 'Organization', name: 'UPSENSE', url: 'https://upsense.co.id' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ['Custom Software Development', 'ERP Development', 'CRM Development', 'Business Process Automation'],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20">
      <section className="bg-[#0a1e43] py-20 text-white lg:py-28"><div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Custom Software Development</p><h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Software yang mengikuti cara bisnis Anda bekerja.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">UPSENSE merancang sistem digital yang menjawab proses unik perusahaan—mulai dari operasional, data, workflow, hingga kontrol manajemen yang membutuhkan visibilitas lebih baik.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">Konsultasikan Sistem Anda <ArrowRight className="h-4 w-4" /></Link></div><img src="https://images.unsplash.com/photo-1648134859187-71dadc9f815a" alt="Custom business software development" className="w-full rounded-[28px] border border-white/20 shadow-2xl" /></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 lg:px-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Dibangun untuk Proses Anda</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Tidak semua masalah bisnis dapat diselesaikan oleh software yang sama.</h2><p className="mt-7 text-lg leading-relaxed text-gray-600">Ketika spreadsheet, aplikasi terpisah, atau proses manual mulai menghambat eksekusi, custom software memberi ruang untuk membangun alur yang tepat. Kami menerjemahkan kebutuhan nyata tim Anda menjadi sistem yang jelas, dapat digunakan, dan siap berkembang.</p></div></section>
      <section className="bg-[#f5f8fc] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Pendekatan Solusi</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Dari kompleksitas operasional menuju sistem yang terarah.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{[['Understand', 'Memetakan proses, pengguna, data, dan risiko yang perlu diselesaikan.'], ['Design & Deliver', 'Menyusun prioritas solusi lalu membangun sistem melalui iterasi yang dapat dievaluasi.'], ['Adopt & Improve', 'Mendampingi penggunaan, integrasi, dan penyempurnaan sistem setelah go-live.']].map(([title, text], index) => <div key={title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-4xl font-bold text-[#f58b01]">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold text-[#013e78]">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></div>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Mengapa Custom Software?</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Karena sistem yang tepat membuat tim bisa fokus pada pekerjaan bernilai tinggi.</h2></div><div className="space-y-5">{['Alur, fitur, dan laporan disesuaikan dengan proses bisnis alih-alih memaksa tim mengikuti template.', 'Sistem dapat terhubung dengan aplikasi atau data yang sudah menjadi bagian dari operasi Anda.', 'Prioritas implementasi dapat dibuat bertahap untuk memberi dampak tanpa mengganggu operasi sehari-hari.', 'Fondasi teknis dibuat agar fitur dan kapasitas dapat berkembang bersama kebutuhan perusahaan.'].map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-[#013e78]/10 p-5"><ChartNoAxesCombined className="mt-1 h-5 w-5 shrink-0 text-[#f58b01]" /><p className="font-medium leading-relaxed text-gray-700">{item}</p></div>)}</div></div></section>
      <section className="bg-[#0a1e43] py-20 text-white lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Kapabilitas Sistem</p><h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Built for operational clarity and control.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><Icon className="h-8 w-8 text-[#f58b01]" /><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{text}</p></article>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><FileCheck2 className="mx-auto h-10 w-10 text-[#f58b01]" /><h2 className="mt-5 text-3xl font-bold text-[#013e78] md:text-5xl">Siap membangun sistem yang selaras dengan bisnis Anda?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mari bahas proses yang ingin Anda perbaiki, data yang perlu disatukan, dan sistem yang paling memberi dampak untuk tim Anda.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
