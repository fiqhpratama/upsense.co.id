'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudyItem } from './case-studies';

export default function CaseStudiesCarousel({ cases }: { cases: CaseStudyItem[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 3200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="w-full [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto"
    >
      {cases.map((item) => (
        <SwiperSlide key={item.title} className="!h-auto">
          <article className="group flex h-full flex-col border border-[#E4E9F2] bg-white">
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(6,13,29,0) 35%, rgba(6,13,29,0.7) 100%)' }}
                aria-hidden="true"
              />
              <span className="absolute bottom-3.5 left-3.5 bg-[#060D1D]/65 px-3 py-[7px] font-mono text-[10.5px] tracking-[0.08em] text-white">
                {item.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="min-h-[52px] font-[family-name:var(--font-display)] text-[19px] font-bold leading-snug tracking-tight text-[#0C1425]">
                {item.title}
              </h3>
              <Link
                href={item.link}
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-[#F97316]"
              >
                Baca studi kasus
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
