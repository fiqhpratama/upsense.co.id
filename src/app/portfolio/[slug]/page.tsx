import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { getPortfolio, getPortfolioSlugs } from '@/lib/portfolio-content';
import { services } from '@/data/services';

type PageProps = { params: Promise<{ slug: string }> };

const listItems = (content: string[]) => content.filter((item) => item.startsWith('- ')).map((item) => item.slice(2));
const bodyText = (content: string[]) => content.filter((item) => !item.startsWith('- ') && !item.startsWith('### ') && !item.startsWith('**'));
const estimatorImage = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/64a7e6b4-ed1b-4529-b7a8-523e641aadcd/aluminium-estimator-1767985968280.png?width=8000&height=8000&resize=contain';

export function generateStaticParams() { return getPortfolioSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const portfolio = getPortfolio((await params).slug);
  if (!portfolio) return {};
  const description = portfolio.overview.join(' ').slice(0, 160);
  return { title: portfolio.title, description, alternates: { canonical: `https://upsense.co.id/portfolio/${portfolio.slug}/` }, openGraph: { title: portfolio.title, description, type: 'article' } };
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#5f769f]">{children}</p>; }
function Copy({ content, compact = false }: { content: string[]; compact?: boolean }) { return <div className={compact ? 'space-y-3' : 'space-y-5'}>{bodyText(content).map((paragraph) => <p key={paragraph} className={compact ? 'text-sm leading-relaxed text-[#3f4f70]' : 'text-base leading-relaxed text-[#3f4f70] md:text-lg'}>{paragraph.replace(/^>\s*/, '')}</p>)}</div>; }

function ContentSection({ title, content, tinted = false }: { title: string; content?: string[]; tinted?: boolean }) {
  if (!content?.length) return null;
  const items = listItems(content);
  return <section className={tinted ? 'bg-[#f4f7fc] py-16 md:py-20' : 'py-16 md:py-20'}><div className="container mx-auto max-w-6xl px-6 lg:px-12"><div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]"><div><Eyebrow>{title}</Eyebrow><h2 className="mt-4 text-3xl text-[#0a1e43] md:text-4xl">{title}</h2></div><div><Copy content={content} />{items.length > 0 && <ul className="mt-7 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-base leading-relaxed text-[#3f4f70] md:text-lg"><span aria-hidden="true" className="text-[#0a1e43]">•</span><span>{item}</span></li>)}</ul>}</div></div></div></section>;
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const portfolio = getPortfolio((await params).slug);
  if (!portfolio) notFound();
  const metadata = [['Industry', portfolio.industry], ['Solution', portfolio.solution], ['Platform', portfolio.platform], ['Client', portfolio.client], ['Brand Group', portfolio.brand_group], ['Brand', portfolio.brand]].filter(([, value]) => value);
  const relatedServices = listItems(portfolio.sections['Related Services'] ?? []).map((title) => ({ title, href: services.find((service) => service.title === title)?.href }));
  const relatedProjects = listItems(portfolio.sections['Related Projects'] ?? []).map((title) => ({ title, href: getPortfolioSlugs().map(getPortfolio).find((project) => project?.title === title)?.slug }));
  const expenseCategories = [...(portfolio.sections['Expense Categories']?.join('\n\n').matchAll(/^### (.+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm) ?? [])].map(([, title, content]) => ({ title, content: content.trim().split(/\n\s*\n/).filter(Boolean) }));
  const cta = portfolio.sections['Call to Action'] ?? [];
  const ctaHeading = cta.find((item) => item.startsWith('### '))?.slice(4);
  const ctaAction = cta.find((item) => item.startsWith('**'))?.replaceAll('**', '');
  const heroImage = portfolio.heroImage || (portfolio.slug === 'estimator-jendela-pintu-aluminium' ? estimatorImage : '');
  const heroGrid = !heroImage
    ? 'grid'
    : portfolio.slug === 'estimator-jendela-pintu-aluminium'
    ? 'grid items-start gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(360px,1.24fr)]'
    : 'grid items-start gap-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(360px,0.9fr)]';

  return <><Navigation /><main className="bg-white pt-24"><article>
    <section className="py-10 md:py-16"><div className="container mx-auto max-w-6xl px-6 lg:px-12"><div className={heroGrid}><div className={heroImage ? undefined : 'max-w-5xl'}><Eyebrow>{[portfolio.category, portfolio.industry].filter(Boolean).join(' / ')}</Eyebrow><h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-[#0a1e43] md:text-6xl">{portfolio.title}</h1><div className="mt-6 max-w-3xl"><Copy content={portfolio.overview.slice(0, 1)} /></div>{metadata.length > 0 && <dl className="mt-7 flex flex-wrap gap-3">{metadata.map(([label, value]) => <div key={label} className="rounded-xl bg-[#f4f7fc] px-4 py-3"><dt className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#7f8ca8]">{label}</dt><dd className="mt-1 text-sm font-medium text-[#0a1e43]">{value}</dd></div>)}</dl>}</div>{heroImage && <div className="rounded-3xl bg-white p-5 shadow-[0_16px_40px_#00000012]"><div className="relative aspect-[6/5]"><Image src={heroImage} alt={portfolio.title} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-contain" priority /></div></div>}</div></div></section>
    <ContentSection title="Project Background" content={portfolio.sections['Project Background']} />
    <ContentSection title="Business Challenges" content={portfolio.sections['Business Challenges']} tinted />
    <ContentSection title="Solution Overview" content={portfolio.sections['Solution Overview']} />
    <ContentSection title="Technology & Technical Overview" content={portfolio.sections['Technology & Technical Overview']} tinted />
    <ContentSection title="Business Impact" content={portfolio.sections['Business Impact']} />
    {portfolio.highlights.length > 0 && <section className="bg-[#f4f7fc] py-16 md:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-12"><Eyebrow>Project Highlights</Eyebrow><h2 className="mt-4 text-3xl text-[#0a1e43] md:text-4xl">Project Highlights</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{portfolio.highlights.map((highlight) => <section key={highlight.title} className="rounded-xl border border-[#dfe7f3] bg-white p-5"><h3 className="text-xl text-[#0a1e43]">{highlight.title}</h3><div className="mt-3"><Copy content={highlight.content} compact /></div></section>)}</div></div></section>}
    {expenseCategories.length > 0 && <section className="py-16 md:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-12"><Eyebrow>Expense Categories</Eyebrow><h2 className="mt-4 text-3xl text-[#0a1e43] md:text-4xl">Expense Categories</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{expenseCategories.map((category) => <section key={category.title} className="rounded-xl border border-[#dfe7f3] bg-white p-5"><h3 className="text-xl text-[#0a1e43]">{category.title}</h3><div className="mt-3"><Copy content={category.content} compact /></div></section>)}</div></div></section>}
    {relatedServices.length > 0 && <section className="py-16 md:py-20"><div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:px-12"><div><Eyebrow>Related Services</Eyebrow><h2 className="mt-4 text-3xl text-[#0a1e43] md:text-4xl">Related Services</h2></div><div className="space-y-3">{relatedServices.map(({ title, href }) => { const card = <><span className="text-lg text-[#5f769f]">+</span><span className="font-medium text-[#0a1e43]">{title}</span></>; return href ? <Link key={title} href={href} className="flex items-center gap-4 rounded-xl border border-[#dfe7f3] px-5 py-4 transition-colors hover:bg-[#f4f7fc]">{card}</Link> : <div key={title} className="flex items-center gap-4 rounded-xl border border-[#dfe7f3] px-5 py-4">{card}</div>; })}</div></div></section>}
    {relatedProjects.length > 0 && <section className="bg-[#f4f7fc] py-16 md:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-12"><Eyebrow>Related Projects</Eyebrow><h2 className="mt-4 text-3xl text-[#0a1e43] md:text-4xl">Related Projects</h2><div className="mt-8 grid gap-4 sm:grid-cols-3">{relatedProjects.map(({ title, href }) => href ? <Link key={title} href={`/portfolio/${href}/`} className="rounded-xl bg-[#0a1e43] p-6 text-xl font-medium text-white transition-colors hover:bg-[#013e78]">{title}</Link> : <div key={title} className="rounded-xl bg-[#0a1e43] p-6 text-xl font-medium text-white">{title}</div>)}</div></div></section>}
    {cta.length > 0 && <section className="py-16 md:py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-12"><div className="flex flex-col justify-between gap-8 rounded-3xl border border-[#dfe7f3] p-8 md:flex-row md:items-center md:p-10"><div className="max-w-3xl"><Eyebrow>Call to Action</Eyebrow><h2 className="mt-4 text-3xl text-[#0a1e43] md:text-4xl">{ctaHeading}</h2><div className="mt-5"><Copy content={cta} /></div></div><Link href="/contact/" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0a1e43] px-6 py-3 text-sm font-semibold text-white hover:bg-[#013e78]">{ctaAction ?? 'Diskusikan Project Anda'} <ArrowRight className="h-4 w-4" /></Link></div></div></section>}
  </article></main><Footer /></>;
}
