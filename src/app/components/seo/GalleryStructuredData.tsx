import { GalleryItem } from '../sections/Gallery';
import { generateImageStructuredData } from '@/lib/image-seo';

interface GalleryStructuredDataProps {
  items: GalleryItem[];
}

export default function GalleryStructuredData({ items }: GalleryStructuredDataProps) {
  // Convert gallery items to image SEO data
  const imageData = items.slice(0, 20).map(item => ({
    url: item.src,
    alt: item.title || item.description || `Флористична робота - ${item.category}`,
    title: item.title,
    description: item.description,
    category: item.category,
    width: 800,
    height: 800,
  }));

  const structuredData = generateImageStructuredData(imageData, 'https://vdumtsi.com');

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
