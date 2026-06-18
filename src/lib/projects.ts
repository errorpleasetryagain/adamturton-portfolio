export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
  status: 'live' | 'in-development' | 'case-study';
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    slug: 'good-living-co',
    title: 'Good Living Co',
    summary: 'Portfolio of 6 passive income content sites built with Next.js and MDX',
    description: 'A portfolio of six niche content websites built with Next.js and MDX, monetized through Awin affiliate links and email marketing via MailerLite. Each site targets specific health and wellness verticals with SEO-optimized content.',
    tags: ['Next.js', 'MDX', 'Affiliate Revenue', 'SEO', 'Content Marketing'],
    link: 'https://maleoptimal.co.uk',
    status: 'live',
    featured: true,
    order: 1,
  },
  {
    slug: 'hermetic-library',
    title: 'Hermetic Library',
    summary: 'Personal knowledge library for Hermeticism study with interactive journal',
    description: 'A mobile-friendly, offline-capable HTML knowledge library built with vanilla HTML/CSS and hosted on GitHub Pages. Features interactive journal, progress tracking, and structured curriculum for studying Hermetic philosophy.',
    tags: ['HTML/CSS', 'GitHub Pages', 'Knowledge Management', 'Progressive Web App'],
    link: 'https://errorpleasetryagain.github.io/hermetic-library/',
    status: 'live',
    featured: true,
    order: 2,
  },
  {
    slug: 'silver-tracker',
    title: 'Silver Tracker',
    summary: 'Investment tool comparing UK silver bullion prices across dealers',
    description: 'A FastAPI/Python application that scrapes and compares silver bullion prices from UK dealers, calculating premiums over spot price to identify the best value for long-term investors stacking physical silver.',
    tags: ['FastAPI', 'Python', 'Web Scraping', 'FireCrawl', 'Investment Tools'],
    status: 'in-development',
    featured: true,
    order: 3,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}
