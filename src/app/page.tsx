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
                Available for senior roles
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl"
          >
            Apple to fintech to founder
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl"
          >
            Technology operations leader with 10+ years across Apple, Selfridges, and Starling Bank.
            Now building a portfolio of six production websites and shipping AI-powered tools.
            Looking for my next senior IT/Tech Ops role.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97] hover:shadow-[var(--shadow-lg)] active:scale-[0.95]"
            >
              View my work
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground-muted)] hover:shadow-[var(--shadow-sm)]"
            >
              About me
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work - Bento Grid */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Featured Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Project 1: Good Living Co */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="card-hover group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                Next.js
              </span>
              <span className="rounded-full bg-[var(--accent-green-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-green-text)]">
                MDX
              </span>
              <span className="rounded-full bg-[var(--accent-yellow-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-yellow-text)]">
                SEO &amp; Monetisation
              </span>
            </div>
            <h3 className="mb-3 text-xl font-medium text-[var(--foreground)]">
              Good Living Co
            </h3>
            <p className="mb-6 text-[var(--foreground-muted)]">
              Founded and built a portfolio of six niche content websites from scratch —
              architecture, content strategy, SEO, affiliate monetisation, and email automation.
              Full-stack ownership across the entire business.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--foreground)]">
              <span className="link-underline">maleoptimal.co.uk</span>
              <span className="text-[var(--border)]">·</span>
              <span className="link-underline">fueloptimal.co.uk</span>
              <span className="text-[var(--border)]">·</span>
              <span className="link-underline">tradepick.co.uk</span>
              <span className="text-[var(--border)]">·</span>
              <span className="text-[var(--foreground-muted)]">+3 more</span>
            </div>
            <Link
              href="https://maleoptimal.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
              aria-label="View Good Living Co sites"
            />
          </motion.article>

          {/* Project 2: Hermetic Library */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-hover group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-purple-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-purple-text)]">
                HTML/CSS
              </span>
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                GitHub Pages
              </span>
            </div>
            <h3 className="mb-3 text-xl font-medium text-[var(--foreground)]">
              Hermetic Library
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Personal knowledge library for Hermeticism study. Mobile-friendly,
              offline-capable HTML with interactive journal and progress tracking.
            </p>
            <Link
              href="https://errorpleasetryagain.github.io/hermetic-library/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center text-sm font-medium text-[var(--foreground)]"
            >
              View library
              <svg
                className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>
          </motion.article>

          {/* Project 3: Silver Tracker */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-hover group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-red-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-red-text)]">
                FastAPI
              </span>
              <span className="rounded-full bg-[var(--accent-green-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-green-text)]">
                Python
              </span>
              <span className="rounded-full bg-[var(--accent-yellow-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-yellow-text)]">
                FireCrawl
              </span>
            </div>
            <h3 className="mb-3 text-xl font-medium text-[var(--foreground)]">
              Silver Tracker
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Investment tool comparing UK silver bullion prices across dealers.
              Finds best value (lowest premium over spot) for long-term stacking.
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-yellow-text)]" />
              In development
            </span>
          </motion.article>

          {/* Project 4: AI Agent Workflows */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-hover group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:col-span-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                Claude Code
              </span>
              <span className="rounded-full bg-[var(--accent-purple-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-purple-text)]">
                Automation
              </span>
              <span className="rounded-full bg-[var(--accent-green-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-green-text)]">
                MCP Servers
              </span>
            </div>
            <h3 className="mb-3 text-xl font-medium text-[var(--foreground)]">
              AI-Assisted Development Workflows
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Building production workflows with AI agents: automated job scanning,
              content generation pipelines, multi-agent orchestration, and custom MCP server
              integrations. Using AI as a force multiplier, not a toy.
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-green-text)]" />
              Active
            </span>
          </motion.article>
        </div>
      </section>

      {/* Trusted By */}
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
            Latest Writing
          </h2>
          <Link
            href="/writing"
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
            className="card-hover rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <time className="mb-3 block text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
              Coming soon
            </time>
            <h3 className="mb-2 text-xl font-medium text-[var(--foreground)]">
              What I learned running tech ops at a digital bank
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Incident response at scale, leading through ambiguity, and why
              the best operations teams are invisible.
            </p>
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
          {/* Subtle radial gradient accent */}
          <div
            className="pointer-events-none absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.03]"
            style={{ background: 'radial-gradient(circle, var(--foreground) 0%, transparent 70%)' }}
          />
          <h2 className="relative mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="relative mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            Open to senior IT/Tech Ops roles, remote or UK-based.
            If you need someone who can lead teams, fix systems, and ship things, let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97] hover:shadow-[var(--shadow-lg)] active:scale-[0.95]"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
