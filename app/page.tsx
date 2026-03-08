import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { InstallForm } from "./components/InstallForm";

export const metadata: Metadata = {
  title: "ProtectKaro — DPDP Compliance for Shopify Stores",
  description: "Collect consent, build tamper-proof audit trails, and stay compliant with India's Digital Personal Data Protection Act 2023. Free for Shopify merchants.",
};

const FEATURES = [
  { icon: "📋", title: "DPDP Consent Banner", desc: "Show a legally compliant consent banner to every storefront visitor. Customisable design — no code required." },
  { icon: "🔍", title: "Tamper-Proof Audit Log", desc: "Every consent decision is timestamped and stored immutably. Export your audit trail any time for regulatory review." },
  { icon: "🔒", title: "Privacy by Design", desc: "No PII is ever stored. Visitor IDs are anonymous. Only SHA-256 hashed IPs — DPDP compliant from day one." },
  { icon: "⚡", title: "5-Minute Setup", desc: "Install from Shopify, enable the App Embed in your theme, done. No developer or code changes needed." },
  { icon: "📊", title: "Live Dashboard", desc: "See consent stats in real time from your Shopify admin. Track acceptance rates and consent trends." },
  { icon: "🇮🇳", title: "Built for India", desc: "Specifically designed for Indian merchants operating under the DPDP Act 2023. GDPR-compatible too." },
];

const STEPS = [
  { n: 1, title: "Install from Shopify App Store", desc: "One click, OAuth handled automatically. You're in the dashboard in seconds." },
  { n: 2, title: "Enable the consent banner", desc: "Online Store → Themes → App Embeds → toggle ProtectKaro on. Save. That's it." },
  { n: 3, title: "Stay audit-ready", desc: "Every consent decision is logged. View your audit trail from the ProtectKaro dashboard in Shopify admin." },
];

const FAQS = [
  { q: "What is the DPDP Act?", a: "India's Digital Personal Data Protection Act 2023 requires businesses to obtain explicit consent before collecting personal data. Shopify merchants selling to Indian customers must comply." },
  { q: "Is ProtectKaro really free?", a: "Yes. Free for all Shopify merchants with no usage limits. We may introduce paid plans for advanced features — existing users always keep a free tier." },
  { q: "Does it work with any Shopify theme?", a: "Yes. ProtectKaro uses Shopify's App Embed system, which works with any Online Store 2.0 theme including Dawn, Debut, and custom themes." },
  { q: "What data does ProtectKaro store?", a: "Only anonymous consent records: a randomly generated visitor ID, consent action (accept/reject), and hashed timestamp. No names, emails, or Shopify customer records." },
  { q: "Does it work for GDPR too?", a: "Yes. The consent model is compatible with GDPR. ProtectKaro is regulation-agnostic — it captures consent regardless of which regulation applies." },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <Image src="/logo.jpg" alt="ProtectKaro" width={80} height={80} className="hero-logo" />
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Built for India's DPDP Act 2023
          </div>
          <h1 className="hero-title">
            DPDP Compliance for<br />
            <span>Your Shopify Store</span>
          </h1>
          <p className="hero-sub">
            Collect consent, log every decision, and stay audit-ready under India's Digital Personal Data Protection Act — free, in under 5 minutes.
          </p>
          <InstallForm />
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        Trusted by Shopify merchants in India &nbsp;·&nbsp; DPDP Act 2023 compliant &nbsp;·&nbsp; Free forever
      </div>

      {/* Features */}
      <div className="section">
        <h2 className="section-title">Everything you need to stay compliant</h2>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="section-dark">
        <h2 className="section-title">Up and running in 3 steps</h2>
        <div className="steps-inner">
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div className="step-num">{s.n}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="section">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <div key={faq.q} className="faq-item">
              <h3 className="faq-q">{faq.q}</h3>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2 className="cta-title">Start collecting consent today</h2>
        <p className="cta-sub">Free for all Shopify merchants. No limits, no credit card.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">
          Install on Shopify — It's Free
        </a>
      </div>

      <Footer />
    </>
  );
}
