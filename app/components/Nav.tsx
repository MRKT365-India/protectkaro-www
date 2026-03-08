import Link from "next/link";

export function Nav() {
  return (
    <nav style={{ borderBottom: "1px solid #1e293b", padding: "0 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        <Link href="/" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: "#f8fafc" }}>
          🛡️ ProtectKaro
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 14, color: "#94a3b8" }}>
          <Link href="/features" style={{ color: "#94a3b8" }}>Features</Link>
          <Link href="/pricing" style={{ color: "#94a3b8" }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: "#94a3b8" }}>How it works</Link>
          <a
            href="https://apps.shopify.com/protectkaro"
            style={{ background: "#22c55e", color: "#000", padding: "8px 18px", borderRadius: 8, fontWeight: 700 }}
            rel="noopener noreferrer"
          >
            Install Free
          </a>
        </div>
      </div>
    </nav>
  );
}
