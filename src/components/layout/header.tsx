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
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--foreground)]"
          >
            AT
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.15em] transition-colors ${
                    isActive
                      ? 'text-[var(--foreground)]'
                      : 'text-[var(--foreground-muted)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="border border-[var(--foreground)] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center text-[var(--foreground)]"
            aria-label="Toggle menu"
          >
            <span className="text-xs uppercase tracking-[0.15em]">
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[var(--background)] px-6 md:hidden"
          >
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-4xl font-bold uppercase tracking-tight ${
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
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-8 inline-block border border-[var(--foreground)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-[var(--foreground)]"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
