import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { InstallForm } from "./components/InstallForm";
import { JsonLd } from "./components/JsonLd";
import { organizationSchema, softwareSchema } from "../lib/schema";

export const metadata: Metadata = {
  title: "Audit-Ready DPDP Compliance for Shopify",
  description:
    "ProtectKaro helps Shopify stores in India capture consent, monitor Protection Status, and keep audit-ready consent records — not just show a banner.",
};

const FEATURES = [
  {
    icon: "🛡️",
    title: "Protection Status inside Shopify",
    desc: "Merchants can verify whether the banner is live and connected from the app dashboard instead of guessing from the storefront.",
  },
  {
    icon: "🧾",
    title: "Consent records you can review",
    desc: "Every consent action is logged with timestamps and identifiers so stores can review what happened instead of relying on screenshots.",
  },
  {
    icon: "📤",
    title: "Export-ready proof on Pro",
    desc: "Free covers recent records. Pro unlocks longer history and CSV export for agencies, audits, and compliance reporting.",
  },
  {
    icon: "⚡",
    title: "5-minute Shopify setup",
    desc: "Install the app, enable the App Embed, and confirm status from the dashboard — no code changes required.",
  },
  {
    icon: "🔒",
    title: "Privacy-first handling",
    desc: "ProtectKaro stores hashed and audit-friendly consent data instead of names, emails, or raw customer records.",
  },
  {
    icon: "🇮🇳",
    title: "Built for India, ready for review",
    desc: "Designed around the operational reality of DPDP for Indian Shopify merchants and the expectations of reviewers and partners.",
  },
];

const STEPS = [
  { n: 1, title: "Install the app", desc: "Start from the Shopify App Store and land in ProtectKaro inside your Shopify admin." },
  { n: 2, title: "Enable the banner", desc: "Turn on the ProtectKaro App Embed in Theme Editor and confirm the Protection Status updates." },
  { n: 3, title: "Keep records review-ready", desc: "Track recent consent records on Free and unlock deeper history and CSV export on Pro." },
];

