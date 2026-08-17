import type { Metadata } from 'next';
import { SITE_TITLES } from '@/lib/site-titles';
import Link from 'next/link';
import { ArrowRight, Award, BarChart3, BookOpenCheck, ChartNoAxesCombined, FileCheck2, GraduationCap, ShieldCheck, UsersRound, Workflow } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['learning-management-system'],
  description: 'Platform LMS untuk mengelola learning path, materi, assessment, sertifikasi, dan laporan kompetensi organisasi.',
  alternates: { canonical: 'https://upsense.co.id/services/learning-management-system/' },
};

const features = [
  { icon: GraduationCap, title: 'Learning Paths', text: 'Jalur pembelajaran terstruktur berdasarkan jabatan, kompetensi, dan kebutuhan pengembangan karyawan.' },
  { icon: BookOpenCheck, title: 'Content Management', text: 'Kelola modul, video, dokumen, dan materi pembelajaran dalam satu platform yang mudah diakses.' },
  { icon: FileCheck2, title: 'Assessment', text: 'Evaluasi pemahaman melalui kuis, ujian, dan penilaian yang dapat disesuaikan dengan program Anda.' },
  { icon: Award, title: 'Certification', text: 'Terbitkan dan pantau sertifikasi pelatihan untuk menjaga standar kompetensi tim.' },
  { icon: BarChart3, title: 'Progress Reporting', text: 'Pantau completion rate, hasil assessment, dan perkembangan kompetensi melalui dashboard yang jelas.' },
  { icon: ShieldCheck, title: 'Role-based Access', text: 'Akses peserta, trainer, manager, dan administrator diatur sesuai peran dan tanggung jawab.' },
];

export default function LearningManagementSystemPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Learning Management System',
    description: 'Platform pembelajaran perusahaan untuk mengelola learning path, materi, assessment, sertifikasi, dan laporan kompetensi.',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_lms.png',
    url: 'https://upsense.co.id/services/learning-management-system/',
    provider: { '@type': 'Organization', name: 'UPSENSE', url: 'https://upsense.co.id' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ['Learning Management System', 'Corporate Training Platform', 'Competency Management'],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20">
      <section className="bg-[#013e78] py-20 text-white lg:py-28"><div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Enterprise Learning Solution</p><h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Learning Management System</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">Jadikan pengembangan kompetensi lebih terarah, terukur, dan mudah dikelola melalui satu platform pembelajaran perusahaan.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">Konsultasikan Kebutuhan Anda <ArrowRight className="h-4 w-4" /></Link></div><img src="https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_lms.png" alt="Learning Management System" className="w-full rounded-[28px] border border-white/20 shadow-2xl" /></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 lg:px-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Penjelasan</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Pembelajaran yang terhubung dengan tujuan bisnis.</h2><p className="mt-7 text-lg leading-relaxed text-gray-600">Learning Management System dari UPSENSE membantu perusahaan menyusun, menyampaikan, dan mengevaluasi program pembelajaran secara konsisten. Setiap pelatihan memiliki jalur, target, dan rekam jejak yang jelas sehingga pengembangan SDM dapat dipantau sebagai bagian dari strategi organisasi.</p></div></section>
      <section className="bg-[#f5f8fc] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Ringkasan Solusi</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Dari materi hingga kompetensi, dalam satu alur.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{[['Design', 'Menyusun struktur program, learning path, dan target kompetensi.'], ['Deliver', 'Menyediakan materi dan pengalaman belajar yang mudah diakses peserta.'], ['Measure', 'Mengukur progres, assessment, dan dampak program bagi organisasi.']].map(([title, text], index) => <div key={title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-4xl font-bold text-[#f58b01]">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold text-[#013e78]">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></div>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Mengapa harus Learning Management System?</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Karena kemampuan tim harus tumbuh secepat bisnis bergerak.</h2></div><div className="space-y-5">{['Menyatukan materi, pelatihan, dan rekam pembelajaran yang sebelumnya tersebar.', 'Memudahkan manajer melihat kesiapan dan perkembangan kompetensi tim.', 'Membangun standar pelatihan yang konsisten lintas divisi dan lokasi.', 'Menyediakan data pembelajaran untuk keputusan pengembangan SDM yang lebih akurat.'].map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-[#013e78]/10 p-5"><ChartNoAxesCombined className="mt-1 h-5 w-5 shrink-0 text-[#f58b01]" /><p className="font-medium leading-relaxed text-gray-700">{item}</p></div>)}</div></div></section>
      <section className="bg-[#013e78] py-20 text-white lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Fitur Utama</p><h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Learning operations, made measurable.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><Icon className="h-8 w-8 text-[#f58b01]" /><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{text}</p></article>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><UsersRound className="mx-auto h-10 w-10 text-[#f58b01]" /><h2 className="mt-5 text-3xl font-bold text-[#013e78] md:text-5xl">Siap membangun budaya belajar yang terukur?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mari bahas program pembelajaran, kompetensi prioritas, dan pengalaman pengguna yang tepat untuk tim Anda.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
