import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Protection Status for Shopify Stores",
  description: "Review ProtectKaro's detected theme configuration, then test storefront choices and record delivery separately.",
};

export default function ProtectionStatusPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Feature</div>
          <h1 className="page-title">Review the detected theme configuration</h1>
          <p className="page-subtitle">The dashboard reports whether the app embed is enabled, disabled or unavailable. Test a storefront choice to verify consent behavior and record delivery.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 860 }}>
        <div className="article-body">
          <p>One of the biggest practical problems in compliance tooling is setup ambiguity. Merchants install the app, toggle a setting, and assume the job is finished. Protection Status exists to reduce that ambiguity.</p>
          <p>ProtectKaro checks the active theme configuration. This check does not replace a storefront test: apply a visitor choice, confirm Shopify records it, and check that the consent log receives the record.</p>
          <p>It also strengthens the product story. ProtectKaro is not just something merchants add to a page. It is a workflow they can verify and maintain.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
