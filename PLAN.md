---
title: Adam Turton — Personal Portfolio
status: in-progress
created: 2026-06-15
updated: 2026-06-15
---

# Portfolio Build Plan

**Goal:** Build a personal portfolio website from scratch that positions Adam for senior IT/Tech Ops roles. No paid templates — we own every line.

**Domain:** `adamturton.com` or `adam.turton.tech` (TBD)
**Stack:** Next.js 14 + MDX + Tailwind CSS (matches existing content sites)
**Hosting:** Vercel (familiar workflow, free tier sufficient)
**Timeline:** Weeks, not days — iterate as we go

---

## Design Principles

1. **Outcomes over duties** — Show what you fixed, not what you were responsible for
2. **Thinking over tools** — Explain the why, not just the what
3. **Premium minimalist aesthetic** — Linear/Vercel/Raycast tier. Warm monochrome, typography-first, bento grids
4. **No AI tells** — No Inter font, no emojis, no neon glows, no generic 3-card layouts
5. **Neurodivergence-friendly** — Clear hierarchy, minimal distractions, readable fonts
6. **Mobile-first** — Adam reads on commute, must work on phone
7. **Fast + accessible** — Core Web Vitals in the green, WCAG AA minimum
8. **Living document** — Grows with you, not a static PDF

---

## Site Structure

```
/ (Home)
├── Hero — Value prop, current focus
├── Featured work — 3-4 key projects with outcomes
├── Writing — Latest 3 posts
└── CTA — "Let's talk" / contact

/about
├── Your story — Career arc, not chronology
├── Working style — ADHD as advantage, direct communication
├── What I'm looking for — Role criteria
└── Photo — Professional but not corporate

/experience
├── Timeline view (reverse chrono)
├── Each role: 3-5 outcomes with metrics
├── What I built/fixed/improved
└── Links to proof (where available)

/projects
├── Silver Tracker — Investment tool, scraping, FastAPI
├── Hermetic Library — Personal knowledge, HTML/CSS, GitHub Pages
├── Good Living Co — 6 content sites, Next.js/MDX, affiliate revenue
├── Employment Tribunal — Optional, handled carefully
└── Each project: problem, approach, outcome, what I'd do differently

/writing
├── Blog posts (MDX)
├── Topics: tech ops, AI/agents, neurodivergence at work, passive income
├── Cross-posted to content sites where relevant
└── Comments optional (probably not — noise)

/contact
├── Email
├── LinkedIn
├── GitHub
└── Optional: Calendly link for intro calls

/cv
└── Downloadable PDF (traditional recruiters still want it)
```

---

## Content Strategy

### Home Page Hero

**Headline:** Something like:
- "Technology Operations Leader" (clear, searchable)
- "Building resilient systems and leading teams that deliver" (outcome-focused)

**Subhead:**
- "Currently: [doing X]. Previously: [notable role]. Looking for: [target role]."

**CTA:**
- Primary: "View my work" → /projects
- Secondary: "Get in touch" → /contact

### About Page

**Key points to hit:**
- Career arc: how you got here (not a chronology, a narrative)
- ADHD/autism: framed as advantage (pattern recognition, deep focus, systems thinking)
- Working style: direct, no fluff, bias for action
- What you're looking for: senior IT/Tech Ops, remote/UK, culture fit criteria

**Tone:** Warm, direct, a bit dry. Like a capable colleague who knows their stuff.

### Experience Page

**Format per role:**
```
Role Title @ Company
Dates

**What I did:**
- Built/fixed/led X
- Improved Y by Z%
- Reduced incident response from A to B

**Proof:**
- Link to system/dashboard (if public)
- Link to case study
- testimonial (if available)
```

**Avoid:**
- Duty lists ("responsible for...")
- Corporate jargon ("stakeholder management", "cross-functional collaboration")
- Vague outcomes ("improved efficiency")

### Projects Page

**Each project needs:**
1. **Problem** — What needed solving?
2. **Approach** — Why this solution? What alternatives considered?
3. **Outcome** — What happened? Metrics if possible.
4. **What I'd do differently** — Shows learning, not just bragging

**Projects to include:**
- Silver Tracker (investment tool)
- Hermetic Library (knowledge management)
- Good Living Co (content sites — can link to existing sites)
- Any major work projects (anonymised if needed)

### Writing Page

**Initial posts to write:**
1. "Why I'm building a portfolio instead of updating LinkedIn" (meta, sets tone)
2. "ADHD in Tech Operations: Why it's an advantage" (differentiates you)
3. "What I've learned building 6 passive income sites" (shows business acumen)
4. "AI Agents in Production: What actually works" (shows technical depth)

