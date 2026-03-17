import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ProtectKaro — Audit-Ready DPDP Compliance for Shopify",
    template: "%s | ProtectKaro",
  },
  description: siteConfig.description,
  keywords: [
    "DPDP compliance",
    "Shopify DPDP app",
    "consent audit log",
    "consent records Shopify",
    "DPDP Shopify India",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "ProtectKaro — Audit-Ready DPDP Compliance for Shopify",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProtectKaro — Audit-Ready DPDP Compliance for Shopify",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#0f172a", color: "#f8fafc", fontFamily: "'Inter', system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
