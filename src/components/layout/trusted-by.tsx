'use client';

import { motion } from 'framer-motion';

export default function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-b border-[var(--border)]"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
          Where I&apos;ve worked
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {/* Apple Logo */}
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 md:h-10"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.64-.69.83-1.29 2.04-1.13 3.11 1.17.09 2.36-.81 3.12-1.64z" />
            </svg>
            <span className="text-xs text-[var(--foreground-muted)]">6 years</span>
          </div>

          {/* Selfridges Logo */}
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-8 md:h-10"
              viewBox="0 0 120 40"
              fill="currentColor"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <text x="0" y="28" fontFamily="Georgia, serif" fontSize="28" fontWeight="600" letterSpacing="2">
                SELFRIDGES
              </text>
            </svg>
            <span className="text-xs text-[var(--foreground-muted)]">3 years</span>
          </div>

          {/* Starling Bank Logo */}
          <div className="flex flex-col items-center gap-2">
            <svg
              className="h-10 md:h-12"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: 'var(--foreground-muted)' }}
            >
              <path d="M12 2L14.5 9.5H22L16 14.5L18.5 22L12 17.5L5.5 22L8 14.5L2 9.5H9.5L12 2Z" />
            </svg>
            <span className="text-xs text-[var(--foreground-muted)]">Starling Bank</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
