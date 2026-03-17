import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Consent Records for Shopify",
  description: "See how ProtectKaro helps merchants keep reviewable consent records in Shopify instead of relying on banner screenshots.",
};

export default function ConsentRecordsPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Feature</div>
          <h1 className="page-title">Consent records merchants can actually review</h1>
          <p className="page-subtitle">A stronger compliance workflow starts when the record is treated as a product feature, not a hidden backend detail.</p>
        </div>
      </section>
      <section className="section proof-section" style={{ maxWidth: 980 }}>
        <div className="proof-copy">
          <p className="proof-text">Consent records are the core proof layer behind ProtectKaro. Instead of telling merchants to trust that consent was captured, the app gives them a log they can inspect from Shopify admin.</p>
          <p className="proof-text">That matters because banners are easy to demo but hard to defend on their own. A reviewable log is much closer to operational proof. Merchants can see recent activity on Free and move to longer retention and CSV export on Pro.</p>
          <p className="proof-text">This is the difference between a compliance aesthetic and a compliance workflow. ProtectKaro is built for the latter. See also <Link href="/shopify-consent-log" className="text-link">Shopify Consent Log</Link>.</p>
        </div>
        <div className="proof-panel">
          <div className="proof-image-card">
            <Image
              src="/images/product/consent-audit-log.jpg"
              alt="ProtectKaro consent audit log showing reviewable records inside Shopify admin"
              width={1200}
              height={900}
              className="proof-image"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
