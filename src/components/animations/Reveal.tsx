import { motion } from 'framer-motion';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0, staggerChildren: 0.05 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <motion.h1
      className={className}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char: string, index: number) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
