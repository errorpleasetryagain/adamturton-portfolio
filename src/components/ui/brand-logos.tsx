import type { ReactNode } from 'react';

/**
 * Simple monochrome brand glyphs/wordmarks for the tech and tools Adam uses.
 * Drawn with currentColor so they inherit the surrounding text colour.
 * Kept minimal and recognisable rather than pixel-perfect brand assets.
 */

export interface Brand {
  name: string;
  url: string;
  svg: ReactNode;
}

const cls = 'h-5 w-auto';

export const brands: Record<string, Brand> = {
  nextjs: {
    name: 'Next.js',
    url: 'https://nextjs.org',
    svg: (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
        <path d="M11.57.01C11.52.02 11.18.05 10.87.08 4.13.69-.18 7.17.27 13.86c.41 6.13 5.78 10.78 11.9 10.13 6.13-.41 10.78-5.78 10.13-11.9C21.84 5.97 17.27.93 11.57.01Zm6.34 17.74-1.46.91-4.49-6.62v8.18l-1.2.36V7.42h1.46l4.49 6.62V7.71l1.2-.36v10.4Z" />
      </svg>
    ),
  },
  vercel: {
    name: 'Vercel',
    url: 'https://vercel.com',
    svg: (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
        <path d="M12 2 22 20H2L12 2Z" />
      </svg>
    ),
  },
  cloudflare: {
    name: 'Cloudflare',
    url: 'https://cloudflare.com',
    svg: (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
        <path d="M16.5 16.3c.1-.5 0-.9-.3-1.2-.3-.3-.7-.4-1.2-.5l-9.3-.1c-.1 0-.1 0-.1-.1-.1-.1 0-.1 0-.2.1-.2.2-.3.4-.3l9.4-.1c1.1-.1 2.3-1 2.7-2.1l.5-1.4v-.2C18.2 7.4 15.8 5.5 13 5.5c-2.6 0-4.8 1.7-5.6 4-.5-.4-1.1-.6-1.8-.5-1.2.1-2.2 1.1-2.3 2.3 0 .3 0 .6.1.9-2 .1-3.5 1.7-3.5 3.7 0 .2 0 .4.1.5 0 .1.1.2.2.2h16.9c.1 0 .2-.1.3-.2l.1-.6Zm2.6-5.1c-.1 0-.2 0-.2.1l-.3 1c-.1.5 0 .9.3 1.2.3.3.7.4 1.2.5l2 .1c.1 0 .1 0 .1.1.1.1 0 .1 0 .2-.1.2-.2.3-.4.3l-2 .1c-1.1.1-2.3 1-2.7 2.1l-.1.5c0 .1 0 .2.1.2h6.9c.1 0 .2-.1.2-.2.1-.4.2-.9.2-1.4 0-2.7-2.2-4.9-4.9-4.9h-.4Z" />
      </svg>
    ),
  },
  upstash: {
    name: 'Upstash',
    url: 'https://upstash.com',
    svg: (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
        <path d="M4 4h3v16H4V4Zm6.5 0h3v16h-3V4ZM17 4h3v16h-3V4Z" opacity="0.25" />
        <path d="M5.5 7.5c3.6 3.6 3.6 5.4 0 9M12 7.5c3.6 3.6 3.6 5.4 0 9M18.5 7.5c3.6 3.6 3.6 5.4 0 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  anthropic: {
    name: 'Anthropic',
    url: 'https://www.anthropic.com',
    svg: (
      <svg viewBox="0 0 46 32" className={cls} fill="currentColor" aria-hidden>
        <path d="M32.73 0h-6.06l11.04 32h6.06L32.73 0ZM12.27 0 0 32h6.18l2.51-6.67h12.85L24.05 32h6.18L17.96 0h-5.69Zm-1.6 19.4 4.45-11.86 4.45 11.86h-8.9Z" />
      </svg>
    ),
  },
  apple: {
    name: 'Apple',
    url: 'https://apple.com',
    svg: (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.06 1.64-.69.83-1.29 2.04-1.13 3.11 1.17.09 2.36-.81 3.12-1.64Z" />
      </svg>
    ),
  },
};

interface BrandLogoProps {
  brand: Brand;
}

export function BrandLogo({ brand }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2 text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]">
      {brand.svg}
      <span className="font-mono text-xs font-medium uppercase tracking-[0.12em]">{brand.name}</span>
    </span>
  );
}
