import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Best Shopify Consent Management App in India",
  description: "Compare what really matters in a Shopify consent management app in India: setup verification, consent logs, retention, and exportability.",
};

export default function BestShopifyConsentManagementIndiaPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Buyer guide</div>
          <h1 className="page-title">What to look for in a Shopify consent management app in India</h1>
          <p className="page-subtitle">The right tool is not just the nicest banner. It is the one that gives merchants stronger visibility and stronger proof.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 900 }}>
        <div className="proof-checklist">
          <div className="proof-check"><strong>1.</strong><span>Can the merchant confirm setup is actually complete?</span></div>
          <div className="proof-check"><strong>2.</strong><span>Can the merchant review consent records inside Shopify admin?</span></div>
          <div className="proof-check"><strong>3.</strong><span>Is there a clear progression from starter plan to deeper audit proof?</span></div>
          <div className="proof-check"><strong>4.</strong><span>Can records be exported when agencies or clients need them?</span></div>
        </div>
        <div className="article-body" style={{ marginTop: 32 }}>
          <p>Those questions reveal the difference between a cosmetic banner tool and an operational compliance workflow. ProtectKaro is designed around that second category: get live quickly, review records clearly, and expand proof when the store grows.</p>
          <p>Read next: <Link href="/blog/best-dpdp-compliance-app-for-shopify-in-india" className="text-link">best DPDP compliance app for Shopify in India</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
