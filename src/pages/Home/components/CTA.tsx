import { ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';

export function CTA() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="mx-10 my-20">
      <div className="bg-gray-100 dark:bg-zinc-100 text-gray-900 dark:text-zinc-900 rounded-[40px] py-20 px-16 text-center relative overflow-hidden transition-colors duration-300">
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Let's make something great together
          </h2>
          <p className="text-xl text-gray-600 dark:text-zinc-600 mb-10 max-w-2xl mx-auto">
            Ready to transform your business with AI? Get in touch with our
            experts to start your digital transformation journey.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 text-lg font-semibold inline-flex items-center gap-3"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute left-16 top-1/2 -translate-y-1/2 w-48 h-48">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <rect
              x="40"
              y="80"
              width="120"
              height="80"
              rx="20"
              fill="#10b981"
            />
            <circle cx="100" cy="60" r="25" fill="#FDB4A6" />
            <rect
              x="10"
              y="100"
              width="30"
              height="40"
              rx="15"
              fill="#10b981"
            />
            <rect
              x="160"
              y="100"
              width="30"
              height="40"
              rx="15"
              fill="#10b981"
            />
            <rect x="60" y="40" width="80" height="40" rx="10" fill="#fef08a" />
          </svg>
        </div>
      </div>
    </section>
  );
}
