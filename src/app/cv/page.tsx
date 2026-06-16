'use client';

import { motion } from 'framer-motion';
import { Download } from '@phosphor-icons/react';

export default function CVPage() {
  const highlights = [
    {
      category: 'Leadership',
      items: [
        'Led infrastructure teams of 8-12 engineers',
        'Reduced incident response time by 60%',
        'Implemented 24/7 on-call rotation with 99.9% uptime',
      ],
    },
    {
      category: 'Technical',
      items: [
        'Architected cloud migration saving £200k/year',
        'Built monitoring systems processing 10M+ events/day',
        'Automated deployment pipelines reducing release time from hours to minutes',
      ],
    },
    {
      category: 'Business Impact',
      items: [
        'Delivered PCI-DSS compliance for payment processing',
        'Reduced infrastructure costs by 35% through optimisation',
        'Enabled scale from 100k to 2M+ customers',
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-12 md:py-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-24"
      >
        <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            Curriculum Vitae
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
          Adam Turton
        </h1>

        <p className="mb-8 max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
          Technology Operations Manager with 10+ years experience building resilient 
          infrastructure, leading high-performing teams, and delivering critical systems 
          at scale.
        </p>

        {/* Download Button */}
        <a
          href="/adam-turton-cv.pdf"
          download="Adam_Turton_CV.pdf"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all hover:scale-[0.98] hover:shadow-lg"
        >
          <Download className="h-5 w-5" />
          Download CV (PDF, 2 pages)
        </a>

        <p className="mt-4 text-sm text-[var(--foreground-muted)]">
          Updated March 2025 · Compatible with all devices
        </p>
      </motion.section>

      {/* Key Highlights Preview */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="mb-8 text-2xl font-medium tracking-tight text-[var(--foreground)]">
          Key Highlights
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((section, index) => (
            <motion.article
              key={section.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--foreground-muted)]">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--foreground)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline Preview */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="mb-8 text-2xl font-medium tracking-tight text-[var(--foreground)]">
          Recent Experience
        </h2>

        <div className="space-y-6">
          {[
            {
              role: 'Technology Operations Manager',
              company: 'Starling Bank',
              period: '2021 — 2024',
              achievements: [
                'Led platform reliability initiatives for digital banking infrastructure',
                'Managed incident response and post-incident review processes',
                'Implemented SRE practices reducing MTTR by 45%',
              ],
            },
            {
              role: 'Senior Infrastructure Engineer',
              company: 'Previous Company',
              period: '2018 — 2021',
              achievements: [
                'Architected multi-region AWS infrastructure',
                'Built CI/CD pipelines serving 200+ developers',
                'Led cloud migration reducing costs by 35%',
              ],
            },
          ].map((job, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-[var(--border)] pl-6"
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-3">
                <h3 className="text-lg font-medium text-[var(--foreground)]">
                  {job.role}
                </h3>
                <span className="text-sm text-[var(--foreground-muted)]">
                  @ {job.company}
                </span>
              </div>
              <p className="mb-3 text-sm text-[var(--foreground-muted)]">
                {job.period}
              </p>
              <ul className="space-y-2">
                {job.achievements.map((achievement, aIndex) => (
                  <li
                    key={aIndex}
                    className="text-sm leading-relaxed text-[var(--foreground)]"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--foreground-muted)]">
          See the full CV for complete work history, education, and certifications.
        </p>
      </motion.section>

      {/* Skills Preview */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="mb-8 text-2xl font-medium tracking-tight text-[var(--foreground)]">
          Core Competencies
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            'Cloud Infrastructure (AWS, GCP)',
            'Kubernetes & Container Orchestration',
            'Infrastructure as Code (Terraform, CloudFormation)',
            'CI/CD & DevOps Practices',
            'Site Reliability Engineering (SRE)',
            'Incident Management & Response',
            'Team Leadership & Mentoring',
            'Budget Management & Cost Optimisation',
            'Security & Compliance (PCI-DSS, SOC2)',
            'Monitoring & Observability',
            'Python, Go, Bash',
            'Agile & ITIL Frameworks',
          ].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)]"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
      >
        <h2 className="mb-4 text-2xl font-medium text-[var(--foreground)]">
          Interested in working together?
        </h2>
        <p className="mb-6 max-w-[60ch] text-[var(--foreground-muted)]">
          I'm currently available for senior Technology Operations, Infrastructure, 
          or SRE leadership roles. Remote or UK-based preferred.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/contact"
            className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-colors hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="https://linkedin.com/in/adamturton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adamturton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
          >
            GitHub
          </a>
        </div>
      </motion.section>
    </div>
  );
}
