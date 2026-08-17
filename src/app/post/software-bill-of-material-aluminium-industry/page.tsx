import { Metadata } from "next";
import Link from "next/link";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { ArrowRight, CheckCircle2, Factory, Layers3, BarChart3, ShieldCheck, Boxes, Workflow } from 'lucide-react';

const postUrl = 'https://upsense.co.id/post/software-bill-of-material-aluminium-industry';
const postTitle = 'Software Bill of Materials untuk Industri Aluminium';
const postDescription = 'Pelajari bagaimana sistem Software Bill of Materials membantu produsen aluminium mengendalikan bahan baku, mengoptimalkan perencanaan produksi, meningkatkan akurasi costing, dan menjaga traceability di seluruh operasional.';
const heroImage = 'https://images.unsplash.com/photo-1684695749267-233af13276d0?auto=format&fit=crop&w=1600&q=80';

export const metadata: Metadata = {
  title: postTitle,
  description: postDescription,
  keywords: [
    'software bill of materials aluminium industry',
    'BOM software aluminium manufacturing',
    'bill of materials system for aluminium factory',
    'aluminium production planning software',
    'raw material tracking aluminium',
    'manufacturing software indonesia',
    'software manufaktur aluminium',
    'BOM and MRP aluminium industry',
    'traceability aluminium manufacturing',
    'UPSENSE article'
  ],
  alternates: {
    canonical: postUrl,
  },
  openGraph: {
    title: postTitle,
    description: postDescription,
    url: postUrl,
    siteName: 'UPSENSE',
    locale: 'id_ID',
    type: 'article',
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: 'Software Bill of Materials for aluminium manufacturing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: postTitle,
    description: postDescription,
    images: [heroImage],
  },
};

const keyBenefits = [
  'Memusatkan seluruh alloy, profil, consumable, dan sub-assembly dalam satu struktur Bill of Materials yang rapi.',
  'Meningkatkan akurasi perencanaan material untuk proses extrusion, cutting, finishing, packaging, dan dispatch.',
  'Mengurangi waste dengan menyelaraskan kuantitas produksi terhadap stok aktual, aturan reorder, dan work order.',
  'Memperkuat traceability untuk batch, supplier, dan histori pemakaian sepanjang siklus produksi.',
  'Mendukung estimasi biaya yang lebih cepat untuk setiap lini produk, spesifikasi, maupun pesanan custom aluminium.',
  'Membantu tim procurement, warehouse, produksi, keuangan, dan quality assurance bekerja dari satu sumber data yang sama.',
];

const aluminiumUseCases = [
  {
    title: 'Extrusion dan produksi profil',
    description: 'Mengelola kebutuhan billet, dies, dimensi profil, faktor scrap, dan instruksi proses lanjutan dalam satu struktur.',
    icon: Factory,
  },
  {
    title: 'Coating, anodizing, and finishing',
    description: 'Melacak bahan kimia, material coating, parameter finishing, dan tahapan proses yang memengaruhi kualitas serta biaya produk.',
    icon: Layers3,
  },
  {
    title: 'Visibilitas costing dan margin',
    description: 'Membangun costing produksi yang lebih andal dengan menghubungkan konsumsi material, asumsi tenaga kerja, dan persentase loss pada setiap BOM.',
    icon: BarChart3,
  },
  {
    title: 'Kepatuhan dan traceability',
    description: 'Menjaga jejak dokumentasi sumber material, revisi, dan spesifikasi yang disetujui untuk kebutuhan pelanggan, audit, serta quality.',
    icon: ShieldCheck,
  },
];

const implementationPoints = [
  'Tentukan hierarki produk yang jelas: finished goods, sub-assemblies, raw materials, dan consumables.',
  'Standarisasikan satuan seperti kg, meter, piece, bundle, dan sheet untuk mencegah kesalahan perencanaan.',
  'Gunakan version control untuk setiap revisi BOM agar perubahan engineering tidak mengganggu produksi maupun procurement.',
  'Hubungkan data BOM dengan modul inventory, purchasing, production scheduling, dan quality control.',
  'Pantau pemakaian rencana versus aktual untuk mengidentifikasi waste, inefisiensi, dan bottleneck berulang.',
];

