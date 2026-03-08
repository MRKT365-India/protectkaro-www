import type { Metadata } from "next";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { InstallForm } from "./components/InstallForm";

export const metadata: Metadata = {
  title: "ProtectKaro — DPDP Compliance for Shopify Stores",
  description: "Collect consent, build tamper-proof audit trails, and stay compliant with India's Digital Personal Data Protection Act 2023. Free for Shopify merchants.",
};

const FEATURES = [
  { icon: "📋", title: "DPDP Consent Banner", desc: "Show a legally compliant consent banner to every storefront visitor. Customisable design with no code required." },
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
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "96px 24px 72px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.3)", padding: "4px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, marginBottom: 24, letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Built for India's DPDP Act 2023
        </div>
        <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
          DPDP Compliance for<br />Your Shopify Store
        </h1>
        <p style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, margin: "0 auto 40px", maxWidth: 520 }}>
          Collect consent, log every decision, and stay audit-ready under India's Digital Personal Data Protection Act — free, in under 5 minutes.
        </p>
        <InstallForm />
      </section>

      {/* Trust strip */}
      <div style={{ borderTop: "1px solid #1e293b", borderBottom: "1px solid #1e293b", padding: "16px 24px", textAlign: "center", fontSize: 13, color: "#64748b" }}>
        Trusted by Shopify merchants in India &nbsp;·&nbsp; DPDP Act 2023 compliant &nbsp;·&nbsp; Free forever
      </div>

      {/* Features */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>Everything you need to stay compliant</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {FEATURES.map((f) => (
            <div key={f.title} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 16, padding: "28px 24px" }}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: "#1e293b", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 48, letterSpacing: "-0.02em" }}>Up and running in 3 steps</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, maxWidth: 900, margin: "0 auto" }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ textAlign: "center" }}>
              <div style={{ width: 44, height: 44, background: "#22c55e", color: "#000", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, margin: "0 auto 16px" }}>{s.n}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>Frequently asked questions</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq) => (
            <div key={faq.q} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "20px 24px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 8px" }}>{faq.q}</h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 600, margin: "0 auto", padding: "80px 24px 100px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Start collecting consent today</h2>
        <p style={{ fontSize: 16, color: "#94a3b8", margin: "0 0 32px" }}>Free for all Shopify merchants. No limits, no credit card.</p>
        <a
          href="https://apps.shopify.com/protectkaro"
          style={{ display: "inline-block", background: "#22c55e", color: "#000", fontWeight: 700, fontSize: 16, padding: "14px 32px", borderRadius: 12 }}
          rel="noopener noreferrer"
        >
          Install on Shopify — It's Free
        </a>
      </section>

      <Footer />
    </>
  );
}
