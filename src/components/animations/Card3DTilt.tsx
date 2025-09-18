import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface Card3DTiltProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
}

export default function Card3DTilt({
  children,
  className = '',
  intensity = 20,
  perspective = 1000,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring animations for smooth movement
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);

  // Transform for slight scale effect
  const scale = useTransform(springX, [-0.5, 0.5], [0.95, 1.05]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Normalize mouse position to [-0.5, 0.5] range
    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
