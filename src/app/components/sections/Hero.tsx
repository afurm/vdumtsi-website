"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  heroImage,
  instagramDirectUrl,
  phoneHref,
} from "@/data/masterclasses";
import { generateBlurDataURL, getResponsiveImageSizes } from "@/lib/image-seo";
import Button from "../ui/Button";

const heroFormats = [
  {
    label: "Індивідуальний",
    value: "1:1",
    detail: "до 3 годин",
  },
  {
    label: "Група",
    value: "3–5",
    detail: "гостей",
  },
  {
    label: "Група",
    value: "5–10",
    detail: "гостей",
  },
  {
    label: "Група",
    value: "10–20",
    detail: "гостей",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-moss text-primary">
      <div className="container mx-auto grid min-h-[92vh] grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:pb-20 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-semibold leading-none text-primary sm:text-5xl md:text-7xl">
            Майстер‑класи з флористики у Львові
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-primary/80 md:text-xl">
            Індивідуальні заняття, групові майстер‑класи, формати для
            корпоративних клієнтів та подарункові сертифікати від бренду{" "}
            <span className="whitespace-nowrap">V DUMTSI.</span>
          </p>

          <div className="relative mt-8 aspect-[5/4] overflow-hidden rounded-lg border border-primary/20 bg-forest shadow-xl shadow-black/20 lg:hidden">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="90vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={generateBlurDataURL()}
            />
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href="#formats"
              size="lg"
              className="shrink-0 bg-primary text-moss hover:bg-light-gray"
            >
              Обрати формат
            </Button>
            <Button
              href="#certificate"
              variant="secondary"
              size="lg"
              className="shrink-0 border-primary/50 text-primary hover:bg-primary/10"
            >
              Подарувати сертифікат
            </Button>
            <Button
              href={instagramDirectUrl}
              external
              variant="ghost"
              size="lg"
              className="shrink-0 text-primary hover:bg-primary/10"
            >
              Написати в Instagram
            </Button>
          </div>

          <div className="mt-12 max-w-2xl border-t border-primary/20 pt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary/60">
              Формати майстер‑класів
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
              {heroFormats.map((format) => (
                <div
                  key={format.label}
                  className="border border-primary/15 bg-primary/[0.04] px-4 py-4"
                >
                  <p className="text-sm leading-5 text-primary/60">
                    {format.label}
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none text-primary">
                    {format.value}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-primary/70">
                    {format.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-primary/20 bg-forest shadow-2xl shadow-black/20 md:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes={getResponsiveImageSizes("hero")}
              className="object-cover"
              placeholder="blur"
              blurDataURL={generateBlurDataURL()}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-44 border border-primary/30 bg-primary p-5 text-moss shadow-xl lg:block">
            <p className="font-display text-3xl leading-none">6500 грн</p>
            <p className="mt-2 text-sm leading-5 text-forest">
              індивідуальний МК 1:1
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href={phoneHref}
        className="absolute bottom-3 right-6 hidden min-h-11 items-center text-sm text-primary/70 hover:text-primary lg:inline-flex"
      >
        +38 (073) 430-46-49
      </a>
    </section>
  );
}
