import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)]">
          <span>&copy; {new Date().getFullYear()} Adam Turton</span>
          <span className="text-[var(--border)]">&middot;</span>
          <span>Built with Next.js</span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://linkedin.com/in/adamturton"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:adam.turton84@icloud.com"
            className="link-underline text-sm text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
