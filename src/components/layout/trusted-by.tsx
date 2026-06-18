'use client';

import { motion } from 'framer-motion';

/**
 * A continuously looping strip of the software and services Adam works with.
 * Monochrome wordmarks, duplicated so the loop is seamless. Pauses on hover.
 */

const tools = [
  'Apple',
  'macOS',
  'Jamf',
  'Okta',
  'Google Workspace',
  'Cisco Meraki',
  'CrowdStrike',
  '1Password',
  'Jira',
  'Next.js',
  'Claude',
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16">
      {tools.map((tool) => (
        <span
          key={tool}
          className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-[0.15em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default function TrustedBy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-b border-[var(--border)] py-12"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
          Tools and platforms I work with
        </p>
      </div>

      {/* Looping strip with fade edges */}
      <div className="logo-loop-mask group relative overflow-hidden">
        <div className="logo-loop-track flex w-max">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </motion.div>
  );
}
