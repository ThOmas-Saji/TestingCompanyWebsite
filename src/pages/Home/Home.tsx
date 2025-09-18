import { Header } from '@/layouts/Header';
import { WorkProcess } from './components/WorkProcess';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { Blog } from '@/pages/Blog';
import { FAQ } from './components/FAQ';
import { Team } from './components/Team';
import { CTA } from './components/CTA';
import { Hero } from './components/Hero';
import AIFlowchart from './components/AIFlowchart';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <Header />
      <Hero />

      <ScrollReveal direction="up" delay={0.1}>
        <WorkProcess />
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.2}>
        <Services />
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.1}>
        <AIFlowchart />
      </ScrollReveal>

      <ScrollReveal direction="down" delay={0.2}>
        <Features />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <CaseStudies />
      </ScrollReveal>

      <ScrollReveal direction="left" delay={0.2}>
        <Blog />
      </ScrollReveal>

      <ScrollReveal direction="right" delay={0.1}>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal direction="down" delay={0.2}>
        <Team />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1}>
        <CTA />
      </ScrollReveal>
    </div>
  );
}
