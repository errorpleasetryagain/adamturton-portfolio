'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';
import Typewriter from '@/components/ui/typewriter';

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
          <Typewriter text="Hello." delay={0.3} stagger={0.12} />
        </motion.h1>

        <div className="mx-auto max-w-3xl text-left text-lg leading-relaxed text-[var(--foreground-muted)] md:text-xl [&_p]:mb-6">
          {/* Floated portrait: text wraps around it */}
          <div className="group relative float-right ml-6 mb-4 aspect-[4/5] w-[150px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] sm:ml-8 sm:w-[200px] md:w-[240px]">
            <Image
              src="/adam-portrait.jpg"
              alt="Adam Turton"
              width={280}
              height={350}
              priority
              className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
            />
            <div className="grain-overlay pointer-events-none absolute inset-0" />
          </div>

          <ScrollReveal>
            {[
              "I'm Adam. I've spent the last ten years in technology operations, starting at Apple and working through Selfridges to Starling Bank, where I now lead the tech ops team. I keep critical systems running and fix things when they break, but the part I care about most is the people. Developing a team and watching someone get good at something they couldn't do before is the bit that actually keeps me interested.",
              "My Apple background is genuine and hands-on. I'm an Apple Certified Mac Technician, so I've done the component level repair, the diagnostics, the macOS and iOS and MDM side of things, not just managed people who do it. That depth carries through everything since.",
              "Outside of work I build things. A few content sites in Next.js and MDX, and a lot of time spent with AI and agentic workflows. I use Claude and local models daily and build real automations with them, so when I say I'm up to date on AI I mean I'm using it, not reading about it.",
              "Away from a screen, music is the big one. I make it and I DJ. I cook most of my own meals, I'm in the gym four days a week, and I keep a pretty healthy lifestyle in general. I'll happily disappear on a long walk, and I collect trainers, which is a habit I have made peace with.",
              "I have ADHD, so I work best with clarity, autonomy and a bit of variety. Based in London, looking for my next senior tech ops or IT management role.",
            ]}
          </ScrollReveal>

          <p className="clear-both mt-8 text-base text-[var(--foreground-muted)]">
            A couple of the sites I write and build:{' '}
            <a
              href="https://maleoptimal.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--foreground)]"
            >
              Male Optimal
            </a>{' '}
            and{' '}
            <a
              href="https://glp1guide.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--foreground)]"
            >
              GLP1 Guide
            </a>
            .
          </p>
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
              I write and run a few content sites on health and lifestyle, built
              with Next.js and MDX. Male Optimal is the main one.
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