const FAQS = [
  {
    q: "Is ProtectKaro just a consent banner?",
    a: "No. The banner is only the collection layer. ProtectKaro is built around consent records, Protection Status, and audit-ready proof inside Shopify.",
  },
  {
    q: "What does the Free plan include?",
    a: "Free includes the DPDP banner, consent logging, dashboard visibility, and a 90-day audit log window. Pro adds 1-year history, CSV export, and more advanced proof features.",
  },
  {
    q: "Who should upgrade to Pro?",
    a: "Stores that need longer record history, exportable logs, or agency/compliance reporting should use Pro.",
  },
  {
    q: "Can agencies use ProtectKaro for client stores?",
    a: "Yes. ProtectKaro is especially useful when an agency needs clearer proof of consent operations rather than just a storefront banner screenshot.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareSchema()} />
      <Nav />

      <section className="hero">
        <div className="hero-inner">
          <Image src="/logo.jpg" alt="ProtectKaro logo" width={80} height={80} className="hero-logo" />
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Audit-ready DPDP infrastructure for Shopify
          </div>
          <h1 className="hero-title">
            Go beyond a banner.<br />
            <span>Keep DPDP consent records ready.</span>
          </h1>
          <p className="hero-sub">
            ProtectKaro helps Shopify stores in India capture consent, verify Protection Status, and keep review-ready consent records from one dashboard.
          </p>
          <InstallForm />
          <div className="hero-secondary-links">
            <Link href="/pricing" className="text-link">See pricing</Link>
            <Link href="/blog" className="text-link">Read DPDP guides</Link>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        Shopify-first workflow · Free plan includes 90-day consent log visibility · Pro unlocks 1-year history + CSV export
      </div>

      <section className="section proof-section">
        <div className="proof-copy">
          <div className="page-badge">Why it matters</div>
          <h2 className="section-title left">Compliance proof should survive after the demo</h2>
          <p className="proof-text">
            ProtectKaro is built for merchants who need more than a nice-looking banner. The real asset is an operational record: what was captured, when it was captured, and whether the banner is actually live on the store.
          </p>
          <ul className="proof-list">
            <li><Link href="/features/protection-status" className="text-link">Protection Status</Link> shows whether setup is actually complete</li>
            <li><Link href="/features/consent-records" className="text-link">Consent Records</Link> give merchants a reviewable record trail</li>
            <li><Link href="/pricing" className="text-link">Pro</Link> unlocks deeper history and CSV export for agency/audit workflows</li>
          </ul>
        </div>
        <div className="proof-panel">
          <div className="proof-image-card">
            <Image
              src="/images/product/dashboard.jpg"
              alt="ProtectKaro dashboard showing Protection Status and consent metrics inside Shopify admin"
              width={1200}
              height={900}
              className="proof-image"
            />
          </div>
        </div>
      </section>

      <section className="section screenshot-section">
        <div className="content-strip-header">
          <div>
            <div className="page-badge">Product proof</div>
            <h2 className="section-title left">See the workflow in the product</h2>
          </div>
        </div>
        <div className="mini-grid proof-gallery-grid">
          <div className="mini-card proof-gallery-card">
            <Image src="/images/product/consent-audit-log.jpg" alt="ProtectKaro consent audit log inside Shopify admin" width={1200} height={900} className="proof-gallery-image" />
            <strong>Consent Audit Log</strong>
            <span>Show merchants the record layer they can actually review inside Shopify admin.</span>
          </div>
          <div className="mini-card proof-gallery-card">
            <Image src="/images/product/plan-billing.jpg" alt="ProtectKaro plan and billing page showing Free and Pro plans" width={1200} height={900} className="proof-gallery-image" />
            <strong>Plan & Billing</strong>
            <span>Reinforce the Free-to-Pro progression with the real in-app billing experience.</span>
          </div>
          <div className="mini-card proof-gallery-card">
            <Image src="/images/product/storefront-banner.jpg" alt="ProtectKaro storefront consent banner on a Shopify store" width={1200} height={900} className="proof-gallery-image" />
            <strong>Storefront banner</strong>
            <span>Make the collection layer visible while keeping the message focused on the proof behind it.</span>
          </div>
        </div>
      </section>

      <div className="section">
        <h2 className="section-title">What merchants actually get</h2>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-dark">
        <h2 className="section-title">Up and running in 3 steps</h2>
        <div className="steps-inner">
          <div className="steps-grid">
            {STEPS.map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div className="step-num">{s.n}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section content-strip">
        <div className="content-strip-header">
          <div>
            <div className="page-badge">Commercial paths</div>
            <h2 className="section-title left">Explore the buyer journeys</h2>
          </div>
        </div>
        <div className="mini-grid">
          <Link href="/shopify-dpdp-compliance" className="mini-card">
            <strong>DPDP for Shopify</strong>
            <span>Core commercial page for merchants looking for a DPDP solution.</span>
          </Link>
          <Link href="/dpdp-audit-readiness" className="mini-card">
            <strong>DPDP audit readiness</strong>
            <span>Explain the difference between setup and proof strength.</span>
          </Link>
          <Link href="/for-agencies" className="mini-card">
            <strong>For agencies</strong>
            <span>Show why ProtectKaro works for client stores and repeatable handoffs.</span>
          </Link>
        </div>
      </section>

      <section className="section content-strip">
        <div className="content-strip-header">
          <div>
            <div className="page-badge">DPDP content engine</div>
            <h2 className="section-title left">Learn the operational side of DPDP</h2>
          </div>
          <Link href="/blog" className="text-link">View all articles →</Link>
        </div>
        <div className="mini-grid">
          <Link href="/blog/what-is-dpdp-for-shopify-stores-in-india" className="mini-card">
            <strong>What is the DPDP Act for Shopify stores in India?</strong>
            <span>Understand what merchants actually need to prove.</span>
          </Link>
          <Link href="/blog/dpdp-compliance-checklist-for-shopify-merchants" className="mini-card">
            <strong>DPDP compliance checklist for Shopify merchants</strong>
            <span>Use a practical checklist instead of vague compliance claims.</span>
          </Link>
          <Link href="/blog/best-dpdp-compliance-app-for-shopify-in-india" className="mini-card">
            <strong>Best DPDP compliance app for Shopify in India</strong>
            <span>See the evaluation criteria buyers should actually use.</span>
          </Link>
        </div>
      </section>

      <div className="section">
        <h2 className="section-title">Frequently asked questions</h2>
        <div className="faq-list">
          {FAQS.map((faq) => (
            <div key={faq.q} className="faq-item">
              <h3 className="faq-q">{faq.q}</h3>
              <p className="faq-a">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2 className="cta-title">Start with Free. Upgrade when you need deeper proof.</h2>
        <p className="cta-sub">Install ProtectKaro on Shopify and get your DPDP workflow live in minutes.</p>
        <a href="https://apps.shopify.com/protectkaro" className="cta-btn" rel="noopener noreferrer">
          Install on Shopify
        </a>
      </div>

      <Footer />
    </>
  );
}
