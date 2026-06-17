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
    tagline: 'Six content websites I build and write for',
    description:
      'A collection of six niche content websites I built with Next.js and MDX. I write evidence-based articles, handle the SEO, and manage affiliate links and email lists. Each site covers a different topic.',
    status: 'live',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Awin', 'MailerLite', 'SEO'],
    url: 'https://maleoptimal.co.uk',
    featured: true,
    order: 1,
    problem:
      'I wanted a way to write about topics I\'m interested in (health, supplements, training) and learn full-stack web development at the same time. I needed something that would let me manage multiple sites without maintaining separate codebases.',
    approach:
      'Built a shared Next.js template with MDX for content. Each site has its own branding and content but shares the same architecture. I handle everything: writing, SEO, affiliate links through Awin, email lists through MailerLite, and deployment through Vercel.',
    outcome:
      'Six live sites with 90+ published articles between them. MaleOptimal is the main one, focused on evidence-based men\'s health content. Each site scores 90+ on Core Web Vitals. I can launch a new site in hours because of the shared template.',
    whatIdDoDifferently:
      'I\'d write more content before launching each site. Having 20-30 articles ready instead of 10 would have helped with early SEO. I\'d also set up proper analytics from day one.',
    details: {
      sites: [
        'maleoptimal.co.uk',
        'fueloptimal.co.uk',
        'tradepick.co.uk',
        'homeoptimal.co.uk',
        'techoptimal.co.uk',
        'wealthoptimal.co.uk'
      ],
      monetization: 'Awin affiliate monetisation, MailerLite email automation',
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
      'I\'d add sync capability (perhaps via encrypted JSON export/import) to share notes across devices. Would also improve the search (currently basic text matching). Might consider adding spaced repetition for memorizing key passages.',
    details: {
      technicalDetails: [
        '100% static site, no backend or database',
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
      'I\'d start simpler, maybe just a spreadsheet with manual updates, to check if anyone actually wants this before building the full thing. Would also partner with a dealer API if available rather than scraping. Planning to add alerts for when premiums drop below target thresholds.',
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
  {
    slug: 'ai-workflows',
    title: 'AI-Assisted Development Workflows',
    tagline: 'AI tools I use daily for real tasks',
    description:
      'Automated workflows I\'ve set up with Claude Code and MCP server integrations. Job scanning, content drafting, site deployments, and email management. Practical stuff, not demos.',
    status: 'live',
    technologies: ['Claude Code', 'MCP Servers', 'Python', 'TypeScript', 'Automation'],
    featured: true,
    order: 4,
    problem:
      'Running six websites and a job search at the same time means a lot of repetitive tasks. I needed to automate the boring parts without losing control over quality.',
    approach:
      'Set up Claude Code with MCP server integrations for Gmail, MailerLite, Vercel, and Notion. Built a daily job scan that searches LinkedIn and scores roles against my criteria. Created content drafting pipelines with a review step before anything publishes.',
    outcome:
      'The job scan saves me about 45 minutes a day. Content drafting is faster because AI handles research and first drafts while I do the editing and fact-checking. Site deployments and email list management happen from one interface.',
    whatIdDoDifferently:
      'I\'d set up the MCP integrations properly from the start instead of adding them one at a time. Some of the early automation was held together with tape. I\'d also add better logging for when things go wrong.',
    details: {
      technicalDetails: [
        'Claude Code with custom agent configurations',
        'MCP server integrations (Gmail, MailerLite, Vercel, Notion)',
        'Automated job scanning with scoring algorithms',
        'Content generation pipelines with review gates',
        'Multi-agent parallel task orchestration',
      ],
    },
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
