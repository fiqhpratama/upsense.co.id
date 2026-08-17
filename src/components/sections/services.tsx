const clients = [
  { name: 'CashUP', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/cashup-logo.svg' },
  { name: 'Adelle', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/logo-adelle.png' },
  { name: 'PT Tunggal Idaman Abdi', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/logo-pt-tunggal-idaman-abdi.png' },
  { name: 'TOSTEM', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/logo-tostem.png' },
  { name: 'Morton', logo: 'https://static.wixstatic.com/media/2e283e_6f25f03d3af241479aa948537b0a93be~mv2.png/v1/fill/w_480,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20tosmot.png' },
  { name: 'Bhinneka Life', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/bhinnekalife-logo.png' },
  { name: 'MAIPARK', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/logo-maipark.png' },
  { name: 'Yupi', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/logo-yupi.png' },
  { name: 'Procar', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/procar.webp' },
  { name: 'ATS IS', logo: 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/clients/ats-is.png' },
];

export default function ServicesSection() {
  return (
    <section id="latest-client" className="bg-[#f8fbff] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#013e78]">Our Satisfaction</p>
          <h2 className="text-4xl font-bold leading-tight text-black lg:text-5xl">Latest Works With</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">Kolaborasi terbaru kami dalam menghadirkan solusi digital yang relevan bagi kebutuhan bisnis.</p>
        </div>

        <div className="overflow-hidden">
          <div className="logo-marquee flex w-max hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex h-42 w-62 shrink-0 items-center justify-center px-5">
                <div className="group relative h-32 w-full" role="img" aria-label={`${client.name} logo`}>
                  <div
                    aria-hidden="true"
                    className="client-logo-mask absolute inset-0 opacity-55 group-hover:opacity-100"
                    style={{ maskImage: `url("${client.logo}")`, WebkitMaskImage: `url("${client.logo}")` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
