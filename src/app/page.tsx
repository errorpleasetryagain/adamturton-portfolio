'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TrustedBy from '@/components/layout/trusted-by';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="min-h-[80vh] py-24 md:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow tag */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="badge-breathe inline-flex items-center rounded-full border border-[var(--accent-green-bg)] bg-[var(--accent-green-bg)] px-3 py-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-green-text)]">
                Open to roles
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl"
          >
            Tech ops and writing.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl"
          >
            I lead technology operations teams. Most recently at Starling Bank,
            before that at Selfridges and Apple. I also write about men&apos;s health
            and build websites in my spare time.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97] hover:shadow-[var(--shadow-lg)] active:scale-[0.95]"
            >
              View experience
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground-muted)] hover:shadow-[var(--shadow-sm)]"
            >
              Read my writing
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Where I've Worked */}
      <TrustedBy />

      {/* Latest Writing */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Writing
          </h2>
          <Link
            href="/writing"
            className="link-underline text-sm font-medium text-[var(--foreground)]"
          >
            View all
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-hover group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <time className="mb-3 block text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
              June 2026
            </time>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Using AI Agents for Real Work
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Claude Code, MCP servers, and automating content pipelines across six websites.
            </p>
            <Link href="/writing/ai-agents-production" className="absolute inset-0" aria-label="Read article" />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-hover group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <time className="mb-3 block text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
              June 2026
            </time>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Building Resilient Tech Operations
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              What I learned about incident response and team structure at a digital bank.
            </p>
            <Link href="/writing/resilient-tech-ops" className="absolute inset-0" aria-label="Read article" />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-hover group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <time className="mb-3 block text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
              May 2026
            </time>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Working With ADHD in Tech Operations
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Some honest notes on what works for me, what doesn&apos;t, and why I stopped masking it.
            </p>
            <Link href="/writing/neurodivergence-at-work" className="absolute inset-0" aria-label="Read article" />
          </motion.article>
        </div>
      </section>

      {/* Side Projects */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center justify-between"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Side projects
          </h2>
          <Link
            href="/projects"
            className="link-underline text-sm font-medium text-[var(--foreground)]"
          >
            View all
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-hover group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                Next.js
              </span>
              <span className="rounded-full bg-[var(--accent-green-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-green-text)]">
                90+ articles
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              MaleOptimal &amp; content sites
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Six health and lifestyle websites I built with Next.js. I write evidence-based
              articles, manage SEO, and handle the full stack.
            </p>
            <Link
              href="/projects/good-living-co"
              className="absolute inset-0"
              aria-label="View project"
            />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-hover group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                Claude Code
              </span>
              <span className="rounded-full bg-[var(--accent-purple-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-purple-text)]">
                MCP Servers
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              AI workflow automation
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              Automated job scanning, content pipelines, and multi-agent orchestration.
              Using AI as a practical tool, not a demo.
            </p>
            <Link
              href="/projects/ai-workflows"
              className="absolute inset-0"
              aria-label="View project"
            />
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center md:p-20"
        >
          <div
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, var(--foreground) 0%, transparent 70%)' }}
          />
          <h2 className="relative mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
            Get in touch
          </h2>
          <p className="relative mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            Looking for senior IT/Tech Ops roles, remote or UK-based.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97] hover:shadow-[var(--shadow-lg)] active:scale-[0.95]"
          >
            Start a conversation
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
