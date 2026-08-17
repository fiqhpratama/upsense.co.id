'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowUpRight, Home, Briefcase, MessageCircle, Info, Phone, FileText } from 'lucide-react';

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
    { name: 'Tentang Kami', target: 'about-us' },
    { name: 'Layanan', href: '/services/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Kontak', href: '/contact/' }
  ];

  const logoSrc = 'https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png';

  const bottomNavItems: BottomNavItem[] = [
    { name: 'Beranda', target: 'home', icon: Home },
    { name: 'Portofolio', href: '/portfolio/', icon: Briefcase },
    { name: 'Tentang', target: 'about-us', icon: Info },
    { name: 'Layanan', href: '/services/', icon: MessageCircle },
    { name: 'Blog', href: '/blog/', icon: FileText },
    { name: 'Kontak', href: '/contact/', icon: Phone },
  ];

  const handleNavItemClick = (item: NavItem) => {
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
      <nav className={`fixed z-50 transition-all duration-300 top-0 left-0 right-0 ${
          scrolled
            ? 'bg-[#0a1e43] py-3'
            : 'bg-white py-4 md:py-5'
      }`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoSrc}
                alt="UPSENSE Logo"
                width={161}
                height={46}
                className={`h-[2.3rem] md:h-[2.9rem] w-auto object-contain transition-all duration-300 ${
                  scrolled ? 'brightness-0 invert' : ''
                }`}
              />
            </Link>

            {/* Desktop Navigation + Button (right-aligned) */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                item.href ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`cursor-pointer text-base font-medium transition-colors ${
                      scrolled
                        ? 'text-white hover:text-white/80'
                        : 'text-[#013e78]/70 hover:text-[#013e78]'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleNavItemClick(item)}
                    className={`cursor-pointer text-base font-medium transition-colors ${
                      scrolled
                        ? 'text-white hover:text-white/80'
                        : 'text-[#013e78]/70 hover:text-[#013e78]'
                    }`}
                  >
                    {item.name}
                  </button>
                )
              ))}

            {/* Contact button */}
            <Link
              href="/contact/"
              className={`cursor-pointer inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm md:text-base font-semibold text-[#013e78] shadow-sm transition-all group ${
                scrolled
                  ? 'bg-[#25D366] hover:bg-[#1ebe5b] hover:shadow-lg'
                  : 'bg-[#25D366] hover:bg-[#1ebe5b] hover:shadow-md'
              }`}
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            </div>
          </div>
        </div>
      </nav>

{/* Mobile & Tablet Bottom Navigation Bar */}
        <div className={`lg:hidden fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 backdrop-blur-lg border rounded-xl z-50 shadow-xl transition-all duration-300 ${
          scrolled ? 'bg-[#0a1e43]/95 border-white/10' : 'bg-white/95 border-black/10'
        }`}>
          <div className="grid grid-cols-6 h-16 sm:h-18 md:h-20">
            {bottomNavItems.map((item) => (
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`cursor-pointer flex flex-col items-center justify-center gap-1 transition-colors ${
                    scrolled ? 'text-white hover:text-white/80' : 'text-[#013e78] hover:text-[#013e78]/80'
                  }`}
                >
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  <span className="text-sm sm:text-base font-semibold">{item.name}</span>
                </a>
              ) : (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavItemClick(item)}
                  className={`cursor-pointer flex flex-col items-center justify-center gap-1 transition-colors ${
                    scrolled ? 'text-white hover:text-white/80' : 'text-[#013e78] hover:text-[#013e78]/80'
                  }`}
                >
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                  <span className="text-sm sm:text-base font-semibold">{item.name}</span>
                </button>
              )
            ))}
          </div>
        </div>
    </>
  );
}
