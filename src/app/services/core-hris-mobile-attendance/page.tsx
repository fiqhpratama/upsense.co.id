import type { Metadata } from 'next';
import { SITE_TITLES } from '@/lib/site-titles';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BarChart3, CalendarCheck2, ChartNoAxesCombined, Clock3, FileCheck2, ShieldCheck, UsersRound, Workflow } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: SITE_TITLES.servicesBySlug['core-hris-mobile-attendance'],
  description: 'Core HR Information System dan mobile attendance untuk data karyawan, shift, leave, approval, dan kesiapan payroll.',
  alternates: { canonical: 'https://upsense.co.id/services/core-hris-mobile-attendance/' },
};

const features = [
  { icon: UsersRound, title: 'Employee Master Data', text: 'Satu sumber data karyawan untuk profil, jabatan, organisasi, dan riwayat kerja yang lebih akurat.' },
  { icon: Clock3, title: 'Mobile Attendance', text: 'Pencatatan kehadiran yang praktis untuk tim lapangan maupun kantor, dengan visibilitas yang lebih baik.' },
  { icon: CalendarCheck2, title: 'Shift & Leave', text: 'Kelola pola kerja, jadwal shift, cuti, dan izin melalui alur yang konsisten dan terdokumentasi.' },
  { icon: Workflow, title: 'Approval Workflow', text: 'Persetujuan kehadiran, cuti, dan permintaan HR yang lebih cepat dengan jalur approval yang jelas.' },
  { icon: FileCheck2, title: 'Payroll-ready Data', text: 'Data absensi dan komponen HR yang lebih rapi untuk mendukung proses payroll yang lebih akurat.' },
  { icon: ShieldCheck, title: 'Role-based Access', text: 'Perlindungan data HR melalui akses berbasis peran untuk karyawan, HR, manager, dan administrator.' },
];

export default function CoreHrisMobileAttendancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Core HR Information System & Mobile Attendance',
    description: 'Platform HRIS untuk employee master data, mobile attendance, shift, leave, approval, payroll-ready data, dan dashboard HR.',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_hris.png',
    url: 'https://upsense.co.id/services/core-hris-mobile-attendance/',
    provider: { '@type': 'Organization', name: 'UPSENSE', url: 'https://upsense.co.id' },
    areaServed: { '@type': 'Country', name: 'Indonesia' },
    serviceType: ['Core HRIS', 'Mobile Attendance System', 'Human Resource Management System'],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Navigation />
    <main className="bg-white pt-20">
      <section className="bg-[#013e78] py-20 text-white lg:py-28"><div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Enterprise HR Solution</p><h1 className="mt-5 text-4xl font-bold leading-tight text-white md:text-6xl">Core HRIS & Mobile Attendance</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">Satukan data karyawan, absensi, approval, dan visibilitas operasional HR dalam satu sistem yang siap mendukung pertumbuhan organisasi.</p><Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">Konsultasikan Kebutuhan Anda <ArrowRight className="h-4 w-4" /></Link></div><img src="https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_hris.png" alt="Core HRIS and Mobile Attendance" className="w-full rounded-[28px] border border-white/20 shadow-2xl" /></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto max-w-4xl px-6 lg:px-12"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Penjelasan</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Fondasi HR yang rapi untuk keputusan yang lebih cepat.</h2><p className="mt-7 text-lg leading-relaxed text-gray-600">Core HR Information System & Mobile Attendance dari UPSENSE menyatukan data SDM dan aktivitas kehadiran ke dalam alur digital yang lebih konsisten. HR dan manajemen memperoleh data yang lebih siap digunakan, sementara karyawan mendapatkan pengalaman layanan HR yang lebih sederhana.</p></div></section>
      <section className="bg-[#f5f8fc] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Ringkasan Solusi</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Mengelola tenaga kerja tanpa data yang terpecah.</h2></div><div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{[['Centralize', 'Menyatukan data karyawan dan struktur organisasi sebagai fondasi operasional HR.'], ['Automate', 'Mendigitalkan attendance, shift, leave, dan approval untuk mengurangi pekerjaan administratif.'], ['Analyze', 'Menyediakan dashboard dan data payroll-ready untuk keputusan HR yang lebih terarah.']].map(([title, text], index) => <div key={title} className="rounded-3xl bg-white p-8 shadow-sm"><span className="text-4xl font-bold text-[#f58b01]">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold text-[#013e78]">{title}</h3><p className="mt-3 leading-relaxed text-gray-600">{text}</p></div>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:px-12"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Mengapa harus Core HRIS & Mobile Attendance?</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Karena data SDM yang jelas membuat operasi lebih siap bergerak.</h2></div><div className="space-y-5">{['Mengurangi data karyawan dan absensi yang tersebar di banyak file atau aplikasi.', 'Mempercepat alur leave, shift, dan approval tanpa mengorbankan kontrol.', 'Meningkatkan akurasi data yang dibutuhkan untuk payroll dan pelaporan HR.', 'Memberi manajemen visibilitas yang lebih baik atas kesiapan tenaga kerja.'].map((item) => <div key={item} className="flex gap-4 rounded-2xl border border-[#013e78]/10 p-5"><ChartNoAxesCombined className="mt-1 h-5 w-5 shrink-0 text-[#f58b01]" /><p className="font-medium leading-relaxed text-gray-700">{item}</p></div>)}</div></div></section>
      <section className="bg-[#013e78] py-20 text-white lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd497]">Fitur Utama</p><h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">HR operations, made connected.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/15 bg-white/5 p-7"><Icon className="h-8 w-8 text-[#f58b01]" /><h3 className="mt-6 text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-relaxed text-white/75">{text}</p></article>)}</div></div></section>
      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-12"><div className="mx-auto max-w-5xl rounded-[32px] bg-[#fff4e0] p-10 text-center md:p-16"><BadgeCheck className="mx-auto h-10 w-10 text-[#f58b01]" /><h2 className="mt-5 text-3xl font-bold text-[#013e78] md:text-5xl">Siap memperkuat fondasi operasional HR?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">Mari bahas proses HR, kebutuhan attendance, dan prioritas data yang paling relevan untuk organisasi Anda.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-7 py-3 font-semibold text-white hover:bg-[#012d56]">Hubungi UPSENSE <ArrowRight className="h-4 w-4" /></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
