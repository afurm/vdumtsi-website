"use client";

import { motion } from "framer-motion";
import { bookingTerms, instagramDirectUrl, phoneHref } from "@/data/masterclasses";
import Button from "../ui/Button";

export default function BookingTerms() {
  return (
    <section id="terms" className="bg-primary py-20 md:py-28">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <h2 className="font-display text-4xl font-semibold leading-none text-dark-green md:text-6xl">
            Умови бронювання та участі
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Дату майстер‑класу резервуємо після оплати або передоплати. Для
            корпоративів окремо погоджуємо формат розрахунку, документи та
            деталі проведення.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button href={instagramDirectUrl} external size="lg">
              Узгодити дату
            </Button>
            <Button href={phoneHref} variant="secondary" size="lg">
              Зателефонувати
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg border border-dark-green/20 bg-white/50"
        >
          {bookingTerms.map((term, index) => (
            <div
              key={term}
              className="grid gap-4 border-b border-dark-green/10 p-5 last:border-b-0 md:grid-cols-[80px_1fr] md:p-6"
            >
              <span className="font-display text-3xl font-semibold text-secondary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-7 text-text-secondary">{term}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
