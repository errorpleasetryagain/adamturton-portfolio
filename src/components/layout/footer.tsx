import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <span className="font-mono text-xs tracking-wider text-[var(--foreground-muted)]">
          &copy; {new Date().getFullYear()} ADAM TURTON
        </span>
        <div className="flex items-center gap-8">
          {[
            { href: 'https://github.com/errorpleasetryagain', label: 'GitHub' },
            { href: 'https://linkedin.com/in/adamturton', label: 'LinkedIn' },
            { href: 'mailto:adam.turton84@icloud.com', label: 'Email' },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-xs uppercase tracking-[0.15em] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
