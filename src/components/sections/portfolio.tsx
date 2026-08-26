import Image from 'next/image';
import Link from 'next/link';

const projects: { category: string; title: string; image: string; href?: string }[] = [
  { category: 'Estimator Industri', title: 'Estimator Jendela & Pintu Aluminium', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/64a7e6b4-ed1b-4529-b7a8-523e641aadcd/aluminium-estimator-1767985968280.png?width=8000&height=8000&resize=contain', href: '/portfolio/estimator-jendela-pintu-aluminium/' },
  { category: 'Aplikasi Manufaktur', title: 'Bill of Materials Manufaktur', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/1-5.png?', href: '/portfolio/bill-of-materials-manufaktur/' },
  { category: 'Manajemen Gudang', title: 'Sistem Gudang', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/2-6.png?', href: '/portfolio/tunggal-idaman-abdi-inventory-inbound/' },
  { category: 'Sistem Pesanan Web', title: 'Web Order Manufaktur', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/3-7.png?', href: '/portfolio/tostem-elevation-sales-distributor-order/' },
  { category: 'Tool Keuangan', title: 'Sistem Anggaran Pengeluaran', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/4-8.png?', href: '/portfolio/sistem-anggaran-pengeluaran/' },
  { category: 'E-Commerce', title: 'AWL Syirkah and Gold Sell', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/5-9.png?', href: '/portfolio/awl-syirkah-and-gold-sell/' },
  { category: 'Point of Sale', title: 'Point of Sales System', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/6-10.png?', href: '/portfolio/point-of-sales-inventory-system/' },
  { category: 'Company Profile', title: 'Website Profil & E-Catalogue', image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e5bb03c6-716d-4d52-b6a5-c70435ea9eb6-upsense-co-id/assets/images/7-11.png?', href: '/portfolio/website-company-profil-e-catalogue/' },
];

export default function PortfolioSection() {
  return <section id="portfolio" className="bg-[#f5f8fc] py-20 md:py-24"><div className="container mx-auto px-6 lg:px-12">
    <div className="mx-auto mb-14 max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Portofolio Pilihan</p><h2 className="mt-4 text-3xl font-bold text-black md:text-5xl">Sistem yang dirancang sesuai cara bisnis beroperasi.</h2></div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{projects.map((project) => { const card = <article className="group h-full overflow-hidden rounded-3xl border border-[#013e78]/10 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"><div className="relative aspect-[4/3] bg-white p-5"><Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-5 transition-transform duration-300 group-hover:scale-105" /></div><div className="border-t border-[#013e78]/10 p-6"><p className="text-sm font-semibold uppercase tracking-wide text-[#f58b01]">{project.category}</p><h3 className="mt-3 text-xl font-bold leading-tight text-[#013e78]">{project.title}</h3></div></article>; return project.href ? <Link key={project.title} href={project.href}>{card}</Link> : <div key={project.title}>{card}</div>; })}</div>
  </div></section>;
}
