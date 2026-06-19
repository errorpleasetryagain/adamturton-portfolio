'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TiltedCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. Keep modest for a tasteful effect. */
  max?: number;
}

/**
 * A card that tilts in 3D toward the cursor. Springs back to flat on leave.
 * Reactbits tilted-card style, monochrome.
 */
export default function TiltedCard({ children, className, max = 8 }: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const srx = useSpring(rotateX, { stiffness: 250, damping: 22 });
  const sry = useSpring(rotateY, { stiffness: 250, damping: 22 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovering(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 900,
        boxShadow: hovering ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      }}
      className={`[transform-style:preserve-3d] transition-shadow duration-300 ${className ?? ''}`}
    >
      {children}
    </motion.div>
  );
}
