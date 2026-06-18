'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="min-h-[60vh] py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
              Get in touch
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
            Let's work together
          </h1>

          <p className="max-w-[60ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            I&apos;m looking for my next senior tech ops or IT management role.
            London based, happy to work remotely. If you&apos;ve got something
            that might fit, get in touch and let&apos;s talk.
          </p>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Contact Methods
          </h2>
          <div className="h-px w-24 bg-[var(--border)]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Email Card */}
          <motion.a
            href="mailto:adam.turton84@icloud.com"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[var(--foreground)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
              <svg className="h-5 w-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Email
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Best for initial outreach and detailed conversations.
            </p>
            <span className="text-sm font-medium text-[var(--foreground)] group-hover:underline">
              adam.turton84@icloud.com
            </span>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/in/adamturton"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[var(--foreground)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
              <svg className="h-5 w-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              LinkedIn
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Connect professionally and see my full career history.
            </p>
            <span className="inline-flex items-center text-sm font-medium text-[var(--foreground)] group-hover:underline">
              linkedin.com/in/adamturton
              <svg className="ml-1 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/errorpleasetryagain"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[var(--foreground)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
              <svg className="h-5 w-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              GitHub
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              View my code, projects, and technical contributions.
            </p>
            <span className="inline-flex items-center text-sm font-medium text-[var(--foreground)] group-hover:underline">
              github.com/errorpleasetryagain
              <svg className="ml-1 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.a>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            What happens next
          </h2>
          <div className="h-px w-24 bg-[var(--border)]" />
        </motion.div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] md:mx-0">
                <span className="text-lg font-medium text-[var(--foreground)]">1</span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
                You reach out
              </h3>
              <p className="text-[var(--foreground-muted)]">
                Send an email or connect on LinkedIn. Tell me about the role or opportunity you have in mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center md:text-left"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] md:mx-0">
                <span className="text-lg font-medium text-[var(--foreground)]">2</span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
                We talk
              </h3>
              <p className="text-[var(--foreground-muted)]">
                I'll respond within 48 hours. We'll schedule a call to discuss fit, expectations, and next steps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] md:mx-0">
                <span className="text-lg font-medium text-[var(--foreground)]">3</span>
              </div>
              <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
                Move forward
              </h3>
              <p className="text-[var(--foreground-muted)]">
                If there's mutual interest, we'll proceed with formal interviews or start discussions.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-8 md:flex-row"
          >
            <p className="text-sm text-[var(--foreground-muted)]">
              I respond to all genuine inquiries. Looking forward to hearing from you.
            </p>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            >
              Back to home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
