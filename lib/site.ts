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
    description: "Apply Shopify privacy choices and review recorded consent activity.",
    cta: "Install Free",
    features: [
      "Shopify privacy-choice banner",
      "Confirmed consent records",
      "Published-theme embed status",
      "90-day data-access window",
      "Manual privacy-request review",
      "Recorded consent totals",
      "Community support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$12",
    cadence: "/month",
    annualPrice: "USD 99/year",
    description: "Longer record access and CSV export through Shopify billing.",
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
