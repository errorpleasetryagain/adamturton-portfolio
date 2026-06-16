export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: 'live' | 'in-development' | 'case-in-progress';
  technologies: string[];
  url?: string;
  featured: boolean;
  order: number;
  problem: string;
  approach: string;
  outcome: string;
  whatIdDoDifferently: string;
  details?: {
    sites?: string[];
    monetization?: string;
    technicalDetails?: string[];
  };
}

export const projects: Project[] = [
  {
    slug: 'good-living-co',
    title: 'Good Living Co',
    tagline: 'Portfolio of 6 passive income content sites',
    description:
      'A portfolio of six niche content sites built with Next.js and MDX, monetized through Awin affiliate links and email marketing via MailerLite. Each site targets a specific vertical with SEO-optimized content and conversion-focused design.',
    status: 'live',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Awin', 'MailerLite', 'SEO'],
    url: 'https://maleoptimal.co.uk',
    featured: true,
    order: 1,
    problem:
      'I wanted to build a sustainable passive income stream through content marketing, but needed a scalable approach that wouldn\'t require maintaining separate codebases for each niche site. The challenge was creating a repeatable system for launching and monetizing content sites efficiently.',
    approach:
      'Built a modular Next.js template with MDX for content management, allowing rapid deployment of new sites. Each site shares the same core architecture but with custom branding and content. Implemented affiliate link management through Awin and built email capture funnels using MailerLite. Focused on SEO from day one with semantic HTML, fast load times, and structured data.',
    outcome:
      'Successfully launched 6 sites: MaleOptimal.co.uk, FuelOptimal.co.uk, TradePick.co.uk, and 3 more. The system allows me to launch new niche sites in hours rather than weeks. Generating consistent affiliate revenue with minimal ongoing maintenance. The MDX-based content system makes updating and expanding content straightforward.',
    whatIdDoDifferently:
      'I\'d invest more in content upfront before launch—having 20-30 articles ready instead of 10. I\'d also implement more comprehensive analytics from day one to better track conversion funnels. Would consider adding a CMS layer (like Sanity or Contentful) for non-technical content updates, though MDX has worked well for my use case.',
    details: {
      sites: [
        'maleoptimal.co.uk',
        'fueloptimal.co.uk',
        'tradepick.co.uk',
        'homeoptimal.co.uk',
        'techoptimal.co.uk',
        'wealthoptimal.co.uk'
      ],
      monetization: 'Awin affiliate links, email list building via MailerLite',
      technicalDetails: [
        'Shared Next.js template across all 6 sites',
        'MDX for rich content with embedded components',
        'Automated sitemap generation',
        'Open Graph image generation',
        'Core Web Vitals optimized (90+ scores)'
      ]
    }
  },
  {
    slug: 'hermetic-library',
    title: 'Hermetic Library',
    tagline: 'Personal knowledge base for Hermeticism study',
    description:
      'A mobile-friendly, offline-capable digital library for studying Hermetic philosophy. Features interactive journaling, progress tracking, and a curated collection of texts and commentaries. Built as a static site for maximum portability and longevity.',
    status: 'live',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages', 'LocalStorage'],
    url: 'https://errorpleasetryagain.github.io/hermetic-library/',
    featured: true,
    order: 2,
    problem:
      'I needed a way to organize my study of Hermetic texts that was both searchable and portable. Existing note-taking apps were either too complex, required subscriptions, or didn\'t work well offline. I wanted something that would last decades without depending on a specific platform.',
    approach:
      'Built a static HTML/CSS site hosted on GitHub Pages with no backend dependencies. Uses localStorage for journal entries and progress tracking, making it fully functional offline. Designed with a focus on readability and minimal distractions. Structured content hierarchically for easy navigation between texts, commentaries, and personal notes.',
    outcome:
      'Created a personal knowledge base that\'s been in continuous use for studying Hermetic philosophy. The offline-first approach means I can study anywhere without internet. The simple static structure ensures it will remain accessible for decades. Has become an essential tool for my philosophical practice.',
    whatIdDoDifferently:
      'I\'d add sync capability (perhaps via encrypted JSON export/import) to share notes across devices. Would also implement better search functionality—currently it\'s basic text matching. Might consider adding spaced repetition for memorizing key passages.',
    details: {
      technicalDetails: [
        '100% static site—no backend or database',
        'localStorage for user data persistence',
        'Responsive design for mobile study sessions',
        'GitHub Pages for free, reliable hosting',
        'No external dependencies after initial load'
      ]
    }
  },
  {
    slug: 'silver-tracker',
    title: 'Silver Tracker',
    tagline: 'UK silver bullion price comparison tool',
    description:
      'An investment tool that aggregates and compares silver bullion prices across UK dealers. Calculates the premium over spot price to help identify the best value for long-term stacking. Built with Python and FastAPI with automated data collection.',
    status: 'in-development',
    technologies: ['Python', 'FastAPI', 'FireCrawl', 'Web Scraping', 'Data Analysis'],
    featured: true,
    order: 3,
    problem:
      'When buying physical silver for long-term investment, the premium over spot price varies significantly between dealers and products. Manually checking multiple sites is time-consuming, and prices change frequently. I needed an automated way to find the best value.',
    approach:
      'Building a FastAPI backend that scrapes dealer websites using FireCrawl for reliable extraction. The system normalizes data across different dealers, calculates premiums over live spot prices, and ranks products by value. Planning a clean frontend dashboard with filtering by product type, weight, and dealer.',
    outcome:
      'Currently in active development. Core scraping infrastructure is functional, collecting prices from major UK dealers including Chards, BullionByPost, and SilverGoldBull UK. The premium calculation logic is implemented. Next phase is building the dashboard and adding price history tracking.',
    whatIdDoDifferently:
      'I\'d start with a simpler MVP—perhaps just a spreadsheet with manual updates—to validate the concept before building the full automation. Would also partner with a dealer API if available rather than scraping. Planning to add alerts for when premiums drop below target thresholds.',
    details: {
      technicalDetails: [
        'FastAPI for high-performance backend',
        'FireCrawl for reliable web scraping',
        'Automated price collection (planned: hourly updates)',
        'Premium calculation over live spot price',
        'Dealer comparison and ranking system'
      ]
    }
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => a.order - b.order);
}
