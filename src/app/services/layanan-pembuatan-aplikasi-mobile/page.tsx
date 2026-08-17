import type { Metadata } from 'next';
import { SITE_TITLES } from '@/lib/site-titles';
import Link from 'next/link';
import { ArrowRight, BellRing, Blocks, Code2, Gauge, Layers3, ShieldCheck, Smartphone, TestTube2, Waypoints } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['layanan-pembuatan-aplikasi-mobile'],
  description: 'Pengembangan aplikasi mobile Android, iOS, dan cross-platform yang terintegrasi, aman, dan siap berkembang.',
  alternates: { canonical: 'https://upsense.co.id/services/layanan-pembuatan-aplikasi-mobile/' },
};

const capabilities = [
  { icon: Smartphone, title: 'Android & iOS', text: 'Aplikasi mobile yang dirancang untuk pengalaman pengguna konsisten di platform utama.' },
  { icon: Layers3, title: 'Cross-platform Delivery', text: 'Satu fondasi pengembangan untuk mempercepat delivery tanpa mengabaikan kualitas pengalaman.' },
  { icon: Waypoints, title: 'Backend & API Integration', text: 'Koneksi yang andal ke sistem internal, layanan pihak ketiga, dan data bisnis Anda.' },
  { icon: BellRing, title: 'Engagement Features', text: 'Notifikasi, workflow, dan fitur mobile yang membantu pengguna tetap terhubung dengan layanan Anda.' },
  { icon: TestTube2, title: 'Quality Assurance', text: 'Pengujian terarah untuk memastikan alur penting bekerja dengan baik sebelum aplikasi diluncurkan.' },
  { icon: ShieldCheck, title: 'Security & Scalability', text: 'Penerapan kontrol keamanan dan arsitektur yang siap mengikuti pertumbuhan produk.' },
];

export default function MobileAppDevelopmentPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Layanan Pembuatan Aplikasi Mobile',
    description: 'Pengembangan aplikasi mobile Android, iOS, dan cross-platform yang terintegrasi, aman, dan scalable.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    url: 'https://upsense.co.id/services/layanan-pembuatan-aplikasi-mobile/',
    provider: { '@type': 'Organization', name: 'UPSENSE', url: 'https://upsense.co.id' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ['Mobile App Development', 'Android App Development', 'iOS App Development', 'Cross-platform App Development'],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20">
      <section className="bg-[#0a1e43] py-20 text-white lg:py-28"><div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Mobile App Development</p><h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Aplikasi mobile yang membawa layanan Anda lebih dekat ke pengguna.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">UPSENSE membangun aplikasi Android, iOS, dan cross-platform yang menyatukan pengalaman pengguna, data bisnis, serta proses operasional dalam satu produk yang siap tumbuh.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">Konsultasikan Aplikasi Anda <ArrowRight className="h-4 w-4" /></Link></div><img src="https://images.unsplash.com/photo-1551650975-87deedd944c3" alt="Mobile application development" className="w-full rounded-[28px] border border-white/20 shadow-2xl" /></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 lg:px-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Aplikasi yang Berarti</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Mobile bukan sekadar channel, namun pengalaman layanan yang selalu dekat.</h2><p className="mt-7 text-lg leading-relaxed text-gray-600">Aplikasi yang efektif membantu pelanggan atau tim internal menyelesaikan tugas penting dengan lebih cepat. Karena itu, kami menghubungkan kebutuhan pengguna dengan proses bisnis, desain UI/UX yang jelas, dan fondasi teknis yang andal sejak tahap awal.</p></div></section>
      <section className="bg-[#f5f8fc] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Pendekatan Pengembangan</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Terarah dari ide sampai aplikasi siap dipakai.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{[['Plan', 'Menentukan tujuan produk, kebutuhan pengguna, dan prioritas fitur yang relevan.'], ['Design & Develop', 'Merancang pengalaman mobile lalu membangunnya dalam iterasi yang transparan.'], ['Test & Launch', 'Menguji alur penting, mempersiapkan rilis, dan mendampingi proses go-live.']].map(([title, text], index) => <div key={title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-4xl font-bold text-[#f58b01]">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold text-[#013e78]">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></div>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Mengapa UPSENSE?</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Membangun aplikasi dengan arah produk dan ketahanan teknis yang sama kuat.</h2></div><div className="space-y-5">{['Perencanaan berangkat dari tujuan bisnis dan kebutuhan pengguna, bukan daftar fitur semata.', 'Pengalaman pengguna dirancang untuk konteks mobile yang cepat, fokus, dan mudah digunakan.', 'Aplikasi dapat terhubung dengan API, dashboard, maupun sistem yang sudah berjalan.', 'Proses pengembangan memberi ruang untuk evaluasi dan penyempurnaan di setiap tahap penting.'].map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-[#013e78]/10 p-5"><Gauge className="mt-1 h-5 w-5 shrink-0 text-[#f58b01]" /><p className="font-medium leading-relaxed text-gray-700">{item}</p></div>)}</div></div></section>
      <section className="bg-[#0a1e43] py-20 text-white lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Kapabilitas Mobile</p><h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Built for reliable mobile experiences.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><Icon className="h-8 w-8 text-[#f58b01]" /><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{text}</p></article>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><Blocks className="mx-auto h-10 w-10 text-[#f58b01]" /><h2 className="mt-5 text-3xl font-bold text-[#013e78] md:text-5xl">Siap mengubah ide aplikasi menjadi produk yang siap tumbuh?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mari bahas kebutuhan pengguna, prioritas fitur, serta fondasi teknis yang paling tepat untuk aplikasi Anda.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
