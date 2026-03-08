import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = { title: "Terms of Service" };

const S = { h2: { fontSize: 20, fontWeight: 700, margin: "32px 0 8px" } as React.CSSProperties, p: { fontSize: 15, color: "#94a3b8", lineHeight: 1.7, margin: "0 0 12px" } as React.CSSProperties };

export default function Terms() {
  return (
    <>
      <Nav />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "64px 24px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ color: "#64748b", marginBottom: 40 }}>Last updated: March 8, 2026</p>
        <h2 style={S.h2}>1. Acceptance</h2>
        <p style={S.p}>By installing ProtectKaro from the Shopify App Store, you agree to these terms.</p>
        <h2 style={S.h2}>2. Service</h2>
        <p style={S.p}>ProtectKaro provides a DPDP consent collection and audit logging service for Shopify merchants. The service is provided "as is" and free of charge.</p>
        <h2 style={S.h2}>3. Merchant Responsibilities</h2>
        <p style={S.p}>Merchants are responsible for configuring the consent banner correctly and for their own compliance with applicable data protection laws.</p>
        <h2 style={S.h2}>4. Limitation of Liability</h2>
        <p style={S.p}>MRKT365 R&D India Pvt Ltd is not liable for compliance failures resulting from misconfiguration or misuse of the app.</p>
        <h2 style={S.h2}>5. Termination</h2>
        <p style={S.p}>Either party may terminate by uninstalling the app. All merchant data will be deleted within 48 hours.</p>
        <h2 style={S.h2}>6. Contact</h2>
        <p style={S.p}><a href="mailto:kashif@mrkt365.co.in" style={{ color: "#22c55e" }}>kashif@mrkt365.co.in</a></p>
      </div>
      <Footer />
    </>
  );
}
