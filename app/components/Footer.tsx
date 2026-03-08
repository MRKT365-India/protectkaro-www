import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 MRKT365 R&D India Pvt Ltd</span>
      <span className="footer-dot">·</span>
      <Link href="/privacy">Privacy Policy</Link>
      <span className="footer-dot">·</span>
      <Link href="/terms">Terms</Link>
      <span className="footer-dot">·</span>
      <a href="mailto:kashif@mrkt365.co.in">Support</a>
    </footer>
  );
}
