'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project, getAllProjects } from '@/data/projects';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-24">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M17 7L7 17M7 17h10M7 17V7" />
          </svg>
          Back to projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="mb-6 flex flex-wrap items-center gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]"
            >
              {tech}
            </span>
          ))}
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

        <h1 className="mb-4 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
          {project.title}
        </h1>
        <p className="text-xl leading-relaxed text-[var(--foreground-muted)]">
          {project.tagline}
        </p>

        {project.url && (
          <div className="mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--foreground-muted)]"
            >
              Visit site
              <svg
                className="ml-1 h-4 w-4"
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
          </div>
        )}
      </motion.div>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
      >
        <h2 className="mb-4 text-xl font-medium text-[var(--foreground)]">
          Overview
        </h2>
        <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
          {project.description}
        </p>
        {project.details?.sites && (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--foreground-muted)]">
              Sites in Portfolio
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.details.sites.map((site) => (
                <span
                  key={site}
                  className="rounded-lg bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
                >
                  {site}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.details?.monetization && (
          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-[var(--foreground-muted)]">
              Monetization
            </h3>
            <p className="text-[var(--foreground)]">{project.details.monetization}</p>
          </div>
        )}
      </motion.section>

      {/* Case Study Sections */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-red-bg)]">
              <svg
                className="h-5 w-5 text-[var(--accent-red-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              The Problem
            </h2>
          </div>
          <p className="leading-relaxed text-[var(--foreground-muted)]">
            {project.problem}
          </p>
        </motion.section>

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-blue-bg)]">
              <svg
                className="h-5 w-5 text-[var(--accent-blue-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              The Approach
            </h2>
          </div>
          <p className="leading-relaxed text-[var(--foreground-muted)]">
            {project.approach}
          </p>
        </motion.section>

        {/* Outcome */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-green-bg)]">
              <svg
                className="h-5 w-5 text-[var(--accent-green-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              The Outcome
            </h2>
          </div>
          <p className="leading-relaxed text-[var(--foreground-muted)]">
            {project.outcome}
          </p>
        </motion.section>

        {/* What I'd Do Differently */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-yellow-bg)]">
              <svg
                className="h-5 w-5 text-[var(--accent-yellow-text)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-[var(--foreground)]">
              What I'd Do Differently
            </h2>
          </div>
          <p className="leading-relaxed text-[var(--foreground-muted)]">
            {project.whatIdDoDifferently}
          </p>
        </motion.section>
      </div>

      {/* Technical Details (if available) */}
      {project.details?.technicalDetails && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10"
        >
          <h2 className="mb-6 text-xl font-medium text-[var(--foreground)]">
            Technical Details
          </h2>
          <ul className="space-y-3">
            {project.details.technicalDetails.map((detail, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--accent-blue-text)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[var(--foreground)]">{detail}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8"
      >
        <ProjectNavigation currentSlug={project.slug} direction="prev" />
        <ProjectNavigation currentSlug={project.slug} direction="next" />
      </motion.nav>
    </div>
  );
}

function ProjectNavigation({
  currentSlug,
  direction,
}: {
  currentSlug: string;
  direction: 'prev' | 'next';
}) {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  
  if (direction === 'prev') {
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    if (!prevProject) return <div />;
    
    return (
      <Link
        href={`/projects/${prevProject.slug}`}
        className="group flex items-center gap-4"
      >
        <div className="text-left">
          <span className="mb-1 block text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
            Previous
          </span>
          <span className="text-sm font-medium text-[var(--foreground)] group-hover:underline">
            {prevProject.title}
          </span>
        </div>
        <svg
          className="h-5 w-5 text-[var(--foreground-muted)] transition-transform group-hover:-translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M17 7L7 17M7 17h10M7 17V7" />
        </svg>
      </Link>
    );
  } else {
    const nextProject =
      currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    if (!nextProject) return <div />;
    
    return (
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group flex items-center gap-4"
      >
        <div className="text-right">
          <span className="mb-1 block text-xs uppercase tracking-wide text-[var(--foreground-muted)]">
            Next
          </span>
          <span className="text-sm font-medium text-[var(--foreground)] group-hover:underline">
            {nextProject.title}
          </span>
        </div>
        <svg
          className="h-5 w-5 text-[var(--foreground-muted)] transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </Link>
    );
  }
}
