"use client";

import { motion } from "framer-motion";
import {
  address,
  email,
  instagramDirectUrl,
  instagramHandle,
  instagramUrl,
  mapsUrl,
  phoneHref,
  phoneNumber,
} from "@/data/masterclasses";
import Button from "../ui/Button";

const contactMethods = [
  {
    title: "Телефон",
    value: phoneNumber,
    href: phoneHref,
    description: "Для швидкого узгодження дати, формату та кількості учасників.",
  },
  {
    title: "Instagram",
    value: instagramHandle,
    href: instagramUrl,
    description: "Для актуальних фото, відео процесу, анонсів і повідомлення в Direct.",
  },
  {
    title: "Email",
    value: email,
    href: `mailto:${email}`,
    description: "Для корпоративних запитів, договорів і деталей події.",
  },
  {
    title: "Адреса студії",
    value: address,
    href: mapsUrl,
    description: "Локація у Львові для зустрічей та погоджених форматів.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-light-gray py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-semibold leading-none text-dark-green md:text-6xl">
              Забронювати майстер‑клас
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Напишіть або зателефонуйте, щоб обрати формат, кількість
              учасників, тему та доступну дату. Для корпоративів підготуємо
              окремі умови, безготівковий розрахунок і договір.
            </p>

            <div className="mt-8 rounded-lg border border-dark-green/20 bg-white p-6">
              <h3 className="text-lg font-semibold text-dark-green">
                Коротко перед бронюванням
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-text-secondary">
                <li>Дата резервується після передоплати 50% або повної оплати.</li>
                <li>Оплата здійснюється офіційно на рахунок ФОП.</li>
                <li>Для корпоративів доступний безготівковий розрахунок.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={instagramDirectUrl} external size="lg">
                Написати в Instagram
              </Button>
              <Button href={phoneHref} variant="secondary" size="lg">
                Зателефонувати
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-lg border border-dark-green/20 bg-white p-6 transition-colors hover:border-secondary hover:bg-primary/40"
              >
                <span className="font-display text-3xl font-semibold leading-none text-secondary">
                  {method.title}
                </span>
                <span className="mt-5 block font-medium text-dark-green">
                  {method.value}
                </span>
                <span className="mt-3 block text-sm leading-6 text-text-secondary">
                  {method.description}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
