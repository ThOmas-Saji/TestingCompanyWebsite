import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

const slideVariants: Record<string, Variants> = {
  up: {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  down: {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const isMobile = useIsMobile();
  const variants = slideVariants[direction];

  // Override distance if custom distance is provided
  if (distance !== 50) {
    const axis = direction === 'up' || direction === 'down' ? 'y' : 'x';
    const multiplier = direction === 'up' || direction === 'right' ? 1 : -1;

    variants.hidden = {
      ...variants.hidden,
      [axis]: distance * multiplier,
    };
  }

  // Override duration if custom duration is provided
  if (duration !== 0.6) {
    variants.visible = {
      ...variants.visible,
      transition: {
        duration,
        delay,
      },
    };
  } else if (delay > 0) {
    variants.visible = {
      ...variants.visible,
      transition: {
        ...variants.visible,
        delay,
      },
    };
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.1,
        margin: isMobile ? '-10px' : '-150px',
      }}
    >
      {children}
    </motion.div>
  );
}
