import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Shopify Consent Log",
  description: "Learn why a Shopify consent log matters and how ProtectKaro gives merchants a clearer record workflow than banner-only tools.",
};

export default function ShopifyConsentLogPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Consent log</div>
          <h1 className="page-title">Why a Shopify consent log matters</h1>
          <p className="page-subtitle">If a merchant cannot review consent activity later, the compliance workflow is harder to trust and harder to explain.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 860 }}>
        <div className="article-body">
          <p>A consent log is one of the most practical product surfaces in compliance software. It translates a hidden backend process into something the merchant can inspect from Shopify admin. That reduces uncertainty and makes the product more useful during reviews, client conversations, and internal operations.</p>
          <p>ProtectKaro gives stores a clear path here. Free includes recent audit-log visibility so merchants can confirm the workflow is operating. Pro extends that with a longer history and CSV export for deeper reporting needs.</p>
          <p>This is why the consent log is not an “extra feature.” It is part of the core value proposition. Related pages: <Link href="/features/consent-records" className="text-link">Consent Records</Link> and <Link href="/pricing" className="text-link">Pricing</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
