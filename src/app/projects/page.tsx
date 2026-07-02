'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllProjects } from '@/data/projects';

const projects = getAllProjects();

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
          Projects
        </h1>
        <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
          Things I&apos;ve built outside of work: a few content sites I write and
          run, and Bash Tutor, a tool to help dyslexic people use the command
          line. Each one taught me something different, and I&apos;ve been honest
          about what I&apos;d do differently next time.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="spotlight-card group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10"
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
              el.style.setProperty('--my', `${e.clientY - rect.top}px`);
            }}
          >
            <div className="relative z-10 mb-6 flex flex-wrap items-center gap-3">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="rounded-full bg-[var(--border)] px-3 py-1 text-xs font-medium text-[var(--foreground-muted)]">
                  +{project.technologies.length - 4} more
                </span>
              )}
              <span
                className={`ml-auto rounded-full px-3 py-1 text-xs font-medium ${
                  project.status === 'live'
                    ? 'bg-[var(--accent-green-bg)] text-[var(--accent-green-text)]'
                    : project.status === 'in-development'
                    ? 'bg-[var(--accent-yellow-bg)] text-[var(--accent-yellow-text)]'
                    : 'bg-[var(--accent-red-bg)] text-[var(--accent-red-text)]'
                }`}
              >
                {project.status === 'live'
                  ? 'Live'
                  : project.status === 'in-development'
                  ? 'In Development'
                  : 'Case in Progress'}
              </span>
            </div>

            <div className="relative z-10 mb-4">
              <h2 className="mb-2 text-2xl font-medium text-[var(--foreground)] md:text-3xl">
                {project.title}
              </h2>
              <p className="text-[var(--foreground-muted)]">{project.tagline}</p>
            </div>

            <p className="relative z-10 mb-6 max-w-3xl text-[var(--foreground-muted)]">
              {project.description}
            </p>

            <div className="relative z-10 flex flex-wrap items-center gap-6">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--foreground-muted)]"
              >
                View case study
                <svg
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>

              {project.url && (
                <>
                  <span className="text-[var(--border)]">•</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--foreground-muted)]"
                  >
                    Visit site
                    <svg
                      className="ml-1 h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="absolute inset-0"
              aria-label={`View case study for ${project.title}`}
            />
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-12 text-center md:p-16"
      >
        <h2 className="mb-4 text-2xl font-medium tracking-tight text-[var(--foreground)] md:text-3xl">
          Interested in working together?
        </h2>
        <p className="mx-auto mb-8 max-w-[50ch] text-[var(--foreground-muted)]">
          Always happy to talk technology, leadership, or building things.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
        >
          Get in touch
        </Link>
      </motion.div>
    </div>
  );
}
