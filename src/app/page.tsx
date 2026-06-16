'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="min-h-[80vh] py-24 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Eyebrow tag */}
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Available for senior roles
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl">
            Technology Operations Leader
          </h1>

          {/* Subhead */}
          <p className="mb-8 max-w-[65ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            Building resilient systems and leading teams that deliver. 
            Currently building passive income content sites. 
            Previously at Starling Bank. 
            Looking for senior IT/Tech Ops roles.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
            >
              View my work
              <svg
                className="ml-2 h-4 w-4"
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
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            >
              About me
            </Link>
          </div>
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
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:col-span-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                Next.js
              </span>
              <span className="rounded-full bg-[var(--accent-green-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-green-text)]">
                MDX
              </span>
              <span className="rounded-full bg-[var(--accent-yellow-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-yellow-text)]">
                Affiliate Revenue
              </span>
            </div>
            <h3 className="mb-3 text-xl font-medium text-[var(--foreground)]">
              Good Living Co
            </h3>
            <p className="mb-6 text-[var(--foreground-muted)]">
              Portfolio of 6 passive income content sites built with Next.js and MDX. 
              Monetised via Awin affiliate links and email lists on MailerLite.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
              <span>maleoptimal.co.uk</span>
              <span className="text-[var(--border)]">•</span>
              <span>fueloptimal.co.uk</span>
              <span className="text-[var(--border)]">•</span>
              <span>tradepick.co.uk</span>
              <span className="text-[var(--border)]">•</span>
              <span>+3 more</span>
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
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
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
              className="inline-flex items-center text-sm font-medium text-[var(--foreground)] hover:underline"
            >
              View library
              <svg
                className="ml-1 h-3 w-3"
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
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
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
            <span className="text-sm text-[var(--foreground-muted)]">
              In development
            </span>
          </motion.article>

          {/* Project 4: Employment Tribunal */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:col-span-2"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                Disability Discrimination
              </span>
              <span className="rounded-full bg-[var(--accent-red-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-red-text)]">
                Whistleblowing
              </span>
            </div>
            <h3 className="mb-3 text-xl font-medium text-[var(--foreground)]">
              Employment Tribunal Case
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Ongoing case involving disability discrimination (ADHD), failure to make 
              reasonable adjustments, and whistleblowing. Strong evidence from OH report 
              mapping ADHD symptoms to performance concerns.
            </p>
            <span className="text-sm text-[var(--foreground-muted)]">
              Case in progress — details available on request
            </span>
          </motion.article>
        </div>
      </section>

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
            className="text-sm font-medium text-[var(--foreground)] hover:underline"
          >
            View all →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Writing placeholder - will be populated once blog system is built */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <time className="mb-3 block text-sm text-[var(--foreground-muted)]">
              Coming soon
            </time>
            <h3 className="mb-2 text-xl font-medium text-[var(--foreground)]">
              First post incoming
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Writing about tech ops, AI agents, neurodivergence at work, and 
              building passive income sites.
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
          className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center md:p-20"
        >
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
            Let's work together
          </h2>
          <p className="mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            Currently looking for senior IT/Tech Ops roles. 
            Remote or UK-based. Let's talk about what you're building.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
