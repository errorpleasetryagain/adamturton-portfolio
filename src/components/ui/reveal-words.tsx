'use client';

import { motion } from 'framer-motion';

interface RevealWordsProps {
  text: string;
  className?: string;
  /** Delay before the first word, in seconds. */
  delay?: number;
}

/**
 * Reveals a headline one word at a time with a soft upward blur fade.
 * Each word animates independently so it reads as a graceful cascade.
 */
export default function RevealWords({ text, className, delay = 0 }: RevealWordsProps) {
  const words = text.split(' ');

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
