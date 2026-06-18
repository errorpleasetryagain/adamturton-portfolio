'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6">
      {/* Hero Section: central portrait with text revealing around it */}
      <section className="py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-6xl"
        >
          About
        </motion.h1>

        <div className="mx-auto max-w-3xl space-y-10 text-center text-xl leading-relaxed text-[var(--foreground-muted)] md:space-y-14 md:text-2xl">
          <ScrollReveal>
            I&apos;m Adam. I&apos;ve spent the last ten years in technology operations, starting at Apple and working through Selfridges to Starling Bank, where I now lead the tech ops team. I keep critical systems running and fix things when they break, but the part I care about most is the people.
          </ScrollReveal>

          {/* Central portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center py-2"
          >
            <div className="group relative aspect-[4/5] w-[240px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] md:w-[280px]">
              <Image
                src="/adam-portrait.jpg"
                alt="Adam Turton"
                fill
                priority
                sizes="280px"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <div className="grain-overlay pointer-events-none absolute inset-0" />
            </div>
          </motion.div>

          <ScrollReveal>
            My Apple background is genuine and hands-on. I&apos;m an Apple Certified Mac Technician, so I&apos;ve done the component level repair, the diagnostics, the macOS and iOS and MDM side of things, not just managed people who do it. That depth carries through everything since.
          </ScrollReveal>

          <ScrollReveal>
            Outside of work I build things. A few content sites in Next.js and MDX, and a lot of time spent with AI and agentic workflows. I use Claude and local models daily and build real automations with them, so when I say I&apos;m up to date on AI I mean I&apos;m using it, not reading about it.
          </ScrollReveal>

          <ScrollReveal>
            Away from a screen, music is the big one. I make it and I DJ. I cook most of my own meals, I&apos;m in the gym four days a week, and I keep a pretty healthy lifestyle in general. I&apos;ll happily disappear on a long walk, and I collect trainers, which is a habit I have made peace with.
          </ScrollReveal>

          <ScrollReveal>
            I have ADHD, so I work best with clarity, autonomy and a bit of variety. Based in London, looking for my next senior tech ops or IT management role.
          </ScrollReveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/experience"
            className="inline-flex items-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-all duration-200 hover:scale-[0.97]"
          >
            View experience
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--foreground-muted)]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Timeline
          </h2>
        </motion.div>

        <div className="space-y-0">
          {[
            {
              period: '2023 \u2013 Present',
              title: 'Technology Operations Manager',
              company: 'Starling Bank',
              detail: 'Leading the tech ops team, 11 direct reports and 23 in total, across multiple UK offices. Incident response, vendor management, and an international onboarding programme built with the People and Facilities teams.',
            },
            {
              period: '2022 \u2013 2023',
              title: 'Regional In-Store Technology Manager',
              company: 'Selfridges',
              detail: 'Ran in-store technology across the North region with a team of six engineers. POS, networking and AV through peak trading and premium brand events.',
            },
            {
              period: '2021 \u2013 2022',
              title: 'IS&T Retail Store Operations',
              company: 'Apple',
              detail: 'Moved from retail into Apple\u2019s corporate IS&T team. Supported store technologies: networks, POS systems and back of house infrastructure across the estate.',
            },
            {
              period: '2019 \u2013 2022',
              title: 'Genius',
              company: 'Apple',
              detail: 'ACMT-certified. Component-level Mac hardware repair, iOS diagnostics via GSX and AST 2. Mentored technical experts and specialists.',
            },
            {
              period: '2018 \u2013 2019',
              title: 'Technical Expert',
              company: 'Apple',
              detail: 'Triaged and diagnosed hardware and software issues at the Genius Bar. Authorised to perform iPhone hardware repairs. Trained new hires on diagnostic procedures.',
            },
            {
              period: '2016 \u2013 2018',
              title: 'Specialist',
              company: 'Apple',
              detail: 'Consultative sales and customer support across the Apple product range. Consistently top 10% for customer engagement scores.',
            },
          ].map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[100px_1fr] gap-6 border-b border-[var(--border)] py-6 md:grid-cols-[140px_1fr]"
            >
              <span className="text-sm font-medium text-[var(--foreground-muted)]">
                {role.period}
              </span>
              <div>
                <h3 className="font-medium text-[var(--foreground)]">
                  {role.title}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)]">
                  {role.company}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {role.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Side Projects Summary */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-medium tracking-tight text-[var(--foreground)]">
            Outside of work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              Content sites
            </h3>
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
              I run six websites about men&apos;s health, supplements, and lifestyle.
              90+ evidence-based articles, all built with Next.js and MDX.
              MaleOptimal is the main one.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3 className="mb-3 font-medium text-[var(--foreground)]">
              AI, music and building
            </h3>
            <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
              I use Claude, MCP servers and custom agent workflows daily for job
              scanning, content pipelines, deployments and email. When I&apos;m
              not building automations I&apos;m usually in Logic Pro, making
              something.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
