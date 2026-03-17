import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "ProtectKaro for Agencies",
  description: "ProtectKaro helps agencies give Shopify clients a clearer DPDP compliance workflow with status visibility, consent logs, and stronger proof.",
};

export default function ForAgenciesPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Agencies</div>
          <h1 className="page-title">Give clients stronger proof than a banner screenshot</h1>
          <p className="page-subtitle">ProtectKaro helps agencies install a client-friendly DPDP workflow with reviewable records, status visibility, and a clear upgrade path.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 920 }}>
        <div className="mini-grid">
          <div className="mini-card"><strong>Faster handoff</strong><span>Clients can verify Protection Status and review logs in Shopify admin without needing agency intervention for every check.</span></div>
          <div className="mini-card"><strong>Clearer proof</strong><span>Consent records are easier to explain in client reviews than a banner-only setup.</span></div>
          <div className="mini-card"><strong>Monetizable upgrade path</strong><span>Free gets stores live; Pro supports deeper reporting and export needs for mature accounts.</span></div>
        </div>
        <div className="article-body" style={{ marginTop: 32 }}>
          <p>Agencies do not just need install speed. They need a workflow they can hand off confidently. ProtectKaro is designed for that reality: set it up, confirm status, review the log, and upgrade when the client needs stronger reporting.</p>
          <p>That makes the product easier to demo and easier to justify commercially. It also makes agencies look better because they are not selling a cosmetic widget. They are selling a process with proof behind it.</p>
          <p>Related reading: <Link href="/shopify-consent-log" className="text-link">Shopify consent log</Link> and <Link href="/dpdp-audit-readiness" className="text-link">DPDP audit readiness</Link>.</p>
        </div>
      </section>
      <section className="section proof-section" style={{ maxWidth: 980, paddingTop: 0 }}>
        <div className="proof-copy">
          <div className="page-badge">Agency proof</div>
          <h2 className="section-title left">A product surface you can show in client conversations</h2>
          <p className="proof-text">The billing and plan view helps agencies explain the operational difference between starter implementation and deeper proof workflows. It makes the upsell story cleaner and more concrete.</p>
        </div>
        <div className="proof-panel">
          <div className="proof-image-card">
            <Image src="/images/product/plan-billing.jpg" alt="ProtectKaro plan and billing screen useful for agency client discussions" width={1200} height={900} className="proof-image" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
