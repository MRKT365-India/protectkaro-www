import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Install ProtectKaro, enable the theme embed, test Shopify privacy choices, and review matching consent records.",
};

const STEPS = [
  { n: 1, title: "Install ProtectKaro from Shopify", desc: "The merchant starts from the Shopify App Store and lands in ProtectKaro inside Shopify admin." },
  { n: 2, title: "Enable the App Embed", desc: "The merchant opens Theme Editor, turns on the ProtectKaro banner, and saves the change." },
  { n: 3, title: "Review theme status", desc: "The dashboard checks the active theme configuration. Test a storefront choice separately to verify consent behavior and record delivery." },
  { n: 4, title: "Apply and record consent decisions", desc: "Visitor choices are applied through Shopify. Successfully delivered consent records appear in the app; the banner reports pending delivery and offers retries." },
  { n: 5, title: "Review records in the app", desc: "Merchants can inspect recent consent records from the Consent Audit Log inside Shopify admin." },
  { n: 6, title: "Upgrade for longer record access", desc: "When a 365-day data-access window or CSV export is needed, choose Pro through Shopify's hosted billing page." },
];

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">How it works</div>
          <h1 className="page-title">Apply privacy choices and review the records</h1>
          <p className="page-subtitle">
            ProtectKaro is built to be easy for merchants to activate and easy to verify later.
          </p>
        </div>
      </section>
      <div className="section" style={{ paddingTop: 24, maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ display: "flex", gap: 24, paddingBottom: 40, position: "relative" }}>
              {i < STEPS.length - 1 && (
                <div style={{ position: "absolute", left: 21, top: 44, width: 2, height: "calc(100% - 16px)", background: "rgba(34,197,94,0.15)" }} />
              )}
              <div style={{ flexShrink: 0, width: 44, height: 44, background: "#22c55e", color: "#000", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16 }}>{s.n}</div>
              <div style={{ paddingTop: 10 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: "#f1f5f9" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cta-section">
        <h2 className="cta-title">See the workflow on your own store</h2>
        <p className="cta-sub">Install ProtectKaro free on Shopify and confirm setup from the dashboard.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">Install on Shopify</a>
      </div>
      <Footer />
    </>
  );
}
