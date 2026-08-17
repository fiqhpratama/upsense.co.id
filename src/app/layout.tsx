import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MessageCircle } from "lucide-react";
import { UPSENSE_META_DESCRIPTION } from "@/lib/site-meta";
import { UPSENSE_META_KEYWORDS } from "@/lib/site-keywords";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UPSENSE | Software House Jakarta, Konsultan IT & Transformasi Digital",
    template: "%s | UPSENSE"
  },
  description: UPSENSE_META_DESCRIPTION,
  keywords: UPSENSE_META_KEYWORDS,
  authors: [{ name: "UPSENSE" }],
  creator: "UPSENSE",
  publisher: "UPSENSE",
  metadataBase: new URL("https://upsense.co.id"),
  alternates: {
    canonical: "/"
  },
    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
      apple: '/apple-touch-icon.png',
    },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://upsense.co.id",
    siteName: "UPSENSE",
    title: "UPSENSE | Software House Jakarta, Konsultan IT & Transformasi Digital",
    description: UPSENSE_META_DESCRIPTION,
    images: [
      {
        url: "https://livryuhbsrboxziiqafy.supabase.co/storage/v1/object/public/UPSENSE/3.png",
        width: 1200,
        height: 630,
        alt: "UPSENSE - PT. UPSENSE Teknologi Indonesia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "UPSENSE | Software House Jakarta, Konsultan IT & Transformasi Digital",
    description: UPSENSE_META_DESCRIPTION,
    images: ["https://livryuhbsrboxziiqafy.supabase.co/storage/v1/object/public/UPSENSE/3.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${nunitoSans.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWV1XGRBS6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SWV1XGRBS6');`}
        </Script>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="1fcdb3b7-50ad-4056-aacb-f7ba66832b0c"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "UPSENSE", "version": "1.0.0", "greeting": "Build Your Future Impact"}'
        />
        {children}
        <a
          href="https://api.whatsapp.com/send?phone=6285217000041"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#1ebe5b] lg:bottom-6"
          aria-label="Hubungi Kami melalui WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
          Hubungi Kami
        </a>
        <VisualEditsMessenger />
        <SpeedInsights />
      </body>
    </html>
  );
}
