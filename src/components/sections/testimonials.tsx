"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

type TestimonialItem = {
  name: string;
  rating: 4 | 5;
  comment: string;
};

const testimonials: TestimonialItem[] = [
  {
    name: 'Chandra Tiono',
    rating: 5,
    comment:
      'The delivery process felt structured and dependable. The team translated our operational needs into a solution that was practical, scalable, and ready for long-term use. We are very open to continuing with recurring projects.',
  },
  {
    name: 'Dwi Sukmana',
    rating: 5,
    comment:
      'Communication was responsive and the implementation quality met our expectations. What stood out most was their ability to align technical execution with business goals, which makes us confident to collaborate again in future initiatives.',
  },
  {
    name: 'Voudy Ramaditya',
    rating: 4,
    comment:
      'The project was handled professionally from planning to deployment. The outcome improved visibility for our internal process, and the team showed strong commitment during adjustments. We see strong potential for recurring engagement.',
  },
  {
    name: 'Julius Wibisono',
    rating: 5,
    comment:
      'Their team brought both technical depth and business understanding. The solution delivered measurable efficiency gains, and the collaboration process was smooth enough that we would be comfortable expanding the scope in the future.',
  },
  {
    name: 'Jonathan .L',
    rating: 5,
    comment:
      'We appreciated the clarity, speed, and professionalism throughout the engagement. The final product answered our immediate needs while also giving room for growth, which is exactly why we are considering recurring development support.',
  },
  {
    name: 'Eko Hadi',
    rating: 5,
    comment:
      'The team was reliable, solution-oriented, and easy to work with. They helped simplify a complex requirement into an effective digital workflow, and the result gives us confidence to continue with upcoming projects.',
  },
];

function Stars({ rating }: { rating: 4 | 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#f5b301]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? 'fill-current' : 'text-gray-300'}`}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-[#f8fbff] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#013e78]">
              Ulasan Klien
            </p>
            <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl lg:text-4xl">
              Testimoni
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
            Gambaran umpan balik klien setelah delivery: komunikasi yang baik, eksekusi praktis, dan peluang kolaborasi berkelanjutan untuk proyek berikutnya.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
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
            1280: {
              slidesPerView: 3,
            },
          }}
          className="w-full [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name} className="!h-auto">
              <article className="flex h-full flex-col rounded-3xl border border-[#d7e7f6] bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <Stars rating={item.rating} />
                  <div className="rounded-full bg-[#e9f4ff] p-3 text-[#013e78]">
                    <Quote className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>

                <p className="flex-1 text-base leading-7 text-gray-600">
                  “{item.comment}”
                </p>

                <div className="mt-8 border-t border-gray-100 pt-5">
                  <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
