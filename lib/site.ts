export const siteConfig = {
  name: "ProtectKaro",
  description:
    "Audit-ready DPDP compliance infrastructure for Shopify stores in India. Capture consent, prove records, and stay ready for reviews and audits.",
  url: "https://www.protectkaro.com",
  ogImage: "/logo.jpg",
  companyName: "MRKT365 R&D India Pvt Ltd",
  supportEmail: "kashif@mrkt365.co.in",
};

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    cadence: "/month",
    description: "For Shopify stores getting started with DPDP consent capture and proof.",
    cta: "Install Free",
    features: [
      "DPDP consent banner",
      "Consent event logging",
      "Protection Status in Shopify admin",
      "90-day consent audit log history",
      "GDPR/DPDP webhook coverage",
      "Live dashboard analytics",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12",
    cadence: "/month",
    description: "For stores and agencies that need deeper audit proof and exports.",
    cta: "Start 7-day free trial",
    trial: "7-day free trial",
    recommended: true,
    features: [
      "Everything in Free",
      "Full audit log (1-year history)",
      "CSV audit log export",
      "Custom branded banner",
      "Priority support",
    ],
  },
] as const;
