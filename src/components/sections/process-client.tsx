"use client";

import React, { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

export type ProjectStudyCaseItem = {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

type ProjectsSectionClientProps = {
  projects: ProjectStudyCaseItem[];
  headingLevel?: 'h1' | 'h2';
};

function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function ProjectDescription({ content }: { content: string }) {
  if (looksLikeHtml(content)) {
    return (
      <div
        className="prose prose-sm max-w-none text-gray-600 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-a:text-[#013e78] prose-a:no-underline hover:prose-a:underline line-clamp-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return <p className="text-gray-600 text-base mb-4 line-clamp-4">{content}</p>;
}

export default function ProjectsSectionClient({ projects, headingLevel = 'h2' }: ProjectsSectionClientProps) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const Heading = headingLevel;

  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => project.category))).filter((category) => category !== 'Business Solution'),
    [projects]
  );

  const filteredProjects = activeCategory === 'Semua'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <Heading className="text-4xl lg:text-6xl font-bold text-black max-w-xl leading-[1.1]">
            Studi Kasus Proyek
          </Heading>
          <div className="max-w-xl space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Studi kasus proyek menampilkan proyek nyata, permasalahan yang diselesaikan, serta hasil yang dicapai melalui software engineering dan otomasi alur kerja.
            </p>
            {categories.length > 1 ? (
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'border-[#013e78] bg-[#013e78] text-white'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-[#013e78] hover:text-[#013e78]'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={filteredProjects.length > 3}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.link}>
              <div className="group relative">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-base font-medium text-white/80 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center px-4">
                    <div className="bg-white p-6 rounded-xl w-full max-w-[90%] flex flex-col items-center justify-center text-center shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ProjectDescription content={project.description} />
                      <a href={project.link} className="mt-4 flex items-center gap-3 bg-[#013e78] text-white pl-6 pr-2 py-2 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#012d56] transition-all group/btn">
                        Selengkapnya
                        <div className="bg-gradient-to-br from-white to-gray-100 p-1.5 rounded-full shadow-sm flex items-center justify-center">
                          <ArrowRight className="w-3.5 h-3.5 text-[#013e78]" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
