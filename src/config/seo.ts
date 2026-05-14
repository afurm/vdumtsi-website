import type { DefaultSeoProps } from "next-seo";
import { absoluteUrl, siteConfig } from "@/config/site";
import {
  address,
  certificate,
  email,
  formats,
  instagramUrl,
  phoneNumber,
} from "@/data/masterclasses";

const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;
const webpageId = `${siteConfig.url}/#webpage`;
const ogImageUrl = absoluteUrl("/og-image.jpg");
const businessImages = [
  ogImageUrl,
  absoluteUrl("/images/masterclasses/brand-workshop-hero.webp"),
  absoluteUrl("/images/masterclasses/gift-certificate.webp"),
];

export const defaultSEO: DefaultSeoProps = {
  title: siteConfig.title,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: ogImageUrl,
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
      content: siteConfig.keywords.join(", "),
    },
    {
      name: "author",
      content: siteConfig.name,
    },
    {
      name: "robots",
      content: siteConfig.isIndexable ? "index, follow" : "noindex, nofollow",
    },
    {
      name: "geo.region",
      content: siteConfig.region,
    },
    {
      name: "geo.placename",
      content: siteConfig.city,
    },
    {
      name: "geo.position",
      content: `${siteConfig.coordinates.latitude};${siteConfig.coordinates.longitude}`,
    },
    {
      name: "ICBM",
      content: `${siteConfig.coordinates.latitude}, ${siteConfig.coordinates.longitude}`,
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
      href: siteConfig.url,
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
    name: siteConfig.city,
  },
  itemOffered: {
    "@type": "Course",
    name: format.title,
    description: format.summary,
    provider: { "@id": businessId },
    teaches:
      format.id === "individual"
        ? [
            "підбір квітів",
            "флористичні техніки",
            "основи колористики",
            "види букетів",
            "пропорції",
            "створення композиції",
          ]
        : [
            "флористичні техніки",
            "основи колористики",
            "види букетів",
            "пропорції",
            "створення композиції",
            "робота в групі",
          ],
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
  "@graph": [
    {
      "@type": "Florist",
      "@id": businessId,
      name: siteConfig.name,
      alternateName: "V DUMTSI floristry studio",
      description:
        "Авторські майстер‑класи з флористики у Львові: індивідуальні заняття, камерні групи, формати для корпоративних клієнтів, події та подарункові сертифікати.",
      url: siteConfig.url,
      telephone: phoneNumber,
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: address,
        addressLocality: siteConfig.city,
        addressRegion: "Львівська область",
        postalCode: "79000",
        addressCountry: "UA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.coordinates.latitude,
        longitude: siteConfig.coordinates.longitude,
      },
      areaServed: {
        "@type": "City",
        name: siteConfig.city,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      paymentAccepted: "Bank transfer",
      currenciesAccepted: "UAH",
      sameAs: [instagramUrl],
      image: businessImages,
      logo: absoluteUrl("/brand/v-dumtsi-logo-dark.png"),
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
              provider: { "@id": businessId },
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": businessId },
      inLanguage: "uk-UA",
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": businessId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImageUrl,
        width: 1200,
        height: 630,
      },
      inLanguage: "uk-UA",
      dateModified: siteConfig.lastModified,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteConfig.url}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Головна",
          item: siteConfig.url,
        },
      ],
    },
  ],
};
