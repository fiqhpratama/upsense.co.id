import { notFound } from 'next/navigation';
import { getCmsCaseStudy } from '@/lib/cms-content';
import { CaseStudyTemplate, getCaseStudyMetadata } from '../_components/CaseStudyTemplate';

export const dynamicParams = true;
export const revalidate = 60; // ponytail: ISR 1 menit, selaras dengan /blog/

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCmsCaseStudy(slug);
  return study ? getCaseStudyMetadata(study) : {};
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = await getCmsCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyTemplate data={study} />;
}
