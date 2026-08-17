import type { Metadata } from 'next';
import { SITE_TITLES } from '@/lib/site-titles';
import Link from 'next/link';
import { ArrowRight, BarChart3, Blocks, Code2, Gauge, Globe2, LayoutPanelTop, ShieldCheck, Waypoints } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['layanan-pengembangan-website'],
  description: 'Pengembangan website custom untuk perusahaan: cepat, aman, scalable, dan terintegrasi dengan proses bisnis Anda.',
  alternates: { canonical: 'https://upsense.co.id/services/layanan-pengembangan-website/' },
};

const capabilities = [
  { icon: LayoutPanelTop, title: 'Corporate & Brand Website', text: 'Website yang menyampaikan positioning, layanan, dan kredibilitas perusahaan dengan jelas.' },
  { icon: Blocks, title: 'Web Platform Custom', text: 'Portal, dashboard, dan workflow berbasis web yang mengikuti kebutuhan operasional Anda.' },
  { icon: Waypoints, title: 'System Integration', text: 'Integrasi dengan CRM, ERP, payment gateway, form inquiry, dan layanan bisnis lain.' },
  { icon: Globe2, title: 'Multilingual & Content-ready', text: 'Struktur konten dan CMS yang siap mendukung komunikasi untuk berbagai pasar.' },
  { icon: Gauge, title: 'Performance & SEO Foundation', text: 'Fondasi teknis yang mendukung kecepatan akses, keterbacaan mesin pencari, dan pengalaman pengguna.' },
  { icon: ShieldCheck, title: 'Secure by Design', text: 'Kontrol akses, validasi, dan praktik engineering yang mempertimbangkan keamanan sejak awal.' },
];

export default function WebsiteDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Layanan Pengembangan Website',
    description: 'Pengembangan website custom yang aman, scalable, terintegrasi, dan berorientasi pada pertumbuhan bisnis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    url: 'https://upsense.co.id/services/layanan-pengembangan-website/',
    provider: { '@type': 'Organization', name: 'UPSENSE', url: 'https://upsense.co.id' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ['Website Development', 'Corporate Website', 'Custom Web Platform'],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20">
      <section className="bg-[#0a1e43] py-20 text-white lg:py-28"><div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Website Development</p><h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Website yang bekerja untuk pertumbuhan bisnis.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">UPSENSE membangun website perusahaan dan platform web yang tidak hanya terlihat profesional, tetapi juga siap menangani kebutuhan konten, integrasi, dan proses bisnis yang terus berkembang.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">Konsultasikan Website Anda <ArrowRight className="h-4 w-4" /></Link></div><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85" alt="Website development dashboard" className="w-full rounded-[28px] border border-white/20 shadow-2xl" /></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 lg:px-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Lebih dari Company Profile</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Website adalah fondasi digital yang menghubungkan brand, proses, dan pelanggan.</h2><p className="mt-7 text-lg leading-relaxed text-gray-600">Kami memulai dari tujuan bisnis, perilaku pengguna, dan kebutuhan operasional. Hasilnya adalah website yang punya arah: memperkuat kepercayaan, memudahkan pelanggan menemukan informasi, dan mendukung proses internal melalui fitur yang tepat.</p></div></section>
      <section className="bg-[#f5f8fc] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Pendekatan Solusi</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Dari kebutuhan nyata menuju platform yang siap digunakan.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{[['Discover', 'Memahami tujuan, audiens, proses, dan prioritas digital perusahaan.'], ['Design & Build', 'Menyusun struktur informasi, pengalaman pengguna, serta arsitektur teknis yang tepat.'], ['Launch & Improve', 'Menguji, meluncurkan, dan menyempurnakan platform berdasarkan kebutuhan bisnis.']].map(([title, text], index) => <div key={title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-4xl font-bold text-[#f58b01]">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold text-[#013e78]">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></div>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Mengapa UPSENSE?</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Website yang dibangun untuk terus relevan ketika bisnis bertumbuh.</h2></div><div className="space-y-5">{['Desain dan arsitektur berangkat dari tujuan bisnis, bukan sekadar template visual.', 'Fitur dapat disesuaikan untuk integrasi data, workflow, dan kebutuhan stakeholder.', 'Struktur teknis dipikirkan untuk performa, keamanan, serta pengembangan bertahap.', 'Tim yang sama dapat mendampingi dari discovery hingga perbaikan pasca-peluncuran.'].map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-[#013e78]/10 p-5"><BarChart3 className="mt-1 h-5 w-5 shrink-0 text-[#f58b01]" /><p className="font-medium leading-relaxed text-gray-700">{item}</p></div>)}</div></div></section>
      <section className="bg-[#0a1e43] py-20 text-white lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Kapabilitas Website</p><h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Built for clarity, conversion, and scale.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><Icon className="h-8 w-8 text-[#f58b01]" /><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{text}</p></article>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><Code2 className="mx-auto h-10 w-10 text-[#f58b01]" /><h2 className="mt-5 text-3xl font-bold text-[#013e78] md:text-5xl">Siap membangun website yang lebih dari sekadar tampilan?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mari diskusikan tujuan digital, kompleksitas proses, dan fondasi website yang paling relevan untuk bisnis Anda.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
