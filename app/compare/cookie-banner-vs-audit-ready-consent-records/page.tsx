import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Cookie Banner vs Audit-Ready Consent Records",
  description: "See the difference between a storefront banner and a stronger record-based compliance workflow for Shopify merchants.",
};

const rows = [
  ["What it solves", "Visible consent prompt", "Visible prompt plus reviewable record trail"],
  ["Proof strength", "Weak on its own", "Stronger operational evidence"],
  ["Merchant visibility", "Usually storefront-only", "Dashboard visibility + consent log"],
  ["Audit readiness", "Limited", "Better suited for review and reporting"],
];

export default function ComparePage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Comparison</div>
          <h1 className="page-title">Cookie banner vs audit-ready consent records</h1>
          <p className="page-subtitle">Banners are necessary, but they are only the start. The record underneath is what makes the workflow credible.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 960 }}>
        <div className="compare-table">
          <div className="compare-head">Dimension</div>
          <div className="compare-head">Cookie banner only</div>
          <div className="compare-head">ProtectKaro approach</div>
          {rows.flatMap((row, index) => row.map((cell, cellIndex) => (
            <div key={`${index}-${cellIndex}`} className="compare-cell">{cell}</div>
          )))}
        </div>
        <div className="article-body" style={{ marginTop: 32 }}>
          <p>Most merchants do not actually want a banner. They want confidence that the compliance workflow is working. That confidence comes from reviewable records, status visibility, and a clear path to deeper proof when needed.</p>
          <p>That is why ProtectKaro positions the banner as the entry point and the consent record as the moat. It is a better business story, a better SEO story, and a better product story.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
