import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Майстер‑класи з флористики у Львові | V DUMTSI",
  description:
    "Індивідуальні та групові майстер‑класи з флористики у Львові. Подарункові сертифікати, корпоративи, дівич‑вечори та творчі події від V DUMTSI.",
  keywords:
    "майстер‑клас з флористики Львів, флористичний майстер‑клас Львів, подарунковий сертифікат майстер‑клас флористика, корпоративний майстер‑клас Львів, дівич‑вечір Львів майстер‑клас, V DUMTSI майстер‑клас",
  authors: [{ name: "V DUMTSI" }],
  creator: "V DUMTSI",
  publisher: "V DUMTSI",
  metadataBase: new URL("https://vdumtsi.com"),
  alternates: {
    canonical: "/",
  },

  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: "Майстер‑класи з флористики у Львові | V DUMTSI",
    description:
      "Індивідуальні та групові майстер‑класи з флористики у Львові. Сертифікати, корпоративи та творчі події від V DUMTSI.",
    url: "https://vdumtsi.com",
    siteName: "V DUMTSI",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "V DUMTSI — майстер‑класи з флористики у Львові",
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
  other: {
    "geo.region": "UA-46",
    "geo.placename": "Львів",
    "geo.position": "49.8397;24.0297",
    "ICBM": "49.8397, 24.0297",
    "last-modified": "2025-01-04T00:00:00+00:00",
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
