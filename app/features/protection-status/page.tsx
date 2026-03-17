import type { Metadata } from "next";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";

export const metadata: Metadata = {
  title: "Protection Status for Shopify Stores",
  description: "Protection Status helps merchants confirm that ProtectKaro is enabled and connected, reducing setup ambiguity.",
};

export default function ProtectionStatusPage() {
  return (
    <>
      <Nav />
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-badge">Feature</div>
          <h1 className="page-title">Protection Status removes setup guesswork</h1>
          <p className="page-subtitle">Merchants should not have to wonder whether the banner is live. Protection Status makes that visible from the dashboard.</p>
        </div>
      </section>
      <section className="section" style={{ maxWidth: 860 }}>
        <div className="article-body">
          <p>One of the biggest practical problems in compliance tooling is setup ambiguity. Merchants install the app, toggle a setting, and assume the job is finished. Protection Status exists to reduce that ambiguity.</p>
          <p>Instead of forcing merchants to inspect the storefront manually, ProtectKaro gives them a clear signal from the app about whether the configuration is connected and working. That improves confidence and shortens time to value.</p>
          <p>It also strengthens the product story. ProtectKaro is not just something merchants add to a page. It is a workflow they can verify and maintain.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
