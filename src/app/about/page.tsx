'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="min-h-[70vh] py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                About Me
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
              Technology leader. Builder. Neurodivergent thinker.
            </h1>

            <p className="mb-8 max-w-[60ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
              10+ years leading technology operations across Apple, Selfridges, and Starling Bank.
              Now running Good Living Co — a portfolio of six production websites I built from
              scratch. Open to senior IT/Tech Ops roles.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
              >
                Get in touch
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
              >
                View experience
              </Link>
            </div>
          </motion.div>

          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[var(--surface)] to-[var(--background)]">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
                  <svg
                    className="h-12 w-12 text-[var(--foreground-muted)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-5.5 0-8 3-8 6v2h16v-2c0-3-2.5-6-8-6z" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--foreground-muted)]">Professional photo</p>
                <p className="text-xs text-[var(--foreground-muted)]">Coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            My Story
          </h2>
          <div className="h-px w-24 bg-[var(--border)]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-hover rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
              <span className="text-lg font-medium text-[var(--foreground)]">1</span>
            </div>
            <h3 className="mb-3 text-lg font-medium text-[var(--foreground)]">
              Apple
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Six years progressing from Specialist to IS&amp;T Retail Technician.
              Learned how world-class operations work from the inside — diagnostics,
              mentoring, and customer obsession at scale.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-hover rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
              <span className="text-lg font-medium text-[var(--foreground)]">2</span>
            </div>
            <h3 className="mb-3 text-lg font-medium text-[var(--foreground)]">
              Selfridges
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Regional technology manager across five stores. Ran POS infrastructure,
              led a team of engineers, and kept systems up through Black Friday
              and Boxing Day with zero downtime.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-hover rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
              <span className="text-lg font-medium text-[var(--foreground)]">3</span>
            </div>
            <h3 className="mb-3 text-lg font-medium text-[var(--foreground)]">
              Starling Bank
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Led technology operations at a fast-growing digital bank — 15-person team,
              critical infrastructure, incident response, and cross-functional delivery
              supporting 800+ employees.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-hover rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
              <span className="text-lg font-medium text-[var(--foreground)]">4</span>
            </div>
            <h3 className="mb-3 text-lg font-medium text-[var(--foreground)]">
              Good Living Co
            </h3>
            <p className="text-[var(--foreground-muted)]">
              Founded a portfolio of six production websites. Full-stack ownership:
              Next.js, SEO, affiliate monetisation, email automation, and AI-assisted
              content workflows. Systems thinking applied to building a business.
            </p>
          </motion.article>
        </div>
      </section>

      {/* Working Style Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Working Style
          </h2>
          <div className="h-px w-24 bg-[var(--border)]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-blue-bg)] px-3 py-1">
              <span className="text-xs font-medium text-[var(--accent-blue-text)]">
                ADHD / Autism Level 1
              </span>
            </div>
            <h3 className="mb-4 text-xl font-medium text-[var(--foreground)]">
              Neurodivergence as an advantage
            </h3>
            <ul className="space-y-3 text-[var(--foreground-muted)]">
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Hyperfocus on complex systems and patterns others miss</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Rapid synthesis of disparate information into coherent strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Uncomfortable with status quo — always looking for better ways</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Deep empathy for users and team members facing friction</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-[var(--foreground-muted)]">
              I need clarity, autonomy, and the space to work in bursts.
              The output speaks for itself.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-green-bg)] px-3 py-1">
              <span className="text-xs font-medium text-[var(--accent-green-text)]">
                Communication
              </span>
            </div>
            <h3 className="mb-4 text-xl font-medium text-[var(--foreground)]">
              Direct. Clear. No fluff.
            </h3>
            <ul className="space-y-3 text-[var(--foreground-muted)]">
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Say what I mean, mean what I say</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Default to written documentation over meetings</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Escalate early when blockers appear</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>Feedback is a gift — give it straight, receive it openly</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-[var(--foreground-muted)]">
              I've been told I'm "too direct." I've also been told I'm the clearest 
              communicator on the team. I'll take the latter as the compliment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I'm Looking For Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            What I'm Looking For
          </h2>
          <div className="h-px w-24 bg-[var(--border)]" />
        </motion.div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-lg font-medium text-[var(--foreground)]">
                Role Criteria
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                    <svg className="h-4 w-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Senior / Lead / Head of</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Technology Operations, Infrastructure, or Service Delivery</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                    <svg className="h-4 w-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Remote or UK-based</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Flexible on location, need autonomy in how I work</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                    <svg className="h-4 w-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Scale-up or established tech company</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Somewhere complexity meets growth — that's where I thrive</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
                    <svg className="h-4 w-4 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Neurodivergent-friendly culture</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Not just tolerant — actually inclusive of different working styles</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-medium text-[var(--foreground)]">
                What I Bring
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent-blue-bg)]">
                    <span className="text-xs font-medium text-[var(--accent-blue-text)]">Ops</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Infrastructure & Service Management</p>
                    <p className="text-sm text-[var(--foreground-muted)]">ITIL, incident response, change management, vendor relations</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent-green-bg)]">
                    <span className="text-xs font-medium text-[var(--accent-green-text)]">Lead</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Team Leadership</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Building high-performing teams, mentoring, cross-functional collaboration</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent-yellow-bg)]">
                    <span className="text-xs font-medium text-[var(--accent-yellow-text)]">Build</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Full-Stack Builder</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Next.js, Python, automation, AI agents — I ship things</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--accent-red-bg)]">
                    <span className="text-xs font-medium text-[var(--accent-red-text)]">Fix</span>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">Systems Thinking</p>
                    <p className="text-sm text-[var(--foreground-muted)]">Finding root causes, designing resilient architectures, preventing fires</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-8 md:flex-row">
            <p className="text-sm text-[var(--foreground-muted)]">
              If this sounds like a fit, I'd love to talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
