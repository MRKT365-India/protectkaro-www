import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Features",
  description: "ProtectKaro features for Shopify merchants: Protection Status, consent records, audit log visibility, exports, and privacy-first DPDP workflows.",
};

const FEATURES = [
  {
    icon: "🛡️",
    title: "Protection Status",
    desc: "Review the app's detected theme embed status in Shopify admin.",
    detail: "Test a storefront choice separately to verify consent behavior and record delivery.",
  },
  {
    icon: "🧾",
    title: "Consent Audit Log",
    desc: "Review consent activity inside the app instead of relying on storefront screenshots or assumptions.",
    detail: "Free provides a 90-day data-access window; Pro provides 365 days and CSV export.",
  },
  {
    icon: "📤",
    title: "CSV export on Pro",
    desc: "Download consent records for deeper internal review, agency workflows, or audit preparation.",
    detail: "Designed for teams that need more than in-app visibility.",
  },
  {
    icon: "⚡",
    title: "Theme Editor setup",
    desc: "Install, enable the App Embed, and confirm Protection Status — all from a Shopify-native workflow.",
    detail: "No theme code changes required.",
  },
  {
    icon: "🔒",
    title: "Privacy-first data handling",
    desc: "ProtectKaro avoids storing raw customer profile data and focuses on audit-friendly consent records.",
    detail: "Built for proof strength without unnecessary data exposure.",
  },
  {
    icon: "🔔",
    title: "Shopify compliance webhooks",
    desc: "Receives Shopify privacy requests and verified store-uninstall notifications.",
    detail: "Request handling supports merchant operations; it does not certify legal compliance.",
  },
];

export default function Features() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Features</div>
          <h1 className="page-title">Built for consent proof, not just banner cosmetics</h1>
          <p className="page-subtitle">
            ProtectKaro gives Shopify merchants the operational layer behind DPDP compliance: status visibility, record visibility, and stronger proof workflows.
          </p>
        </div>
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
        <h2 className="cta-title">Get the workflow live first</h2>
        <p className="cta-sub">Start on Free, then upgrade when you need longer data-access windows and exports.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">Install on Shopify</a>
      </div>
      <Footer />
    </>
  );
}
