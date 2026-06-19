'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/scroll-reveal';

// Role data with outcomes-focused content
const roles = [
  {
    id: 'starling',
    title: 'Technology Operations Manager',
    company: 'Starling Bank',
    period: '2023 — Present',
    location: 'London, UK',
    type: 'Fintech / Digital Banking',
    outcomes: [
      {
        metric: '11 direct, 23 total',
        description: 'Lead the technology operations team supporting staff across multiple UK offices',
        icon: 'team',
      },
      {
        metric: 'International onboarding',
        description: 'Designed and ran an onboarding programme across time zones, working closely with the People and Facilities teams',
        icon: 'users',
      },
      {
        metric: 'Incident response',
        description: 'Own the response process and the day to day infrastructure that keeps a digital bank running',
        icon: 'shield',
      },
      {
        metric: 'Vendor management',
        description: 'Manage supplier relationships and the tooling the business runs on',
        icon: 'chart',
      },
    ],
    systems: ['Okta', 'Jira', '1Password', 'Google Workspace', 'Cisco Meraki', 'CrowdStrike', 'Brivo', 'DocuSign', 'BambooHR'],
    link: 'https://www.starlingbank.com',
    linkLabel: 'starlingbank.com',
  },
  {
    id: 'selfridges',
    title: 'Regional In-Store Technology Manager',
    company: 'Selfridges',
    period: '2022 — 2023',
    location: 'North region',
    type: 'Retail / Luxury',
    outcomes: [
      {
        metric: 'Multi-site, North region',
        description: 'Ran in-store technology across the North region of a premium retailer',
        icon: 'store',
      },
      {
        metric: 'Team of six engineers',
        description: 'Led a team of six, coordinating work across stores and shift patterns',
        icon: 'team',
      },
      {
        metric: 'Peak trading',
        description: 'Kept POS, networking and AV running through the busiest trading periods of the year',
        icon: 'shield',
      },
      {
        metric: 'Brand events and VIP',
        description: 'Supported premium brand events and VIP experiences where the technology simply had to work',
        icon: 'users',
      },
    ],
    systems: ['POS Systems', 'Payment Terminals', 'Cisco Networking', 'Digital Signage', 'AV Systems'],
    link: 'https://www.selfridges.com',
    linkLabel: 'selfridges.com',
  },
  {
    id: 'apple-ist',
    title: 'IS&T Retail Store Operations',
    company: 'Apple',
    period: 'Jan 2021 — Apr 2022',
    location: 'Remote / Manchester, UK',
    type: 'Technology / Corporate',
    outcomes: [
      {
        metric: 'Store technology estate',
        description: 'Supported store technologies across the estate: networks, POS systems and back of house infrastructure',
        icon: 'store',
      },
      {
        metric: 'Remote operations',
        description: 'Configured networks and resolved issues remotely to keep stores trading',
        icon: 'shield',
      },
      {
        metric: 'Retail to corporate',
        description: 'Moved from Apple retail into the IS&T team that builds and operates store systems',
        icon: 'chart',
      },
    ],
    systems: ['POS Infrastructure', 'Cisco Networking', 'MDM', 'In-Store Audio', 'Global Service Exchange'],
    link: 'https://www.apple.com',
    linkLabel: 'apple.com',
  },
  {
    id: 'apple-genius',
    title: 'Genius',
    company: 'Apple',
    period: 'Sep 2019 — Apr 2022',
    location: 'Manchester, UK',
    type: 'Technology / Retail',
    outcomes: [
      {
        metric: 'ACMT certified',
        description: 'Apple Certified Mac Technician: component-level hardware diagnostics and repair across the full Mac range',
        icon: 'trophy',
      },
      {
        metric: 'Hardware and iOS repair',
        description: 'Diagnosed and repaired Mac, iPhone and iPad hardware using Apple Service Toolkit (AST 2) and GSX',
        icon: 'ticket',
      },
      {
        metric: 'Mentoring',
        description: 'Trained technical experts and specialists on diagnostics and repair, which is where I most enjoyed the work',
        icon: 'mentor',
      },
    ],
    systems: ['AST 2', 'GSX', 'Apple Diagnostics', 'Jamf', 'macOS', 'iOS'],
    link: 'https://www.apple.com/retail',
    linkLabel: 'apple.com/retail',
  },
  {
    id: 'apple-tech-expert',
    title: 'Technical Expert',
    company: 'Apple',
    period: '2018 — 2019',
    location: 'Manchester, UK',
    type: 'Technology / Retail',
    outcomes: [
      {
        metric: 'iPhone repairs',
        description: 'Authorised to perform iPhone hardware repairs: screen replacements, battery swaps, and component diagnosis',
        icon: 'ticket',
      },
      {
        metric: 'Genius Bar triage',
        description: 'Diagnosed hardware vs software issues, escalating complex Mac repairs to Geniuses',
        icon: 'speed',
      },
      {
        metric: 'Training delivery',
        description: 'Trained new hires on Apple diagnostic tools and repair processes',
        icon: 'mentor',
      },
    ],
    systems: ['Apple Diagnostics', 'GSX', 'iOS', 'macOS'],
    link: 'https://www.apple.com/retail',
    linkLabel: 'apple.com/retail',
  },
  {
    id: 'apple-specialist',
    title: 'Specialist',
    company: 'Apple',
    period: 'Feb 2016 — 2018',
    location: 'Manchester, UK',
    type: 'Technology / Retail',
    outcomes: [
      {
        metric: 'Product knowledge',
        description: 'Built deep, genuine knowledge of the Apple range across Mac, iPad and iPhone',
        icon: 'trophy',
      },
      {
        metric: 'Consultative approach',
        description: 'Needs-based customer conversations using Apple\'s methodology, not traditional sales pressure',
        icon: 'heart',
      },
      {
        metric: 'Launch events',
        description: 'Worked the floor during major product launches, keeping things calm when it was busy',
        icon: 'users',
      },
    ],
    systems: ['EasyPay', 'Apple Store App', 'Concierge'],
    link: 'https://www.apple.com',
    linkLabel: 'apple.com',
  },
];

