"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { generateOptimizedAlt, generateBlurDataURL, getResponsiveImageSizes } from "@/lib/image-seo";
import Button from "../ui/Button";

export type GalleryItem = {
  id: string | number;
  category: "masterclasses" | "arrangements" | "seasonal" | "events";
  src: string;
  title?: string;
  description?: string;
};

const categories = [
  { id: "all", name: "Всі роботи" },
  { id: "masterclasses", name: "Майстер-класи" },
  { id: "arrangements", name: "Композиції" },
  { id: "seasonal", name: "Сезонні" },
  { id: "events", name: "Події" },
] as const;

// Generate SEO-optimized alt text for gallery images
function generateImageAlt(item: GalleryItem): string {
  let baseDescription = "";
  
  if (item.title && item.description) {
    baseDescription = `${item.title} - ${item.description}`;
  } else if (item.title) {
    baseDescription = item.title;
  } else if (item.description) {
    baseDescription = item.description;
  } else {
    // Generate category-specific description
    const categoryDescriptions = {
      masterclasses: "Майстер-клас з флористики",
      arrangements: "Флористична композиція",
      seasonal: "Сезонна квіткова композиція", 
      events: "Оформлення події квітами"
    };
    baseDescription = categoryDescriptions[item.category] || "Флористична робота";
  }
  
  return generateOptimizedAlt(baseDescription, item.category);
}

interface GalleryProps {
  items: GalleryItem[];
}

const INITIAL_ITEMS_COUNT = 9; // Show 9 items initially (3x3 grid)
const LOAD_MORE_COUNT = 6; // Load 6 more items each time

export default function Gallery({ items }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("all");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_ITEMS_COUNT);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  const visibleItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const hasMoreItems = filteredItems.length > visibleCount;

  // Reset visible count when category changes
  const handleCategoryChange = (categoryId: (typeof categories)[number]["id"]) => {
    setActiveCategory(categoryId);
    setVisibleCount(INITIAL_ITEMS_COUNT);
  };

  const handleShowMore = () => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + LOAD_MORE_COUNT, filteredItems.length));
      setIsLoading(false);
    }, 500);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">Наші роботи</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Кожна композиція — це унікальна історія, створена з любов&apos;ю до деталей та глибоким
            розумінням краси природи.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id as string}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-secondary text-white shadow-md"
                  : "bg-light-gray/50 text-text-secondary hover:bg-secondary/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, index) => (
            <motion.div
              key={`${activeCategory}-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.src}
                    alt={generateImageAlt(item)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes={getResponsiveImageSizes('gallery')}
                    priority={index < 9}
                    loading={index < 9 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL={generateBlurDataURL()}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      {(item.title || item.description) && (
                        <>
                          <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                          {item.description && (
                            <p className="text-sm opacity-90">{item.description}</p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              onClick={handleShowMore}
              variant="secondary"
              size="lg"
              disabled={isLoading}
              className="min-w-[200px]"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      fill="none"
                      className="opacity-25"
                    />
                    <path 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      className="opacity-75"
                    />
                  </svg>
                  Завантаження...
                </span>
              ) : (
                `Показати ще (${Math.min(LOAD_MORE_COUNT, filteredItems.length - visibleCount)})`
              )}
            </Button>
            <p className="text-sm text-text-muted mt-2">
              Показано {visibleCount} з {filteredItems.length} зображень
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <span className="text-4xl mb-4 block">📸</span>
            <h3 className="font-serif text-2xl text-dark-green mb-4">Більше робіт в Instagram</h3>
            <p className="text-text-secondary mb-6">
              Підписуйтесь на наш Instagram, щоб бачити найсвіжіші роботи, процес створення композицій та
              анонси майстер-класів.
            </p>
            <a
              href="https://instagram.com/vdumtsi.studio.floristry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-green text-white font-medium rounded-lg hover:bg-forest transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <span className="mr-2">📱</span>
              @vdumtsi.studio.floristry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}