'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
            About
          </h1>

          <div className="space-y-4 text-lg leading-relaxed text-[var(--foreground-muted)]">
            <p>
              I&apos;m Adam. I&apos;ve spent the last ten years in technology operations,
              starting at Apple and working my way through Selfridges and Starling Bank.
              I lead teams, keep systems running, and fix things when they break.
            </p>
            <p>
              Outside of work, I build websites and write about men&apos;s health. I run
              six content sites with 90+ published articles, all built with Next.js.
              I&apos;m interested in AI tooling and use it daily for content pipelines
              and automation.
            </p>
            <p>
              I have ADHD and autism (level 1). I work best with clarity, autonomy,
              and written communication. I mention it because I&apos;d rather be upfront
              than have it be a surprise.
            </p>
            <p>
              Based in the North West. Looking for my next senior IT/Tech Ops role.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97]"
            >
              View experience
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground-muted)]"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Career Timeline */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Timeline
          </h2>
        </motion.div>

        <div className="space-y-0">
          {[
            {
              period: '2025',
              title: 'Technology Operations Manager',
              company: 'Starling Bank',
              detail: 'Leading the tech ops department. 15-person team supporting 800+ employees across critical banking infrastructure.',
            },
            {
              period: '2023 \u2013 2025',
              title: 'Technology Operations Team Lead',
              company: 'Starling Bank',
              detail: 'Directed daily operations, reduced incident resolution times by 40%, consolidated vendor contracts saving \u00A3250K.',
            },
            {
              period: '2022 \u2013 2023',
              title: 'Regional In-Store Technology Manager',
              company: 'Selfridges',
              detail: 'Managed technology operations across five stores. Led a team of six engineers. Maintained zero POS downtime through Black Friday and Boxing Day.',
            },
            {
              period: '2021 \u2013 2022',
              title: 'IS&T Retail Store Operations',
              company: 'Apple',
              detail: 'Moved from retail to Apple\u2019s corporate IS&T team. Supported global store technologies: networks, POS systems, back-of-house infrastructure across 500+ stores.',
            },
            {
              period: '2019 \u2013 2022',
              title: 'Genius',
              company: 'Apple',
              detail: 'ACMT-certified. Component-level Mac hardware repair, iOS diagnostics via GSX and AST 2. Mentored technical experts and specialists.',
            },
            {
              period: '2018 \u2013 2019',
              title: 'Technical Expert',
              company: 'Apple',
              detail: 'Triaged and diagnosed hardware and software issues at the Genius Bar. Authorised to perform iPhone hardware repairs. Trained new hires on diagnostic procedures.',
            },
            {
              period: '2016 \u2013 2018',
              title: 'Specialist',
              company: 'Apple',
              detail: 'Consultative sales and customer support across the Apple product range. Consistently top 10% for customer engagement scores.',
            },
          ].map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[100px_1fr] gap-6 border-b border-[var(--border)] py-6 md:grid-cols-[140px_1fr]"
            >
              <span className="text-sm font-medium text-[var(--foreground-muted)]">
                {role.period}
              </span>
              <div>
                <h3 className="font-medium text-[var(--foreground)]">
                  {role.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {role.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {role.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Side Projects Summary */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Outside of work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Content sites
            </h3>
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
              I run six websites about men&apos;s health, supplements, and lifestyle.
              90+ evidence-based articles, all built with Next.js and MDX.
              MaleOptimal is the main one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              AI and automation
            </h3>
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
              I use Claude Code, MCP servers, and custom agent workflows daily.
              Automated job scanning, content pipelines, site deployments, and email management.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
