import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = { title: "Privacy Policy" };

const S = { h2: { fontSize: 20, fontWeight: 700, margin: "32px 0 8px" } as React.CSSProperties, p: { fontSize: 15, color: "#94a3b8", lineHeight: 1.7, margin: "0 0 12px" } as React.CSSProperties };

export default function Privacy() {
  return (
    <>
      <Nav />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "#64748b", marginBottom: 40 }}>Last updated: March 8, 2026</p>
        <h2 style={S.h2}>1. Who We Are</h2>
        <p style={S.p}>ProtectKaro is a Shopify app developed by MRKT365 R&D India Pvt Ltd. We help Shopify merchants comply with India's Digital Personal Data Protection Act, 2023.</p>
        <h2 style={S.h2}>2. What Data We Collect</h2>
        <p style={S.p}>When a customer interacts with the consent banner, we collect: anonymous visitor ID, consent action, SHA-256 hashed IP address, SHA-256 hashed user agent, and timestamp. We do <strong>not</strong> collect names, emails, phone numbers, or any Shopify customer records.</p>
        <h2 style={S.h2}>3. Data Retention</h2>
        <p style={S.p}>Consent records are retained for 3 years. Merchants may request deletion at any time by uninstalling the app or contacting us.</p>
        <h2 style={S.h2}>4. Data Sharing</h2>
        <p style={S.p}>We do not sell, share, or transfer data to third parties.</p>
        <h2 style={S.h2}>5. Contact</h2>
        <p style={S.p}>Email: <a href="mailto:kashif@mrkt365.co.in" style={{ color: "#22c55e" }}>kashif@mrkt365.co.in</a><br />MRKT365 R&D India Pvt Ltd, Gurgaon, Haryana, India</p>
      </div>
      <Footer />
    </>
  );
}
