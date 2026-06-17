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
    tagline: 'Six production websites built from scratch',
    description:
      'Founded and built a portfolio of six niche content websites — from architecture and design through to SEO, affiliate monetisation, and email automation. Each site targets a specific vertical with conversion-focused design and AI-assisted content workflows.',
    status: 'live',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Awin', 'MailerLite', 'SEO'],
    url: 'https://maleoptimal.co.uk',
    featured: true,
    order: 1,
    problem:
      'I wanted to prove that the systems-thinking approach I\'d developed in technology operations could apply to building a content business. The challenge was creating a scalable architecture that would let me launch and manage multiple niche websites without maintaining separate codebases.',
    approach:
      'Designed a modular Next.js template with MDX for content management, enabling rapid deployment of new sites. Each site shares core architecture but with custom branding and content strategy. Implemented affiliate monetisation through Awin, built email capture funnels via MailerLite, and integrated AI-assisted content workflows. Focused on SEO from day one with semantic HTML, structured data, and Core Web Vitals optimisation.',
    outcome:
      'Launched six production sites across different verticals. The shared architecture means I can spin up a new site in hours, not weeks. Each site scores 90+ on Core Web Vitals. The project demonstrates full-stack ownership — from infrastructure and deployment through to content strategy, monetisation, and marketing automation.',
    whatIdDoDifferently:
      'I\'d invest more in content depth before launch — 20-30 articles instead of 10. I\'d also implement more comprehensive analytics from day one to better track conversion funnels. Would consider adding a headless CMS layer for non-technical content updates, though MDX has worked well for my use case.',
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
  {
    slug: 'ai-workflows',
    title: 'AI-Assisted Development Workflows',
    tagline: 'Production AI agent pipelines and automation',
    description:
      'Building real workflows with AI agents — automated job scanning, content generation pipelines, multi-agent orchestration, and custom MCP server integrations. Practical AI applied to real problems, not demos.',
    status: 'live',
    technologies: ['Claude Code', 'MCP Servers', 'Python', 'TypeScript', 'Automation'],
    featured: true,
    order: 4,
    problem:
      'Running a portfolio of six websites, a job search, and content operations as a solo founder means there are more tasks than hours. I needed to automate repetitive workflows without sacrificing quality or losing oversight.',
    approach:
      'Built a suite of AI-powered workflows using Claude Code with custom MCP server integrations. Automated daily job scanning across LinkedIn and recruiter networks with scoring and filtering. Created content generation pipelines with human review checkpoints. Set up multi-agent orchestration for parallel tasks like site audits, SEO checks, and content updates.',
    outcome:
      'These workflows now power all my current projects. Job scanning runs daily and surfaces scored opportunities. Content pipelines handle research, drafting, and SEO optimisation with human approval gates. The approach has been a genuine force multiplier — doing the work of a small team as one person.',
    whatIdDoDifferently:
      'I\'d formalise the agent orchestration patterns earlier. Some of the early automation was ad-hoc and brittle. Building with structured MCP integrations from the start would have saved rework. I\'d also add better observability and logging for agent runs.',
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
