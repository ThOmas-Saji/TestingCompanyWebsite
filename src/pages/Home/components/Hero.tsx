import { Button } from '../../../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const texts = [
  'Data Driven Decision Making',
  'Powered By Analytics and Decision Sciences',
  'AI powered Automation',
  'Gen AI Centric Productivity Improvement',
  'Agentic AI Based Excellence',
];

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
      className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16 transition-colors duration-300"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={'https://www.ylogx.io/assets/imgs/home/header.png'}
          alt="AI and Data Analytics Background"
          className="w-1/2 h-full object-cover right-0 absolute"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80 dark:bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Center-aligned content */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Animated Text Section */}
            <div className="space-y-6">
              <AnimatedText />
            </div>

            {/* Description */}
            <motion.p
              className="text-md lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              Empowering enterprises with cutting-edge artificial intelligence,
              advanced data science, and intelligent automation solutions to
              drive innovation, optimize operations, and accelerate sustainable
              growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <Button
                onClick={() => scrollToSection('solutions')}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg font-semibold rounded-lg border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 min-w-[200px]"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-2/4 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute top-2/3 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 3000); // Change text every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2">
      <motion.h1
        className="text-5xl lg:text-6xl font-bold leading-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Transforming Businesses through
      </motion.h1>

      <div className="relative h-[6rem] lg:h-[7rem] xl:h-[8rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{ y: 100, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -100, opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="absolute w-full h-full text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400"
          >
            {texts[index]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
}