**Ongoing:**
- 1-2 posts/month
- Cross-post to content sites where relevant
- Use as thinking tool, not just content marketing

---

## Technical Architecture

### Stack

```
Next.js 14 (App Router)
MDX (via @next/mdx)
Tailwind CSS v3.4+
TypeScript (optional, but recommended)
Vercel (hosting + analytics)
```

### File Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (home)
│   ├── about/
│   ├── experience/
│   ├── projects/
│   ├── writing/
│   │   ├── page.tsx (index)
│   │   └── [slug]/
│   │       └── page.tsx (dynamic)
│   ├── contact/
│   └── cv/
├── content/
│   ├── writing/
│   │   ├── first-post.mdx
│   │   └── ...
│   └── projects/
│       ├── silver-tracker.mdx
│       └── ...
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── ...
│   └── sections/
│       ├── hero.tsx
│       ├── project-card.tsx
│       └── ...
├── lib/
│   ├── mdx.ts (content loading)
│   ├── utils.ts
│   └── ...
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   └── ...
├── tailwind.config.ts
├── next.config.js
└── package.json
```

### Design Tokens

```css
:root {
  /* Colours — matches hermetic library */
  --void: #0a0a0f;
  --deep-purple: #1a1a2e;
  --midnight: #16213e;
  --gold: #d4af37;
  --silver: #c0c0c0;
  --text: #f0f0f0;
  --muted: #888;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-serif: 'Georgia', serif;
  
  /* Spacing */
  --container-max: 1000px;
  
  /* Transitions */
  --transition-fast: 150ms;
  --transition-slow: 300ms;
}
```

---

## Build Phases

### Phase 1: Foundation (Week 1)
- [ ] Set up Next.js project
- [ ] Configure Tailwind, MDX, TypeScript
- [ ] Create base layout (header, footer, nav)
- [ ] Define design tokens (colours, typography)
- [ ] Deploy skeleton to Vercel

### Phase 2: Core Pages (Week 2-3)
- [ ] Home page (hero, featured work, CTA)
- [ ] About page (story, working style, photo)
- [ ] Experience page (timeline, outcomes)
- [ ] Projects page (cards, deep-dive templates)
- [ ] Contact page (simple form or mailto)

### Phase 3: Content System (Week 4)
- [ ] MDX writing system
- [ ] Blog index page
- [ ] Individual post pages
- [ ] RSS feed
- [ ] First 3-4 posts written

### Phase 4: Polish (Week 5-6)
- [ ] Mobile responsiveness audit
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance optimisation (Core Web Vitals)
- [ ] SEO (meta tags, Open Graph, sitemap)
- [ ] Analytics (Vercel Analytics or Plausible)

### Phase 5: Launch (Week 7)
- [ ] Domain setup (adamturton.com or adam.turton.tech)
- [ ] Final content review
- [ ] CV PDF export
- [ ] Announce on LinkedIn (ironic, but necessary)
- [ ] Update all content sites with link

---

## Content To Gather

### From Adam:
- [ ] Professional photo (or use existing)
- [ ] CV PDF (for /cv page)
- [ ] List of roles with outcomes (not duties)
- [ ] Project details (Silver Tracker, Hermetic Library, etc.)
- [ ] LinkedIn, GitHub URLs
- [ ] Preferred email for contact
- [ ] Domain preference

### To Write:
- [ ] About page copy (story, working style)
- [ ] Experience page (3-5 roles, outcomes focused)
- [ ] Project writeups (problem, approach, outcome)
- [ ] 3-4 initial blog posts

---

## Success Metrics

**Technical:**
- Lighthouse score >90 (all categories)
- First Contentful Paint <1.5s
- Time to Interactive <3.5s

**Content:**
- 5+ projects documented
- 3+ blog posts published
- All experience roles have outcomes (not duties)

**Outcome:**
- Portfolio live and linked from all content sites
- Used in job applications
- Updated quarterly with new work

---

## Notes

- **No AI-isms** — "delve", "leverage", "it's worth noting" — all banned
- **No em-dashes** — Adam finds them a tell for AI writing
- **Direct tone** — Like a capable colleague, not a marketing brochure
- **ADHD framing** — Advantage, not limitation (pattern recognition, deep focus)
- **Employment tribunal** — Handle carefully, optional inclusion

---

## Next Actions

1. **Adam:** Confirm domain preference (adamturton.com vs adam.turton.tech)
2. **Adam:** Provide professional photo (or we use placeholder)
3. **Me:** Set up Next.js project, push to GitHub
4. **Me:** Create base layout + design tokens
5. **Us:** Iterate on home page copy together

---

*"Your portfolio is proof of your insights, your expertise, and your taste."* — Jessica Hagy
