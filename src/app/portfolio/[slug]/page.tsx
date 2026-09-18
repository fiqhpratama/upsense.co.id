import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { getAllPortfolios, getPortfolio, getPortfolioSlugs } from '@/lib/portfolio-content';
import { SectionTag } from '@/components/home/section-tag';
import { services } from '@/data/services';

type PageProps = { params: Promise<{ slug: string }> };

const listItems = (content: string[] = []) => content.filter((item) => item.startsWith('- ')).map((item) => item.slice(2));
const bodyText = (content: string[] = []) => content.filter((item) => !item.startsWith('- ') && !item.startsWith('### ') && !item.startsWith('**'));
const noteText = (content: string[] = []) => content.find((item) => item.startsWith('> '))?.slice(2);
const leadText = (content: string[] = []) => content.find((item) => item.endsWith(':'));
const estimatorImage = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/64a7e6b4-ed1b-4529-b7a8-523e641aadcd/aluminium-estimator-1767985968280.png?width=8000&height=8000&resize=contain';

export function generateStaticParams() { return getPortfolioSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const portfolio = getPortfolio((await params).slug);
  if (!portfolio) return {};
  const description = portfolio.overview.join(' ').slice(0, 160);
  return { title: portfolio.title, description, alternates: { canonical: `https://upsense.co.id/portfolio/${portfolio.slug}/` }, openGraph: { title: portfolio.title, description, type: 'article' } };
}

function Heading({ tag, title }: { tag: string; title: string }) {
  return (
    <div>
      <SectionTag>{tag}</SectionTag>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#0C1425] md:text-[36px]">
        {title}
      </h2>
    </div>
  );
}

function Paragraphs({ content, className = '' }: { content: string[]; className?: string }) {
  if (!bodyText(content).length) return null;
  return (
    <div className={`space-y-4 text-[15.5px] leading-[1.67] text-[#56637A] ${className}`}>
      {bodyText(content).map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function SplitSection({ tag, title, content, tinted = false }: { tag: string; title: string; content?: string[]; tinted?: boolean }) {
  if (!content?.length) return null;
  return (
    <section className={tinted ? 'bg-[#F6F8FB] py-16 md:py-[88px]' : 'py-16 md:py-[88px]'}>
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[440px_1fr] lg:gap-16">
          <Heading tag={tag} title={title} />
          <Paragraphs content={content} />
        </div>
      </div>
    </section>
  );
}

function GridHeader({ tag, title, intro }: { tag: string; title: string; intro?: string }) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <Heading tag={tag} title={title} />
      {intro && <p className="max-w-[792px] text-[15.5px] leading-[1.67] text-[#56637A]">{intro}</p>}
    </div>
  );
}

function HashTile({ size = 'lg' }: { size?: 'lg' | 'sm' }) {
  const box = size === 'lg' ? 'h-[42px] w-[42px] rounded-[11px] text-[17px]' : 'h-[38px] w-[38px] rounded-[10px] text-[17px]';
  return (
    <span className={`flex shrink-0 items-center justify-center bg-[#0A1E43] font-mono font-bold text-white ${box}`} aria-hidden="true">
      #
    </span>
  );
}

function ChallengeGrid({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-11 grid border-b border-r border-[#E4E9F2] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="flex flex-col gap-3 border-l border-t border-[#E4E9F2] px-7 py-[26px]">
          <span className="font-mono text-base font-bold text-[#F97316]" aria-hidden="true">#</span>
          <p className="text-[14.5px] leading-[1.6] text-[#0C1425]">{item}</p>
        </div>
      ))}
    </div>
  );
}

