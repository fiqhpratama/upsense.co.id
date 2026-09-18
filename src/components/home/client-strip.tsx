const BASE = 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients';

const clientLogos = [
  { name: 'CashUP', file: 'cashup-logo.svg' },
  { name: 'Adelle', file: 'logo-adelle.png' },
  { name: 'PT Tunggal Idaman Abdi', file: 'logo-pt-tunggal-idaman-abdi.png' },
  { name: 'TOSTEM', file: 'logo-tostem.png' },
  { name: 'Morton', file: 'https://static.wixstatic.com/media/2e283e_6f25f03d3af241479aa948537b0a93be~mv2.png/v1/fill/w_480,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20tosmot.png' },
  { name: 'Bhinneka Life', file: 'bhinnekalife-logo.png' },
  { name: 'MAIPARK', file: 'logo-maipark.png' },
  { name: 'Yupi', file: 'logo-yupi.png' },
  { name: 'Procar', file: 'procar.webp' },
  { name: 'ATS IS', file: 'ats-is.png' },
];

type ClientLogo = { name: string; url: string };

const logos: ClientLogo[] = clientLogos.map(({ name, file }) => ({
  name,
  url: file.startsWith('http') ? file : `${BASE}/${file}`,
}));

function LogoItem({ name, url }: ClientLogo) {
  return (
    <div className="flex h-42 w-62 shrink-0 items-center justify-center px-5">
      <div className="group relative h-32 w-full" role="img" aria-label={`${name} logo`}>
        <div
          aria-hidden="true"
          className="client-logo-mask absolute inset-0 opacity-55 group-hover:opacity-100"
          style={{ maskImage: `url("${url}")`, WebkitMaskImage: `url("${url}")` }}
        />
      </div>
    </div>
  );
}

export default function ClientStrip() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 class="mt-4 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[40px]">Klien Kami</h2>
        <div className="overflow-hidden">
          {/* duplikat 2x untuk loop mulus (translateX -50%) */}
          <div className="logo-marquee flex w-max hover:[animation-play-state:paused]">
            {logos.map((logo) => (
              <LogoItem key={logo.name} {...logo} />
            ))}
            {logos.map((logo) => (
              <LogoItem key={`${logo.name}-copy`} {...logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
