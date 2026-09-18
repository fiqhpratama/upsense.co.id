'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MessageCircle, Home, Briefcase, Info, Phone, FileText, Menu, X, Blocks } from 'lucide-react';

type NavItem = {
  name: string;
  target?: string;
  href?: string;
};

type BottomNavItem = NavItem & {
  icon: typeof Home;
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;

      const nav = document.querySelector('nav');
      const offset = (nav instanceof HTMLElement ? nav.offsetHeight : 0) + 16;
      const top = hash === 'home' ? 0 : element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const navItems: NavItem[] = [
    { name: 'Beranda', target: 'home' },
    { name: 'Portofolio', href: '/portfolio/' },
    { name: 'Tentang', target: 'about-us' },
    { name: 'Layanan', href: '/services/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Kontak', href: '/contact/' }
  ];

  const logoSrc = 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png';

  const bottomNavItems: BottomNavItem[] = [
    { name: 'Beranda', target: 'home', icon: Home },
    { name: 'Portofolio', href: '/portfolio/', icon: Briefcase },
    { name: 'Tentang', target: 'about-us', icon: Info },
    { name: 'Layanan', href: '/services/', icon: Blocks },
    { name: 'Blog', href: '/blog/', icon: FileText },
    { name: 'Kontak', href: '/contact/', icon: Phone },
  ];

  const handleNavItemClick = (item: NavItem) => {
    setMenuOpen(false);
    if (item.target) {
      scrollToSection(item.target);
    }
  };

  const scrollToSection = (target: string) => {
    if (pathname !== '/') {
      router.push(`/#${target}`);
      return;
    }

    if (target === 'home') {
      window.history.replaceState(null, '', '#home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(target);
    if (!element) return;

    const nav = document.querySelector('nav');
    const offset = (nav instanceof HTMLElement ? nav.offsetHeight : 0) + 16;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.history.replaceState(null, '', `#${target}`);
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed z-50 top-0 left-0 right-0 bg-[#0a1e43] transition-all duration-300 ${scrolled ? 'py-3' : 'py-4 md:py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="UPSENSE — Beranda">
              <Image
                src={logoSrc}
                alt="UPSENSE Logo"
                width={161}
                height={46}
                className={`h-[2.3rem] md:h-[2.9rem] w-auto object-contain transition-all duration-300 brightness-0 invert ${scrolled ? 'opacity-95' : 'opacity-100'}`}
              />
            </Link>

            {/* Desktop Navigation + Button (right-aligned) */}
            <div className="hidden lg:flex items-center gap-9">
              {navItems.map((item) => (
                item.href ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="cursor-pointer text-[15px] font-semibold text-white/85 transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavItemClick(item)}
                    className="cursor-pointer text-[15px] font-semibold text-white/85 transition-colors hover:text-white"
                  >
                    {item.name}
                  </button>
                )
              ))}

              {/* Contact button */}
              <Link
                href="/contact/"
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-[#23c55e] px-5 py-2.5 text-[15px] font-semibold text-white transition-all hover:bg-[#1da350] hover:shadow-lg hover:shadow-green-500/20"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                <span>Hubungi Kami</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0a1e43] lg:hidden">
            <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => (
                item.href ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavItemClick(item)}
                    className="cursor-pointer rounded-lg px-3 py-2.5 text-left text-[15px] font-semibold text-white/85 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <Link
                href="/contact/"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#23c55e] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1da350]"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                <span>Hubungi Kami</span>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile & Tablet Bottom Navigation Bar */}
      <div className="fixed bottom-3 left-3 right-3 z-50 rounded-xl border border-white/10 bg-[#0a1e43]/95 shadow-xl backdrop-blur-lg lg:hidden sm:bottom-4 sm:left-4 sm:right-4">
        <div className="grid h-16 grid-cols-6 sm:h-18 md:h-20">
          {bottomNavItems.map((item) => (
            item.href ? (
              <a
                key={item.name}
                href={item.href}
                className="flex cursor-pointer flex-col items-center justify-center gap-1 text-white/85 transition-colors hover:text-white"
              >
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                <span className="text-xs font-semibold sm:text-sm">{item.name}</span>
              </a>
            ) : (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavItemClick(item)}
                className="flex cursor-pointer flex-col items-center justify-center gap-1 text-white/85 transition-colors hover:text-white"
              >
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                <span className="text-xs font-semibold sm:text-sm">{item.name}</span>
              </button>
            )
          ))}
        </div>
      </div>
    </>
  );
}
