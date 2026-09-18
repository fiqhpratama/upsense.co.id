import { SectionTag } from './section-tag';

const coreValues = [
  { letter: 'T', name: 'Trust', sub: 'Kepercayaan' },
  { letter: 'O', name: 'Ownership', sub: 'Kepemilikan' },
  { letter: 'G', name: 'Growth', sub: 'Pertumbuhan' },
  { letter: 'E', name: 'Excellence', sub: 'Keunggulan' },
  { letter: 'T', name: 'Teamwork', sub: 'Kerjasama' },
  { letter: 'H', name: 'Honesty', sub: 'Kejujuran' },
  { letter: 'E', name: 'Empathy', sub: 'Empati' },
  { letter: 'R', name: 'Reliability', sub: 'Keandalan' },
];

export default function About() {
  return (
    <section id="about-us" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[480px_1fr] lg:gap-20">
          <div>
            <SectionTag>TENTANG KAMI</SectionTag>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.15] tracking-tight text-[#0C1425] md:text-[40px]">
              IT Consultant Jakarta untuk Transformasi Digital
            </h2>
          </div>
          <div className="space-y-5 text-[15.5px] leading-[1.67] text-[#56637A]">
            <p>
              PT UPSENSE Teknologi Indonesia adalah partner transformasi digital bagi perusahaan yang
              ingin memodernisasi operasional, mendigitalkan alur kerja internal, serta menggantikan
              legacy system yang terfragmentasi dengan solusi teknologi terintegrasi dan scalable.
              Berbasis di Jakarta Utara, kami memadukan keahlian teknis, delivery yang terstruktur,
              dan eksekusi praktis untuk menjawab tantangan operasional di level enterprise.
            </p>
            <p>
              Mulai dari enterprise ERP dan digitalisasi logistik hingga integrasi sistem internal,
              platform otomasi, serta custom software operasional, UPSENSE menghadirkan teknologi untuk
              meningkatkan kontrol proses, mengurangi hambatan operasional, dan mendukung transformasi
              digital berkelanjutan di seluruh organisasi.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="mb-6 font-mono text-xs tracking-[0.08em] text-[#56637A]">NILAI INTI KAMI</p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-8">
            {coreValues.map((value) => (
              <div key={value.name} className="border border-[#E4E9F2] px-6 py-[22px]">
                <p className="font-[family-name:var(--font-display)] text-[34px] font-bold leading-none text-[#0A1E43]">
                  {value.letter}
                </p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-[15px] font-semibold text-[#0C1425]">
                  {value.name}
                </p>
                <p className="mt-1 text-[12.5px] text-[#56637A]">{value.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
