'use client';

/**
 * Soft volumetric light cascading from the top-right corner, in the reactbits
 * side-rays style. Built from layered, heavily blurred light cones so the edges
 * feather and the rays blend into a glow rather than reading as hard shapes.
 * Monochrome (soft white), fixed behind all content, non-interactive.
 */
export default function SideRays() {
  // Each ray is a long, thin, blurred cone rotated out from the corner.
  const rays = [
    { rotate: 4, width: 200, opacity: 0.124, blur: 40 },
    { rotate: 18, width: 260, opacity: 0.090, blur: 55 },
    { rotate: 34, width: 320, opacity: 0.068, blur: 65 },
    { rotate: 52, width: 380, opacity: 0.045, blur: 80 },
    { rotate: 72, width: 440, opacity: 0.028, blur: 90 },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Bright corner source */}
      <div
        className="absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/4"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--foreground) 11%, transparent) 0%, transparent 60%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Cascading rays from the top-right corner */}
      <div
        className="side-rays-fan absolute right-0 top-0"
        style={{ transformOrigin: 'top right' }}
      >
        {rays.map((ray, i) => (
          <div
            key={i}
            className="absolute right-0 top-0 origin-top-right"
            style={{
              width: `${ray.width}px`,
              height: '160vh',
              transform: `rotate(${ray.rotate}deg)`,
              background: `linear-gradient(to bottom, color-mix(in srgb, var(--foreground) ${Math.round(
                ray.opacity * 100
              )}%, transparent), transparent 70%)`,
              filter: `blur(${ray.blur}px)`,
              borderRadius: '50%',
            }}
          />
        ))}
      </div>
    </div>
  );
}
