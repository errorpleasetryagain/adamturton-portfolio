import { getAllPosts } from '@/lib/posts';
import WritingCards from '@/components/writing-cards';

export default async function WritingPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-[var(--container-max)] px-6 py-24">
      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-[var(--foreground)] md:text-5xl">
          Blog
        </h1>
        <p className="text-lg leading-relaxed text-[var(--foreground-muted)]">
          Notes on technology operations, leadership and the things I&apos;m
          learning along the way, plus the occasional piece by someone else that
          is worth your time.
        </p>
      </div>

      {/* Posts List */}
      <WritingCards posts={posts} />
    </div>
  );
}
