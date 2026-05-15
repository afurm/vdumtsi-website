const productionUrl = "https://vdumtsi.com";

function normalizeSiteUrl(value: string | undefined): string {
  if (!value) {
    return productionUrl;
  }

  try {
    const url = new URL(value);
    url.pathname = "";
    url.search = "";
    url.hash = "";

    return url.toString().replace(/\/$/, "");
  } catch {
    return productionUrl;
  }
}

function normalizeVerificationToken(value: string | undefined): string | undefined {
  const token = value?.trim();

  return token ? token : undefined;
}

const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development";

export const siteConfig = {
  name: "V DUMTSI",
  title: "Майстер‑класи з флористики у Львові | V DUMTSI",
  description:
    "Індивідуальні та групові майстер‑класи з флористики у Львові. Подарункові сертифікати, формати для корпоративних клієнтів, дівич‑вечори та творчі події від V DUMTSI.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: "uk_UA",
  language: "uk",
  region: "UA-46",
  city: "Львів",
  coordinates: {
    latitude: 49.8397,
    longitude: 24.0297,
  },
  lastModified: "2026-05-14T00:00:00.000Z",
  googleSiteVerification: normalizeVerificationToken(
    process.env.GOOGLE_SITE_VERIFICATION
  ),
  isIndexable:
    process.env.NEXT_PUBLIC_SITE_INDEXABLE === "false"
      ? false
      : !isPreviewDeployment,
  keywords: [
    "майстер‑клас з флористики Львів",
    "флористичний майстер‑клас Львів",
    "подарунковий сертифікат майстер‑клас флористика",
    "майстер‑клас для корпоративних клієнтів Львів",
    "дівич‑вечір Львів майстер‑клас",
    "V DUMTSI майстер‑клас",
  ],
} as const;

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}
