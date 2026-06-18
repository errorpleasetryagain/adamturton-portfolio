'use client';

import { useRef, type ReactNode } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A card that shows a soft monochrome spotlight following the cursor, in the
 * magic-bento style. The highlight is driven by CSS custom properties set on
 * mouse move, so it stays smooth and cheap.
 */
export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-card ${className ?? ''}`}>
      {children}
    </div>
  );
}
