'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlurText from '@/components/ui/blur-text';
import CircularText from '@/components/ui/circular-text';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const },
  },
};

function Ticker() {
  const items = [
    'APPLE', '·', 'SELFRIDGES', '·', 'STARLING BANK', '·',
    'ITIL', '·', 'INCIDENT RESPONSE', '·', 'NEXT.JS', '·',
    'PYTHON', '·', 'AI AGENTS', '·', 'CISCO', '·',
    'OKTA', '·', 'MDM', '·', 'TEAM LEADERSHIP', '·',
  ];

  return (
    <div className="overflow-hidden border-t border-b border-[var(--border)] py-5">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8 pr-8">
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className={`whitespace-nowrap font-mono text-[11px] tracking-[0.2em] ${
                  item === '·'
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--foreground-muted)]'
                }`}
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
      <section className="mx-auto flex min-h-[92vh] max-w-[var(--container-max)] items-end px-6 pb-20">
        <div className="w-full">
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16 flex items-center justify-between"
          >
            <span className="section-number">01 / Introduction</span>
            <div className="badge-live inline-flex items-center border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--accent-green-text)]">
                Open to roles
              </span>
            </div>
          </motion.div>

          {/* Name — big, bold, the main event */}
          <div className="mb-8">
            <BlurText
              text="ADAM"
              className="text-6xl font-bold leading-[0.9] tracking-[-0.03em] text-[var(--foreground)] md:text-8xl lg:text-[130px]"
              delay={60}
              animateBy="letters"
            />
            <BlurText
              text="TURTON"
              className="text-6xl font-bold leading-[0.9] tracking-[-0.03em] text-[var(--foreground-muted)] md:text-8xl lg:text-[130px]"
              delay={60}
              animateBy="letters"
            />
          </div>

          {/* Bio + circular text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-end justify-between gap-8"
          >
            <p className="max-w-[42ch] text-[15px] leading-relaxed text-[var(--foreground-muted)]">
              Technology operations leader. Ten years across Apple, Selfridges,
              and Starling Bank. I write about health and build websites on the side.
            </p>
            <div className="hidden text-[var(--foreground-muted)] md:block">
              <CircularText
                text="TECH OPS · WRITER · BUILDER · "
                size={100}
                spinDuration={15}
              />
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 flex items-center gap-8"
          >
            <Link
              href="/experience"
              className="link-arrow group border-b-2 border-[var(--foreground)] pb-1 text-sm font-medium tracking-wide"
            >
              Experience
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/writing"
              className="link-arrow group border-b border-[var(--border)] pb-1 text-sm text-[var(--foreground-muted)] tracking-wide"
            >
              Writing
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="link-arrow group border-b border-[var(--border)] pb-1 text-sm text-[var(--foreground-muted)] tracking-wide"
            >
              Projects
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Career */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-28">
        <div className="mb-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-number"
          >
            02 / Career
          </motion.span>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {[
            {
              company: 'Starling Bank',
              role: 'Tech Ops Manager',
              period: '2023\u2013present',
              highlight: '15-person team',
              detail: '800+ employees. Fintech. Incident response, vendor management, infrastructure.',
            },
            {
              company: 'Selfridges',
              role: 'Regional Tech Manager',
              period: '2022\u20132023',
              highlight: '5 stores',
              detail: 'POS, networking, digital signage. Zero downtime through Black Friday.',
            },
            {
              company: 'Apple',
              role: 'Specialist \u2192 IS&T',
              period: '2016\u20132022',
              highlight: '4 roles, 6 years',
              detail: 'ACMT certified Genius. Component-level repair. Then corporate IS&T for 500+ stores.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="border-t-2 border-[var(--border)] py-8 pr-8 transition-colors hover:border-[var(--accent)]"
            >
              <span className="mb-1 block font-mono text-[11px] tracking-[0.15em] text-[var(--foreground-muted)]">
                {item.period}
              </span>
              <h3 className="mb-1 text-xl font-bold tracking-tight text-[var(--foreground)]">
                {item.company}
              </h3>
              <p className="mb-3 text-sm text-[var(--accent-warm)]">{item.role}</p>
              <p className="mb-2 font-mono text-xs font-medium text-[var(--foreground)]">
                {item.highlight}
              </p>
              <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-8">
          <Link href="/experience" className="link-arrow text-sm font-medium tracking-wide">
            Full experience
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Writing */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-28">
        <div className="mb-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-number"
          >
            03 / Writing
          </motion.span>
          <Link href="/writing" className="link-arrow text-sm text-[var(--foreground-muted)]">
            All posts
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="space-y-0">
          {[
            { num: '01', date: 'Jun 2026', title: 'Using AI Agents for Real Work', href: '/writing/ai-agents-production' },
            { num: '02', date: 'Jun 2026', title: 'Building Resilient Tech Operations', href: '/writing/resilient-tech-ops' },
            { num: '03', date: 'May 2026', title: 'Working With ADHD in Tech Operations', href: '/writing/neurodivergence-at-work' },
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={post.href}
                className="group flex items-center justify-between border-t border-[var(--border)] py-5 transition-all hover:pl-2"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[11px] text-[var(--accent)] tracking-wider">{post.num}</span>
                  <span className="w-16 font-mono text-[11px] text-[var(--foreground-muted)]">{post.date}</span>
                  <h3 className="text-[15px] font-medium text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-warm)]">
                    {post.title}
                  </h3>
                </div>
                <svg className="h-4 w-4 text-[var(--foreground-muted)] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
          <div className="border-t border-[var(--border)]" />
        </div>
      </section>

      {/* Side Projects */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-28">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-number"
          >
            04 / Side Projects
          </motion.span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
          {[
            {
              title: 'MaleOptimal & content sites',
              stat: '90+ articles',
              desc: 'Six websites. Next.js, MDX, SEO. Evidence-based health content I research and write.',
              link: 'maleoptimal.co.uk',
              href: 'https://maleoptimal.co.uk',
            },
            {
              title: 'AI workflow automation',
              stat: 'Daily use',
              desc: 'Job scanning, content pipelines, site deployments. Claude Code with MCP server integrations.',
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
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight text-[var(--foreground)]">
                  {project.title}
                </h3>
                <span className="font-mono text-[11px] tracking-wider text-[var(--accent)]">
                  {project.stat}
                </span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-[var(--foreground-muted)]">
                {project.desc}
              </p>
              <span className="link-arrow text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--foreground-muted)]">
                {project.link}
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-[var(--container-max)] px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t-2 border-[var(--foreground)] pt-16"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="section-number mb-8 block">05 / Contact</span>
              <h2 className="text-5xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
                Get in
                <br />
                <span className="text-[var(--accent-warm)]">touch.</span>
              </h2>
              <p className="mt-4 max-w-[40ch] text-[15px] text-[var(--foreground-muted)]">
                Looking for senior IT/Tech Ops roles. Remote or UK-based.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border-2 border-[var(--foreground)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              Contact
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
