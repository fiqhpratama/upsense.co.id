'use client';

import React from 'react';
import { motion } from 'framer-motion';

const coreValues = [
  { letter: 'T', title: 'Trust', subtitle: 'Kepercayaan' },
  { letter: 'O', title: 'Ownership', subtitle: 'Kepemilikan' },
  { letter: 'G', title: 'Growth', subtitle: 'Pertumbuhan' },
  { letter: 'E', title: 'Excellence', subtitle: 'Keunggulan' },
  { letter: 'T', title: 'Teamwork', subtitle: 'Kerjasama' },
  { letter: 'H', title: 'Honesty', subtitle: 'Kejujuran' },
  { letter: 'E', title: 'Empathy', subtitle: 'Empati' },
  { letter: 'R', title: 'Reliability', subtitle: 'Keandalan' },
];

const ClientsSection = () => {
  return (
    <section id="about-us" className="bg-white pb-24 pt-8 md:pt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,7fr)]">
          {/* Left: Label + Title */}
          <div>
            <span className="inline-block text-[#f58b01] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Tentang Kami
            </span>
            <h2 className="text-4xl lg:text-4xl font-bold text-black leading-tight">
              IT Consultant Jakarta untuk Transformasi Digital
            </h2>
            <div className="w-16 h-1 bg-[#f58b01] mt-6 rounded-full" />
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              PT UPSENSE Teknologi Indonesia adalah partner transformasi digital bagi perusahaan yang ingin memodernisasi operasional, mendigitalisasi alur kerja internal, serta menggantikan legacy system yang terfragmentasi dengan solusi teknologi terintegrasi dan scalable. Berbasis di Jakarta Utara, kami memadukan keahlian teknis, delivery yang terstruktur, dan eksekusi praktis untuk menjawab tantangan operasional di level enterprise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mulai dari enterprise ERP dan digitalisasi logistik hingga integrasi sistem internal, platform otomasi, serta custom software operasional, UPSENSE menghadirkan teknologi untuk meningkatkan kontrol proses, mengurangi hambatan operasional, dan mendukung transformasi digital berkelanjutan di seluruh organisasi.
            </p>
          </motion.div>
        </div>
        {/* Core Value Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="mb-8">
            <h3 className="text-[#013e78] text-2xl md:text-3xl font-bold uppercase tracking-[0.12em]">
              Nilai Inti Kami
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {coreValues.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-5"
              >
                <span className="w-10 shrink-0 text-4xl font-black leading-none text-black">
                  {item.letter}
                </span>
                <div>
                  <p className="text-base font-bold leading-tight text-black">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
