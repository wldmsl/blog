"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="text-xs grow justify-end items-center flex gap-1">
      <Link href="/" className="group p-2">
        <span
          className={`rounded-xl py-0.5 px-1.5 inline-flex transition-colors ${
            pathname === "/"
              ? "bg-neutral-200 dark:bg-neutral-700"
              : "group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"
          }`}
        >
          diary
        </span>
      </Link>
      <Link href="/portfolio" className="group p-2">
        <span
          className={`rounded-xl py-0.5 px-1.5 inline-flex transition-colors ${
            pathname === "/portfolio"
              ? "bg-neutral-200 dark:bg-neutral-700"
              : "group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700"
          }`}
        >
          portfolio
        </span>
      </Link>
    </nav>
  );
}
