import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ProtectKaro — DPDP Compliance for Shopify Stores",
    template: "%s | ProtectKaro",
  },
  description:
    "Collect consent, build tamper-proof audit trails, and stay compliant with India's Digital Personal Data Protection Act. Free Shopify app.",
  keywords: ["DPDP compliance", "Shopify consent banner", "cookie consent India", "data protection Shopify", "DPDP Act 2023"],
  openGraph: {
    siteName: "ProtectKaro",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-slate-100 font-sans antialiased">{children}</body>
    </html>
  );
}
