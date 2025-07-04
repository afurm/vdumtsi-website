"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-white to-white" />
      
      {/* Floating flower elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.span
          className="absolute top-1/4 left-1/4 text-4xl text-secondary/30"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✿
        </motion.span>
        <motion.span
          className="absolute top-1/3 right-1/4 text-5xl text-lavender/30"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          ❀
        </motion.span>
        <motion.span
          className="absolute bottom-1/4 left-1/3 text-4xl text-pink/30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          ✿
        </motion.span>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-hero-h1 text-dark-green mb-6 leading-tight">
            Майстер-класи з флористики
            <br />
            та висадка квітів у Львові
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            V DUMTSI — це місце, де народжуються квіткові історії. 
            Ми проводимо флористичні майстер-класи та професійно 
            висаджуємо сезонні композиції для вашого дому, офісу чи події.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="#masterclasses" size="lg">
            Записатися на майстер-клас
          </Button>
          <Button href="#services" variant="secondary" size="lg">
            Замовити висадку
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-secondary/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 