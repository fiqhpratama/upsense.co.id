'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Pill, ShieldCheck, ShoppingCart, Truck, WalletCards } from 'lucide-react';

const industries = [
  { name: 'Pharmacy', icon: Pill },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Logistic', icon: Truck },
  { name: 'Insurance', icon: ShieldCheck },
  { name: 'Retail', icon: ShoppingCart },
  { name: 'Fintech', icon: WalletCards },
];

export default function IndustryExperienceSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-black uppercase tracking-[0.12em] text-black md:text-5xl lg:text-4xl">
            Pengalaman Industri
          </h2>
          <p className="mt-4 text-lg italic text-gray-500">
            * Berbagai sektor yang telah kami tangani
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 px-6 py-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <Icon className="h-12 w-12 text-black" strokeWidth={1.8} />
                <p className="mt-6 text-lg font-medium uppercase tracking-wide text-[#5d7490]">
                  {industry.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
