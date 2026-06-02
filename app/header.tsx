import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

    {/*   
      <nav className="text-xs grow justify-end items-center flex">
        <Link
          href="/about"
          className="group p-2"
        >
	  <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
		  About
	  </span>
        </Link>
      </nav>
    */}
    </header>
  );
}
