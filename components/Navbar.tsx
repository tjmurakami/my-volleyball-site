import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 mb-6 flex items-center justify-between border-b border-border/70 bg-background/70 p-6 backdrop-blur">
      <h1 className="text-xl font-bold">NVA League</h1>

      <div className="flex gap-6 text-sm font-medium text-muted-foreground">
        <Link href="/">Home</Link>
        <Link href="/teams">Teams</Link>
      </div>
    </nav>
  );
}

