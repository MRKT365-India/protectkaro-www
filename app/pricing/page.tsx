import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import { pricingPlans } from "../../lib/site";
import { faqSchema, softwareSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Pricing",
  description: "ProtectKaro pricing: Free provides a 90-day data-access window; Pro provides 365 days and CSV export.",
};

const PRICING_FAQS = [
  { question: "What is included in Free?", answer: "Free includes the privacy-choice banner, consent recording, detected theme status, and a 90-day data-access window." },
  { question: "What changes on Pro?", answer: "Pro provides a 365-day data-access window and CSV export for stores and agencies." },
  { question: "Is billing handled by Shopify?", answer: "Yes. Billing runs through Shopify and appears on the merchant's normal Shopify invoice." },
  { question: "Can I start free and upgrade later?", answer: "Yes. Start on Free, get the workflow live, then upgrade when you need longer data-access windows and exports." },
  { question: "What are the Pro billing options?", answer: "Pro costs USD 12/month or USD 99/year, with a seven-day trial. Choose your billing interval on Shopify's hosted plan-selection page." },
  { question: "Do access windows delete older records?", answer: "No. Free's 90-day and Pro's 365-day windows control which records you can access; they do not schedule automatic deletion." },
];

export default function Pricing() {
  return (
    <>
      <JsonLd data={softwareSchema()} />
      <JsonLd data={faqSchema(PRICING_FAQS)} />
      <Nav />

      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Pricing</div>
          <h1 className="page-title">Simple pricing aligned with the app</h1>
          <p className="page-subtitle">
            Start free for Shopify privacy choices and recent consent records. Pro adds a longer access window and CSV export.
          </p>
        </div>
      </section>

      <section className="pricing-grid-shell">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={plan.id === "pro" ? "plan-card plan-card-pro" : "plan-card"}>
            {"recommended" in plan && plan.recommended ? <div className="plan-badge">Recommended</div> : null}
            <div className="plan-header">
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price-row">
                <span className="plan-price">{plan.price}</span>
                <span className="plan-cadence">{plan.cadence}</span>
              </div>
              {"annualPrice" in plan ? <div className="plan-trial">Or {plan.annualPrice}</div> : null}
              {"trial" in plan && plan.trial ? <div className="plan-trial">{plan.trial}</div> : null}
              <p className="plan-desc">{plan.description}</p>
            </div>

            <a href="https://apps.shopify.com/protectkaro" className={plan.id === "pro" ? "plan-cta plan-cta-pro" : "plan-cta"} rel="noopener noreferrer">
              {plan.cta}
            </a>

            <ul className="plan-feature-list">
              {plan.features.map((feature) => (
                <li key={feature}><span>✓</span>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section proof-section" style={{ maxWidth: 980, paddingTop: 10 }}>
        <div className="proof-copy">
          <h2 className="section-title left">Choose the record-access window you need</h2>
          <p className="proof-text">Free provides access to the last 90 days of consent records. Pro provides 365 days and CSV export. Older records are not automatically deleted when an access window ends.</p>
          <p className="proof-text">Open ProtectKaro inside Shopify admin and choose your plan through Shopify&apos;s hosted billing page. No separate ProtectKaro login is required.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="faq-list">
          {PRICING_FAQS.map(({ question: q, answer: a }) => (
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
