"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import {
  Bot,
  Building2,
  Code2,
  Globe,
  Network,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { services, type ServiceIconName } from '@/data/services';

const serviceIcons: Record<ServiceIconName, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  code: Code2,
  bot: Bot,
  network: Network,
  globe: Globe,
  building: Building2,
  smartphone: Smartphone,
  rocket: Rocket,
  shield: ShieldCheck,
};

const otherServices = [
  {
    title: 'Odoo ERP Customization',
    description: 'Modul Odoo ERP yang dikonfigurasi sesuai alur kerja bisnis untuk kontrol keuangan dan visibilitas gudang yang lebih baik.',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_odoo.png',
    href: '/services/odoo-erp-customization',
    capabilities: ['Sistem Akuntansi & Keuangan', 'Manajemen Inventaris & Gudang'],
  },
  {
    title: 'Learning Management System',
    description: 'Platform pembelajaran terstruktur untuk mengelola program pelatihan, kompetensi karyawan, penilaian, dan visibilitas progres.',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_lms.png',
    href: '/services/learning-management-system',
    capabilities: ['Jalur belajar & penilaian', 'Data pelatihan terpusat'],
  },
  {
    title: 'Core HRIS & Mobile Attendance',
    description: 'Fondasi HR terintegrasi untuk data karyawan, kehadiran, persetujuan, dan operasional tenaga kerja lintas lokasi.',
    image: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/banner_hris.png',
    href: '/services/core-hris-mobile-attendance',
    capabilities: ['Manajemen siklus hidup karyawan', 'Absensi & persetujuan mobile'],
  },
];

const AboutSection = () => {
  return (
    <section id="our-services" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-12 items-start mb-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl lg:text-5xl font-bold text-black leading-tight">
              Layanan Utama Kami
            </h2>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              Kami membangun custom software, mengotomasi alur kerja, dan menghubungkan sistem agar operasional lebih cepat, rapi, dan efisien.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                <motion.div
                  className="rounded-3xl border border-black/5 bg-[#e8f0fa] p-6 min-h-[320px] h-full flex flex-col justify-between"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-[#013e78] shadow-sm">
                      {React.createElement(serviceIcons[service.icon], { className: 'h-6 w-6' })}
                    </div>
                    <span className="text-xs font-bold tracking-[0.2em] text-black/50 uppercase">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-black mt-3 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-black/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 border-t border-black/10 pt-4">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center gap-2 text-sm font-medium text-black/70">
                          <ShieldCheck className="h-4 w-4 shrink-0 text-[#013e78]" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    {service.href && <Link href={service.href} className="mt-6 inline-flex text-sm font-semibold text-[#013e78] hover:underline">Pelajari layanan</Link>}
                  </div>
                  
                </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-28 border-t border-[#013e78]/10 pt-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Enterprise Platforms</span>
            <h2 className="mt-4 text-4xl font-bold text-black lg:text-5xl">Layanan Lainnya</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Platform software andal untuk governance, kejelasan operasional, dan pertumbuhan enterprise yang berkelanjutan.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {otherServices.map((service, index) => {
              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-[28px] border border-[#013e78]/10 bg-white shadow-[0_16px_45px_rgba(1,62,120,0.08)] transition-shadow hover:shadow-[0_20px_55px_rgba(1,62,120,0.16)]"
                >
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#013e78]">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold leading-tight text-[#013e78]">{service.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">{service.description}</p>
                    <ul className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center gap-3 text-sm font-semibold text-[#013e78]">
                          <ShieldCheck className="h-4 w-4 text-[#f58b01]" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                    {service.href && <div className="mt-7 flex justify-end"><Link href={service.href} className="inline-flex items-center rounded-full bg-[#013e78] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#012d56]">Selengkapnya</Link></div>}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
