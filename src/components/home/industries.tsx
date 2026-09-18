import { Pill, Factory, Truck, ShieldCheck, ShoppingCart, Landmark } from 'lucide-react';

const industries: { label: string; icon: typeof Pill }[] = [
  { label: 'Pharmacy', icon: Pill },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Logistic', icon: Truck },
  { label: 'Insurance', icon: ShieldCheck },
  { label: 'Retail', icon: ShoppingCart },
  { label: 'Fintech', icon: Landmark },
];

export default function Industries() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 className="mt-4 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#0C1425] md:text-[40px]">
          Industri Yang Kami Layani
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-[64px] w-[64px] items-center justify-center bg-[#0A1E43]">
                <Icon className="h-8 w-8 text-white" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span className="font-mono text-sm text-[#0C1425]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