const faqItems = [
  {
    question: 'Apa itu Software Bill of Materials dalam manufaktur?',
    answer: 'Dalam konteks manufaktur, Software Bill of Materials adalah sistem digital untuk menyusun dan mengelola material, komponen, kuantitas, serta relasi produksi yang dibutuhkan agar proses pembuatan produk berjalan akurat dan konsisten.',
  },
  {
    question: 'Mengapa software BOM penting untuk industri aluminium?',
    answer: 'Produsen aluminium menangani berbagai alloy, dimensi profil, proses finishing, dan spesifikasi custom. Software BOM membantu menstandarkan kompleksitas ini, meningkatkan perencanaan, mengendalikan waste, dan memperkuat traceability.',
  },
  {
    question: 'Apakah software BOM bisa terintegrasi dengan sistem inventory dan produksi?',
    answer: 'Bisa. Implementasi terbaik menghubungkan manajemen BOM dengan inventory, purchasing, work order, production planning, dan costing agar seluruh tim operasional bekerja dari fondasi data real-time yang sama.',
  },
];

export default function SoftwareBillOfMaterialsAluminiumIndustryPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: postTitle,
    description: postDescription,
    image: [heroImage],
    datePublished: '2026-03-13',
    dateModified: '2026-03-13',
    author: {
      '@type': 'Organization',
      name: 'UPSENSE',
    },
    publisher: {
      '@type': 'Organization',
      name: 'UPSENSE',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png',
      },
    },
    mainEntityOfPage: postUrl,
    keywords: metadata.keywords,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://upsense.co.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Post',
        item: 'https://upsense.co.id/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Software Bill of Materials for the Aluminium Industry',
        item: postUrl,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navigation />
      <main className="bg-white">
        <article>
          <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
            <div className="absolute inset-0">
              <img src={heroImage} alt="Aluminium manufacturing workflow and bill of materials planning" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#013e78]/92 via-[#013e78]/82 to-[#0c4273]/88" />
            </div>
            <div className="container relative z-10 mx-auto px-6 lg:px-12">
              <div className="max-w-4xl">
                <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                  Insight Manufaktur
                </p>
                <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
                  Software Bill of Materials untuk Industri Aluminium
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                  Produsen aluminium membutuhkan lebih dari sekadar daftar material statis. Mereka memerlukan sistem digital terstruktur yang menyelaraskan perencanaan, inventory, produksi, dan costing untuk kebutuhan produk serta proses yang semakin kompleks.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/80 md:text-base">
                  <span>Dipublikasikan pada 13 Maret 2026</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>Oleh Tim Editorial UPSENSE</span>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20">
            <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-12">
              <div className="space-y-12">
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    Sistem Bill of Materials adalah tulang punggung operasional untuk menjaga konsistensi manufaktur. Berdasarkan prinsip inti dari pembahasan software BOM digital di Mekari Jurnal, konsep ini bukan sekadar daftar bahan baku. Sistem ini membantu perusahaan menata komponen, kuantitas, referensi supplier, dan ketergantungan produksi agar perencanaan lebih akurat, biaya lebih terkendali, dan eksekusi lebih disiplin.
                  </p>
                  <p>
                    Dalam industri aluminium, peran ini menjadi jauh lebih kritikal. Struktur produk umumnya melibatkan berbagai jenis alloy, varian profil, kebutuhan finishing, konfigurasi packaging, serta spesifikasi custom pelanggan. Tanpa platform BOM yang terstruktur, tim berisiko menghadapi mismatch material, over-ordering, keterlambatan produksi, dan visibilitas biaya produk aktual yang lemah.
                  </p>
                  <p>
                    Platform Software Bill of Materials modern memungkinkan produsen aluminium mengganti spreadsheet terpisah dengan workflow terpusat, traceable, dan version-controlled. Hasilnya adalah sinkronisasi yang lebih baik antara kebutuhan komersial dan eksekusi di pabrik.
                  </p>
                </div>

                <section className="rounded-[32px] bg-[#f8fbff] p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-[#013e78] md:text-4xl">Mengapa Software BOM Penting untuk Manufaktur Aluminium</h2>
                  <div className="mt-8 grid gap-4">
                    {keyBenefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#f58b01]" />
                        <p className="text-base leading-relaxed text-gray-700 md:text-lg">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-black md:text-4xl">Apa Saja Isi BOM Aluminium yang Kuat</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Untuk bisnis aluminium, software BOM harus mencerminkan kompleksitas produksi yang nyata. Struktur yang praktis umumnya mencakup referensi bahan baku, dimensi, catatan proses spesifik, asumsi loss, instruksi packaging, dan riwayat revisi. Sistem juga perlu mendukung relasi multi-level agar setiap finished product terhubung dengan sub-assemblies serta consumables yang dibutuhkan.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    {aluminiumUseCases.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm">
                          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f0fa] text-[#013e78]">
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                          <p className="mt-4 text-base leading-relaxed text-gray-700 md:text-lg">{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-black md:text-4xl">Dari Daftar Statis Menjadi Sistem Operasional</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Insight paling penting dari materi referensi adalah software BOM digital akan jauh lebih kuat saat terhubung ke modul operasional yang lebih luas seperti inventory, purchasing, dan production planning. Bagi produsen aluminium, struktur material tidak boleh berdiri sendiri. Data ini harus mendorong reservasi stok, keputusan procurement, work order, dan visibilitas biaya.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    BOM yang terpisah mungkin bisa mendokumentasikan kebutuhan, tetapi sistem BOM terintegrasi secara aktif membantu bisnis mengeksekusi. Ini mengurangi interpretasi manual, memperpendek siklus perencanaan, dan memastikan tim di shop floor bekerja berdasarkan spesifikasi terbaru yang sudah disetujui.
                  </p>
                </section>

                <section className="rounded-[32px] bg-[#fff8ee] p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-[#013e78] md:text-4xl">Prioritas Implementasi untuk Perusahaan Aluminium</h2>
                  <div className="mt-8 space-y-4">
                    {implementationPoints.map((point, index) => (
                      <div key={point} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5">
                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#013e78] text-sm font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-base leading-relaxed text-gray-700 md:text-lg">{point}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-black md:text-4xl">FAQ</h2>
                  <div className="space-y-4">
                    {faqItems.map((item) => (
                      <div key={item.question} className="rounded-[24px] border border-black/5 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-black md:text-2xl">{item.question}</h3>
                        <p className="mt-3 text-base leading-relaxed text-gray-700 md:text-lg">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-[28px] bg-[#013e78] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-bold text-white">Butuh sistem manufaktur custom?</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/85">
                    UPSENSE membantu produsen membangun sistem terintegrasi untuk BOM, inventory, produksi, approval flow, dan pelaporan operasional.
                  </p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">
                    Konsultasi dengan UPSENSE
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-black">Highlight Artikel</h3>
                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <Boxes className="mt-1 h-5 w-5 text-[#f58b01]" />
                      <p className="text-base leading-relaxed text-gray-700">Data BOM yang terstruktur mendukung konsistensi produksi dan pengendalian material.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Workflow className="mt-1 h-5 w-5 text-[#f58b01]" />
                      <p className="text-base leading-relaxed text-gray-700">Integrasi purchasing, inventory, dan work order menciptakan nilai operasional yang terukur.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="mt-1 h-5 w-5 text-[#f58b01]" />
                      <p className="text-base leading-relaxed text-gray-700">Produsen aluminium mendapatkan visibilitas costing yang lebih kuat dan manajemen waste yang lebih baik.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-black/5 bg-[#f8fbff] p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-black">Referensi</h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-700">
                    Artikel ini diadaptasi dari konsep software BOM manufaktur yang dibahas oleh Mekari Jurnal dan dikembangkan untuk use case industri aluminium.
                  </p>
                  <a
                    href="https://www.jurnal.id/id/software-bill-of-materials-bom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[#013e78] hover:text-[#0c4273]"
                  >
                    Lihat artikel referensi
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </aside>
            </div>
          </section>

          <section className="pb-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="rounded-[36px] bg-gradient-to-br from-[#013e78] to-[#0c4273] px-8 py-12 text-white md:px-12 md:py-16">
                <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">Ubah kompleksitas produksi menjadi workflow digital yang terhubung.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                  Jika operasional aluminium Anda masih mengelola data BOM melalui spreadsheet atau sistem yang terpisah-pisah, UPSENSE dapat membantu membangun platform manufaktur yang scalable dan sesuai realita produksi Anda.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-[#013e78] transition-transform hover:scale-[1.02]">
                    Jadwalkan Konsultasi
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-white hover:bg-white/10">
                    Jelajahi Layanan
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
