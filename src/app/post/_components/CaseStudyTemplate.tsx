import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  summary: string;
  heroImage: string;
  publishedDate: string;
  problem: string;
  solution: string;
  outcomes: string[];
  techStack: string[];
}

function looksLikeHtml(value: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function RichTextBlock({
  content,
  htmlClassName,
  textClassName,
}: {
  content: string;
  htmlClassName: string;
  textClassName: string;
}) {
  if (looksLikeHtml(content)) {
    return <div className={htmlClassName} dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <p className={textClassName}>{content}</p>;
}

export function getCaseStudyMetadata(data: CaseStudyData): Metadata {
  const postUrl = `https://upsense.co.id/post/${data.slug}`;
  return {
    title: data.title,
    description: data.summary,
    alternates: { canonical: postUrl },
    openGraph: {
      title: data.title,
      description: data.summary,
      url: postUrl,
      siteName: "UPSENSE",
      type: "article",
      locale: "id_ID",
      images: [{ url: data.heroImage, width: 1600, height: 900, alt: data.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.summary,
      images: [data.heroImage],
    },
  };
}

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const postUrl = `https://upsense.co.id/post/${data.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${postUrl}#article`,
    headline: data.title,
    description: data.summary,
    image: [data.heroImage],
    datePublished: data.publishedDate,
    dateModified: data.publishedDate,
    author: { "@type": "Organization", "@id": "https://upsense.co.id/#organization", name: "UPSENSE" },
    publisher: {
      "@type": "Organization",
      "@id": "https://upsense.co.id/#organization",
      name: "UPSENSE",
      logo: {
        "@type": "ImageObject",
        url: "https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    url: postUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navigation />
      <main className="bg-white">
        <article>
          <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
            <div className="absolute inset-0">
              <img src={data.heroImage} alt={data.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#013e78]/92 via-[#013e78]/82 to-[#0c4273]/88" />
            </div>
            <div className="container relative z-10 mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  {data.category}
                </p>
                <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">{data.title}</h1>
                <div className="mt-6 max-w-3xl">
                  <RichTextBlock
                    content={data.summary}
                    htmlClassName="prose prose-invert prose-lg max-w-none !text-white [&_*]:!text-white [&_p]:!text-white [&_li]:!text-white [&_strong]:!text-white [&_em]:!text-white [&_a]:!text-white [&_blockquote]:!text-white [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_h5]:!text-white [&_h6]:!text-white prose-a:underline prose-ul:list-disc prose-ol:list-decimal md:text-xl"
                    textClassName="text-lg leading-relaxed text-white md:text-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-12">
              <div className="space-y-10">
                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-black md:text-4xl">Business Challenge</h2>
                  <RichTextBlock
                    content={data.problem}
                    htmlClassName="prose prose-lg max-w-none text-gray-700 prose-headings:text-black prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-black prose-a:text-[#013e78] prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal"
                    textClassName="text-lg leading-relaxed text-gray-700"
                  />
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-black md:text-4xl">Solution Approach</h2>
                  <RichTextBlock
                    content={data.solution}
                    htmlClassName="prose prose-lg max-w-none text-gray-700 prose-headings:text-black prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-black prose-a:text-[#013e78] prose-a:no-underline hover:prose-a:underline prose-ul:list-disc prose-ol:list-decimal"
                    textClassName="text-lg leading-relaxed text-gray-700"
                  />
                </section>

                <section className="rounded-[32px] bg-[#f8fbff] p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-[#013e78] md:text-4xl">Key Outcomes</h2>
                  <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
                    <div className="space-y-4">
                      {data.outcomes.map((outcome) => (
                        <div key={outcome} className="flex items-start gap-4">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#f58b01]" />
                          <p className="text-base leading-relaxed text-gray-700 md:text-lg">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-[28px] bg-[#013e78] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
                  <ul className="mt-5 space-y-2">
                    {data.techStack.map((item) => (
                      <li key={item} className="text-white/85">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[28px] border border-black/5 bg-[#fff8ee] p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-[#013e78]">Need a Similar System?</h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    UPSENSE helps businesses design custom software systems aligned with real operational needs.
                  </p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#013e78] px-6 py-3 text-base font-semibold text-white hover:bg-[#0c4273]">
                    Talk to UPSENSE
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
