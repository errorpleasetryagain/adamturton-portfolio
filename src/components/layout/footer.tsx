import Link from 'next/link';
import { brands, BrandLogo } from '@/components/ui/brand-logos';

const builtWith = [brands.nextjs, brands.vercel, brands.anthropic];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="mx-auto max-w-[var(--container-max)] px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3 text-sm text-[var(--foreground-muted)]">
            <span>&copy; {new Date().getFullYear()} Adam Turton</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/in/adam-j-turton-905344b0/"
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

        {/* Built with */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-[var(--border)] pt-8">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
            Built with
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {builtWith.map((tool) => (
              <Link
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                <BrandLogo brand={tool} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
