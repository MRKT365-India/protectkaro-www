export const siteConfig = {
  name: "ProtectKaro",
  description:
    "Shopify privacy choices and consent records for stores in India. Apply visitor choices through Shopify and review recorded activity in your app.",
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
      "90-day data-access window",
      "Shopify privacy-request handling",
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
      "365-day data-access window",
      "CSV audit log export",
      "Priority support",
    ],
  },
] as const;
