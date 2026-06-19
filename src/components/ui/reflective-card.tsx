'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface ReflectiveCardProps {
  children?: ReactNode;
  className?: string;
}

/**
 * A card with a reflective sheen that follows the cursor and a subtle 3D tilt,
 * in the reactbits reflective-card style. The shine is a moving highlight; the
 * card tilts gently toward the pointer. Monochrome.
 */
export default function ReflectiveCard({ children, className }: ReflectiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(0);
  const shineOpacity = useMotionValue(0);

  const srx = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const sry = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const shine = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.35), transparent 45%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 16);
    rotateX.set(-(py - 0.5) * 16);
    shineX.set(px * 100);
    shineY.set(py * 100);
    shineOpacity.set(1);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    shineOpacity.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className={`relative overflow-hidden [transform-style:preserve-3d] ${className ?? ''}`}
    >
      {children}
      {/* Reflective sheen */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: shine, opacity: shineOpacity }}
      />
      {/* Static edge gloss */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.10), transparent 40%, transparent 60%, rgba(255,255,255,0.05))',
        }}
      />
    </motion.div>
  );
}
