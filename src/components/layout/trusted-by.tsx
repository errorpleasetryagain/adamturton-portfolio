'use client';

import { motion } from 'framer-motion';

/**
 * A continuously looping strip of the software and services Adam works with.
 * Monochrome wordmarks, duplicated so the loop is seamless. Pauses on hover.
 */

const tools = [
  'Apple',
  'macOS',
  'iOS',
  'Jamf',
  'Apple Business Manager',
  'Okta',
  'Google Workspace',
  'Microsoft 365',
  'Cisco Meraki',
  'CrowdStrike',
  '1Password',
  'Jira',
  'Confluence',
  'Slack',
  'Zoom',
  'BambooHR',
  'DocuSign',
  'Brivo',
  'Next.js',
  'Claude',
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14">
      {tools.map((tool) => (
        <span
          key={tool}
          className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-sm font-medium uppercase tracking-[0.15em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <span className="h-1 w-1 rounded-full bg-[var(--accent-blue-text)]/40" aria-hidden />
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
