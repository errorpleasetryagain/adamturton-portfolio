'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Floating pill navbar */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-2 py-2 shadow-[var(--shadow-sm)] backdrop-blur-xl">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
            aria-label="Adam Turton, home"
          >
            <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden="true" className="shrink-0">
              <rect x="2" y="2" width="96" height="96" rx="24" fill="currentColor" />
              <text
                x="50"
                y="54"
                fontFamily="Helvetica, Arial, sans-serif"
                fontSize="52"
                fontWeight="700"
                fill="var(--surface)"
                textAnchor="middle"
                dominantBaseline="central"
                letterSpacing="-3"
              >
                AT
              </text>
            </svg>
            <span>Adam Turton</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? 'font-medium text-[var(--foreground)]'
                      : 'text-[var(--foreground-muted)] hover:bg-[var(--border)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-[var(--border)]"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                pathname === '/contact'
                  ? 'bg-[var(--foreground)] text-[var(--background)]'
                  : 'bg-[var(--foreground)] text-[var(--background)] hover:scale-[0.97]'
              }`}
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
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--background)] pt-24 px-6 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-medium ${
                      pathname === link.href
                        ? 'text-[var(--foreground)]'
                        : 'text-[var(--foreground-muted)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-8 inline-block rounded-full bg-[var(--foreground)] px-6 py-3 text-lg font-medium text-[var(--background)]"
                >
                  Get in touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
