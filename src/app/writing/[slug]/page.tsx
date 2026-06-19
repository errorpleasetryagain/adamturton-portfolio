import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import * as fs from 'fs';
import * as path from 'path';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function parseFrontmatter(content: string) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return { frontmatter: {}, content };
  
  const frontmatter = frontmatterMatch[1]
    .split('\n')
    .reduce((acc: Record<string, string>, line) => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length > 0) {
        acc[key.trim()] = valueParts.join(':').trim();
      }
      return acc;
    }, {});
  
  const contentStart = content.indexOf('---\n', 3) + 4;
  return { frontmatter, content: content.slice(contentStart) };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function inline(s: string): string {
  // links [text](url), then bold **text**
  return escapeHtml(s)
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="font-medium text-[var(--foreground)] underline underline-offset-2">$1</a>'
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-medium text-[var(--foreground)]">$1</strong>');
}

/** A small, safe markdown-to-HTML converter for the basics we use. */
function renderMarkdown(md: string): string {
  const blocks = md.trim().split(/\n{2,}/);
  return blocks
    .map((block) => {
      const b = block.trim();
      if (!b) return '';
      if (b.startsWith('# ')) {
        // The page already shows the title; skip the leading H1.
        return '';
      }
      if (b.startsWith('## ')) {
        return `<h2 class="mt-10 mb-3 text-xl font-medium text-[var(--foreground)]">${inline(b.slice(3))}</h2>`;
      }
      if (b.startsWith('### ')) {
        return `<h3 class="mt-8 mb-2 text-lg font-medium text-[var(--foreground)]">${inline(b.slice(4))}</h3>`;
      }
      // ordered list
      if (/^\d+\.\s/.test(b)) {
        const items = b
          .split('\n')
          .map((l) => l.replace(/^\d+\.\s/, '').trim())
          .filter(Boolean)
          .map((l) => `<li class="mb-2">${inline(l)}</li>`)
          .join('');
        return `<ol class="mb-5 ml-5 list-decimal space-y-1">${items}</ol>`;
      }
      // unordered list
      if (/^[-*]\s/.test(b)) {
        const items = b
          .split('\n')
          .map((l) => l.replace(/^[-*]\s/, '').trim())
          .filter(Boolean)
          .map((l) => `<li class="mb-2">${inline(l)}</li>`)
          .join('');
        return `<ul class="mb-5 ml-5 list-disc space-y-1">${items}</ul>`;
      }
      // paragraph
      return `<p class="mb-5 leading-relaxed">${inline(b.replace(/\n/g, ' '))}</p>`;
    })
    .join('');
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postsDirectory = path.join(process.cwd(), 'src/content/writing');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { content: mdxContent } = parseFrontmatter(fileContent);

  return (
    <article className="mx-auto max-w-[var(--container-max)] px-6 py-24">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/writing"
          className="inline-flex items-center text-sm font-medium text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        >
          <svg
            className="mr-1 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M17 7L7 17M7 7h10M7 7v10" />
          </svg>
          Back to writing
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
            {post.type === 'link' ? 'Worth reading' : post.category}
          </span>
          {post.type === 'link' && post.source && (
            <span className="text-xs font-medium uppercase tracking-wider text-[var(--foreground-muted)]">
              {post.source}
            </span>
          )}
          <span className="text-sm text-[var(--foreground-muted)]">
            {post.date}
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
          {post.title}
        </h1>
        {post.type === 'link' && post.url && (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
          >
            Read the original
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </header>

      {/* Content */}
      <div
        className="max-w-2xl text-lg text-[var(--foreground-muted)]"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(mdxContent) }}
      />
    </article>
  );
}
