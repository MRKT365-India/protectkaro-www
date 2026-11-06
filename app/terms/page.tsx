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
        <p style={{ color: "#64748b", marginBottom: 40 }}>Last updated: November 6, 2026</p>
        <h2 style={S.h2}>1. Acceptance</h2>
        <p style={S.p}>By installing ProtectKaro from the Shopify App Store, you agree to these terms.</p>
        <h2 style={S.h2}>2. Service</h2>
        <p style={S.p}>ProtectKaro provides Shopify privacy-choice controls and consent records. A Free plan and an optional paid Pro plan are available. Paid subscriptions are billed through Shopify at the price and billing interval shown before approval. The service is provided &quot;as is&quot; and does not guarantee legal compliance.</p>
        <h2 style={S.h2}>3. Merchant Responsibilities</h2>
        <p style={S.p}>Merchants are responsible for configuring the consent banner correctly and for their own compliance with applicable data protection laws.</p>
        <h2 style={S.h2}>4. Limitation of Liability</h2>
        <p style={S.p}>MRKT365 R&D India Pvt Ltd is not liable for compliance failures resulting from misconfiguration or misuse of the app.</p>
        <h2 style={S.h2}>5. Termination</h2>
        <p style={S.p}>Merchants can stop using the app by uninstalling it. Active app data is deleted when Shopify&apos;s verified uninstall notification is processed. Deletion requests and backup copies are addressed as described in our <a href="/privacy">Privacy Policy</a>.</p>
        <h2 style={S.h2}>6. Contact</h2>
        <p style={S.p}><a href="mailto:kashif@mrkt365.co.in" style={{ color: "#22c55e" }}>kashif@mrkt365.co.in</a></p>
      </div>
      <Footer />
    </>
  );
}
