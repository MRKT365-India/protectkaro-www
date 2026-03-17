import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Shopify Privacy Compliance in India",
  description: "A practical page for Indian Shopify merchants looking to improve privacy compliance workflows with consent visibility and reviewable records.",
};

export default function ShopifyPrivacyComplianceIndiaPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Privacy compliance</div>
          <h1 className="page-title">Shopify privacy compliance in India</h1>
          <p className="page-subtitle">Indian merchants need more than a storefront banner. They need a workflow they can activate, verify, and explain later.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 880 }}>
        <div className="article-body">
          <p>Privacy compliance in Shopify is usually treated as a front-end problem. Merchants install a banner and assume the job is finished. But operationally, the harder question is whether the merchant can verify the workflow and review records later.</p>
          <p>That is where ProtectKaro is stronger than banner-only positioning. It keeps the workflow visible in Shopify admin and gives merchants a clear path from initial setup to deeper proof. Free gets the workflow live. Pro supports stronger retention and export needs.</p>
          <p>Useful next pages: <Link href="/shopify-dpdp-compliance" className="text-link">DPDP for Shopify</Link>, <Link href="/shopify-consent-log" className="text-link">Shopify consent log</Link>, and <Link href="/pricing" className="text-link">Pricing</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
