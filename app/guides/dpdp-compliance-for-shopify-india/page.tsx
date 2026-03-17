import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "DPDP Compliance for Shopify India",
  description: "A guide page for Shopify merchants in India covering DPDP compliance workflow, consent visibility, records, and audit readiness.",
};

const FAQS = [
  ["What should a Shopify merchant do first for DPDP?", "Get a live consent workflow in place, confirm it is enabled, and make sure recent records can be reviewed from the app."],
  ["Why are consent records important?", "Because banners only show the collection layer. Records provide the reviewable proof layer behind the workflow."],
  ["When should a merchant upgrade to Pro?", "When longer history, CSV exports, or agency/client reporting become important."],
];

export default function DpdpComplianceGuidePage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Guide</div>
          <h1 className="page-title">DPDP compliance for Shopify merchants in India</h1>
          <p className="page-subtitle">A practical guide to moving from a banner-first setup to a clearer, review-ready consent workflow.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 900 }}>
        <div className="article-body">
          <p>For Shopify merchants in India, DPDP compliance should be treated as an operational workflow, not just a storefront feature. The first goal is not cosmetic banner design. It is getting a consent workflow live, confirming it works, and ensuring the merchant can review records later.</p>
          <p>The strongest setup includes four layers: visible consent collection, Protection Status visibility in the app, reviewable consent records, and a clear path to deeper proof when reporting needs grow. That is what makes the workflow easier to trust internally and easier to explain externally.</p>
          <p>ProtectKaro is built around those layers. Free gets the setup live quickly. Pro helps stores and agencies when retention depth and exports become more important. This makes the upgrade path operational rather than artificial.</p>
          <p>Related pages: <Link href="/shopify-dpdp-compliance" className="text-link">DPDP for Shopify</Link>, <Link href="/dpdp-audit-readiness" className="text-link">DPDP audit readiness</Link>, and <Link href="/compare/free-vs-pro-consent-proof" className="text-link">Free vs Pro consent proof</Link>.</p>
        </div>
        <div className="faq-list" style={{ marginTop: 40 }}>
          {FAQS.map(([q, a]) => (
            <div key={q} className="faq-item">
              <h3 className="faq-q">{q}</h3>
              <p className="faq-a">{a}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
