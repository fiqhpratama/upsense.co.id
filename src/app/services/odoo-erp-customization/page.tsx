import type { Metadata } from 'next';
import { SITE_TITLES } from '@/lib/site-titles';
import Link from 'next/link';
import { ArrowRight, BarChart3, BookOpenCheck, ChartNoAxesCombined, FileCheck2, ShieldCheck, Warehouse, Workflow } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['odoo-erp-customization'],
  description: 'Odoo ERP yang disesuaikan dengan alur accounting, finance, inventory, dan warehouse perusahaan Anda.',
  alternates: { canonical: 'https://upsense.co.id/services/odoo-erp-customization/' },
};

const features = [
  { icon: BookOpenCheck, title: 'Accounting & Finance', text: 'Chart of accounts, invoicing, approval, cash flow, dan laporan keuangan yang mengikuti struktur bisnis Anda.' },
  { icon: Warehouse, title: 'Inventory & Warehouse', text: 'Kontrol stok, pergerakan barang, multi-warehouse, serta traceability operasional dalam satu alur.' },
  { icon: Workflow, title: 'Workflow Approval', text: 'Aturan persetujuan yang jelas untuk transaksi, pembelian, dan proses penting perusahaan.' },
  { icon: BarChart3, title: 'Management Dashboard', text: 'Ringkasan operasional dan keuangan yang mudah dibaca untuk pengambilan keputusan lebih cepat.' },
  { icon: FileCheck2, title: 'Document Control', text: 'Dokumen transaksi, audit trail, dan pencatatan proses yang lebih rapi dan dapat ditelusuri.' },
  { icon: ShieldCheck, title: 'Role-based Access', text: 'Hak akses berbasis peran untuk menjaga data sensitif tetap berada pada pihak yang berwenang.' },
];

export default function OdooErpCustomizationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Odoo ERP Customization',
    description: 'Implementasi dan penyesuaian Odoo ERP untuk accounting, finance, inventory, warehouse, workflow approval, dan pelaporan bisnis.',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_odoo.png',
    url: 'https://upsense.co.id/services/odoo-erp-customization/',
    provider: {
      '@type': 'Organization',
      name: 'UPSENSE',
      url: 'https://upsense.co.id',
    },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ['Odoo ERP Customization', 'Accounting & Finance System', 'Inventory Warehouse Management'],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20">
      <section className="relative overflow-hidden bg-[#013e78] py-20 text-white lg:py-28">
        <div className="container relative mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Enterprise ERP Solution</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Odoo ERP Customization</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">ERP tidak seharusnya memaksa perusahaan mengikuti sistem. UPSENSE mengonfigurasi Odoo agar selaras dengan alur finance, inventory, dan kontrol operasional Anda.</p>
            <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">Konsultasikan Kebutuhan Anda <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <img src="https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_odoo.png" alt="Odoo ERP Customization" className="w-full rounded-[28px] border border-white/20 shadow-2xl" />
        </div>
      </section>

      <section className="py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 lg:px-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Penjelasan</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">ERP yang mengikuti cara bisnis Anda bekerja.</h2><p className="mt-7 text-lg leading-relaxed text-gray-600">Odoo ERP Customization adalah layanan implementasi dan penyesuaian Odoo untuk organisasi yang membutuhkan sistem finance dan warehouse yang rapi, terhubung, dan dapat dipertanggungjawabkan. Kami memulai dari proses nyata tim Anda—bukan dari asumsi template.</p></div></section>

      <section className="bg-[#f5f8fc] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Ringkasan Solusi</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Satu platform untuk kontrol yang lebih baik.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{[['Discover', 'Memetakan proses, prioritas, dan titik kontrol bisnis.'], ['Configure', 'Menyesuaikan modul serta workflow Odoo dengan kebutuhan operasional.'], ['Enable', 'Mendampingi go-live, pelatihan pengguna, dan penyempurnaan sistem.']].map(([title, text], index) => <div key={title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-4xl font-bold text-[#f58b01]">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold text-[#013e78]">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></div>)}</div></div></section>

      <section className="py-20 lg:py-24"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Mengapa harus Odoo ERP Customization?</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Karena proses yang jelas membuat pertumbuhan lebih terkendali.</h2></div><div className="space-y-5">{['Mengurangi pekerjaan manual dan data yang tersebar di spreadsheet.', 'Menyatukan finance, procurement, inventory, dan warehouse dalam satu sumber data.', 'Membuat approval dan pelaporan lebih transparan untuk manajemen.', 'Memberi fondasi ERP yang dapat berkembang seiring kebutuhan perusahaan.'].map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-[#013e78]/10 p-5"><ChartNoAxesCombined className="mt-1 h-5 w-5 shrink-0 text-[#f58b01]" /><p className="font-medium leading-relaxed text-gray-700">{item}</p></div>)}</div></div></section>

      <section className="bg-[#013e78] py-20 text-white lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Fitur Utama</p><h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Built for accountable operations.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><Icon className="h-8 w-8 text-[#f58b01]" /><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{text}</p></article>)}</div></div></section>

      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><h2 className="text-3xl font-bold text-[#013e78] md:text-5xl">Siap menyatukan operasi Anda dalam satu ERP?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mulai dengan pembahasan kebutuhan bisnis, alur proses, dan prioritas implementasi yang paling memberi dampak.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
