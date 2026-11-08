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
          Need help with ProtectKaro setup or consent records? We’re here to help.
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
        <p style={S.p}>1) Open ProtectKaro from Shopify admin and review Theme embed status on the dashboard. No separate ProtectKaro login is required.</p>
        <p style={S.p}>2) If the embed is not enabled, open Theme Editor and turn on ProtectKaro Banner in App embeds on the published theme.</p>
        <p style={S.p}>3) Save theme changes, return to the dashboard, and select Refresh. “Theme status unavailable” means the status could not be verified; check the published theme directly and retry. Past records do not prove that the current banner works.</p>
        <p style={S.p}>4) Check the regions configured in Shopify&apos;s Customer privacy settings. Automatic banner display follows those settings; visitors can also open Privacy choices on the storefront.</p>
        <p style={S.p}>5) Test Essential Only or Accept optional cookies on the storefront, then open Consent Log and confirm the matching record is visible. A saved Shopify choice and a delivered consent record are separate outcomes. If delivery is pending, use Try again before leaving the page.</p>
        <p style={S.p}>6) Pro includes CSV export. If a download fails, check the connection and plan, then use Retry export in the persistent error message.</p>

        <h2 style={S.h2}>Record access and privacy requests</h2>
        <p style={S.p}>Free provides a 90-day data-access window; Pro provides 365 days and CSV export. Access windows do not automatically delete older records.</p>
        <p style={S.p}>Help &amp; Support in the app lists received privacy requests and manual-review guidance. Receiving a webhook does not automatically fulfill a request.</p>

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
