import type { Metadata } from "next";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { InstallForm } from "./components/InstallForm";

export const metadata: Metadata = {
  title: "ProtectKaro — DPDP Compliance for Shopify Stores",
  description:
    "Collect consent, build tamper-proof audit trails, and stay compliant with India's Digital Personal Data Protection Act 2023. Free for Shopify merchants.",
};

const FEATURES = [
  { icon: "📋", title: "DPDP Consent Banner", desc: "Show a legally compliant consent banner to every storefront visitor. Customisable design with no code required." },
  { icon: "🔍", title: "Tamper-Proof Audit Log", desc: "Every consent decision is timestamped and stored immutably. Export your audit trail any time for regulatory review." },
  { icon: "🔒", title: "Privacy by Design", desc: "No PII is ever stored. Visitor IDs are anonymous. Only SHA-256 hashed IPs — DPDP compliant from day one." },
  { icon: "⚡", title: "5-Minute Setup", desc: "Install from Shopify, enable the App Embed in your theme, done. No developer or code changes needed." },
  { icon: "📊", title: "Live Dashboard", desc: "See consent stats in real time from your Shopify admin. Track acceptance rates and consent trends." },
  { icon: "🇮🇳", title: "Built for India", desc: "Specifically designed for Indian merchants operating under the DPDP Act 2023. GDPR-compatible too." },
];

const STEPS = [
  { n: 1, title: "Install from Shopify App Store", desc: "One click, OAuth handled automatically. You're in the dashboard in seconds." },
  { n: 2, title: "Enable the consent banner", desc: "Online Store → Themes → App Embeds → toggle ProtectKaro on. Save. That's it." },
  { n: 3, title: "Stay audit-ready", desc: "Every consent decision is logged. View your audit trail from the ProtectKaro dashboard in Shopify admin." },
];

const FAQS = [
  { q: "What is the DPDP Act?", a: "India's Digital Personal Data Protection Act 2023 (DPDP Act) requires businesses to obtain explicit consent from users before collecting and processing their personal data. Shopify merchants selling to Indian customers must comply." },
  { q: "Is ProtectKaro really free?", a: "Yes. ProtectKaro is free for all Shopify merchants with no usage limits. We may introduce paid plans for advanced features in future — existing users will always have a free tier." },
  { q: "Does it work with any Shopify theme?", a: "Yes. ProtectKaro uses Shopify's App Embed system, which works with any Online Store 2.0 theme including Dawn, Debut, and custom themes." },
  { q: "What data does ProtectKaro store?", a: "Only anonymous consent records: a randomly generated visitor ID, the consent action (accept/reject), and a hashed timestamp. No names, emails, or Shopify customer records are ever stored." },
  { q: "Does it work for GDPR too?", a: "Yes. The consent model is compatible with GDPR requirements. ProtectKaro is designed to be regulation-agnostic — it captures consent regardless of which regulation applies." },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-green-950 text-brand border border-green-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Built for India's DPDP Act 2023
        </div>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tighter mb-5">
          DPDP Compliance for<br className="hidden sm:block" /> Your Shopify Store
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Collect consent, log every decision, and stay audit-ready under India's Digital Personal Data Protection Act — free, in under 5 minutes.
        </p>
        <InstallForm />
      </section>

      {/* Social proof strip */}
      <div className="border-y border-navy-border py-5 text-center text-sm text-slate-500">
        Trusted by Shopify merchants in India &nbsp;·&nbsp; DPDP Act 2023 compliant &nbsp;·&nbsp; Free forever
      </div>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">Everything you need to stay compliant</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-navy-light border border-navy-border rounded-2xl p-6 hover:border-slate-500 transition-colors">
              <span className="text-2xl block mb-3">{f.icon}</span>
              <h3 className="font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-light py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-12">Up and running in 3 steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-10 h-10 bg-brand text-black rounded-full flex items-center justify-center font-extrabold text-lg mx-auto mb-4">{s.n}</div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="bg-navy-light border border-navy-border rounded-xl p-6">
              <h3 className="font-bold text-base mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">Start collecting consent today</h2>
        <p className="text-slate-400 mb-8">Free for all Shopify merchants. No limits, no credit card.</p>
        <a
          href="https://apps.shopify.com/protectkaro"
          className="inline-block bg-brand text-black font-bold text-base px-8 py-4 rounded-xl no-underline hover:opacity-90 transition-opacity"
          rel="noopener noreferrer"
        >
          Install on Shopify — It's Free
        </a>
      </section>

      <Footer />
    </>
  );
}
