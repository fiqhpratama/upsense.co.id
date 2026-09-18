export function SectionTag({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-0.5 w-7 ${dark ? 'bg-[#FB923C]' : 'bg-[#F97316]'}`} aria-hidden="true" />
      <span className={`font-mono text-xs tracking-[0.08em] ${dark ? 'text-[#FB923C]' : 'text-[#F97316]'}`}>
        {children}
      </span>
    </div>
  );
}
