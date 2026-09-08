import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import ProcessSection from '@/components/sections/process';

export default function PostIndexPage() {
  return <>
    <Navigation />
    <main className="pt-16"><ProcessSection headingLevel="h1" /></main>
    <Footer />
  </>;
}
