'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TrustedBy from '@/components/layout/trusted-by';
import Magnetic from '@/components/ui/magnetic';
import DecryptedText from '@/components/ui/decrypted-text';

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
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.6fr_auto] md:gap-10 lg:gap-16">
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
                People &amp; technology
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <h1 className="mb-6 font-mono text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl">
            <DecryptedText text="People and technology." delay={400} speed={40} />
          </h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="mb-8 max-w-[55ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl"
          >
            I lead technology operations teams, with a real focus on developing
            people. Most recently at Starling Bank, before that Selfridges and
            Apple. The best part of the job is watching teams grow and helping
            the people in them get better at what they do.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Magnetic strength={0.35}>
              <Link
                href="/experience"
                className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-shadow duration-200 hover:shadow-[var(--shadow-lg)]"
              >
                View experience
              </Link>
            </Magnetic>
            <Link
              href="/writing"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground-muted)] hover:shadow-[var(--shadow-sm)]"
            >
              Read the blog
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="order-first flex justify-center md:order-none md:justify-self-start"
        >
          <div className="group relative aspect-[4/5] w-[200px] shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] sm:w-[230px]">
            <Image
              src="/adam-portrait.jpg"
              alt="Adam Turton"
              fill
              priority
              sizes="(max-width: 768px) 230px, 230px"
              className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
            />
            {/* Subtle grain texture overlay */}
            <div className="grain-overlay pointer-events-none absolute inset-0" />
          </div>
        </motion.div>
        </div>
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
            Blog
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
              Claude, MCP servers, RAG and a stack of APIs running my content sites in production.
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
                Live
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Male Optimal
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              My main content site, evidence-based men&apos;s health. I write the
              articles, handle the SEO, and run the full stack on Next.js and MDX.
            </p>
            <Link
              href="/projects/maleoptimal"
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
                Bash
              </span>
              <span className="rounded-full bg-[var(--accent-purple-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-purple-text)]">
                Accessibility
              </span>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Bash Tutor
            </h3>
            <p className="text-sm text-[var(--foreground-muted)]">
              A command-line tool that helps dyslexic people learn and use bash.
              The project I&apos;m most personally attached to.
            </p>
            <Link
              href="/projects/bash-tutor"
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
            Always happy to talk technology, leadership, or building things.
            Drop me a line.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97] hover:shadow-[var(--shadow-lg)] active:scale-[0.95]"
            >
              Start a conversation
            </Link>
            <a
              href="/adam-turton-cv.pdf"
              download="Adam_Turton_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              Download CV
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
