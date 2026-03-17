export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
  excerpt: string;
  body: string[];
  faq?: { question: string; answer: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-dpdp-for-shopify-stores-in-india",
    title: "What is the DPDP Act for Shopify stores in India?",
    description:
      "A practical guide for Shopify merchants on what the DPDP Act means, what consent proof matters, and where banners alone fall short.",
    publishedAt: "2026-03-17",
    readingTime: "6 min read",
    category: "DPDP Basics",
    keywords: ["DPDP Act Shopify", "DPDP compliance India", "Shopify privacy India"],
    excerpt:
      "If you run a Shopify store in India, DPDP is not just about showing a banner. It is about being able to prove what happened, when, and for which visitor action.",
    body: [
      "India's Digital Personal Data Protection Act changes the compliance conversation for ecommerce brands. For Shopify merchants, the obvious first step is adding a consent banner. But banners are only the visible layer. The harder question is whether you can prove what consent was captured, when it was captured, and what record survives later review.",
      "That is why ProtectKaro is positioned as audit-ready infrastructure, not just a front-end banner. A merchant needs operational proof: consent logs, timestamps, retention rules, and a workflow that is easy enough to keep running after install. If the only evidence is a screenshot of a banner design, that is weak proof.",
      "For most Shopify stores, the right practical approach is: collect consent before optional tracking runs, store an auditable event trail, keep access to recent records on the free plan, and upgrade when exportable or longer-term evidence is required by agencies, legal teams, or enterprise clients.",
      "The best next step for merchants is not to ask whether they have a banner. It is to ask whether they can answer an auditor or partner with evidence. That is the gap ProtectKaro is designed to close."
    ],
    faq: [
      {
        question: "Is a cookie banner enough for DPDP compliance?",
        answer:
          "Not by itself. A banner is only the front-end interaction layer. Merchants also need consent records and an operational trail they can review later.",
      },
      {
        question: "What should a Shopify merchant keep as proof?",
        answer:
          "At minimum: consent action, timestamp, and a record tied to the visitor session or identifier used by the compliance system.",
      },
    ],
  },
  {
    slug: "dpdp-compliance-checklist-for-shopify-merchants",
    title: "DPDP compliance checklist for Shopify merchants",
    description:
      "A straightforward checklist for Indian Shopify brands that want to move from a generic banner to audit-ready consent operations.",
    publishedAt: "2026-03-17",
    readingTime: "5 min read",
    category: "Checklists",
    keywords: ["DPDP compliance checklist", "Shopify compliance checklist", "consent records Shopify"],
    excerpt:
      "Use this checklist to move from vague compliance messaging to an actual operational setup you can show, verify, and maintain.",
    body: [
      "Most merchants start with the visible artifact: the banner. But the checklist that matters is operational. Can you confirm the banner is active? Can you verify consent events are reaching the app? Can you review recent records? Can you export or retain records when a partner or regulator asks for them?",
      "A solid DPDP setup for Shopify should include five things: a live storefront consent layer, a working app embed, an internal dashboard to monitor protection status, recent audit log access, and a clear plan for retention and export when deeper reporting is needed.",
      "This is also why pricing clarity matters. Free plans are excellent for getting stores live and proving the workflow. Paid plans should unlock deeper proof: longer history, exports, and agency-ready records. Your website should mirror that truth exactly so merchants know what they are buying.",
      "If a merchant can install, enable, confirm status, and review the consent log in one short session, you have the start of a credible compliance workflow. From there, the site, product, and documentation should all reinforce the same story."
    ],
  },
  {
    slug: "why-cookie-banners-are-not-enough-for-dpdp",
    title: "Why cookie banners are not enough for DPDP",
    description:
      "Banners help collect consent, but they do not create strong proof on their own. Here is what merchants actually need for audit readiness.",
    publishedAt: "2026-03-17",
    readingTime: "5 min read",
    category: "Thought Leadership",
    keywords: ["cookie banner not enough", "audit-ready consent records", "DPDP audit proof"],
    excerpt:
      "A consent banner is useful. But if your compliance story ends there, your proof is weaker than you think.",
    body: [
      "The market is crowded with compliance tools that over-index on the banner because it is easy to demo. The real compliance moat is the record underneath. When a merchant, agency, or reviewer asks what proof exists, the answer cannot be a design screenshot.",
      "ProtectKaro's differentiation is that the banner is the entry point, not the end product. The real asset is the consent record: a log that shows the action, timing, and history in a way the merchant can inspect and, on the right plan, export. That is much closer to the operational reality of compliance than a cosmetic widget.",
      "This framing matters for SEO as well. Many merchants searching for compliance apps are not really searching for banner design. They are searching for a way to reduce business risk. Website messaging should therefore emphasize audit readiness, consent records, and proof strength before design flexibility.",
      "If we own that narrative consistently across pages, blog content, and product screens, we will attract better-fit merchants and agencies than a generic consent-banner pitch ever will."
    ],
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
