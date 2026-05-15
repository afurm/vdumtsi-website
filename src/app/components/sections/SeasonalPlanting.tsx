"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const services = [
  {
    title: "Інтер’єрні композиції",
    description: "Оформлення приміщень живими рослинами",
    features: ["Кімнатні рослини", "Стильні кашпо", "Догляд і підтримка"],
    icon: "🏠"
  },
  {
    title: "Сезонні клумби",
    description: "Професійне оформлення відкритих просторів",
    features: ["Сезонні квіти", "Ландшафтний дизайн", "Регулярне оновлення"],
    icon: "🌺"
  },
  {
    title: "Оформлення подій",
    description: "Квіткове оформлення для особливих моментів",
    features: ["Унікальний дизайн", "Тематичні композиції", "Повний сервіс"],
    icon: "🎉"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Консультація",
    description: "Обговорюємо ваші побажання, простір та бюджет"
  },
  {
    step: "02", 
    title: "Дизайн",
    description: "Створюємо концепцію висадки з урахуванням сезону"
  },
  {
    step: "03",
    title: "Реалізація",
    description: "Втілюємо проєкт у життя з якісними рослинами"
  },
  {
    step: "04",
    title: "Підтримка",
    description: "Надаємо поради з догляду та подальшої підтримки"
  }
];

export default function SeasonalPlanting() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">
            Квіткова висадка для дому та подій
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Замовте професійну висадку сезонних рослин у кашпо, клумби, інтер’єрні зони.
            Ми підбираємо композиції, що відповідають вашому простору, стилю та порі року.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <span className="text-3xl">{service.icon}</span>
              </motion.div>
              <h3 className="font-serif text-xl text-dark-green mb-3">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-text-muted">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-light-gray/30 rounded-lg p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl text-dark-green mb-4">
              Наш процес роботи
            </h3>
            <p className="text-text-secondary">
              Від ідеї до реалізації — професійний підхід на кожному етапі
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-secondary/30 -translate-y-1/2" />
                )}
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-lg font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-dark-green mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-dark-green mb-4">
              Готові перетворити ваш простір?
            </h3>
            <p className="text-text-secondary mb-6">
              Зв’яжіться з нами для безкоштовної консультації та індивідуального підбору рослин
            </p>
            <Button href="#contact" size="lg">
              Замовити консультацію
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
