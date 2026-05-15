# vdumtsi-website

## Production SEO

The site uses Next.js App Router metadata, generated `/robots.txt`, generated
`/sitemap.xml`, and JSON-LD structured data from one shared config:

- `NEXT_PUBLIC_SITE_URL` controls canonical URLs and sitemap links.
- `NEXT_PUBLIC_SITE_INDEXABLE=false` blocks indexing for preview-like builds.
- `GOOGLE_SITE_VERIFICATION` renders the Search Console HTML meta verification
  token into the homepage `<head>`.

For Vercel production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://vdumtsi.com
NEXT_PUBLIC_SITE_INDEXABLE=true
GOOGLE_SITE_VERIFICATION=<token from Google Search Console>
```

After the production deployment is live:

1. Add `https://vdumtsi.com/` in Google Search Console.
2. Prefer Domain property verification through DNS when available.
3. If using URL-prefix verification, choose the HTML tag method and paste only
   the `content` token into `GOOGLE_SITE_VERIFICATION`.
4. Redeploy production and confirm the homepage source contains
   `google-site-verification`.
5. Submit `https://vdumtsi.com/sitemap.xml` in Search Console.
6. Use URL Inspection for `https://vdumtsi.com/` after deployment.
