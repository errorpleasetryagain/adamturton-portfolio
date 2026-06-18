'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface ScrollRevealProps {
  /** One or more paragraphs. Pass an array to reveal them on one shared timeline. */
  children: string | string[];
  className?: string;
}

interface WordProps {
  children: string;
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
 * Reveals a passage word by word as it scrolls through the viewport. When given
 * multiple paragraphs, every word across all of them shares ONE continuous
 * scroll timeline, so the reveal flows smoothly top to bottom rather than
 * restarting per paragraph.
 */
export default function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  });

  const paragraphs = Array.isArray(children) ? children : [children];

  // Precompute each word's [start, end] range on one shared 0..1 timeline.
  // The offset for each paragraph is the running word count before it.
  const wordsPerPara = paragraphs.map((p) => p.split(' '));
  const totalWords = wordsPerPara.reduce((n, w) => n + w.length, 0);
  const offsets = wordsPerPara.reduce<number[]>((acc, w, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + wordsPerPara[i - 1].length);
    return acc;
  }, []);

  const paraData = wordsPerPara.map((words, pIndex) =>
    words.map((word, i) => {
      const globalIndex = offsets[pIndex] + i;
      const start = globalIndex / totalWords;
      const end = (globalIndex + 1) / totalWords;
      return { word, range: [start, end] as [number, number] };
    })
  );

  return (
    <div ref={ref} className={className}>
      {paraData.map((words, pIndex) => (
        <p
          key={pIndex}
          className={pIndex < paraData.length - 1 ? 'mb-6' : ''}
          aria-label={paragraphs[pIndex]}
        >
          {words.map(({ word, range }, i) => (
            <Word key={i} progress={scrollYProgress} range={range}>
              {word}
            </Word>
          ))}
        </p>
      ))}
    </div>
  );
}
