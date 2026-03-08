import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing — ProtectKaro",
  description: "Free DPDP compliance for every Shopify store. Upgrade to Pro for full audit history, CSV exports, and custom branding.",
};

const FREE_FEATURES = [
  "DPDP-compliant consent banner",
  "Consent event logging",
  "90-day audit log history",
  "GDPR compliance webhooks",
  "Live dashboard analytics",
  "Community support",
];

const PRO_FEATURES = [
  "Everything in Free",
  "Full audit log (1-year history)",
  "CSV audit log export",
  "Custom branded banner",
  "Multi-language banner support",
  "Priority email support",
];

export default function Pricing() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "80px 24px 48px", maxWidth: 700, margin: "0 auto" }}>
        <div style={{ display: "inline-block", background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 100, padding: "6px 18px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#a5b4fc", marginBottom: 24 }}>
          Pricing
        </div>
        <h1 style={{ fontSize: "clamp(32px, 6vw, 52px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
          Simple, honest pricing
        </h1>
        <p style={{ fontSize: 18, color: "#94a3b8", maxWidth: 500, margin: "0 auto" }}>
          Start free. Upgrade when you need audit-proof records for agencies or compliance reports.
        </p>
      </section>

      {/* Plans */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 100px", display: "flex", gap: 24, flexWrap: "wrap" as const, justifyContent: "center" }}>

        {/* Free */}
        <div style={{
          flex: "1 1 360px", maxWidth: 420,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 20, padding: "40px 36px",
        }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 12 }}>Free</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
              <span style={{ fontSize: 56, fontWeight: 800, lineHeight: 1 }}>₹0</span>
              <span style={{ color: "#64748b", fontSize: 15 }}>/month</span>
            </div>
            <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>For stores getting started with DPDP compliance.</p>
          </div>

          <a href="https://apps.shopify.com/protectkaro" style={{
            display: "block", textAlign: "center", padding: "13px 24px",
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 10, fontWeight: 700, fontSize: 15, color: "#fff",
            marginBottom: 32, textDecoration: "none",
          }}>
            Install Free
          </a>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {FREE_FEATURES.map(f => (
              <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#cbd5e1" }}>
                <span style={{ color: "#22c55e", fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Pro */}
        <div style={{
          flex: "1 1 360px", maxWidth: 420,
          background: "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.12) 100%)",
          border: "1px solid rgba(99,102,241,0.4)",
          borderRadius: 20, padding: "40px 36px", position: "relative" as const,
        }}>
          <div style={{
            position: "absolute" as const, top: -14, left: "50%", transform: "translateX(-50%)",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            borderRadius: 100, padding: "5px 18px",
            fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#fff",
            whiteSpace: "nowrap" as const,
          }}>
            Recommended
          </div>

          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#a5b4fc", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 12 }}>Pro</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 56, fontWeight: 800, lineHeight: 1 }}>$12</span>
              <span style={{ color: "#64748b", fontSize: 15 }}>/month</span>
            </div>
            <div style={{ color: "#22c55e", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>7-day free trial</div>
            <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>For stores needing audit-proof records and agency-ready compliance reports.</p>
          </div>

          <a href="https://apps.shopify.com/protectkaro" style={{
            display: "block", textAlign: "center", padding: "13px 24px",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            borderRadius: 10, fontWeight: 700, fontSize: 15, color: "#fff",
            marginBottom: 32, textDecoration: "none",
          }}>
            Start Free Trial
          </a>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 14 }}>
            {PRO_FEATURES.map(f => (
              <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#cbd5e1" }}>
                <span style={{ color: "#a5b4fc", fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ strip */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "60px 24px", maxWidth: 720, margin: "0 auto" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, textAlign: "center", marginBottom: 40 }}>Common questions</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 28 }}>
          {[
            ["Do I need a credit card to start?", "No. Install the free plan directly from the Shopify App Store — no credit card required."],
            ["What happens after my Pro trial ends?", "You're automatically moved to the free plan. No charges without your explicit approval."],
            ["Is billing through Shopify?", "Yes. All charges appear on your standard Shopify invoice. Cancel anytime from your Shopify admin."],
            ["Does the free plan handle DPDP compliance?", "Yes. The consent banner, event logging, and webhooks are fully functional on the free plan. Pro adds the deeper audit trail and export features needed for agency audits."],
          ].map(([q, a]) => (
            <div key={q}>
              <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15 }}>{q}</div>
              <div style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
