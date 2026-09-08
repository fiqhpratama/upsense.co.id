"use client";

import { useEffect, useState } from 'react';
import { caseStudyPosts } from '@/data/case-study-posts';
import { getCmsCaseStudies } from '@/lib/cms-content';
import ProjectsSectionClient, { type ProjectStudyCaseItem } from '@/components/sections/process-client';

function mapProjects(caseStudies = caseStudyPosts): ProjectStudyCaseItem[] {
  return caseStudies.map((item) => ({
    title: item.title,
    category: item.category,
    image: item.heroImage,
    description: item.summary,
    link: `/post/${item.slug}`,
  }));
}

export default function ProcessSection({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const [projects, setProjects] = useState(() => mapProjects());

  useEffect(() => {
    getCmsCaseStudies().then((items) => {
      if (items?.length) setProjects(mapProjects(items));
    }).catch(() => {}); // ponytail: saat CMS gagal, biarkan fallback statis dipakai
  }, []);

  return <ProjectsSectionClient projects={projects} headingLevel={headingLevel} />;
}
