import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default async function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-24">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
          Writing
        </h1>
        <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
          Notes on tech ops, AI tools, and things I&apos;ve learned along the way.
          I also write evidence-based health content at{' '}
          <a
            href="https://maleoptimal.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[var(--foreground)]"
          >
            maleoptimal.co.uk
          </a>
          .
        </p>
      </div>

      {/* Posts List */}
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:p-10"
          >
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                {post.category}
              </span>
              <span className="text-sm text-[var(--foreground-muted)]">
                {post.date}
              </span>
            </div>

            <div className="mb-4">
              <h2 className="mb-2 text-2xl font-medium text-[var(--foreground)] md:text-3xl">
                {post.title}
              </h2>
              <p className="text-[var(--foreground-muted)]">{post.excerpt}</p>
            </div>

            <Link
              href={`/writing/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--foreground-muted)]"
            >
              Read more
              <svg
                className="ml-1 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </Link>

            <Link
              href={`/writing/${post.slug}`}
              className="absolute inset-0"
              aria-label={`Read ${post.title}`}
            />
          </article>
        ))}
      </div>
    </div>
  );
}
