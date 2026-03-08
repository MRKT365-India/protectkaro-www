import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = { title: "Pricing", description: "ProtectKaro is free for all Shopify merchants. No credit card required." };

export default function Pricing() {
  return (
    <>
      <Nav />
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Simple, honest pricing</h1>
        <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 60 }}>No tiers, no surprises. ProtectKaro is free.</p>
        <div style={{ background: "#1e293b", border: "2px solid #22c55e", borderRadius: 20, padding: "48px 40px", maxWidth: 360, margin: "0 auto" }}>
          <div style={{ color: "#22c55e", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Free Forever</div>
          <div style={{ fontSize: 64, fontWeight: 800, marginBottom: 4 }}>₹0</div>
          <p style={{ color: "#64748b", fontSize: 14, marginBottom: 32 }}>per month</p>
          <ul style={{ textAlign: "left", marginBottom: 32, display: "flex", flexDirection: "column", gap: 12 }}>
            {["Unlimited consent events", "Full audit log history", "DPDP-compliant consent banner", "Dashboard analytics", "GDPR webhook support", "Email support"].map((f) => (
              <li key={f} style={{ fontSize: 14, color: "#cbd5e1", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#22c55e", fontWeight: 700 }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <a href="https://apps.shopify.com/protectkaro" style={{ display: "block", background: "#22c55e", color: "#000", fontWeight: 700, padding: "14px", borderRadius: 10, textAlign: "center" }} rel="noopener noreferrer">
            Install Free on Shopify
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
