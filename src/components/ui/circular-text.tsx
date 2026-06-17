'use client';

import { useEffect, useRef } from 'react';

interface CircularTextProps {
  text: string;
  size?: number;
  spinDuration?: number;
  className?: string;
}

export default function CircularText({
  text,
  size = 120,
  spinDuration = 20,
  className = '',
}: CircularTextProps) {
  const letters = Array.from(text);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start: number | null = null;
    let speed = spinDuration;
    let raf: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const deg = (elapsed / (speed * 1000)) * 360;
      el.style.transform = `rotate(${deg % 360}deg)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    const handleEnter = () => { speed = spinDuration / 4; };
    const handleLeave = () => { speed = spinDuration; };

    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [spinDuration]);

  return (
    <div
      ref={ref}
      className={`cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        {letters.map((char, i) => {
          const angle = (360 / letters.length) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const radius = size / 2 - 12;
          const x = size / 2 + radius * Math.cos(rad);
          const y = size / 2 + radius * Math.sin(rad);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="currentColor"
              fontSize="11"
              fontFamily="var(--font-mono)"
              fontWeight="500"
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
            >
              {char}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
