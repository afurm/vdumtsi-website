import { DefaultSeoProps } from "next-seo";
import {
  address,
  certificate,
  email,
  formats,
  instagramUrl,
  phoneNumber,
} from "@/data/masterclasses";

export const defaultSEO: DefaultSeoProps = {
  title: "Майстер‑класи з флористики у Львові | V DUMTSI",
  description:
    "Індивідуальні та групові майстер‑класи з флористики у Львові. Подарункові сертифікати, корпоративи, дівич‑вечори та творчі події від V DUMTSI.",
  canonical: "https://vdumtsi.com",
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://vdumtsi.com",
    siteName: "V DUMTSI",
    title: "Майстер‑класи з флористики у Львові | V DUMTSI",
    description:
      "Індивідуальні та групові майстер‑класи з флористики у Львові. Подарункові сертифікати, корпоративи, дівич‑вечори та творчі події від V DUMTSI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "V DUMTSI — майстер‑класи з флористики у Львові",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "майстер‑клас з флористики Львів, флористичний майстер‑клас Львів, подарунковий сертифікат майстер‑клас флористика, корпоративний майстер‑клас Львів, дівич‑вечір Львів майстер‑клас, V DUMTSI майстер‑клас",
    },
    {
      name: "author",
      content: "V DUMTSI",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "geo.region",
      content: "UA-46",
    },
    {
      name: "geo.placename",
      content: "Львів",
    },
    {
      name: "geo.position",
      content: "49.8397;24.0297",
    },
    {
      name: "ICBM",
      content: "49.8397, 24.0297",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "alternate",
      hrefLang: "uk",
      href: "https://vdumtsi.com",
    },
  ],
};

const offerItems = formats.map((format) => ({
  "@type": "Offer",
  name: format.title,
  price: format.id === "event" ? undefined : format.price.replace(/\D/g, ""),
  priceCurrency: "UAH",
  availability: "https://schema.org/InStock",
  areaServed: {
    "@type": "City",
    name: "Львів",
  },
  itemOffered: {
    "@type": "Course",
    name: format.title,
    description: format.summary,
    provider: {
      "@type": "Organization",
      name: "V DUMTSI",
    },
    teaches:
      format.id === "individual"
        ? ["підбір квітів", "флористичні техніки", "створення композиції"]
        : ["флористичні техніки", "створення композиції", "робота в групі"],
    timeRequired: format.duration === "до 3 годин" ? "PT3H" : undefined,
  },
  priceSpecification:
    format.id === "event"
      ? {
          "@type": "PriceSpecification",
          minPrice: "2200",
          maxPrice: "2400",
          priceCurrency: "UAH",
        }
      : undefined,
}));

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "FloristShop",
  name: "V DUMTSI",
  alternateName: "V DUMTSI floristry studio",
  description:
    "Авторські майстер‑класи з флористики у Львові: індивідуальні заняття, камерні групи, корпоративи, події та подарункові сертифікати.",
  url: "https://vdumtsi.com",
  telephone: phoneNumber,
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: address,
    addressLocality: "Львів",
    addressRegion: "Львівська область",
    postalCode: "79000",
    addressCountry: "UA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.8397,
    longitude: 24.0297,
  },
  openingHours: "Mo-Fr 09:00-19:00, Sa 10:00-18:00",
  priceRange: "$$",
  sameAs: [instagramUrl],
  image: [
    "https://vdumtsi.com/og-image.jpg",
    "https://vdumtsi.com/images/masterclasses/brand-workshop-hero.webp",
    "https://vdumtsi.com/images/masterclasses/gift-certificate.webp",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Майстер‑класи з флористики V DUMTSI",
    itemListElement: [
      ...offerItems,
      {
        "@type": "Offer",
        name: certificate.title,
        price: "6500",
        priceCurrency: "UAH",
        availability: "https://schema.org/InStock",
        itemOffered: {
          "@type": "Service",
          name: certificate.title,
          description:
            "Подарунковий сертифікат на персональний майстер‑клас з флористики 1:1 у Львові.",
          provider: {
            "@type": "Organization",
            name: "V DUMTSI",
          },
        },
      },
    ],
  },
};
