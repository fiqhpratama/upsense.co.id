"use client";

import Link from "next/link";
import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="bg-[#0a1e43] text-white rounded-[40px] p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Left: Links & Social */}
            <div className="lg:pr-12 space-y-12">
              <div className="grid grid-cols-2 gap-8 max-w-xl">
                <div className="space-y-6">
                  <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Tentang</h4>
                  <ul className="space-y-4">
                    <li><Link href="/#about-us" className="font-medium hover:text-gray-400 transition-colors">Tentang Kami</Link></li>
                    <li><Link href="/#about-us" className="font-medium hover:text-gray-400 transition-colors">Visi & Misi</Link></li>
                    <li><Link href="/contact" className="font-medium hover:text-gray-400 transition-colors">Hubungi Kami</Link></li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-gray-500 text-sm font-semibold uppercase tracking-widest">Layanan</h4>
                  <ul className="space-y-4">
                    <li><Link href="/services/layanan-customisasi-software-bisnis" className="font-medium hover:text-gray-400 transition-colors">Custom Software</Link></li>
                    <li><Link href="/services/layanan-pengembangan-website" className="font-medium hover:text-gray-400 transition-colors">Website Development</Link></li>
                    <li><Link href="/services/layanan-pembuatan-aplikasi-mobile" className="font-medium hover:text-gray-400 transition-colors">Mobile App Development</Link></li>
                  </ul>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/upsense.id/" target="_blank" rel="noopener noreferrer" aria-label="UPSENSE on Instagram" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram className="w-4 h-4" />
                  <span className="sr-only">UPSENSE on Instagram</span>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="UPSENSE on Facebook" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Facebook className="w-4 h-4" />
                  <span className="sr-only">UPSENSE on Facebook</span>
                </a>
                <a href="https://id.linkedin.com/company/pt-upsense-teknologi-indonesia" target="_blank" rel="noopener noreferrer" aria-label="UPSENSE on LinkedIn" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="sr-only">UPSENSE on LinkedIn</span>
                </a>
              </div>

              {/* Representative Office */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f58b01] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white text-base font-semibold uppercase tracking-widest mb-2">Kantor Perwakilan Kami</h4>
                  <p className="text-gray-400 text-base leading-relaxed">
                    Wisma SMR, Jl. Yos Sudarso Lt 9, Unit 904,<br />
                    RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok,<br />
                    Jkt Utara, Daerah Khusus Ibukota Jakarta 14350
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ejfkCLspwKYMNZDL8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-[#f58b01] text-base font-medium hover:text-orange-300 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Lihat di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Details */}
            <div className="lg:pl-12 lg:border-l border-white/10 flex flex-col justify-center">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-6">
                    <h3 className="text-5xl md:text-6xl font-bold tracking-tight text-white">Mari Terhubung</h3>
                  <span className="text-red-500 text-5xl font-bold">*</span>
                </div>
                <p className="text-gray-400 mb-8 text-xl leading-relaxed">
                  Hubungi tim sales kami untuk konsultasi dan diskusi proyek.
                </p>
                <div className="space-y-5">
                  <div className="rounded-3xl bg-[#012d56] border border-white/5 p-6">
                    <p className="text-white text-lg font-semibold mb-2">Phone:</p>
                    <a href="https://api.whatsapp.com/send?phone=6285217000041" className="block text-gray-300 hover:text-white transition-colors leading-relaxed">
                      Sales : +62 852 170000 41
                    </a>
                  </div>

                  <div className="rounded-3xl bg-[#012d56] border border-white/5 p-6">
                    <p className="text-white text-lg font-semibold mb-2">Email:</p>
                    <a href="mailto:sales@upsense.co.id" className="text-gray-300 hover:text-white transition-colors">
                      sales@upsense.co.id
                    </a>
                  </div>

                  <a
                    href="https://api.whatsapp.com/send?phone=6285217000041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[#25D366] rounded-full flex items-center justify-center gap-2 text-white font-semibold shadow-sm hover:bg-[#1ebe5b] hover:shadow-md transition-all active:scale-95"
                  >
                    Chat melalui WhatsApp
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:grid md:grid-cols-2 items-center gap-6">
            <div className="text-gray-500 text-base">
              © 2025 UPSENSE. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-end gap-8 text-base text-gray-500">
              <Link href="/contact" className="hover:text-white transition-colors">Kontak</Link>
              <Link href="/services" className="hover:text-white transition-colors">Layanan</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
