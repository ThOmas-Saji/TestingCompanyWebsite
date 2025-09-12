import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    navigate('/');
    timeoutRef.current = setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSidebarOpen(false); // Close sidebar after navigation
      }
      timeoutRef.current = null;
    }, 300);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 py-3 transition-all duration-300 ${
          scrolled
            ? 'bg-white/98 dark:bg-zinc-900/98 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/8'
            : 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <Link onClick={() => scrollToSection('home')} to="/">
            <img
              src={'https://www.ylogx.io/assets/imgs/logo.png'}
              alt="YlogX"
              className="w-full h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors"
            >
              Team
            </button>
          </nav>

          {/* Desktop CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-500 hover:bg-purple-600 text-white px-8 py-3 font-semibold uppercase tracking-wide transition-all hover:-translate-y-0.5"
            >
              Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-900 dark:text-white hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/98 dark:bg-zinc-900/98 backdrop-blur-xl border-l border-gray-200/50 dark:border-white/8 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-white/8">
            <div className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Menu
            </div>
            <button
              onClick={closeSidebar}
              className="text-gray-900 dark:text-white hover:text-emerald-400 transition-colors"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 p-6 space-y-6">
            <button
              onClick={() => scrollToSection('home')}
              className="w-full text-left text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors py-3 border-b border-gray-200/50 dark:border-white/8 hover:border-emerald-400/50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-left text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors py-3 border-b border-gray-200/50 dark:border-white/8 hover:border-emerald-400/50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="w-full text-left text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors py-3 border-b border-gray-200/50 dark:border-white/8 hover:border-emerald-400/50"
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="w-full text-left text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors py-3 border-b border-gray-200/50 dark:border-white/8 hover:border-emerald-400/50"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="w-full text-left text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors py-3 border-b border-gray-200/50 dark:border-white/8 hover:border-emerald-400/50"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="w-full text-left text-gray-900 dark:text-white hover:text-emerald-400 font-medium uppercase tracking-wide transition-colors py-3 border-b border-gray-200/50 dark:border-white/8 hover:border-emerald-400/50"
            >
              Team
            </button>
          </nav>

          {/* Sidebar Footer with CTA and Theme Toggle */}
          <div className="p-6 border-t border-gray-200/50 dark:border-white/8 space-y-4">
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-emerald-500 hover:bg-purple-600 text-white py-3 font-semibold uppercase tracking-all hover:-translate-y-0.5"
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
