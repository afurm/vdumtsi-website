import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  icons: {
    icon: "/favicon.ico",
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
      </body>
    </html>
  );
}
