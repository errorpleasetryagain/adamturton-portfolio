'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
  },
};

function CircularText({ text, size = 120 }: { text: string; size?: number }) {
  const characters = text.split('');
  const radius = size / 2 - 10;
  return (
    <div className="spin-slow relative" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        {characters.map((char, i) => {
          const angle = (360 / characters.length) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = size / 2 + radius * Math.cos(rad);
          const y = size / 2 + radius * Math.sin(rad);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="currentColor"
              fontSize="10"
              fontFamily="var(--font-mono)"
              textAnchor="middle"
              dominantBaseline="central"
              transform={`rotate(${angle + 90}, ${x}, ${y})`}
              className="text-[var(--foreground-muted)]"
            >
              {char}
            </text>
          );
        })}
      </svg>
    </div>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden border-t border-b border-[var(--border)] py-4">
      <div className="ticker-track">
        {[...Array(2)].map((_, copy) => (
          <div key={copy} className="flex items-center gap-12 pr-12">
            {[
              'APPLE', 'SELFRIDGES', 'STARLING BANK',
              'ITIL', 'INCIDENT RESPONSE', 'TEAM LEADERSHIP',
              'NEXT.JS', 'PYTHON', 'AI AGENTS',
              'CISCO', 'OKTA', 'CROWDSTRIKE',
            ].map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="whitespace-nowrap font-mono text-xs tracking-[0.2em] text-[var(--foreground-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="mx-auto flex min-h-[90vh] max-w-[var(--container-max)] items-end px-6 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Top line: section number + availability */}
          <motion.div variants={fadeUp} className="mb-12 flex items-center justify-between">
            <span className="section-number">01 / Introduction</span>
            <div className="badge-live inline-flex items-center rounded-none border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-green-text)]">
                Open to roles
              </span>
            </div>
          </motion.div>

          {/* Big type */}
          <motion.div variants={fadeUp} className="mb-8">
            <h1 className="text-6xl font-bold leading-[0.95] tracking-tight text-[var(--foreground)] md:text-8xl lg:text-[120px]">
              ADAM
              <br />
              TURTON
            </h1>
          </motion.div>

          {/* Descriptor */}
          <motion.div variants={fadeUp} className="mb-12 flex items-end justify-between gap-8">
            <p className="max-w-[45ch] text-base leading-relaxed text-[var(--foreground-muted)]">
              Technology operations leader. Ten years across Apple, Selfridges,
              and Starling Bank. I write about health and build websites on the side.
            </p>
            <CircularText text="TECH OPS · WRITER · BUILDER · " size={100} />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <Link
              href="/experience"
              className="link-arrow group border-b border-[var(--foreground)] pb-1 text-sm font-medium"
            >
              View experience
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/writing"
              className="link-arrow group border-b border-[var(--border)] pb-1 text-sm text-[var(--foreground-muted)]"
            >
              Read my writing
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Career */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="section-number">02 / Career</span>
          </div>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {[
              { company: 'Starling Bank', role: 'Tech Ops Manager', period: '2023\u2013present', detail: '15-person team, 800+ employees, fintech' },
              { company: 'Selfridges', role: 'Regional Tech Manager', period: '2022\u20132023', detail: '5 stores, 6 engineers, retail tech' },
              { company: 'Apple', role: 'Specialist \u2192 Genius \u2192 IS&T', period: '2016\u20132022', detail: '6 years, 4 roles, ACMT certified' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-[var(--border)] py-8 pr-8"
              >
                <span className="mb-4 block font-mono text-xs text-[var(--foreground-muted)]">
                  {item.period}
                </span>
                <h3 className="mb-1 text-xl font-bold text-[var(--foreground)]">
                  {item.company}
                </h3>
                <p className="mb-3 text-sm text-[var(--foreground-muted)]">{item.role}</p>
                <p className="text-sm text-[var(--foreground-muted)]">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <Link href="/experience" className="link-arrow text-sm font-medium">
              Full experience
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Writing */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 flex items-center justify-between">
            <span className="section-number">03 / Writing</span>
            <Link href="/writing" className="link-arrow text-sm text-[var(--foreground-muted)]">
              All posts
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-0">
            {[
              { date: 'Jun 2026', title: 'Using AI Agents for Real Work', href: '/writing/ai-agents-production' },
              { date: 'Jun 2026', title: 'Building Resilient Tech Operations', href: '/writing/resilient-tech-ops' },
              { date: 'May 2026', title: 'Working With ADHD in Tech Operations', href: '/writing/neurodivergence-at-work' },
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={post.href}
                  className="group flex items-center justify-between border-t border-[var(--border)] py-6 transition-colors hover:bg-[var(--surface)]"
                >
                  <div className="flex items-center gap-6">
                    <span className="w-20 font-mono text-xs text-[var(--foreground-muted)]">
                      {post.date}
                    </span>
                    <h3 className="text-base font-medium text-[var(--foreground)] group-hover:text-[var(--accent-warm)] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <svg className="h-4 w-4 text-[var(--foreground-muted)] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-[var(--border)]" />
          </div>
        </motion.div>
      </section>

      {/* Side Projects */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <span className="section-number">04 / Side Projects</span>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
            {[
              {
                title: 'MaleOptimal & content sites',
                desc: 'Six websites. 90+ articles. Next.js, MDX, SEO. Evidence-based health content I research and write.',
                link: 'maleoptimal.co.uk',
                href: 'https://maleoptimal.co.uk',
              },
              {
                title: 'AI workflow automation',
                desc: 'Daily job scanning, content pipelines, site deployments. Claude Code with MCP server integrations.',
                link: 'View project',
                href: '/projects/ai-workflows',
              },
            ].map((project, i) => (
              <motion.a
                key={i}
                href={project.href}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-braun block bg-[var(--surface)] p-8 md:p-10"
              >
                <h3 className="mb-3 text-lg font-bold text-[var(--foreground)]">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {project.desc}
                </p>
                <span className="link-arrow text-xs font-medium uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
                  {project.link}
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[var(--border)] pt-16"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-number mb-6 block">05 / Contact</span>
              <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
                Get in touch.
              </h2>
              <p className="mt-4 max-w-[40ch] text-[var(--foreground-muted)]">
                Looking for senior IT/Tech Ops roles. Remote or UK-based.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[var(--foreground)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              Contact
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
