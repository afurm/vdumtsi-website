/**
 * SEO utilities for image optimization.
 */

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
export function getResponsiveImageSizes(context: "hero" | "about" | "card"): string {
  const sizeMap = {
    hero: '(min-width: 1024px) 48vw, 90vw',
    about: '(min-width: 1024px) 40vw, 90vw',
    card: '(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw'
  };

  return sizeMap[context] || '100vw';
}
