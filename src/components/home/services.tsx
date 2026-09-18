import Link from 'next/link';
import { ArrowRight, Check, Code, Workflow, Globe, Database, Smartphone, Rocket, Wrench } from 'lucide-react';
import { SectionTag } from './section-tag';

type Service = {
  tag: string;
  title: string;
  desc: string;
  features: string[];
  href: string;
  icon: typeof Code;
};

const services: Service[] = [
  {
    tag: 'DEVELOPMENT',
    title: 'Custom Software Development',
    desc: 'Solusi software yang direncanakan sesuai alur kerja dan kebutuhan spesifik perusahaan Anda.',
    features: ['Business Applications', 'Internal Systems', 'Management Systems', 'System Integration', 'Software Modernization'],
    href: '/services/layanan-customisasi-software-bisnis/',
    icon: Code,
  },
  {
    tag: 'AUTOMATION',
    title: 'Workflow & Automation',
    desc: 'Implementasi AI untuk otomasi cerdas dan predictive analytics guna menyederhanakan operasional.',
    features: ['Process Automation', 'Workflow Management', 'AI Automation', 'System Integration', 'Data Automation'],
    href: '/services/analytic-solutions/',
    icon: Workflow,
  },
  {
    tag: 'DEVELOPMENT',
    title: 'Website Development',
    desc: 'Membangun website scalable berperforma tinggi dengan struktur modern dan user journey yang berorientasi pada konversi.',
    features: ['Corporate Website', 'Business Website', 'Web Application', 'E-Commerce', 'Website Revamp'],
    href: '/services/layanan-pengembangan-website/',
    icon: Globe,
  },
  {
    tag: 'ENTERPRISE',
    title: 'ERP Customization',
    desc: 'Menyesuaikan modul ERP dengan alur kerja bisnis untuk kontrol, akurasi, dan kelancaran operasional yang lebih baik.',
    features: ['Module Customization', 'Workflow Customization', 'System Integration', 'Reporting & Analytics', 'Data Migration'],
    href: '/services/odoo-erp-customization/',
    icon: Database,
  },
  {
    tag: 'DEVELOPMENT',
    title: 'Mobile App Development',
    desc: 'Merancang dan membangun aplikasi mobile berperforma tinggi untuk Android dan iOS dengan backend yang scalable.',
    features: ['Android Apps', 'iOS Apps', 'Cross-Platform Apps', 'Backend Integration', 'App Enhancement'],
    href: '/services/layanan-pembuatan-aplikasi-mobile/',
    icon: Smartphone,
  },
  {
    tag: 'PRODUCT',
    title: 'MVP Development',
    desc: 'Memastikan ide produk yang unggul dan tangguh untuk memvalidasi kebutuhan pasar serta mempercepat iterasi produk.',
    features: ['Product Planning', 'Prototyping', 'MVP Development', 'Product Testing', 'Product Scaling'],
    href: '/services/software-development/',
    icon: Rocket,
  },
  {
    tag: 'SUPPORT',
    title: 'Maintenance & Support',
    desc: 'Dukungan berkelanjutan untuk menjaga aplikasi tetap aman, stabil, dan berkinerja optimal.',
    features: ['Application Maintenance', 'Technical Support', 'Performance Monitoring', 'Security Updates', 'Continuous Improvement'],
    href: '/services/cloud-devops/',
    icon: Wrench,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="flex flex-col border border-[#E4E9F2] bg-white p-[26px]">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center bg-[#0A1E43]">
          <Icon className="h-5 w-5 text-white" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.08em] text-[#56637A]">{service.tag}</span>
      </div>

      <h3 className="mt-6 font-[family-name:var(--font-display)] text-[19px] font-bold leading-snug tracking-tight text-[#0C1425]">
        {service.title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.6] text-[#56637A]">{service.desc}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-[14px] text-[#0C1425]">
            <Check className="h-3.5 w-3.5 shrink-0 text-[#F97316]" strokeWidth={2.5} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className="group mt-6 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-[#F97316]"
      >
        Pelajari layanan
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function Services() {
  const row1 = services.slice(0, 4);
  const row2 = services.slice(4);

  return (
    <section id="services" className="bg-[#F6F8FB] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-[640px]">
          <SectionTag>LAYANAN</SectionTag>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[40px]">
            Layanan Utama Kami
          </h2>
          <p className="mt-4 text-[15.5px] leading-[1.6] text-[#56637A]">
            Kami membangun custom software, mengotomasi alur kerja, dan menghubungkan sistem agar
            operasional lebih cepat, rapi, dan efisien.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {row1.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {row2.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
