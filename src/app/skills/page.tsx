'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TiltedCard from '@/components/ui/tilted-card';

const categories = [
  {
    title: 'People leadership',
    items: [
      'Developing and mentoring people',
      'Hiring and onboarding',
      'Performance management',
      'Leading multi-site teams',
      'Clear communication up and down',
    ],
  },
  {
    title: 'Operations & service',
    items: [
      'Incident response',
      'Vendor and supplier management',
      'Process definition and improvement',
      'Reporting to senior leadership',
      'Keeping critical systems running',
    ],
  },
  {
    title: 'Apple ecosystem',
    items: [
      'macOS and iOS',
      'Jamf and MDM',
      'Apple Business Manager',
      'Component level hardware repair (ACMT)',
      'Apple AV and retail systems',
    ],
  },
  {
    title: 'Identity & infrastructure',
    items: [
      'Okta and identity',
      'Cisco Meraki networking',
      'Google Workspace',
      '1Password and CrowdStrike',
      'Brivo access control',
    ],
  },
  {
    title: 'Retail technology',
    items: [
      'POS systems',
      'Payment terminals',
      'Digital signage',
      'In-store AV',
      'Peak trading support',
    ],
  },
  {
    title: 'AI & building',
    items: [
      'Claude and agentic workflows',
      'Next.js and MDX websites',
      'Automating repetitive work',
      'Music production in Logic Pro',
      'Genuinely up to date, hands-on',
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Key skills
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
            What I&apos;m good at
          </h1>
          <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            Ten years of doing the work, not just managing it. People first,
            then the technology that keeps everything running.
          </p>
        </motion.div>
      </section>

      {/* Skill tiles */}
      <section className="pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <TiltedCard className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h3 className="mb-4 text-lg font-medium text-[var(--foreground)]">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center md:p-16"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)] md:text-3xl">
            See it in context
          </h2>
          <p className="mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            The experience page shows where these came from, role by role.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
            >
              View experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
