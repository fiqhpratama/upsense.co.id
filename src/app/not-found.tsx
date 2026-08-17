import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found on UPSENSE.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl md:text-6xl font-bold text-[#013e78]">404</h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-black">Page not found</p>
        <p className="mt-3 text-gray-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex mt-8 items-center rounded-full bg-[#013e78] px-6 py-3 text-white font-semibold hover:bg-[#0c4273] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
