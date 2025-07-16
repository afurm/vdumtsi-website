import fs from 'fs';
import path from 'path';

const sitemapPath = path.resolve('./public/sitemap.xml');

fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading sitemap.xml:', err);
    return;
  }

  const today = new Date();
  const formattedDate = today.toISOString();

  const updatedSitemap = data.replace(
    /<lastmod>.*<\/lastmod>/,
    `<lastmod>${formattedDate}</lastmod>`
  );

  fs.writeFile(sitemapPath, updatedSitemap, 'utf8', (err) => {
    if (err) {
      console.error('Error writing sitemap.xml:', err);
      return;
    }
    console.log('Sitemap lastmod date updated successfully.');
  });
}); 