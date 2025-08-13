/**
 * SEO utilities for image optimization
 */

export interface ImageSEOData {
  url: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
  width?: number;
  height?: number;
}

/**
 * Generate structured data for images (JSON-LD)
 */
export function generateImageStructuredData(images: ImageSEOData[], baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "V DUMTSI - Галерея флористичних робіт",
    "description": "Колекція флористичних композицій, майстер-класів та сезонних висадок від студії V DUMTSI у Львові",
    "url": `${baseUrl}/#gallery`,
    "image": images.map(img => ({
      "@type": "ImageObject",
      "contentUrl": `${baseUrl}${img.url}`,
      "url": `${baseUrl}${img.url}`,
      "name": img.title || img.alt,
      "description": img.description || img.alt,
      "width": img.width || 800,
      "height": img.height || 800,
      "encodingFormat": "image/jpeg",
      "creator": {
        "@type": "Organization",
        "name": "V DUMTSI",
        "url": baseUrl
      },
      "copyrightHolder": {
        "@type": "Organization", 
        "name": "V DUMTSI"
      },
      "keywords": [
        "флористика",
        "Львів", 
        "квіткові композиції",
        "майстер-класи",
        img.category
      ].filter(Boolean).join(", ")
    }))
  };
}

/**
 * Generate optimized alt text with SEO keywords
 */
export function generateOptimizedAlt(
  baseDescription: string,
  category?: string
): string {
  
  const categoryMap: Record<string, string> = {
    masterclasses: "майстер-клас з флористики",
    arrangements: "флористична композиція", 
    seasonal: "сезонна квіткова композиція та висадка рослин",
    events: "оформлення події квітами",
    bouquet: "букет створений на майстер-класі",
    wreath: "зимовий віночок та святкова композиція",
    pumpkin: "осіння композиція в гарбузі",
    kenzan: "японська флористика кензан"
  };
  
  let alt = baseDescription;
  
  if (category && categoryMap[category]) {
    alt = `${categoryMap[category]} - ${alt}`;
  }
  
  // Add location and brand for local SEO
  if (!alt.includes("Львів")) {
    alt += " у Львові";
  }
  
  if (!alt.includes("V DUMTSI")) {
    alt += " | V DUMTSI";
  }
  
  return alt;
}

/**
 * Generate blur placeholder data URL for images
 */
export function generateBlurDataURL(width = 8, height = 8): string {
  // Simple 1x1 transparent pixel as base64
  return `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <rect width="60%" height="60%" x="20%" y="20%" fill="#e5e7eb" rx="4"/>
    </svg>`
  ).toString('base64')}`;
}

/**
 * Get responsive image sizes for different breakpoints
 */
export function getResponsiveImageSizes(context: 'hero' | 'gallery' | 'about' | 'card'): string {
  const sizeMap = {
    hero: '100vw',
    gallery: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
    about: '(min-width: 1024px) 40vw, 90vw', 
    card: '(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw'
  };
  
  return sizeMap[context] || '100vw';
}
