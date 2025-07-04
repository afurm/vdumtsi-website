"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const masterClasses = [
  {
    title: "Базовий майстер-клас",
    description: "Основи флористики для новачків",
    duration: "2 години",
    includes: [
      "Знайомство з квітами",
      "Основні техніки",
      "Створення букета",
      "Догляд за композицією"
    ],
    icon: "🌸"
  },
  {
    title: "Сезонні композиції",
    description: "Робота з сезонними рослинами",
    duration: "3 години",
    includes: [
      "Сезонні квіти та рослини",
      "Техніки аранжування",
      "Кольорова гармонія",
      "Створення композиції"
    ],
    icon: "🍂"
  },
  {
    title: "Індивідуальні заняття",
    description: "Персональний підхід до навчання",
    duration: "За домовленістю",
    includes: [
      "Вибір тематики",
      "Гнучкий графік",
      "Персональні поради",
      "Поглиблене вивчення"
    ],
    icon: "✨"
  }
];

export default function MasterClasses() {
  return (
    <section id="masterclasses" className="py-20 bg-light-gray/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">
            Майстер-класи з флористики
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Зануртесь у творчість: ми навчаємо як новачків, так і тих, хто хоче поглибити свої знання. 
            На наших майстер-класах ви створюєте справжні композиції, дізнаєтесь про сезонність квітів 
            і отримуєте натхнення.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {masterClasses.map((masterClass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">{masterClass.icon}</span>
                <h3 className="font-serif text-xl text-dark-green mb-2">
                  {masterClass.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  {masterClass.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-secondary text-sm rounded-full">
                  {masterClass.duration}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-dark-green text-sm uppercase tracking-wide">
                  Що включено:
                </h4>
                <ul className="space-y-2">
                  {masterClass.includes.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-text-secondary"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Button 
                href="#contact" 
                variant="secondary" 
                className="w-full"
              >
                Записатися
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="font-serif text-2xl text-dark-green mb-4">
              Готові створювати красу?
            </h3>
            <p className="text-text-secondary mb-6">
              Приєднуйтесь до нашої творчої спільноти та відкрийте для себе 
              мистецтво флористики під керівництвом досвідченого майстра.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="tel:+380734304649" size="lg">
                Зателефонувати
              </Button>
              <Button 
                href="https://instagram.com/vdumtsi.studio.floristry" 
                variant="secondary" 
                size="lg"
                external
              >
                Написати в Instagram
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 