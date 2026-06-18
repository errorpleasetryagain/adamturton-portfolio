'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface ScrollRevealProps {
  children: string;
  className?: string;
}

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(
    progress,
    range,
    ['var(--foreground-muted)', 'var(--foreground)']
  );
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
}

/**
 * Reveals a passage word by word as it scrolls through the viewport, in the
 * reactbits scroll-reveal style. Each word eases from faint to full opacity
 * based on scroll progress.
 */
export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.55'],
  });

  const words = children.split(' ');

  return (
    <p ref={ref} className={className} aria-label={children}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
