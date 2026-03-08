import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description: "ProtectKaro is free for all Shopify merchants. No credit card required.",
};

export default function Pricing() {
  return (
    <>
      <Nav />
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Simple, honest pricing</h1>
        <p className="text-slate-400 mb-16 text-lg">No tiers, no surprises. ProtectKaro is free.</p>
        <div className="bg-navy-light border-2 border-brand rounded-2xl p-10 max-w-sm mx-auto">
          <div className="text-brand text-sm font-bold uppercase tracking-wider mb-4">Free Forever</div>
          <div className="text-6xl font-extrabold mb-2">₹0</div>
          <p className="text-slate-400 text-sm mb-8">per month</p>
          <ul className="text-sm text-slate-300 space-y-3 text-left mb-8">
            {[
              "Unlimited consent events",
              "Full audit log history",
              "DPDP-compliant consent banner",
              "Dashboard analytics",
              "GDPR webhook support",
              "Email support",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-brand">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href="https://apps.shopify.com/protectkaro"
            className="block bg-brand text-black font-bold py-3 rounded-lg no-underline text-center hover:opacity-90 transition-opacity"
            rel="noopener noreferrer"
          >
            Install Free on Shopify
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
