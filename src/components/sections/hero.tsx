'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-cover bg-center pb-40 pt-64" style={{ backgroundImage: "linear-gradient(rgba(2, 45, 87, 0.86), rgba(2, 45, 87, 0.86)), url('https://images.unsplash.com/photo-1727434032773-af3cd98375ba?auto=format&fit=crop&w=1920&q=85')" }}>
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px] -mr-64 -mt-64">
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-[80px] -ml-32 -mb-32">
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 lg:gap-12 w-full">
            <div className="flex-1 min-w-0">
                <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-2 text-3xl font-medium leading-[1.1] tracking-tight text-white sm:mb-4 sm:text-5xl md:text-6xl lg:text-6xl">
                  Membantu <br />Transformasi Digital Bisnis
                </motion.h1>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://upsense.co.id/contact/" className="rounded-full bg-[#f58b01] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#d97900]">Jadwalkan Discovery Call</a>
                  <a href="https://upsense.co.id/services/" className="rounded-full border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10">Lihat Layanan</a>
                </div>
              </div>
              <div className="hidden max-w-2xl flex-1 text-right sm:block">
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mb-4 text-lg font-semibold leading-relaxed text-white sm:text-2xl">
                  Siap membangun sistem <br></br> yang siap berkembang bersama bisnis Anda.
                </motion.p>
                <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-sm leading-relaxed text-white/80 sm:text-base">
                  PT UPSENSE Teknologi Indonesia adalah perusahaan IT consulting dan software development berbasis di Jakarta yang mempercepat transformasi digital bagi bisnis yang visioner. 
                  <br></br>Kami mengubah proses manual yang kompleks menjadi solusi digital yang efisien, terarah, dan siap mendukung pertumbuhan bisnis.
                </motion.p>
              </div>
          </div>
      </div>
    </section>);

};

export default HeroSection;
