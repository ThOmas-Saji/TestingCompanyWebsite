import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/98 backdrop-blur-xl border-b border-white/8'
          : 'bg-zinc-900/95 backdrop-blur-xl border-b border-white/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <div className="text-2xl font-bold text-white uppercase tracking-wider">
          YlogX
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('solutions')}
            className="text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection('case-studies')}
            className="text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
          >
            Case Studies
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
          >
            Team
          </button>
        </nav>

        <Button
          onClick={() => scrollToSection('contact')}
          className="bg-emerald-500 hover:bg-purple-600 text-white px-8 py-3 font-semibold uppercase tracking-wide transition-all hover:-translate-y-0.5"
        >
          Connect
        </Button>
      </div>
    </header>
  );
}
