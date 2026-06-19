'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
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
            Let&apos;s work together
          </h1>

          <p className="mb-8 max-w-[60ch] text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl">
            I&apos;m looking for my next senior tech ops or IT management role.
            London based, happy to work remotely. If you&apos;ve got something
            that might fit, get in touch and let&apos;s talk.
          </p>

          <a
            href="/adam-turton-cv.pdf"
            download="Adam_Turton_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97] hover:shadow-[var(--shadow-lg)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            Download CV
          </a>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Contact methods
          </h2>
          <div className="h-px w-24 bg-[var(--border)]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Email: personal */}
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
            href="https://www.linkedin.com/in/adam-j-turton-905344b0/"
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
              linkedin.com/in/adam-j-turton
              <svg className="ml-1 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.a>

          {/* YouTube: Male Optimal */}
          <motion.a
            href="https://youtube.com/@maleoptimal"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[var(--foreground)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
              <svg className="h-5 w-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Male Optimal on YouTube
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              Video content for my main site, Male Optimal.
            </p>
            <span className="inline-flex items-center text-sm font-medium text-[var(--foreground)] group-hover:underline">
              youtube.com/@maleoptimal
              <svg className="ml-1 h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </motion.a>

          {/* Email: Good Living Web Co */}
          <motion.a
            href="mailto:adam@goodlivingwebco.co.uk"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-[var(--foreground)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]">
              <svg className="h-5 w-5 text-[var(--foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-[var(--foreground)]">
              Good Living Web Co
            </h3>
            <p className="mb-4 text-[var(--foreground-muted)]">
              My web studio. For build, design and development enquiries.
            </p>
            <span className="text-sm font-medium text-[var(--foreground)] group-hover:underline">
              adam@goodlivingwebco.co.uk
            </span>
          </motion.a>
        </div>
      </section>

    </div>
  );
}
