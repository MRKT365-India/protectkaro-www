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
        <p style={{ color: "#64748b", marginBottom: 40 }}>Last updated: November 6, 2026</p>
        <h2 style={S.h2}>1. Who We Are</h2>
        <p style={S.p}>ProtectKaro is a Shopify app developed by MRKT365 R&D India Pvt Ltd. It provides storefront privacy choices and consent records for merchants. It does not certify or guarantee compliance with privacy laws.</p>
        <h2 style={S.h2}>2. What Data We Collect</h2>
        <p style={S.p}>When a visitor makes a choice through the banner, a consent record includes a visitor identifier, action, selected purposes, banner version, hashes derived from the IP address and user agent, and the recording time. Hashing does not mean that a record is guaranteed to be anonymous.</p>
        <p style={S.p}>We also process store installation details, server-side Shopify access credentials, subscription status and privacy-request information to operate the app. Shopify privacy requests can include customer identifiers; these are handled for request fulfillment. The banner does not request customer profile information.</p>
        <h2 style={S.h2}>3. Data Retention</h2>
        <p style={S.p}>Consent record access windows are 90 days on Free and 365 days on Pro. These access windows control what the app shows or exports; they do not mean that older records are automatically deleted.</p>
        <p style={S.p}>Uninstalling triggers deletion of the store&apos;s app data when Shopify&apos;s verified uninstall notification is processed. Merchants can also contact us with a deletion request. Infrastructure backups can contain earlier copies and are not immediately rewritten when active records are deleted; contact us for backup-retention details relevant to a deletion request.</p>
        <h2 style={S.h2}>4. Data Sharing</h2>
        <p style={S.p}>We do not sell consent records. Shopify and hosting or infrastructure providers process data as needed to operate the service. Visitor choices sent through Shopify&apos;s Customer Privacy API apply to Shopify-managed services; separately installed third-party scripts may require their own consent controls.</p>
        <h2 style={S.h2}>5. Contact</h2>
        <p style={S.p}>Email: <a href="mailto:kashif@mrkt365.co.in" style={{ color: "#22c55e" }}>kashif@mrkt365.co.in</a><br />MRKT365 R&D India Pvt Ltd, Gurgaon, Haryana, India</p>
      </div>
      <Footer />
    </>
  );
}