function CardGrid({ items, tinted = true }: { items: { title?: string; desc: string }[]; tinted?: boolean }) {
  if (!items.length) return null;
  return (
    <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.desc}
          className={`flex flex-col gap-3 rounded-2xl border border-[#E4E9F2] p-[26px] ${tinted ? 'bg-[#F6F8FB]' : 'bg-white'}`}
        >
          <HashTile />
          {item.title && (
            <h3 className="font-[family-name:var(--font-display)] text-[16.5px] font-bold leading-[1.3] text-[#0C1425]">
              {item.title}
            </h3>
          )}
          <p className="text-[13px] leading-[1.6] text-[#56637A]">{item.desc}</p>
        </article>
      ))}
    </div>
  );
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const portfolio = getPortfolio((await params).slug);
  if (!portfolio) notFound();

  const all = getAllPortfolios();
  const findProject = (name: string) => all.find((item) => (item.cardTitle ?? item.title) === name);
  const facts = [['INDUSTRI', portfolio.industry], ['SOLUTION', portfolio.solution], ['PLATFORM', portfolio.platform]].filter(([, value]) => value) as [string, string][];
  const relatedServices = listItems(portfolio.sections['Related Services']).map((title) => ({ title, href: services.find((service) => service.title === title)?.href }));
  const relatedProjects = listItems(portfolio.sections['Related Projects'])
    .map((name) => ({ name, project: findProject(name) }))
    .slice(0, 3);
  const expenseCategories = [...(portfolio.sections['Expense Categories']?.join('\n\n').matchAll(/^### (.+)\n([\s\S]*?)(?=^### |$(?![\s\S]))/gm) ?? [])]
    .map(([, title, content]) => ({ title, desc: content.trim() }));
  const challenges = portfolio.sections['Business Challenges'] ?? [];
  const challengeItems = listItems(challenges);
  const challengeIntro = bodyText(challenges)[0];
  const impact = portfolio.sections['Business Impact'] ?? [];
  const impactItems = listItems(impact).map((desc) => ({ desc }));
  const impactIntro = bodyText(impact).join(' ');
  const technology = portfolio.sections['Technology & Technical Overview'] ?? [];
  const techNote = noteText(technology);
  const techLead = leadText(technology);
  const techBody = bodyText(technology).filter((paragraph) => paragraph !== techNote && paragraph !== techLead);
  const techItems = listItems(technology);
  const cta = portfolio.sections['Call to Action'] ?? [];
  const ctaHeading = cta.find((item) => item.startsWith('### '))?.slice(4);
  const ctaAction = cta.find((item) => item.startsWith('**'))?.replaceAll('**', '');
  const heroImage = portfolio.heroImage || (portfolio.slug === 'estimator-jendela-pintu-aluminium' ? estimatorImage : '');
  const chips = [portfolio.category, portfolio.industry].filter(Boolean) as string[];

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0b1730]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-32 h-[600px] w-[600px] rounded-full opacity-70"
            style={{
              background:
                'radial-gradient(circle at 65% 35%, rgba(125,211,252,0.28) 0%, rgba(28,58,102,0.35) 35%, rgba(10,23,48,0) 68%), radial-gradient(circle at 30% 70%, rgba(249,115,22,0.14) 0%, rgba(10,23,48,0) 55%)',
            }}
          />
          <div className="container relative mx-auto px-4 pb-16 pt-32 md:px-6 md:pt-36 lg:px-12">
            <div className={`grid items-center gap-12 ${heroImage ? 'lg:grid-cols-2 lg:gap-16' : ''}`}>
              <div className="max-w-[600px]">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[11px]">
                  <Link href="/portfolio/" className="text-[#8FA1BF] transition-colors hover:text-white">PORTFOLIO</Link>
                  <span className="text-[#8FA1BF]/60" aria-hidden="true">/</span>
                  <span className="text-[#FB923C]">{portfolio.cardTag ?? portfolio.category?.toUpperCase()}</span>
                </nav>

                {chips.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {chips.map((chip) => (
                      <span key={chip} className="border border-[#1C3050] px-3 py-2 font-mono text-[10px] tracking-[0.08em] text-[#8FA1BF]">
                        {chip.toUpperCase()}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-[42px] lg:text-[52px]">
                  {portfolio.title}
                </h1>

                <p className="mt-5 text-[15.5px] leading-[1.64] text-[#8FA1BF] md:text-base">
                  {portfolio.overview[0]}
                </p>

                {facts.length > 0 && (
                  <dl className="mt-5 flex flex-wrap gap-x-10 gap-y-4">
                    {facts.map(([key, value]) => (
                      <div key={key}>
                        <dt className="font-mono text-[10px] tracking-[0.08em] text-[#FB923C]">{key}</dt>
                        <dd className="mt-1.5 text-[13.5px] font-semibold text-white">{value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 bg-[#F97316] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
                  >
                    Diskusikan Sistem Anda
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/services/"
                    className="inline-flex items-center border border-[#1C3050] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:border-[#2a4a80]"
                  >
                    Lihat Layanan
                  </Link>
                </div>
              </div>

              {heroImage && (
                <div className="relative aspect-[16/13] overflow-hidden rounded-2xl border border-[#1C3050] bg-white">
                  <Image
                    src={heroImage}
                    alt={portfolio.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <SplitSection tag="PROJECT BACKGROUND" title="Project Background" content={portfolio.sections['Project Background']} />

        {challenges.length > 0 && (
          <section className="bg-[#F6F8FB] py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <GridHeader tag="BUSINESS CHALLENGES" title="Business Challenges" intro={challengeIntro} />
              <ChallengeGrid items={challengeItems} />
            </div>
          </section>
        )}

        <SplitSection tag="SOLUTION OVERVIEW" title="Solution Overview" content={portfolio.sections['Solution Overview']} />

        {technology.length > 0 && (
          <section className="bg-[#F6F8FB] py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div className="grid gap-10 lg:grid-cols-[440px_1fr] lg:gap-16">
                <div>
                  <Heading tag="TECHNOLOGY & TECHNICAL OVERVIEW" title="Technology & Technical Overview" />
                  <Paragraphs content={techBody} className="mt-6" />
                  {techNote && (
                    <p className="mt-6 rounded-xl border border-[#E4E9F2] bg-white px-[18px] py-4 text-[13px] leading-[1.6] text-[#56637A]">
                      {techNote}
                    </p>
                  )}
                </div>
                <div>
                  {techLead && <p className="text-[15.5px] font-semibold leading-[1.6] text-[#0C1425]">{techLead}</p>}
                  <ul className="mt-2">
                    {techItems.map((item) => (
                      <li key={item} className="flex items-center gap-3.5 border-t border-[#E4E9F2] px-1 py-[15px]">
                        <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg bg-[#0A1E43]" aria-hidden="true">
                          <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                        </span>
                        <span className="text-[15px] leading-[1.55] text-[#0C1425]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {impactItems.length > 0 && (
          <section className="py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <GridHeader tag="BUSINESS IMPACT" title="Business Impact" intro={impactIntro} />
              <CardGrid items={impactItems} tinted />
            </div>
          </section>
        )}

        {portfolio.highlights.length > 0 && (
          <section className="bg-[#F6F8FB] py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <GridHeader tag="PROJECT HIGHLIGHTS" title="Project Highlights" />
              <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {portfolio.highlights.map((highlight) => (
                  <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-[#E4E9F2] bg-white p-[26px]">
                    <HashTile />
                    <h3 className="font-[family-name:var(--font-display)] text-[16.5px] font-bold leading-[1.3] text-[#0C1425]">
                      {highlight.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[#56637A]">{bodyText(highlight.content).join(' ')}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {expenseCategories.length > 0 && (
          <section className="py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <GridHeader tag="EXPENSE CATEGORIES" title="Expense Categories" />
              <CardGrid items={expenseCategories.map(({ title, desc }) => ({ title, desc }))} tinted={false} />
            </div>
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <Heading tag="RELATED SERVICES" title="Related Services" />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {relatedServices.map(({ title, href }) => {
                  const inner = (
                    <>
                      <HashTile size="sm" />
                      <span className="flex-1 font-[family-name:var(--font-display)] text-[14.5px] font-semibold leading-[1.3] text-[#0C1425]">
                        {title}
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#F97316]" aria-hidden="true" />
                    </>
                  );
                  return href ? (
                    <Link key={title} href={href} className="flex items-center gap-3.5 rounded-[14px] border border-[#E4E9F2] bg-[#F6F8FB] px-[22px] py-5 transition-colors hover:border-[#0A1E43]/30">
                      {inner}
                    </Link>
                  ) : (
                    <div key={title} className="flex items-center gap-3.5 rounded-[14px] border border-[#E4E9F2] bg-[#F6F8FB] px-[22px] py-5">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {relatedProjects.length > 0 && (
          <section className="bg-[#F6F8FB] py-16 md:py-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <Heading tag="RELATED PROJECTS" title="Related Projects" />
                <Link href="/portfolio/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316]">
                  Lihat semua portfolio
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map(({ name, project }) =>
                  project ? (
                    <Link
                      key={project.slug}
                      href={`/portfolio/${project.slug}/`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E9F2] bg-white transition-colors hover:border-[#0A1E43]/30"
                    >
                      <div
                        className="relative flex h-[190px] items-center justify-center overflow-hidden p-[18px]"
                        style={{ background: 'linear-gradient(225deg, #13264A 0%, #060D1D 100%)' }}
                      >
                        {project.thumbnail ? (
                          <Image
                            src={project.thumbnail}
                            alt={project.cardTitle ?? project.title}
                            fill
                            sizes="(min-width: 1024px) 33vw, 100vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="h-full w-full rounded-lg border border-[#1C3050] bg-[#0A1428]" aria-hidden="true" />
                        )}
                      </div>
                      <div className="flex flex-1 flex-col gap-2.5 px-[22px] pb-[22px] pt-5">
                        <span className="font-mono text-[10px] tracking-[0.15em] text-[#F97316]">{project.cardTag}</span>
                        <h3 className="flex-1 font-[family-name:var(--font-display)] text-[17.5px] font-bold leading-[1.3] text-[#0C1425]">
                          {project.cardTitle ?? project.title}
                        </h3>
                        <span className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#56637A]">
                          Lihat case study
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-[#F97316] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <Link
                      key={name}
                      href="/portfolio/"
                      className="flex items-center gap-3.5 rounded-2xl border border-[#E4E9F2] bg-white p-[26px] transition-colors hover:border-[#0A1E43]/30"
                    >
                      <HashTile size="sm" />
                      <span className="flex-1 font-[family-name:var(--font-display)] text-[14.5px] font-semibold leading-[1.3] text-[#0C1425]">
                        {name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#F97316]" aria-hidden="true" />
                    </Link>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {ctaHeading && (
          <section className="bg-white pb-24 pt-16 md:pt-[88px]">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
              <div
                className="relative overflow-hidden rounded-[24px] px-8 py-12 md:px-[72px] md:py-16"
                style={{ background: 'linear-gradient(225deg, #13264A 0%, #0A1E43 100%)' }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-40 h-[460px] w-[460px] rounded-full opacity-70"
                  style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0) 70%)' }}
                />
                <div className="relative flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                  <div className="max-w-[649px]">
                    <SectionTag dark>CALL US..</SectionTag>
                    <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold leading-[1.2] tracking-tight text-white md:text-[36px]">
                      {ctaHeading}
                    </h2>
                    <p className="mt-4 text-[15px] leading-[1.65] text-[#8FA1BF]">{bodyText(cta).join(' ')}</p>
                  </div>
                  <Link
                    href="/contact/"
                    className="inline-flex shrink-0 items-center gap-2.5 rounded-xl bg-[#F97316] px-[26px] py-4 text-[14.5px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
                  >
                    {ctaAction ?? 'Diskusikan kebutuhan project Anda bersama UPSENSE'}
                    <ArrowRight className="h-[17px] w-[17px]" strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
