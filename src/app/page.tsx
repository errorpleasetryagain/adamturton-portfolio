'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-6">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="flex min-h-[85vh] items-center py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <div className="badge-breathe inline-flex items-center rounded-full border border-[var(--accent-green-bg)] bg-[var(--accent-green-bg)] px-3 py-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-green-text)]">
                Open to roles
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mb-6 text-5xl font-medium tracking-tight text-[var(--foreground)] md:text-7xl lg:text-8xl"
          >
            Tech ops
            <br />
            <span className="text-[var(--foreground-muted)]">and writing.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mb-10 max-w-[55ch] text-lg leading-relaxed text-[var(--foreground-muted)]"
          >
            I lead technology operations teams. Most recently at Starling Bank,
            before that at Selfridges and Apple. I also write about men&apos;s health
            and build websites in my spare time.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link
              href="/experience"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--accent-primary)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-[var(--shadow-glow)] active:scale-[0.96]"
            >
              <span className="relative z-10">View experience</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className="absolute inset-0 bg-[var(--accent-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="/writing"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--surface-glass)]"
            >
              Read my writing
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Career logos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="border-t border-b border-[var(--border)] py-12"
      >
        <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
          Where I&apos;ve worked
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          <div className="flex flex-col items-center gap-2">
            <svg className="h-8 md:h-10 text-[var(--foreground-muted)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.64-.69.83-1.29 2.04-1.13 3.11 1.17.09 2.36-.81 3.12-1.64z" />
            </svg>
            <span className="text-xs text-[var(--foreground-muted)]">6 years</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-[var(--foreground-muted)]">
            <span className="text-lg font-semibold tracking-wider md:text-xl" style={{ fontFamily: 'Georgia, serif' }}>SELFRIDGES</span>
            <span className="text-xs">3 years</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-[var(--foreground-muted)]">
            <span className="text-lg font-semibold tracking-wide md:text-xl">Starling</span>
            <span className="text-xs">Current</span>
          </div>
        </div>
      </motion.section>

      {/* Writing */}
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
          <Link href="/writing" className="link-underline text-sm font-medium text-[var(--foreground)]">
            View all
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { date: 'June 2026', title: 'Using AI Agents for Real Work', desc: 'Claude Code, MCP servers, and automating content pipelines across six websites.', href: '/writing/ai-agents-production' },
            { date: 'June 2026', title: 'Building Resilient Tech Operations', desc: 'What I learned about incident response and team structure at a digital bank.', href: '/writing/resilient-tech-ops' },
            { date: 'May 2026', title: 'Working With ADHD in Tech Operations', desc: 'Some honest notes on what works for me and what doesn\'t.', href: '/writing/neurodivergence-at-work' },
          ].map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glow-border relative p-8"
            >
              <time className="mb-3 block text-xs uppercase tracking-widest text-[var(--foreground-muted)]">
                {post.date}
              </time>
              <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--foreground-muted)]">{post.desc}</p>
              <Link href={post.href} className="absolute inset-0" aria-label="Read article" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* Side Projects */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Side projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              tags: [{ label: 'Next.js', color: 'blue' }, { label: '90+ articles', color: 'green' }],
              title: 'MaleOptimal & content sites',
              desc: 'Six health and lifestyle websites I built with Next.js. I write evidence-based articles, manage SEO, and handle the full stack.',
              href: '/projects/good-living-co',
            },
            {
              tags: [{ label: 'Claude Code', color: 'blue' }, { label: 'MCP Servers', color: 'purple' }],
              title: 'AI workflow automation',
              desc: 'Automated job scanning, content pipelines, and multi-agent orchestration. Using AI as a practical tool, not a demo.',
              href: '/projects/ai-workflows',
            },
          ].map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card glow-border relative overflow-hidden p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`rounded-full px-3 py-1 text-xs font-medium bg-[var(--accent-${tag.color}-bg)] text-[var(--accent-${tag.color}-text)]`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--foreground-muted)]">{project.desc}</p>
              <Link href={project.href} className="absolute inset-0" aria-label="View project" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card relative overflow-hidden p-12 text-center md:p-20"
        >
          {/* Gradient orb behind CTA */}
          <div
            className="pointer-events-none absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)' }}
          />
          <h2 className="relative mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
            Get in touch
          </h2>
          <p className="relative mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
            Looking for senior IT/Tech Ops roles, remote or UK-based.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--accent-primary)] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:shadow-[var(--shadow-glow)] active:scale-[0.96]"
          >
            <span className="relative z-10">Start a conversation</span>
            <span className="absolute inset-0 bg-[var(--accent-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
