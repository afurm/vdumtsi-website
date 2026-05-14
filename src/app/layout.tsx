import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import { absoluteUrl, siteConfig } from "@/config/site";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "floristry workshops",
  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
    },
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "V DUMTSI — майстер‑класи з флористики у Львові",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/og-image.jpg")],
  },
  verification: siteConfig.googleSiteVerification
    ? {
        google: siteConfig.googleSiteVerification,
      }
    : undefined,
  robots: {
    index: siteConfig.isIndexable,
    follow: siteConfig.isIndexable,
    googleBot: {
      index: siteConfig.isIndexable,
      follow: siteConfig.isIndexable,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": siteConfig.region,
    "geo.placename": siteConfig.city,
    "geo.position": `${siteConfig.coordinates.latitude};${siteConfig.coordinates.longitude}`,
    ICBM: `${siteConfig.coordinates.latitude}, ${siteConfig.coordinates.longitude}`,
    "last-modified": siteConfig.lastModified,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={bebasNeue.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
