import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image src="/logo.jpg" alt="ProtectKaro" width={32} height={32} />
          ProtectKaro
        </Link>
        <div className="nav-links">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/how-it-works">How it works</Link>
          <a href="https://apps.shopify.com/protectkaro" className="nav-cta" rel="noopener noreferrer">
            Install Free
          </a>
        </div>
      </div>
    </nav>
  );
}
