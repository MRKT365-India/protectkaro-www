import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "DPDP Audit Readiness for Shopify",
  description: "See what audit-readiness means operationally for Shopify merchants: live consent capture, status visibility, and reviewable records.",
};

export default function AuditReadinessPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Audit readiness</div>
          <h1 className="page-title">What DPDP audit-readiness actually looks like</h1>
          <p className="page-subtitle">Audit-readiness is not a design style. It is the ability to show that consent capture is active and that the record trail can be reviewed later.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 880 }}>
        <div className="proof-checklist">
          <div className="proof-check"><strong>1.</strong><span>The banner is actually enabled on the store</span></div>
          <div className="proof-check"><strong>2.</strong><span>Protection Status can confirm setup from the dashboard</span></div>
          <div className="proof-check"><strong>3.</strong><span>Consent records can be reviewed without engineering effort</span></div>
          <div className="proof-check"><strong>4.</strong><span>Longer history and export options exist when needed</span></div>
        </div>
        <div className="article-body" style={{ marginTop: 32 }}>
          <p>When merchants talk about being audit-ready, what they usually want is operational confidence. They want to know the workflow is active, visible, and explainable. ProtectKaro supports that with Protection Status, consent log visibility, and a clear Free-to-Pro progression.</p>
          <p>If your current setup only gives you a banner and a screenshot, your proof is weaker than it appears. A stronger setup is one where the merchant can open the app, confirm status, inspect records, and export deeper logs when the business requires it.</p>
          <p>Read next: <Link href="/compare/cookie-banner-vs-audit-ready-consent-records" className="text-link">cookie banner vs audit-ready consent records</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
