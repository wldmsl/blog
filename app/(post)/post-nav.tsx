"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import type { Post } from "@/app/get-posts";

export function PostNav({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  const currentId = segments[segments.length - 1];
  const currentIndex = posts.findIndex((p) => p.id === currentId);

  if (currentIndex === -1) return null;

  const prev = posts[currentIndex + 1] ?? null; // posts는 최신순이라 +1이 이전 글
  const next = posts[currentIndex - 1] ?? null; // -1이 다음(더 최신) 글

  function postHref(post: Post) {
    return `/${new Date(post.date).getFullYear()}/${post.id}`;
  }

  return (
    <nav className="flex justify-between items-center mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-sm">
      {prev ? (
        <Link
          href={postHref(prev)}
          className="group flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors max-w-[45%]"
        >
          <span className="text-lg leading-none">←</span>
          <span className="truncate group-hover:underline underline-offset-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          href={postHref(next)}
          className="group flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors max-w-[45%] text-right"
        >
          <span className="truncate group-hover:underline underline-offset-2">
            {next.title}
          </span>
          <span className="text-lg leading-none">→</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
