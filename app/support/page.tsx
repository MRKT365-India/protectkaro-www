import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = { title: "Support" };

const S = {
  h2: { fontSize: 20, fontWeight: 700, margin: "28px 0 8px" } as React.CSSProperties,
  p: { fontSize: 15, color: "#94a3b8", lineHeight: 1.7, margin: "0 0 12px" } as React.CSSProperties,
};

export default function Support() {
  return (
    <>
      <Nav />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 24px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>Support</h1>
        <p style={{ color: "#64748b", marginBottom: 26 }}>
          Need help with ProtectKaro setup or compliance logs? We’re here to help.
        </p>

        <h2 style={S.h2}>Contact</h2>
        <p style={S.p}>
          Email: <a href="mailto:kashif@mrkt365.co.in" style={{ color: "#22c55e" }}>kashif@mrkt365.co.in</a>
          <br />
          Team: MRKT365 R&D India Pvt Ltd
          <br />
          Location: Gurgaon, Haryana, India
        </p>

        <h2 style={S.h2}>Response time</h2>
        <p style={S.p}>We typically respond within 1 business day.</p>

        <h2 style={S.h2}>Fast troubleshooting</h2>
        <p style={S.p}>1) Open ProtectKaro dashboard and check Banner Connection Status.</p>
        <p style={S.p}>2) If not enabled, click “Enable Banner in Theme Editor” and turn on App Embed.</p>
        <p style={S.p}>3) Save theme changes, return to dashboard, and confirm status turns Connected.</p>
        <p style={S.p}>4) Open Consent Audit Log and verify events are visible.</p>

        <h2 style={S.h2}>Legal</h2>
        <p style={S.p}>
          <a href="/privacy" style={{ color: "#22c55e" }}>Privacy Policy</a>
          {" · "}
          <a href="/terms" style={{ color: "#22c55e" }}>Terms of Service</a>
        </p>
      </div>
      <Footer />
    </>
  );
}
