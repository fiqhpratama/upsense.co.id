import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getAllPortfolios } from '@/lib/portfolio-content';
import { SectionTag } from '@/components/home/section-tag';

export default function PortfolioSection() {
  const projects = getAllPortfolios();

  return (
    <section id="portfolio" className="bg-[#F6F8FB] py-16 md:py-22">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-[720px]">
          <SectionTag>PORTFOLIO PILIHAN</SectionTag>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[38px]">
            Sistem yang dirancang sesuai cara bisnis beroperasi.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}/`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E9F2] bg-white transition-colors hover:border-[#0A1E43]/30"
            >
              <div
                className="relative flex h-[168px] items-center justify-center overflow-hidden p-4"
                style={{ background: 'linear-gradient(225deg, #13264A 0%, #060D1D 100%)' }}
              >
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.cardTitle ?? project.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full rounded-lg border border-[#1C3050] bg-[#0A1428]" aria-hidden="true" />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2.5 px-5 pb-5 pt-[18px]">
                <span className="font-mono text-[10px] tracking-[0.15em] text-[#F97316]">
                  {project.cardTag ?? project.category?.toUpperCase()}
                </span>
                <h3 className="flex-1 font-[family-name:var(--font-display)] text-[16.5px] font-bold leading-[1.3] text-[#0C1425]">
                  {project.cardTitle ?? project.title}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#56637A]">
                  Lihat case study
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-[#F97316] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
