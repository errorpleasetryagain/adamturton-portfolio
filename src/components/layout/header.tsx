'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating pill navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-2 py-2 backdrop-blur-xl">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
          >
            Adam Turton
          </Link>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--foreground)]"
            >
              About
            </Link>
            <Link
              href="/experience"
              className="rounded-full px-4 py-2 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--foreground)]"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="rounded-full px-4 py-2 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--foreground)]"
            >
              Projects
            </Link>
            <Link
              href="/writing"
              className="rounded-full px-4 py-2 text-sm text-[var(--foreground-muted)] transition-colors hover:bg-[var(--border)] hover:text-[var(--foreground)]"
            >
              Writing
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center rounded-full p-2 text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {isOpen ? (
                <>
                  <path d="M18 6L6 18M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-[var(--foreground)]"
            >
              About
            </Link>
            <Link
              href="/experience"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-[var(--foreground)]"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-[var(--foreground)]"
            >
              Projects
            </Link>
            <Link
              href="/writing"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-[var(--foreground)]"
            >
              Writing
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 rounded-full bg-[var(--foreground)] px-6 py-3 text-lg font-medium text-[var(--background)]"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
