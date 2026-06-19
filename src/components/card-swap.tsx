'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { PostMetadata } from '@/lib/posts';

interface CardSwapProps {
  posts: PostMetadata[];
  /** Auto-advance interval in ms. */
  interval?: number;
}

/**
 * A stack of post cards that swap one at a time, reactbits card-swap style.
 * The front card animates out and the next comes forward, cycling through.
 * Auto-advances, and the user can click the stack to advance manually.
 * Pauses on hover.
 */
export default function CardSwap({ posts, interval = 3800 }: CardSwapProps) {
  const [top, setTop] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setTop((t) => (t + 1) % posts.length);
  }, [posts.length]);

  useEffect(() => {
    if (paused || posts.length <= 1) return;
    const id = setInterval(advance, interval);
    return () => clearInterval(id);
  }, [advance, interval, paused, posts.length]);

  if (posts.length === 0) return null;

  // Show up to 4 cards in the stack, ordered from the current top.
  const visible = Array.from({ length: Math.min(4, posts.length) }, (_, i) => {
    const idx = (top + i) % posts.length;
    return { post: posts[idx], depth: i };
  });

  return (
    <div
      className="relative mx-auto h-[420px] w-full max-w-md"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ perspective: '1200px' }}
    >
      {visible
        .slice()
        .reverse()
        .map(({ post, depth }) => {
          const isFront = depth === 0;
          const isLink = post.type === 'link';
          return (
            <motion.div
              key={post.slug}
              initial={false}
              animate={{
                y: depth * 18,
                scale: 1 - depth * 0.05,
                opacity: depth > 2 ? 0 : 1,
                rotateX: depth * 1.5,
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute inset-x-0 top-0"
              style={{ zIndex: 10 - depth, transformStyle: 'preserve-3d' }}
            >
              <div
                className={`flex h-[360px] flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-lg)] ${
                  isFront ? '' : 'pointer-events-none'
                }`}
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[var(--accent-blue-bg)] px-3 py-1 text-xs font-medium text-[var(--accent-blue-text)]">
                      {isLink ? 'Worth reading' : post.category}
                    </span>
                    {isLink && post.source && (
                      <span className="text-xs font-medium uppercase tracking-wider text-[var(--foreground-muted)]">
                        {post.source}
                      </span>
                    )}
                    <span className="text-sm text-[var(--foreground-muted)]">{post.date}</span>
                  </div>
                  <h3 className="mb-3 text-2xl font-medium leading-tight text-[var(--foreground)]">
                    {post.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)]">{post.excerpt}</p>
                </div>

                <Link
                  href={`/writing/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--foreground-muted)]"
                >
                  {isLink ? 'Read my take' : 'Read more'}
                  <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          );
        })}

      {/* Controls */}
      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {posts.map((_, i) => (
          <button
            key={i}
            onClick={() => setTop(i)}
            aria-label={`Show post ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === top ? 'w-6 bg-[var(--foreground)]' : 'w-1.5 bg-[var(--border)]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
