import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Studi Kasus Software, ERP & Digital Transformation',
  description: 'Studi kasus UPSENSE tentang custom software, ERP, workflow automation, system integration, dan digital transformation untuk perusahaan di Indonesia.',
  keywords: ['studi kasus software', 'implementasi ERP', 'custom software enterprise', 'workflow automation', 'digital transformation Indonesia'],
  alternates: { canonical: 'https://upsense.co.id/post/' },
  openGraph: {
    title: 'Studi Kasus Software, ERP & Digital Transformation',
    description: 'Lihat studi kasus implementasi sistem enterprise dan transformasi digital oleh UPSENSE.',
    url: 'https://upsense.co.id/post/',
    type: 'website',
  },
};

export default function PostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
