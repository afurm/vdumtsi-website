"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  { id: 'all', name: 'Всі роботи' },
  { id: 'masterclasses', name: 'Майстер-класи' },
  { id: 'arrangements', name: 'Композиції' },
  { id: 'seasonal', name: 'Сезонні' },
  { id: 'events', name: 'Події' }
];

const galleryItems = [
  {
    id: 1,
    category: 'masterclasses',
    title: 'Весняний майстер-клас',
    description: 'Створення букета з тюльпанів',
    placeholder: '🌷'
  },
  {
    id: 2,
    category: 'arrangements',
    title: 'Інтер\'єрна композиція',
    description: 'Сезонна висадка для дому',
    placeholder: '🌿'
  },
  {
    id: 3,
    category: 'seasonal',
    title: 'Осінні барви',
    description: 'Композиція з осінніми квітами',
    placeholder: '🍂'
  },
  {
    id: 4,
    category: 'events',
    title: 'Весільне оформлення',
    description: 'Ніжні пастельні тони',
    placeholder: '💐'
  },
  {
    id: 5,
    category: 'masterclasses',
    title: 'Літній майстер-клас',
    description: 'Робота з польовими квітами',
    placeholder: '🌼'
  },
  {
    id: 6,
    category: 'arrangements',
    title: 'Настільна композиція',
    description: 'Мініатюрний сад у кашпо',
    placeholder: '🌸'
  },
  {
    id: 7,
    category: 'seasonal',
    title: 'Зимова казка',
    description: 'Новорічні композиції',
    placeholder: '❄️'
  },
  {
    id: 8,
    category: 'events',
    title: 'Корпоративне оформлення',
    description: 'Офісні інсталяції',
    placeholder: '🏢'
  },
  {
    id: 9,
    category: 'masterclasses',
    title: 'Базові техніки',
    description: 'Перші кроки у флористиці',
    placeholder: '🌺'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
          <h2 className="font-serif text-h2 text-dark-green mb-4">
            Наші роботи
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Кожна композиція — це унікальна історія, створена з любов'ю до деталей 
            та глибоким розумінням краси природи.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-light-gray/50 text-text-secondary hover:bg-secondary/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${activeCategory}-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                    {item.placeholder}
                  </span>
                  <div className="absolute inset-0 bg-dark-green/0 group-hover:bg-dark-green/10 transition-all duration-300" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 max-w-2xl mx-auto">
            <span className="text-4xl mb-4 block">📸</span>
            <h3 className="font-serif text-2xl text-dark-green mb-4">
              Більше робіт в Instagram
            </h3>
            <p className="text-text-secondary mb-6">
              Підписуйтесь на наш Instagram, щоб бачити найсвіжіші роботи, 
              процес створення композицій та анонси майстер-класів.
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