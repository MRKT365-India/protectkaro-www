import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1e293b", padding: "32px 24px", textAlign: "center", fontSize: 13, color: "#64748b", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 8 }}>
      <span>© 2026 MRKT365 R&D India Pvt Ltd</span>
      <span style={{ color: "#1e293b" }}>·</span>
      <Link href="/privacy" style={{ color: "#64748b" }}>Privacy Policy</Link>
      <span style={{ color: "#1e293b" }}>·</span>
      <Link href="/terms" style={{ color: "#64748b" }}>Terms</Link>
      <span style={{ color: "#1e293b" }}>·</span>
      <a href="mailto:kashif@mrkt365.co.in" style={{ color: "#64748b" }}>Support</a>
    </footer>
  );
}
