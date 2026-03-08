import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How ProtectKaro collects consent and builds audit trails for Shopify merchants under the DPDP Act 2023.",
};

const STEPS = [
  { n: 1, title: "Merchant installs ProtectKaro", desc: "The merchant clicks Install from the Shopify App Store. Shopify initiates the OAuth flow, which redirects to ProtectKaro's backend. The access token is stored securely." },
  { n: 2, title: "Banner enabled in Theme Editor", desc: "The merchant goes to Online Store → Themes → Customize → App Embeds and toggles the ProtectKaro Banner on. This injects the consent banner script into their theme without any code changes." },
  { n: 3, title: "Visitor lands on the store", desc: "When a customer visits the Shopify storefront for the first time, the consent banner appears at the bottom of the page. A random visitor ID is generated in their browser." },
  { n: 4, title: "Customer makes a consent decision", desc: "The customer clicks Accept All or Essential Only. The choice is immediately sent to the ProtectKaro backend via a secure API call." },
  { n: 5, title: "Consent event is logged", desc: "The backend records the consent event: visitor ID, action, SHA-256 hashed IP, timestamp, and shop. The original IP is discarded immediately — only the hash is stored." },
  { n: 6, title: "Merchant views the audit trail", desc: "The merchant opens ProtectKaro in their Shopify admin. The dashboard shows real-time consent stats and a full audit log of every consent decision made on their store." },
];

export default function HowItWorks() {
  return (
    <>
      <Nav />
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 32px 48px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>How ProtectKaro works</h1>
        <p style={{ fontSize: 17, color: "#64748b", lineHeight: 1.7, maxWidth: 520, margin: "0 auto" }}>
          From installation to audit log — here's exactly how consent is collected and recorded.
        </p>
      </section>
      <div className="section" style={{ paddingTop: 24, maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {STEPS.map((s, i) => (
            <div key={s.n} style={{ display: "flex", gap: 24, paddingBottom: 40, position: "relative" }}>
              {/* Line connector */}
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
        <h2 className="cta-title">See it in action</h2>
        <p className="cta-sub">Install ProtectKaro free on your Shopify store.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">Install Free on Shopify</a>
      </div>
      <Footer />
    </>
  );
}
