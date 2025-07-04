"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-h2 text-dark-green mb-4">Хто ми</h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/20 to-transparent z-10" />
              {/* Placeholder for founder image */}
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <span className="text-6xl text-secondary/30">🌸</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lavender/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="font-serif text-3xl text-dark-green mb-6">
              Студія V DUMTSI заснована Марʼяною Фурманець
            </h3>
            <div className="space-y-4 text-text-secondary">
              <p>
                Флористкою, яка поєднує природу, дизайн і поезію у кожній композиції.
              </p>
              <p>
                З любовʼю до деталей ми створюємо вишукані квіткові образи, 
                які передають емоції та розповідають історії. Наша місія — 
                ділитися красою природи та навчати інших бачити її 
                в найменших деталях.
              </p>
              <p className="italic text-secondary">
                "Кожна композиція — це діалог між природою та людиною, 
                де квіти стають мовою почуттів."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-dark-green mb-2">5+</div>
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