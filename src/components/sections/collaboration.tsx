'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ElevateSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="space-y-32">
          {/* Main Title Section as a Flex Row */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              <div className="lg:w-1/2">
                  <h2 className="text-4xl lg:text-4xl font-bold text-black mb-8 tracking-tight leading-none">
                  Dari Tantangan<br />menjadi Sistem
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Software siap pakai yang dirancang dari tantangan bisnis nyata, memadukan insight, engineering, dan nilai komersial.
                </p>
              </div>
              <div className="lg:w-1/2 w-full space-y-8">
<div className="relative h-[200px] lg:h-[225px] w-full rounded-lg overflow-hidden shadow-2xl group bg-gray-50 border border-gray-100">
                    <span className="absolute top-3 left-3 z-10 bg-white text-black text-sm font-medium px-3 py-1 rounded-full">
                      POS (Point Of Sales)
                    </span>
                    <motion.img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                      alt="Main Solution"
                      className="w-full absolute top-0 object-cover"
                      initial={{ y: 0 }}
                      whileHover={{ y: "-60%" }}
                      transition={{ duration: 7, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                <div className="relative h-[200px] lg:h-[225px] w-full rounded-lg overflow-hidden shadow-2xl group bg-gray-50 border border-gray-100">
                  <motion.img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                    alt="Enterprise Solution"
                    className="w-full absolute top-0 object-cover"
                    initial={{ y: 0 }}
                    whileHover={{ y: "-60%" }}
                    transition={{ duration: 7, ease: "linear" }}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default ElevateSection;
