'use client';

import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  className?: string;
  /** Delay before typing starts, in seconds. */
  delay?: number;
  /** Time between each letter, in seconds. */
  stagger?: number;
}

/**
 * Types a word in one letter at a time, each letter rising and fading in.
 * The final character (e.g. a full stop) lands last. Reveals plain text for
 * reduced-motion / no-JS via the aria-label.
 */
export default function Typewriter({
  text,
  className,
  delay = 0.2,
  stagger = 0.09,
}: TypewriterProps) {
  const letters = text.split('');

  return (
    <span className={className} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: '0.3em' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  );
}
