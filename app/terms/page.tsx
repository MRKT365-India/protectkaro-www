import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Terms() {
  return (
    <>
      <Nav />
      <article className="max-w-2xl mx-auto px-6 py-20 prose prose-invert prose-sm">
        <h1>Terms of Service</h1>
        <p className="text-slate-400">Last updated: March 8, 2026</p>
        <h2>1. Acceptance</h2>
        <p>By installing ProtectKaro from the Shopify App Store, you agree to these terms.</p>
        <h2>2. Service</h2>
        <p>ProtectKaro provides a DPDP consent collection and audit logging service for Shopify merchants. The service is provided "as is" and free of charge.</p>
        <h2>3. Merchant Responsibilities</h2>
        <p>Merchants are responsible for configuring the consent banner correctly and for their own compliance with applicable data protection laws including the DPDP Act 2023.</p>
        <h2>4. Limitation of Liability</h2>
        <p>MRKT365 R&D India Pvt Ltd is not liable for any compliance failures resulting from misconfiguration or misuse of the ProtectKaro app.</p>
        <h2>5. Termination</h2>
        <p>Either party may terminate the agreement by uninstalling the app. All merchant data will be deleted within 48 hours.</p>
        <h2>6. Contact</h2>
        <p>Email: <a href="mailto:kashif@mrkt365.co.in">kashif@mrkt365.co.in</a></p>
      </article>
      <Footer />
    </>
  );
}
