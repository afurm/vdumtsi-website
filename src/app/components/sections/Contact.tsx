"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

const contactMethods = [
  {
    icon: "📞",
    title: "Телефон",
    value: "+38 (073) 430-46-49",
    href: "tel:+380734304649",
    description: "Зателефонуйте для швидкої консультації"
  },
  {
    icon: "✉️",
    title: "Email",
    value: "vdumtsi@gmail.com",
    href: "mailto:vdumtsi@gmail.com",
    description: "Напишіть нам листа"
  },
  {
    icon: "📱",
    title: "Instagram",
    value: "@vdumtsi.studio.floristry",
    href: "https://instagram.com/vdumtsi.studio.floristry",
    description: "Подивіться наші роботи та напишіть у Direct"
  },
  {
    icon: "📍",
    title: "Місто",
    value: "Львів, Україна",
    href: "#",
    description: "Працюємо по всьому місту"
  }
];

const workingHours = [
  { day: "Понеділок - П'ятниця", hours: "9:00 - 19:00" },
  { day: "Субота", hours: "10:00 - 18:00" },
  { day: "Неділя", hours: "За домовленістю" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light-gray/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">
            Як з нами зв&apos;язатися
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Ми завжди раді новим знайомствам та творчим проектам. 
            Зв&apos;яжіться з нами, щоб дізнатися більше про наші послуги 
            або записатися на майстер-клас.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-serif text-2xl text-dark-green mb-6">
                Контактна інформація
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-dark-green mb-1">
                        {method.title}
                      </h4>
                      <a 
                        href={method.href}
                        className="text-secondary hover:text-dark-green transition-colors font-medium"
                        {...(method.href.startsWith('http') && { 
                          target: "_blank", 
                          rel: "noopener noreferrer" 
                        })}
                      >
                        {method.value}
                      </a>
                      <p className="text-sm text-text-muted mt-1">
                        {method.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm"
            >
              <h3 className="font-serif text-xl text-dark-green mb-4">
                Графік роботи
              </h3>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-text-secondary">{schedule.day}</span>
                    <span className="font-medium text-dark-green">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-sm h-fit"
          >
            <h3 className="font-serif text-2xl text-dark-green mb-6">
              Записатися на майстер-клас
            </h3>
            
            <div className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                <span className="text-4xl mb-4 block">🌸</span>
                <h4 className="font-serif text-xl text-dark-green mb-4">
                  Марʼяна Фурманець
                </h4>
                <p className="text-text-secondary mb-6">
                  Флорист, засновниця V DUMTSI
                </p>
                <p className="text-sm text-text-muted italic">
                  &quot;З любовʼю до справи — зовсім скоро повернуся з відпустки! 🌸&quot;
                </p>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-dark-green">
                  Оберіть зручний спосіб зв&apos;язку:
                </h5>
                
                <div className="grid grid-cols-1 gap-3">
                  <Button 
                    href="tel:+380734304649" 
                    className="w-full justify-center"
                    size="lg"
                  >
                    📞 Зателефонувати
                  </Button>
                  
                  <Button 
                    href="https://instagram.com/vdumtsi.studio.floristry" 
                    variant="secondary"
                    className="w-full justify-center"
                    size="lg"
                    external
                  >
                    📱 Написати в Instagram
                  </Button>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-text-muted text-center">
                  Або просто перейдіть у наш Instagram, щоб подивитися роботи 
                  та дізнатися про актуальні майстер-класи
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-dark-green mb-4">
              Готові розпочати творчу подорож?
            </h3>
            <p className="text-text-secondary mb-6">
              Приєднуйтесь до спільноти тих, хто цінує красу природи 
              та прагне навчитися створювати неповторні квіткові композиції.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 