// Icon components
const icons = {
  uptime: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  speed: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  team: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  money: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  store: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  chart: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
  users: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  ticket: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15 5H9a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  ),
  star: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  mentor: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
    </svg>
  ),
  trophy: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 21h8M12 17v4M7 4h10c.66 0 1.2.54 1.2 1.2v2.8c0 3.31-2.69 6-6 6s-6-2.69-6-6V5.2C7 4.54 7.54 4 8.2 4z" />
      <path d="M17 4v8a5 5 0 005-5V4h-5zM7 4v8a5 5 0 01-5-5V4h5z" />
    </svg>
  ),
  sales: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  heart: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Experience
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
            Experience
          </h1>

          <ScrollReveal className="max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            Ten years in technology operations. I started at Apple in 2016 and worked through four roles to corporate IS&T, then moved into multi-site retail at Selfridges and now lead a technology operations team at Starling Bank. The thread through all of it is people: getting the technology right, and getting the best out of the team running it.
          </ScrollReveal>
        </motion.div>
      </section>

      {/* Timeline Section - Bento Grid Layout */}
      <section className="pb-24">
        {roles.map((role, index) => (
          <motion.article
            key={role.id}
            id={role.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className={`relative mb-12 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10 ${
              index === 0 ? 'md:col-span-2' : ''
            }`}
          >
            {/* Timeline connector */}
            {index < roles.length - 1 && (
              <div className="absolute left-8 top-full h-12 w-px bg-[var(--border)] md:left-10" />
            )}

            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-medium text-[var(--foreground)] md:text-3xl">
                    {role.title}
                  </h2>
                  {role.link && (
                    <Link
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {role.linkLabel}
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </Link>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--foreground-muted)]">
                  <span className="font-medium text-[var(--foreground)]">{role.company}</span>
                  <span className="text-[var(--border)]">•</span>
                  <span>{role.period}</span>
                  <span className="text-[var(--border)]">•</span>
                  <span>{role.location}</span>
                </div>
              </div>

              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)]">
                {role.type}
              </span>
            </div>

            {/* Outcomes Grid - Bento Style */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {role.outcomes.map((outcome, outcomeIndex) => (
                <motion.div
                  key={outcomeIndex}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: outcomeIndex * 0.05 }}
                  className={`rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 ${
                    outcomeIndex === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)]">
                    {icons[outcome.icon as keyof typeof icons] || icons.uptime}
                  </div>
                  <div className="mb-1 text-lg font-medium text-[var(--foreground)]">
                    {outcome.metric}
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                    {outcome.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Systems/Technologies */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[var(--foreground-muted)]">
                Systems:
              </span>
              {role.systems.map((system, systemIndex) => (
                <span
                  key={systemIndex}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[var(--foreground)]"
                >
                  {system}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center md:p-20"
        >
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            Looking for my next senior technology operations or IT management role.
            London based, happy to work remotely.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
            >
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            >
              View projects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
