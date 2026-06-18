'use client';

import { motion } from 'framer-motion';
import { Download } from '@phosphor-icons/react';

export default function CVPage() {
  const highlights = [
    {
      category: 'People leadership',
      items: [
        'Lead a technology operations team of 11 direct reports, 23 in total',
        'Designed and ran an international onboarding programme across time zones and offices',
        'Mentored and developed Apple technicians and specialists into stronger engineers',
      ],
    },
    {
      category: 'Technical depth',
      items: [
        'Apple Certified Mac Technician with hands-on hardware and software repair',
        'macOS, iOS, MDM and Jamf across fleets of devices',
        'Identity, networking, POS and access systems in live retail and banking environments',
      ],
    },
    {
      category: 'How I work',
      items: [
        'Bridge technical and non technical teams so people actually understand each other',
        'Build processes that hold up under pressure, then keep improving them',
        'Use AI and agentic workflows daily, not as a buzzword but as real tooling',
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
          Technology operations manager with ten years across Apple, Selfridges
          and Starling Bank. I lead teams, keep critical systems running, and I
          am at my best when I am developing the people around me.
        </p>

        {/* Download Button */}
        <a
          href="/adam-turton-cv.pdf"
          download="Adam_Turton_CV.pdf"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all hover:scale-[0.98] hover:shadow-lg"
        >
          <Download className="h-5 w-5" />
          Download CV (PDF)
        </a>

        <p className="mt-4 text-sm text-[var(--foreground-muted)]">
          Based in London. Open to remote.
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
          What I bring
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
          Recent experience
        </h2>

        <div className="space-y-6">
          {[
            {
              role: 'Technology Operations Manager',
              company: 'Starling Bank',
              period: '2023 — Present',
              achievements: [
                'Lead the technology operations team, 11 direct reports and 23 in total, supporting staff across multiple UK offices',
                'Designed and ran an international onboarding programme, working closely with the People and Facilities teams across time zones',
                'Manage incident response, vendor relationships and the day to day infrastructure that keeps a digital bank running',
              ],
            },
            {
              role: 'Regional In-Store Technology Manager',
              company: 'Selfridges',
              period: '2022 — 2023',
              achievements: [
                'Ran in-store technology across the North region with a team of six engineers',
                'Looked after POS, networking and AV through some of the busiest trading periods of the year',
                'Supported premium brand events and VIP experiences where the technology simply had to work',
              ],
            },
            {
              role: 'IS&T Retail Store Operations and Genius',
              company: 'Apple',
              period: '2016 — 2022',
              achievements: [
                'Started as a Specialist and progressed through Technical Expert and Genius to corporate IS&T over six years',
                'ACMT certified, doing component level Mac repair and iOS diagnostics, then supporting store technology across the estate',
                'Trained and mentored technical experts and specialists, which is where I found I most enjoyed the work',
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
          See the full experience page for the complete history, role by role.
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
          Skills and qualifications
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            'People leadership and team development',
            'Technology operations management',
            'Incident response and problem solving',
            'Vendor and supplier management',
            'Apple ecosystem (macOS, iOS, MDM, Jamf)',
            'Identity and access (Okta, 1Password)',
            'Networking (Cisco Meraki)',
            'Retail POS and AV systems',
            'Bridging technical and non technical teams',
            'AI and agentic workflows',
            'ILM Level 3 in Leadership and Management',
            'FdA Business and Management',
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
          Want to talk?
        </h2>
        <p className="mb-6 max-w-[60ch] text-[var(--foreground-muted)]">
          I am looking for my next senior technology operations or IT management
          role. London based, happy to work remotely.
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
            href="https://github.com/errorpleasetryagain"
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
