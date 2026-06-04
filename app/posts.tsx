"use client";

import Link from "next/link";
import { Suspense } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Posts({ posts: initialPosts }) {
  const { data: posts } = useSWR("/api/posts", fetcher, {
    fallbackData: initialPosts,
    refreshInterval: 5000,
  });

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10">
        <List posts={posts} />
      </main>
    </Suspense>
  );
}

function List({ posts }) {
  return (
    <div className="font-mono text-sm">
      <div className="flex text-neutral-400 dark:text-neutral-500 text-xs pb-2 border-b border-neutral-200 dark:border-neutral-800">
        <span className="w-14 md:w-16 shrink-0">date</span>
        <span>title</span>
      </div>

      {posts.map((post, i: number) => {
        const year = getYear(post.date);
        const firstOfYear = !posts[i - 1] || getYear(posts[i - 1].date) !== year;

        return (
          <Link
            key={post.id}
            href={`/${year}/${post.id}`}
            className="flex items-baseline py-2.5 border-b border-neutral-100 dark:border-neutral-800/60 group"
          >
            <span className="w-14 md:w-16 shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
              {firstOfYear ? year : ""}
            </span>
            <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
              {post.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}
