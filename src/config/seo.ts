import { DefaultSeoProps } from 'next-seo';

export const defaultSEO: DefaultSeoProps = {
  title: 'Майстер-класи та висадка композицій у Львові | V DUMTSI',
  description: 'Флористична студія V DUMTSI у Львові пропонує авторські майстер-класи та висадку сезонних композицій. Відчуйте красу квітів разом з нами.',
  canonical: 'https://vdumtsi.com',
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://vdumtsi.com',
    siteName: 'V DUMTSI',
    title: 'Майстер-класи та висадка композицій у Львові | V DUMTSI',
    description: 'Флористична студія V DUMTSI у Львові пропонує авторські майстер-класи та висадку сезонних композицій. Відчуйте красу квітів разом з нами.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'V DUMTSI - Флористична студія у Львові',
      },
    ],
  },
  twitter: {
    handle: '@vdumtsi',
    site: '@vdumtsi',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'майстер-класи флористика Львів, висадка сезонних композицій Львів, флорист Львів, флористична студія Львів, квіткові майстер-класи, висадка квітів в кашпо Львів',
    },
    {
      name: 'author',
      content: 'Марʼяна Фурманець',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      name: 'geo.region',
      content: 'UA-46',
    },
    {
      name: 'geo.placename',
      content: 'Львів',
    },
    {
      name: 'geo.position',
      content: '49.8397;24.0297',
    },
    {
      name: 'ICBM',
      content: '49.8397, 24.0297',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'alternate',
      hrefLang: 'uk',
      href: 'https://vdumtsi.com',
    },
  ],
};

export const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'FloristShop',
  name: 'V DUMTSI',
  alternateName: 'V DUMTSI флористична студія',
  description: 'Флористична студія у Львові. Майстер-класи з флористики та висадка сезонних композицій.',
  url: 'https://vdumtsi.com',
  telephone: '+380734304649',
  email: 'hello@vdumtsi.com',
  founder: {
    '@type': 'Person',
    name: 'Марʼяна Фурманець',
    jobTitle: 'Флорист',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Львів',
    addressCountry: 'UA',
    addressRegion: 'Львівська область',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.8397,
    longitude: 24.0297,
  },
  openingHours: 'Mo-Su 09:00-19:00',
  priceRange: '$$',
  sameAs: [
    'https://instagram.com/vdumtsi.studio.floristry',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Флористичні послуги',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Майстер-класи з флористики',
          description: 'Навчання основам флористики та створення композицій',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Висадка сезонних композицій',
          description: 'Професійна висадка рослин у кашпо та клумби',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '25',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Олена К.',
      },
      reviewBody: 'Чудові майстер-класи! Марʼяна професійно навчає та надихає на творчість.',
    },
  ],
}; 