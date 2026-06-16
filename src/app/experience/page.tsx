'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Role data with outcomes-focused content
const roles = [
  {
    id: 'starling',
    title: 'Technology Operations Manager',
    company: 'Starling Bank',
    period: 'Apr 2025 — Present',
    location: 'London, UK (Hybrid)',
    type: 'Fintech / Digital Banking',
    outcomes: [
      {
        metric: '99.95% uptime',
        description: 'Maintained critical banking infrastructure across 3 office locations',
        icon: 'uptime',
      },
      {
        metric: '40% faster resolution',
        description: 'Reduced mean time to resolution by streamlining incident response workflows',
        icon: 'speed',
      },
      {
        metric: '15-person team',
        description: 'Led service desk analysts and technicians supporting 800+ employees',
        icon: 'team',
      },
      {
        metric: '£250K saved',
        description: 'Consolidated vendor contracts and eliminated redundant tooling',
        icon: 'money',
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
    period: 'Jan 2022 — Apr 2025',
    location: 'North of England',
    type: 'Retail / Luxury',
    outcomes: [
      {
        metric: '5 stores',
        description: 'Managed POS systems and infrastructure across Manchester, Trafford, Leeds, Birmingham, Oxford',
        icon: 'store',
      },
      {
        metric: 'Zero downtime',
        description: 'Maintained 100% POS availability during Black Friday and Boxing Day sales',
        icon: 'shield',
      },
      {
        metric: '30% reduction',
        description: 'Cut hardware replacement costs through predictive maintenance programme',
        icon: 'chart',
      },
      {
        metric: '50+ staff',
        description: 'Coordinated training for retail staff on new POS and payment systems',
        icon: 'users',
      },
    ],
    systems: ['POS Systems', 'Payment Terminals', 'Cisco Networking', 'Digital Signage', 'Inventory Management'],
    link: 'https://www.selfridges.com',
    linkLabel: 'selfridges.com',
  },
  {
    id: 'apple-retail',
    title: 'IS&T Retail Technician',
    company: 'Apple',
    period: '2021 — 2022',
    location: 'Manchester, UK',
    type: 'Technology / Retail',
    outcomes: [
      {
        metric: '200+ tickets/month',
        description: 'Diagnosed and repaired hardware faults, managed escalated technical cases',
        icon: 'ticket',
      },
      {
        metric: '98% CSAT',
        description: 'Consistently highest customer satisfaction scores in region',
        icon: 'star',
      },
      {
        metric: 'Mentored 8 technicians',
        description: 'Trained new hires on diagnostic procedures and repair workflows',
        icon: 'mentor',
      },
    ],
    systems: ['Apple Diagnostics', 'GSX', 'Jamf', 'macOS', 'iOS'],
    link: 'https://www.apple.com/retail',
    linkLabel: 'apple.com/retail',
  },
  {
    id: 'apple-specialist',
    title: 'Specialist',
    company: 'Apple',
    period: 'Feb 2016 — 2021',
    location: 'Manchester, UK',
    type: 'Technology / Retail',
    outcomes: [
      {
        metric: 'Top 10% performer',
        description: 'Recognised for product knowledge and customer engagement',
        icon: 'trophy',
      },
      {
        metric: '£2M+ annual sales',
        description: 'Consistently exceeded targets in Mac and iPad categories',
        icon: 'sales',
      },
      {
        metric: 'Customer loyalty',
        description: 'Built repeat customer base through consultative selling approach',
        icon: 'heart',
      },
    ],
    systems: ['EasyPay', 'Apple Store App', 'Concierge', 'Salesforce'],
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
            Building systems. Leading teams. Delivering results.
          </h1>

          <p className="max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            A track record of running technology operations in fast-paced environments. 
            From fintech to luxury retail — focused on outcomes, not activities.
          </p>
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

      {/* Skills Summary Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Core Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Infrastructure & Operations',
              items: ['ITIL Service Management', 'Incident Response', 'Change Management', 'Vendor Management', 'Budget Planning'],
              color: 'blue',
            },
            {
              title: 'Team Leadership',
              items: ['Performance Management', 'Hiring & Onboarding', 'Cross-functional Collaboration', 'Mentorship', 'Stakeholder Communication'],
              color: 'green',
            },
            {
              title: 'Technical Stack',
              items: ['Okta / Identity', 'Cisco Meraki', 'Google Workspace', 'Jira / Confluence', 'CrowdStrike', 'macOS / iOS'],
              color: 'yellow',
            },
            {
              title: 'Retail Technology',
              items: ['POS Systems', 'Payment Processing', 'Inventory Management', 'Digital Signage', 'Customer Experience'],
              color: 'red',
            },
            {
              title: 'Security & Compliance',
              items: ['Access Control (Brivo)', 'Endpoint Protection', 'Data Privacy', 'Audit Preparation', 'Policy Development'],
              color: 'blue',
            },
            {
              title: 'Automation & Tools',
              items: ['Jamf MDM', 'DocuSign', 'BambooHR', 'Scripting', 'Process Optimisation', 'Reporting & Analytics'],
              color: 'green',
            },
          ].map((category, index) => {
            const colorClasses = {
              blue: 'border-[var(--accent-blue-bg)] bg-[var(--accent-blue-bg)]/30',
              green: 'border-[var(--accent-green-bg)] bg-[var(--accent-green-bg)]/30',
              yellow: 'border-[var(--accent-yellow-bg)] bg-[var(--accent-yellow-bg)]/30',
              red: 'border-[var(--accent-red-bg)] bg-[var(--accent-red-bg)]/30',
            };

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-2xl border ${colorClasses[category.color as keyof typeof colorClasses]} p-6`}
              >
                <h3 className="mb-4 text-lg font-medium text-[var(--foreground)]">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
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
            Let's build something resilient
          </h2>
          <p className="mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            Currently looking for senior IT/Tech Ops roles. 
            Remote or UK-based. Let's talk about what you're building.
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
