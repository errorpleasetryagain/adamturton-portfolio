'use client';

import { useEffect, useRef, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  /** Delay before it starts decrypting, in ms. */
  delay?: number;
  /** How fast each frame ticks, in ms. */
  speed?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.';

/**
 * Scrambles through random characters then resolves to the real text, one
 * position at a time, left to right. Runs once when it mounts. Respects
 * reduced-motion by rendering the final text immediately.
 */
export default function DecryptedText({
  text,
  className,
  delay = 0,
  speed = 38,
}: DecryptedTextProps) {
  const [output, setOutput] = useState(text);
  const [mounted, setMounted] = useState(false);
  const frame = useRef(0);

  // Mark as mounted on the client. The first render (server + initial client)
  // always shows the plain text, so hydration matches. Scrambling only begins
  // after this flips true. This is a deliberate client-only gate.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      // Already showing the final text; nothing to animate.
      return;
    }

    let interval: ReturnType<typeof setInterval> | undefined;
    const revealEvery = 2; // frames per resolved character

    const start = setTimeout(() => {
      interval = setInterval(() => {
        const revealed = Math.floor(frame.current / revealEvery);
        if (revealed > text.length) {
          if (interval) clearInterval(interval);
          setOutput(text);
          return;
        }
        const next = text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < revealed) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');
        setOutput(next);
        frame.current += 1;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [mounted, text, delay, speed]);

  // Before mount, render the plain text so server and client HTML match.
  return (
    <span className={className} aria-label={text} suppressHydrationWarning>
      {mounted ? output : text}
    </span>
  );
}
