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
    slug: 'maleoptimal',
    title: 'Male Optimal',
    tagline: 'Evidence-based men\'s health content site',
    description:
      'My main content site, focused on evidence-based men\'s health. I write the articles, handle the SEO, and run the affiliate and email side. Built with Next.js and MDX.',
    status: 'live',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'SEO', 'Awin', 'MailerLite'],
    url: 'https://maleoptimal.co.uk',
    featured: true,
    order: 1,
    problem:
      'I wanted to write about topics I actually care about and learn full-stack web development properly at the same time. Off-the-shelf site builders felt limiting and I wanted to own every part of it.',
    approach:
      'Built it on a shared Next.js and MDX template I can reuse across sites. I handle everything end to end: writing, SEO, affiliate links through Awin, email through MailerLite, and deployment on Vercel.',
    outcome:
      'A live site with a growing library of evidence-based articles, scoring well on Core Web Vitals. It has taught me more about real web development than any tutorial could.',
    whatIdDoDifferently:
      'I\'d build up more articles before launch to help with early SEO, and set up proper analytics from day one.',
    details: {
      technicalDetails: [
        'Next.js and MDX content system',
        'SEO and structured data',
        'Affiliate integration (Awin)',
        'Email automation (MailerLite)',
        'Core Web Vitals optimised',
      ],
    },
  },
  {
    slug: 'glp1-guide',
    title: 'GLP1 Guide',
    tagline: 'Plain-English guide to GLP-1 medications',
    description:
      'A content site that breaks down GLP-1 medications in plain English. Same Next.js and MDX foundation as my other sites, with its own branding and focus.',
    status: 'live',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'SEO'],
    url: 'https://glp1guide.co',
    featured: true,
    order: 2,
    problem:
      'There is a lot of confusing and contradictory information about GLP-1 medications online. I wanted a clear, calm, evidence-led resource that did not talk down to people.',
    approach:
      'Reused my shared site template so I could launch quickly, then focused on getting the writing clear and accurate. Careful structure so people can find what they need fast.',
    outcome:
      'A live, growing site in a topic with real demand. Proof that the shared template lets me stand up a focused, fast site without rebuilding everything each time.',
    whatIdDoDifferently:
      'I\'d plan the content structure more fully before writing, so the navigation matched how people actually search.',
    details: {
      technicalDetails: [
        'Shared Next.js and MDX template',
        'Clear information architecture',
        'SEO focused',
        'Fast, accessible pages',
      ],
    },
  },
  {
    slug: 'bash-tutor',
    title: 'Bash Tutor',
    tagline: 'A bash learning tool built for dyslexic people',
    description:
      'A command-line tool that helps dyslexic people learn and use bash. It came out of my own experience: the terminal is unforgiving if you read or process text differently, so I built something that makes it less so.',
    status: 'live',
    technologies: ['Bash', 'CLI', 'Accessibility'],
    url: 'https://github.com/errorpleasetryagain/bash-tutor',
    featured: true,
    order: 3,
    problem:
      'The command line assumes you read precisely and remember exact syntax. For dyslexic people that is a real barrier, and most tutorials make it worse with walls of dense text.',
    approach:
      'Built a CLI tutor that breaks bash down into clear, low-pressure steps, with plain language and forgiving prompts. Designed around how I actually learn rather than how documentation is usually written.',
    outcome:
      'A working tool that makes bash more approachable for people who process text differently. It is the project I am most personally attached to, because it solves a problem I have lived.',
    whatIdDoDifferently:
      'I\'d get it in front of more dyslexic users early and let their feedback shape the steps, rather than starting from my own experience alone.',
    details: {
      technicalDetails: [
        'Command-line tutor written in bash',
        'Accessibility-first, dyslexia-friendly design',
        'Plain language and forgiving prompts',
        'Step by step, low-pressure learning',
      ],
    },
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation for Good Living Web Co',
    tagline: 'Running a content network with AI agents in production',
    description:
      'The AI stack behind my content sites. Agents handle content and affiliate scanning, keep affiliate links alive, generate imagery, and power on-site AI assistants grounded in real content. Practical AI in production, not demos.',
    status: 'live',
    technologies: ['Claude API', 'MCP Servers', 'Midjourney', 'RAG', 'Obsidian', 'Google APIs'],
    featured: true,
    order: 4,
    problem:
      'Building and running a network of content sites solo means a huge amount of repetitive work: finding content and affiliate opportunities, keeping links current, producing imagery, and answering reader questions. Doing it all by hand does not scale.',
    approach:
      'I automated the repetitive parts with AI agents and a stack of integrations. Content and niche affiliate scanning surface opportunities. An Amazon affiliate sync checks links and replaces ones that are outdated, moved or broken. Image generation runs through Midjourney wired in via MCP servers. The on-site assistants are grounded with RAG and Obsidian so they answer from a curated knowledge base, and the "Ask Optimal" assistant runs on the Claude API. Google mapping APIs handle location data where content needs it.',
    outcome:
      'A content network that largely maintains itself. The boring, error-prone jobs are automated and stay current, while I keep editorial judgement and final sign-off. It is also where I keep my AI skills genuinely hands-on rather than theoretical.',
    whatIdDoDifferently:
      'I would build proper logging and alerting in from the start. Some of the early automation was held together with tape, and knowing sooner when something silently failed would have saved time.',
    details: {
      technicalDetails: [
        'Content and niche affiliate scanning agents',
        'Automated Amazon affiliate sync, replacing outdated or broken links',
        'Image generation via Midjourney and MCP servers',
        'RAG and Obsidian knowledge base for on-site AI',
        'Claude API powering the "Ask Optimal" assistant',
        'Google mapping APIs and endpoints',
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
