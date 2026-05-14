"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  certificate,
  eventTypes,
  formats,
  groupFormats,
  includedItems,
  instagramDirectUrl,
  instagramUrl,
  phoneHref,
  supportingImages,
  topics,
} from "@/data/masterclasses";
import { generateBlurDataURL, getResponsiveImageSizes } from "@/lib/image-seo";
import Button from "../ui/Button";

function SectionHeading({
  title,
  description,
  className = "",
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <h2 className="font-display text-4xl font-semibold leading-none text-dark-green md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 marker:text-dark-green">
      {items.map((item) => (
        <li key={item} className="text-sm leading-6 text-text-secondary">
          <span className="pl-1">{item}</span>
        </li>
      ))}
    </ul>
  );
}

type SiteImage = {
  src: string;
  alt: string;
};

function ImagePanel({
  image,
  className = "",
  fit = "cover",
  sizes = getResponsiveImageSizes("card"),
}: {
  image: SiteImage;
  className?: string;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-dark-green/10 bg-white ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        placeholder="blur"
        blurDataURL={generateBlurDataURL()}
      />
    </div>
  );
}

export default function MasterClasses() {
  const individual = formats[0];

  return (
    <>
      <section id="formats" className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-10">
            <SectionHeading
              title="Формати майстер‑класів"
              description="Спочатку оберіть кількість учасників. Тему майстер‑класу підбираємо окремо під сезон, подію та побажання."
            />
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {formats.map((format) => (
                <motion.article
                  key={format.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  viewport={{ once: true }}
                  className={`flex min-h-[220px] min-w-0 flex-col justify-between rounded-lg border p-5 ${
                    format.id === "individual"
                      ? "border-dark-green bg-dark-green text-primary"
                      : "border-dark-green/20 bg-primary/50 text-dark-green"
                  }`}
                >
                  <div>
                    <h3
                      className={`min-w-0 font-display text-[1.65rem] font-semibold leading-[1.04] text-balance sm:text-3xl lg:text-[1.55rem] xl:text-3xl ${
                        format.id === "individual" ? "text-primary" : "text-dark-green"
                      }`}
                    >
                      {format.id === "individual" ? (
                        <>
                          <span className="block max-w-full break-words text-[clamp(1.55rem,5.5vw,2rem)] leading-[0.95] lg:text-[1.55rem] xl:text-[2rem]">
                            Індивідуальний
                          </span>
                          <span className="mt-2 block max-w-full break-words text-[clamp(1.55rem,5.5vw,2rem)] leading-[0.95] lg:text-[1.55rem] xl:text-[2rem]">
                            МК 1:1
                          </span>
                        </>
                      ) : (
                        format.title
                      )}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-6 ${
                        format.id === "individual"
                          ? "text-primary/80"
                          : "text-text-secondary"
                      }`}
                    >
                      {format.summary}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-current/20 pt-4">
                    <p className="font-display text-3xl font-semibold leading-none">
                      {format.price}
                    </p>
                    {format.duration ? (
                      <p className="mt-2 text-sm opacity-75">{format.duration}</p>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="individual" className="bg-light-gray py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              title="Індивідуальний майстер‑клас 1:1"
              description={individual.summary}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-dark-green/20 bg-white p-5">
                <p className="text-sm text-text-muted">Тривалість</p>
                <p className="mt-2 font-display text-3xl font-semibold text-dark-green">
                  {individual.duration}
                </p>
              </div>
              <div className="rounded-lg border border-dark-green/20 bg-white p-5">
                <p className="text-sm text-text-muted">Вартість</p>
                <p className="mt-2 font-display text-3xl font-semibold text-dark-green">
                  {individual.price}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-dark-green/20 bg-white p-6">
              <h3 className="text-lg font-semibold text-dark-green">Підходить для</h3>
              <CheckList items={individual.bestFor} />
            </div>

            <div className="mt-6 rounded-lg border border-secondary/40 bg-secondary/20 p-6">
              <h3 className="text-lg font-semibold text-dark-green">Включає</h3>
              <CheckList items={individual.includes ?? []} />
              <p className="mt-5 text-sm font-medium text-dark-green">
                {individual.accent}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={phoneHref} size="lg">
                Записатися на індивідуальний МК
              </Button>
              <Button href="#certificate" variant="secondary" size="lg">
                Придбати сертифікат
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="self-center"
          >
            <ImagePanel
              image={supportingImages.preparedSpace}
              className="aspect-[1800/1339] w-full"
              fit="contain"
              sizes="(min-width: 1024px) 48vw, 90vw"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-army-green py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
            <SectionHeading
              title="Групові формати"
              description="Для невеликих зустрічей, свят, командних подій і корпоративів. Ціна прив'язана до кількості учасників, а тема узгоджується окремо."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {groupFormats.map((format) => (
                <article
                  key={format.id}
                  className="flex min-h-[360px] flex-col rounded-lg border border-dark-green/20 p-6"
                >
                  <h3 className="font-display text-4xl font-semibold leading-none text-dark-green">
                    {format.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-text-secondary">
                    {format.summary}
                  </p>
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-dark-green">Підходить для</p>
                    <CheckList items={format.bestFor} />
                  </div>
                  <div className="mt-auto border-t border-dark-green/20 pt-5">
                    <p className="font-display text-3xl font-semibold leading-none text-dark-green">
                      {format.price}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {format.accent}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="topics" className="bg-moss py-20 text-primary md:py-28">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-none md:text-6xl">
              Теми майстер‑класів
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-primary/80">
              Тема підбирається під сезон, формат події та побажання учасників.
              Після вибору теми узгоджуємо матеріали, складність композиції та
              фінальні деталі події.
            </p>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {topics.map((topic) => (
                <div
                  key={topic}
                  className="rounded-lg border border-primary/20 bg-primary/10 p-5 text-lg font-medium leading-7"
                >
                  {topic}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ImagePanel
                image={supportingImages.autumnComposition}
                className="aspect-[4/5] border-primary/20 bg-forest"
              />
              <ImagePanel
                image={supportingImages.winterWreath}
                className="aspect-[4/5] border-primary/20 bg-forest"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="certificate" className="bg-primary py-20 md:py-28">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-md"
          >
            <ImagePanel
              image={supportingImages.certificate}
              className="aspect-[4/5] border-dark-green/20 shadow-2xl shadow-dark-green/20"
              sizes="(min-width: 1024px) 42vw, 90vw"
            />
          </motion.div>

          <div>
            <SectionHeading
              title={certificate.title}
              description="Сертифікат позиціонується як подарунок на персональний майстер‑клас із флористом."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-dark-green/20 bg-white/50 p-5">
                <p className="text-sm text-text-muted">Вартість</p>
                <p className="mt-2 font-display text-3xl font-semibold text-dark-green">
                  {certificate.price}
                </p>
              </div>
              <div className="rounded-lg border border-dark-green/20 bg-white/50 p-5">
                <p className="text-sm text-text-muted">Тривалість</p>
                <p className="mt-2 font-display text-3xl font-semibold text-dark-green">
                  {certificate.duration}
                </p>
              </div>
              <div className="rounded-lg border border-dark-green/20 bg-white/50 p-5">
                <p className="text-sm text-text-muted">Формат</p>
                <p className="mt-2 font-display text-3xl font-semibold text-dark-green">
                  1:1
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-lg border border-dark-green/20 bg-white/50 p-6">
              <CheckList items={certificate.includes} />
              <p className="mt-6 text-sm leading-6 text-text-secondary">
                {certificate.note}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={instagramDirectUrl} external size="lg">
                Придбати сертифікат
              </Button>
              <Button href={phoneHref} variant="secondary" size="lg">
                Уточнити деталі
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <ImagePanel
              image={supportingImages.brandedMaterials}
              className="aspect-[1500/1875]"
              sizes="(min-width: 1024px) 48vw, 90vw"
            />
            <div className="rounded-lg bg-light-gray p-8 md:p-10">
              <h2 className="font-display text-4xl font-semibold leading-none text-dark-green md:text-5xl">
                Що входить у вартість
              </h2>
              <div className="mt-8">
                <CheckList items={includedItems} />
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <ImagePanel
              image={supportingImages.eventTable}
              className="aspect-[1500/2667]"
              sizes="(min-width: 1024px) 48vw, 90vw"
            />
            <div className="rounded-lg bg-dark-green p-8 text-primary md:p-10">
              <h2 className="font-display text-4xl font-semibold leading-none md:text-5xl">
                Для яких подій підходить
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {eventTypes.map((eventType) => (
                  <div
                    key={eventType}
                    className="border border-primary/20 p-4 text-sm leading-6 text-primary/80"
                  >
                    {eventType}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark-green py-16 text-primary md:py-20">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-none text-primary md:text-5xl">
              Актуальні фото — в Instagram
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-primary/75">
              Більше робіт, відео процесу, сезонні теми та анонси майстер‑класів
              публікуємо в Instagram.
            </p>
            <div className="mt-8">
              <Button
                href={instagramUrl}
                external
                size="lg"
                className="bg-primary text-dark-green hover:bg-light-gray"
              >
                Перейти в Instagram
              </Button>
            </div>
          </div>
          <ImagePanel
            image={supportingImages.flatlay}
            className="mx-auto aspect-[3/4] w-full max-w-md border-primary/20 bg-forest lg:justify-self-end"
            sizes="(min-width: 1024px) 32vw, 90vw"
          />
        </div>
      </section>
    </>
  );
}
