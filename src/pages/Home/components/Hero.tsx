import { Button } from '../../../components/ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 dark:bg-zinc-900 relative overflow-hidden pt-32 pb-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="z-10">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 text-gray-900 dark:text-white">
            AI-Driven Digital Transformation
          </h1>
          <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-lg">
            Empowering enterprises with cutting-edge artificial intelligence,
            advanced data science, and intelligent automation solutions to drive
            innovation, optimize operations, and accelerate sustainable growth.
          </p>
          <Button
            onClick={() => scrollToSection('solutions')}
            className="bg-emerald-500 hover:bg-purple-600 text-white px-10 py-4 text-lg font-semibold uppercase tracking-wide transition-all hover:-translate-y-0.5"
          >
            Get Started
          </Button>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Floating Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute w-32 h-32 bg-emerald-500 rounded-full top-[10%] left-[10%] animate-bounce"
              style={{ animationDelay: '0s', animationDuration: '6s' }}
            ></div>
            <div
              className="absolute w-20 h-20 bg-yellow-300 rounded-full top-[60%] right-[20%] animate-bounce"
              style={{ animationDelay: '2s', animationDuration: '6s' }}
            ></div>
            <div
              className="absolute w-16 h-16 bg-cyan-400 rounded-full bottom-[20%] left-[20%] animate-bounce"
              style={{ animationDelay: '4s', animationDuration: '6s' }}
            ></div>
          </div>

          {/* Character Illustration */}
          <div className="relative w-96 h-96">
            <div className="absolute top-10 left-40 w-20 h-20 bg-orange-300 rounded-full"></div>
            <div className="absolute top-24 left-24 w-48 h-60 bg-emerald-500 rounded-3xl"></div>
            <div className="absolute top-32 right-10 w-16 h-32 bg-emerald-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
