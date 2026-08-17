'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import ProcessSection from '@/components/sections/process';
import { CaseStudyTemplate, type CaseStudyData } from './_components/CaseStudyTemplate';
import { getCmsCaseStudy } from '@/lib/cms-content';

export default function GenericCaseStudyPage() {
  const [study, setStudy] = useState<CaseStudyData | null>(null);
  const [missing, setMissing] = useState(false);
  const [isIndex, setIsIndex] = useState(true);

  useEffect(() => {
    const segments = window.location.pathname.split('/').filter(Boolean);
    const slug = segments[segments.length - 1];
    if (!slug || slug === 'post') {
      setIsIndex(true);
      return;
    }

    setIsIndex(false);
    getCmsCaseStudy(slug).then((item) => {
      if (item) setStudy(item);
      else setMissing(true);
    });
  }, []);

  useEffect(() => {
    if (study) document.title = `${study.title} | UPSENSE`;
  }, [study]);

  if (study) return <CaseStudyTemplate data={study} />;

  if (isIndex) return <>
    <Navigation />
    <main className="pt-16"><ProcessSection headingLevel="h1" /></main>
    <Footer />
  </>;

  return <>
    <Navigation />
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-6 pt-24 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58b01]">Case Study</p>
        <h1 className="mt-4 text-3xl font-bold text-[#013e78]">{missing ? 'Case study tidak ditemukan.' : 'Memuat case study...'}</h1>
      </div>
    </main>
    <Footer />
  </>;
}
