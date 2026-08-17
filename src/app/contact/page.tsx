import { Metadata } from "next";
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { Suspense, lazy } from 'react';
import { SITE_TITLES } from '@/lib/site-titles';

// Lazy load CtaSection
const CtaSection = lazy(() => import('@/components/sections/cta'));

// Loading skeleton
const SectionSkeleton = () => (
  <div className="py-20 bg-gradient-to-r from-[#012d56] to-[#013e78]">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="animate-pulse">
        <div className="h-12 bg-white/20 rounded w-2/3 mx-auto mb-6"></div>
        <div className="h-6 bg-white/20 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  </div>
);

export const metadata: Metadata = {
  title: SITE_TITLES.seo.contact,
  description: "Hubungi UPSENSE untuk konsultasi custom software, ERP, HRIS, aplikasi web dan mobile, serta transformasi digital perusahaan.",
  keywords: UPSENSE_META_KEYWORDS,
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: "https://upsense.co.id/contact"
  },
  openGraph: {
    title: SITE_TITLES.seo.contact,
    description: "Hubungi UPSENSE untuk konsultasi custom software, ERP, HRIS, aplikasi web dan mobile, serta transformasi digital perusahaan.",
    url: "https://upsense.co.id/contact",
    type: "website",
  }
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "LocalBusiness",
      "@id": "https://upsense.co.id/#localbusiness",
      "name": "UPSENSE",
      "description": "UPSENSE siap membantu kebutuhan software development, ERP, HRIS, dan solusi digital perusahaan Anda.",
      "image": "https://pcplygnyylkmyyrvrbxu.supabase.co/storage/v1/object/public/upsense/logo-upsense.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3805"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wisma SMR, Jl. Yos Sudarso Lt 9, Unit 904, RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok",
        "addressLocality": "Kota Jakarta Utara",
        "addressRegion": "DKI Jakarta",
        "postalCode": "14350",
        "addressCountry": "ID"
      },
      "telephone": "+62-852-1700-0041",
      "email": "sales@upsense.co.id",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      "priceRange": "$$",
      "url": "https://upsense.co.id"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="pt-16">
        <Suspense fallback={<SectionSkeleton />}>
          <CtaSection
            showButton={false}
            heading="Siap mendiskusikan kebutuhan digital bisnis Anda?"
            description="Tim UPSENSE siap membantu merancang solusi digital yang relevan untuk meningkatkan efisiensi dan efektivitas operasional perusahaan."
          />
        </Suspense>
        
        {/* Contact Information Section */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">
                  {SITE_TITLES.contact.headingStart} <span className="gradient-text">{SITE_TITLES.contact.headingEmphasis}</span>
                </h1>
                <p className="text-xl text-gray-600">
                  Kami siap membantu mewujudkan transformasi digital bisnis Anda.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info Card */}
                <div className="glass rounded-2xl p-8 border border-gray-200/50">
                  <h3 className="text-2xl font-bold mb-6">{SITE_TITLES.contact.information}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                          <div className="space-y-1 text-gray-600">
                            <a href="https://api.whatsapp.com/send?phone=6285217000041" className="block hover:text-primary transition-colors">
                              Sales : +62 852 170000 41
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                          <a href="mailto:sales@upsense.co.id" className="text-gray-600 hover:text-primary transition-colors">
                            sales@upsense.co.id
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                          <p className="text-gray-600">Senin - Sabtu: 10.00 - 20.00 WIB</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                          <p className="text-gray-600">
                            Wisma SMR, Jl. Yos Sudarso Lt 9, Unit 904, RT.10/RW.11, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14350
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="glass rounded-2xl p-8 border border-gray-200/50 bg-gradient-to-br from-green-50 to-white">
                  <h3 className="text-2xl font-bold mb-6">{SITE_TITLES.contact.chat}</h3>
                  
                  <p className="text-gray-600 mb-8">
                    Hubungi kami melalui WhatsApp untuk konsultasi gratis dan respons yang lebih cepat.
                  </p>

                  <a
                    href="https://api.whatsapp.com/send?phone=6285217000041"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
                  >
                    <svg height="24" width="24" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                    Chat melalui WhatsApp
                  </a>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                    <div className="flex gap-3">
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/upsense.id" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 hover:bg-pink-200 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                        </svg>
                      </a>
                      <a href="http://linkedin.com/company/pt-upsense-teknologi-indonesia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-chart-3 hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6 text-center">{SITE_TITLES.contact.location}</h3>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303.66812175978373!2d106.88782108618176!3d-6.1500479279683224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e62dc8c8f9%3A0x843e39662b4dbdc7!2sPT.%20UPSENSE%20Teknologi%20Indonesia!5e1!3m2!1sid!2sid!4v1784961998096!5m2!1sid!2sid&output=embed" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
