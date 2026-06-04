import { Logo } from "./logo";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />
      <NavLinks />
    </header>
  );
}
