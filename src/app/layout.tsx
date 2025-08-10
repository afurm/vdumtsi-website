import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MobileCtaBar from "./components/layout/MobileCtaBar";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Майстер-класи та висадка композицій у Львові | V DUMTSI",
  description: "Флористична студія V DUMTSI у Львові пропонує авторські майстер-класи та висадку сезонних композицій. Відчуйте красу квітів разом з нами.",
  keywords: "майстер-класи флористика Львів, висадка сезонних композицій Львів, флорист Львів, флористична студія Львів, квіткові майстер-класи, висадка квітів в кашпо Львів",
  authors: [{ name: "V DUMTSI" }],
  creator: "V DUMTSI",
  publisher: "V DUMTSI",
  metadataBase: new URL("https://vdumtsi.com"),
  alternates: {
    canonical: "/",
  },
  other: {
    "last-modified": "2025-07-04T00:00:00+00:00",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Майстер-класи та висадка композицій у Львові | V DUMTSI",
    description: "Флористична студія V DUMTSI у Львові пропонує авторські майстер-класи та висадку сезонних композицій.",
    url: "https://vdumtsi.com",
    siteName: "V DUMTSI",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "V DUMTSI - Флористична студія у Львові",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
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
    <html lang="uk" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <MobileCtaBar />
      </body>
    </html>
  );
}
