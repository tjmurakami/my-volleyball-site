import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">
      <h1 className="text-xl font-bold">NVA League</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/teams">Teams</Link>
      </div>
    </nav>
  );
}

