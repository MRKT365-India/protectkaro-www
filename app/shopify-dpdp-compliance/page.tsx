import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import { faqSchema, softwareSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Shopify DPDP Compliance in India",
  description:
    "ProtectKaro helps Shopify merchants in India capture consent, monitor Protection Status, and keep audit-ready consent records for DPDP workflows.",
};

const FAQS = [
  {
    question: "How can a Shopify store prepare for DPDP?",
    answer:
      "Start with live consent capture, confirm the workflow is actually enabled, and keep reviewable consent records inside the app.",
  },
  {
    question: "What should a merchant be able to prove?",
    answer:
      "At minimum: that consent capture is active and that historical consent actions can be reviewed later.",
  },
];

export default function ShopifyDpdpCompliance() {
  return (
    <>
      <JsonLd data={softwareSchema()} />
      <JsonLd data={faqSchema(FAQS)} />
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Shopify + DPDP</div>
          <h1 className="page-title">DPDP compliance for Shopify stores in India</h1>
          <p className="page-subtitle">
            ProtectKaro helps merchants move from “we added a banner” to “we can show how consent was captured and reviewed.”
          </p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 860 }}>
        <div className="article-body">
          <p>For most Shopify merchants, the operational challenge is not installing a compliance app. It is maintaining a workflow that is easy to verify and easy to explain later. ProtectKaro is built to keep that workflow inside Shopify rather than spreading it across ad hoc tools and assumptions.</p>
          <p>The strongest setup starts with three things: live consent capture on the storefront, Protection Status visibility in the app, and a reviewable consent log. That combination gives merchants a more credible answer when asked how consent is being handled.</p>
          <p>Free gets the workflow live with recent audit-log visibility. Pro unlocks deeper proof with longer retention and CSV export. That makes the upgrade story operational, not cosmetic.</p>
        </div>
        <div className="faq-list" style={{ marginTop: 40 }}>
          {FAQS.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h3 className="faq-q">{faq.question}</h3>
              <p className="faq-a">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="cta-section">
        <h2 className="cta-title">Get your Shopify compliance workflow live</h2>
        <p className="cta-sub">Install ProtectKaro and start with a merchant-friendly DPDP workflow.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn">Install on Shopify</a>
      </div>
      <Footer />
    </>
  );
}
