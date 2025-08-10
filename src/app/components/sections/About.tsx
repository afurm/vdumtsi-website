"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">Хто ми</h2>
          <div className="w-20 h-1 bg-secondary/60 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-glass border border-white/20 bg-white/10 backdrop-blur-xl">
              {/* Founder image */}
              <Image
                src="/founder.jpg"
                alt="Мар’яна Фурманець — засновниця V DUMTSI"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
                className="object-cover"
              />
              {/* Subtle gradient to keep text legible over edges */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender/30 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:pl-8 glass rounded-2xl p-8"
          >
            <h3 className="font-serif text-3xl text-dark-green mb-6">Про засновницю</h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                Я - Мар’яна Фурманець, флористка з понад 6-річним досвідом і авторка бренду Vdumtsi. 
                Моя любов до естетики та квітів надихає створювати унікальні композиції будь-якої складності.
              </p>
              <p>
                Для мене флористика - це не просто краса, а спосіб пригальмувати, відчути сезон, настрій і цінність моменту. 
                Працюю лише з якісними матеріалами та додаю брендовані деталі, щоб кожна композиція була продуманою до дрібниць.
              </p>
              <p>
                Майстер-класи, які я провожу - це завжди живий простір тепла, уваги до себе і краси, яку можна створити власноруч. 
                Ділюся знаннями, яких не отримати на коротких курсах, і завжди готова відповісти на ваші питання - 
                навіть після їх завершення.
              </p>
              <p>
                Проводжу майстер-класи виїзного формату на локаціях у Львові та області. Завжди враховую усі ваші побажання 
                до найменших дрібниць - чи це корпоративний захід, чи святкова подія.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-dark-green mb-2">6</div>
                <div className="text-sm text-text-muted">років досвіду</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-dark-green mb-2">100+</div>
                <div className="text-sm text-text-muted">майстер-класів</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-dark-green mb-2">200+</div>
                <div className="text-sm text-text-muted">задоволених клієнтів</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 