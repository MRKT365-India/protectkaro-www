import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-navy-border px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-extrabold tracking-tight no-underline text-slate-100">
          🛡️ ProtectKaro
        </Link>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/features" className="hover:text-slate-100 transition-colors no-underline">Features</Link>
          <Link href="/pricing" className="hover:text-slate-100 transition-colors no-underline">Pricing</Link>
          <Link href="/how-it-works" className="hover:text-slate-100 transition-colors no-underline">How it works</Link>
          <a
            href="https://apps.shopify.com/protectkaro"
            className="bg-brand text-black px-4 py-2 rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-opacity"
            rel="noopener noreferrer"
          >
            Install Free
          </a>
        </div>
      </div>
    </nav>
  );
}
