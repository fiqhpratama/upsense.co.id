import { getCmsCaseStudies } from '@/lib/cms-content';
import type { CaseStudyData } from '@/app/post/_components/CaseStudyTemplate';
import { SectionTag } from './section-tag';
import CaseStudiesCarousel from './case-studies-carousel';

export type CaseStudyItem = {
  title: string;
  category: string;
  image: string;
  link: string;
};

// ponytail: fallback statis agar section tidak pernah kosong saat CMS down
const fallbackCases: CaseStudyItem[] = [
  {
    title: 'Pemanfaatan Document Management System (DMS) untuk Business Compliance',
    category: 'COMPLIANCE',
    image: 'https://images.unsplash.com/photo-1634562876572-5abe57afcceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/post/',
  },
  {
    title: 'Implementasi E-Budgeting untuk Optimasi Budgeting Operasional Marketing PT Tunggal Idaman Abdi',
    category: 'FINANCE',
    image: 'https://images.unsplash.com/photo-1693570810503-4552b57e6f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    link: '/post/',
  },
];

function mapCases(items: CaseStudyData[]): CaseStudyItem[] {
  return items.map((item) => ({
    title: item.title,
    category: item.category.toUpperCase(),
    image: item.heroImage,
    link: `/post/${item.slug}`,
  }));
}

async function loadCases(): Promise<CaseStudyItem[]> {
  try {
    const items = await getCmsCaseStudies();
    if (items?.length) return mapCases(items);
  } catch {
    // CMS gagal — pakai fallback statis
  }
  return fallbackCases;
}

export default async function CaseStudies() {
  const cases = await loadCases();

  return (
    <section className="bg-[#F6F8FB] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <SectionTag>STUDI KASUS</SectionTag>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[40px]">
              Studi Kasus Proyek
            </h2>
          </div>
          <p className="max-w-[520px] text-[15.5px] leading-[1.6] text-[#56637A]">
            Studi kasus proyek menampilkan proyek nyata, permasalahan yang diselesaikan, serta hasil
            yang dicapai melalui software engineering dan otomasi alur kerja.
          </p>
        </div>

        <div className="mt-10">
          <CaseStudiesCarousel cases={cases} />
        </div>
      </div>
    </section>
  );
}
