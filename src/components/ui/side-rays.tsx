'use client';

/**
 * Soft light rays fanning out from the top-right corner, reactbits side-rays
 * style. Pure monochrome (soft white), sits fixed behind all content and is
 * non-interactive. Subtle but present, to give the page a light source.
 */
export default function SideRays() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Core glow at the corner */}
      <div
        className="absolute -right-32 -top-40 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--foreground) 9%, transparent) 0%, transparent 65%)',
        }}
      />

      {/* Fanned rays */}
      <svg
        className="side-rays-svg absolute -right-10 -top-10 h-[150vh] w-[120vw] opacity-[0.5]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMaxYMin slice"
        fill="none"
      >
        <defs>
          <linearGradient id="rayfade" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.14" />
            <stop offset="55%" stopColor="var(--foreground)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="side-rays-fan" style={{ transformOrigin: '1000px 0px' }}>
          {[8, 24, 42, 62, 84].map((deg, i) => (
            <polygon
              key={i}
              points="1000,0 460,1600 700,1600"
              fill="url(#rayfade)"
              transform={`rotate(${deg} 1000 0)`}
              style={{ opacity: 1 - i * 0.14 }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
