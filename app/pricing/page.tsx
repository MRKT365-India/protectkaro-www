import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { JsonLd } from "../components/JsonLd";
import { pricingPlans } from "../../lib/site";
import { faqSchema, softwareSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Pricing",
  description: "ProtectKaro pricing for Shopify merchants: Free includes 90-day consent logs, and Pro adds 1-year history plus CSV export.",
};


const PRICING_FAQS = [
  { question: "What is included in Free?", answer: "Free includes the consent banner, event logging, Protection Status visibility, and a 90-day audit log window inside the app." },
  { question: "What changes on Pro?", answer: "Pro adds a full 1-year audit log, CSV export, and deeper proof workflows for stores and agencies." },
  { question: "Is billing handled by Shopify?", answer: "Yes. Billing runs through Shopify and appears on the merchant's normal Shopify invoice." },
  { question: "Can I start free and upgrade later?", answer: "Yes. Start on Free, get the workflow live, then upgrade when you need longer retention and exports." },
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
            Start free for live consent capture and recent records. Upgrade when you need longer history, exports, and agency-ready proof.
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
