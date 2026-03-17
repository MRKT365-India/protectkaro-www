import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Free vs Pro Consent Proof",
  description: "See the practical difference between Free and Pro in ProtectKaro: recent visibility vs deeper audit-proof history and CSV export.",
};

const rows = [
  ["Goal", "Get the workflow live", "Support deeper audit/reporting needs"],
  ["Audit log window", "90 days", "1 year"],
  ["CSV export", "Not included", "Included"],
  ["Best for", "New stores / initial setup", "Agencies / mature stores / reporting needs"],
];

export default function FreeVsProConsentProofPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Comparison</div>
          <h1 className="page-title">Free vs Pro: what changes in consent proof?</h1>
          <p className="page-subtitle">Free gets merchants live quickly. Pro is for teams that need longer retention, exportability, and stronger operational proof.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 960 }}>
        <div className="compare-table">
          <div className="compare-head">Dimension</div>
          <div className="compare-head">Free</div>
          <div className="compare-head">Pro</div>
          {rows.flatMap((row, index) => row.map((cell, cellIndex) => (
            <div key={`${index}-${cellIndex}`} className="compare-cell">{cell}</div>
          )))}
        </div>
        <div className="article-body" style={{ marginTop: 32 }}>
          <p>The key difference is not cosmetic. Free is enough to get the workflow live and visible. Pro becomes valuable when the store needs deeper evidence over a longer time window or needs CSV exports for audits, agency reporting, or client reviews.</p>
          <p>Next steps: <Link href="/pricing" className="text-link">Pricing</Link>, <Link href="/features/consent-records" className="text-link">Consent Records</Link>, and <Link href="/for-agencies" className="text-link">For Agencies</Link>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
