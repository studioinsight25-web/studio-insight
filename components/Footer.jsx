export default function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-ink-soft">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Studio Insight. Alle rechten voorbehouden.</p>
          <nav className="flex gap-5">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Disclaimer</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
