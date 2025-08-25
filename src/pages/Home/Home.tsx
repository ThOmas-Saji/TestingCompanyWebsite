import { Header } from '@/layouts/Header';
import { Hero } from './components/Hero';
import { WorkProcess } from './components/WorkProcess';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Team } from './components/Team';
import { CTA } from './components/CTA';
import { Footer } from '@/layouts/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <Header />
      <Hero />
      <WorkProcess />
      <Services />
      <Features />
      <CaseStudies />
      <Blog />
      <FAQ />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
