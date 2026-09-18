import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RotatingWord from './rotating-word';

const rotatingWords = ['Transformasi', 'Modernisasi', 'Inovasi'];

type Token = { text: string; c: string };

const P = '#8FA1BF';
const KW = '#e27419';
const PROP = '#7DD3FC';
const STR = '#6EE7B7';
const COM = '#5B6D8C';

const codeLines: Token[][] = [
  [{ text: 'const ', c: KW }, { text: 'bisnis', c: PROP }, { text: ' = await ', c: P }, { text: 'upsense', c: KW }, { text: '.transform({', c: P }],
  [{ text: '  proses: ', c: PROP }, { text: '"manual → digital"', c: STR }, { text: ',', c: P }],
  [{ text: '  sistem: ', c: PROP }, { text: '["ERP", "Otomasi", "Integrasi","HRIS"]', c: STR }, { text: ',', c: P }],
  [{ text: '  skala: ', c: PROP }, { text: '"enterprise"', c: STR }, { text: ',', c: P }],
  [{ text: '});', c: P }],
  [{ text: '// Efisien. Kreatif. Siap berkembang.', c: COM }],
];

const stackChips = ['Custom Software', 'ERP', 'Otomasi', 'Integrasi Sistem', 'HRIS'];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0b1730]">
      {/* Galaxy glow — pengganti shader canvas (ponytail: CSS radial gradient cukup) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle at 65% 35%, rgba(125,211,252,0.28) 0%, rgba(28,58,102,0.35) 35%, rgba(10,23,48,0) 68%), radial-gradient(circle at 30% 70%, rgba(249,115,22,0.14) 0%, rgba(10,23,48,0) 55%)',
        }}
      />

      <div className="container relative mx-auto px-4 pb-16 pt-32 md:px-6 md:pt-40 lg:px-12 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-[72px]">
          {/* Left: copy */}
          <div className="max-w-[600px]">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Membantu
              <br />
              <RotatingWord words={rotatingWords} />
              <br />
              Digital Bisnis
            </h1>

            <p className="mt-6 text-base font-semibold leading-relaxed text-[#DCE4F2] md:text-lg">
              Siap membangun sistem yang siap berkembang bersama bisnis Anda.
            </p>

            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.67] text-[#8FA1BF]">
              PT UPSENSE Teknologi Indonesia adalah perusahaan IT consulting dan software development
              berbasis di Jakarta yang mempercepat transformasi digital bagi bisnis yang relevan. Kami
              mengubah proses manual yang kompleks menjadi solusi digital yang efisien, kreatif, dan siap
              mendukung pertumbuhan bisnis.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-[#F97316] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:bg-[#ea6c0c]"
              >
                Jadwalkan Discovery Call
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center border border-[#1C3050] px-6 py-[15px] text-[15px] font-semibold text-white transition-colors hover:border-[#2a4a80]"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>

          {/* Right: code window visual */}
          <div className="flex flex-col items-start gap-5">
            <div className="w-full max-w-[640px] border border-[#1C3050] bg-[#0A1428]">
              <div className="flex items-center gap-2 border-b border-[#1C3050] px-4 py-3">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF5F57]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28C840]" aria-hidden="true" />
                <span className="ml-3 truncate font-mono text-xs text-[#5B6D8C]">upsense.co.id — digital-transform.ts</span>
              </div>
              <div className="p-4 md:p-5">
                <pre className="whitespace-pre-wrap break-words font-mono text-[11.5px] leading-[1.6] md:text-[13.5px] md:leading-[1.55]">
                  {codeLines.map((tokens, i) => (
                    <div key={i} className="flex">
                      <span className="w-6 shrink-0 select-none font-mono text-[#5B6D8C] md:w-7">{i + 1}</span>
                      <code className="min-w-0 flex-1 whitespace-pre-wrap">
                        {tokens.map((t, j) => (
                          <span key={j} style={{ color: t.c }}>
                            {t.text}
                          </span>
                        ))}
                      </code>
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {stackChips.map((chip) => (
                <span
                  key={chip}
                  className="border border-[#1C3050] px-3.5 py-2 font-mono text-[11.5px] text-[#8FA1BF]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
