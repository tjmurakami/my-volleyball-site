import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/teams", label: "Teams" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 mb-8 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/nva-logo.svg" alt="NVA logo" width={44} height={44} className="h-11 w-11" priority />
          <span className="text-lg font-semibold tracking-wide">National Volleyball Association</span>
        </Link>

        <div className="flex items-center gap-4 rounded-full border border-border/60 bg-card/60 px-3 py-1.5 text-sm font-medium text-muted-foreground md:gap-6 md:px-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2.5 transition hover:bg-primary/15 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}