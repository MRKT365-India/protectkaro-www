import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ProtectKaro privacy policy — how we handle merchant and visitor data.",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <article className="max-w-2xl mx-auto px-6 py-20 prose prose-invert prose-sm">
        <h1>Privacy Policy</h1>
        <p className="text-slate-400">Last updated: March 8, 2026</p>
        <h2>1. Who We Are</h2>
        <p>ProtectKaro is a Shopify app developed by MRKT365 R&D India Pvt Ltd. We help Shopify merchants comply with India's Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
        <h2>2. What Data We Collect</h2>
        <p>When a customer interacts with the ProtectKaro consent banner on a merchant's store, we collect:</p>
        <ul>
          <li><strong>Anonymous visitor ID</strong> — randomly generated, stored in browser localStorage. Not linked to any personal identity.</li>
          <li><strong>Consent action</strong> — accepted all or essential only.</li>
          <li><strong>Hashed IP address</strong> — SHA-256 one-way hash. Original IP never stored.</li>
          <li><strong>Hashed user agent</strong> — SHA-256 one-way hash. Plain text never stored.</li>
          <li><strong>Timestamp</strong> — when consent was given.</li>
        </ul>
        <p>We do <strong>not</strong> collect names, email addresses, phone numbers, or any Shopify customer records.</p>
        <h2>3. Data Retention</h2>
        <p>Consent records are retained for 3 years. Merchants may request deletion at any time by uninstalling the app or contacting us.</p>
        <h2>4. Data Sharing</h2>
        <p>We do not sell, share, or transfer data to third parties.</p>
        <h2>5. Contact</h2>
        <p>Email: <a href="mailto:kashif@mrkt365.co.in">kashif@mrkt365.co.in</a><br />MRKT365 R&D India Pvt Ltd, Gurgaon, Haryana, India</p>
      </article>
      <Footer />
    </>
  );
}
