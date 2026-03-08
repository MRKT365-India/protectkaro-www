import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Features",
  description: "ProtectKaro features — DPDP consent banner, audit log, privacy by design, and more for Shopify merchants.",
};

const FEATURES = [
  { icon: "📋", title: "DPDP Consent Banner", desc: "A fully customisable consent banner appears on your storefront for every new visitor. Merchants can configure the banner text, colours, and button labels to match their brand. The banner fires before any tracking scripts load, ensuring you collect consent before processing data.", detail: "Supports Accept All and Essential Only options out of the box." },
  { icon: "🔍", title: "Tamper-Proof Audit Log", desc: "Every consent decision is recorded with a unique visitor ID, timestamp, consent action, and hashed identifiers. The audit log is immutable — records cannot be edited or deleted by merchants, ensuring integrity for regulatory inspection.", detail: "Export your full consent history as CSV for compliance submissions." },
  { icon: "🔒", title: "Privacy by Design", desc: "ProtectKaro stores zero personally identifiable information. Visitor IDs are randomly generated per session. IP addresses and user agents are hashed with SHA-256 before storage. The original values are never written to our database.", detail: "DPDP Act 2023 and GDPR compliant data handling by default." },
  { icon: "⚡", title: "5-Minute Setup", desc: "ProtectKaro installs in one click from the Shopify App Store. After OAuth, you enable the banner from Online Store → Themes → App Embeds. No code changes, no developer needed, no theme modifications.", detail: "Works with all Online Store 2.0 themes including Dawn, Sense, and Refresh." },
  { icon: "📊", title: "Live Dashboard", desc: "Your ProtectKaro dashboard inside Shopify admin shows real-time consent statistics: total events, acceptance rate, Essential Only rate, and recent consent events. Refresh at any time to see the latest data.", detail: "Accessible from Shopify admin — no separate login required." },
  { icon: "🔔", title: "GDPR & DPDP Webhooks", desc: "ProtectKaro registers all mandatory compliance webhooks: customer data requests, customer data redaction, shop data redaction, and app uninstalled. Webhook payloads are HMAC-verified before processing.", detail: "Fully compliant with Shopify's GDPR and DPDP webhook requirements." },
];

export default function Features() {
  return (
    <>
      <Nav />
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 32px 48px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>Built for DPDP compliance</h1>
        <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
          Every feature in ProtectKaro is designed around the requirements of India's Digital Personal Data Protection Act 2023.
        </p>
      </section>
      <div className="section" style={{ paddingTop: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card" style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, color: "#f1f5f9" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 12 }}>{f.desc}</p>
              <p style={{ fontSize: 13, color: "#22c55e", fontWeight: 500 }}>✓ {f.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-section">
        <h2 className="cta-title">Ready to get compliant?</h2>
        <p className="cta-sub">Free for all Shopify merchants. No credit card required.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">Install Free on Shopify</a>
      </div>
      <Footer />
    </>
  );
}
