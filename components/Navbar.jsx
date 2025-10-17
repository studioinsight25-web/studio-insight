import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl">
          Studio <span className="text-brand-dark">Insight</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/reviews" className="text-ink-soft hover:text-ink transition">Reviews</Link>
          <Link href="/#about" className="text-ink-soft hover:text-ink transition">Over</Link>
        </nav>
      </div>
    </header>
  );
}
