"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { instagramDirectUrl, phoneHref } from "@/data/masterclasses";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Формати", href: "#formats" },
  { name: "Індивідуальний МК", href: "#individual" },
  { name: "Теми", href: "#topics" },
  { name: "Сертифікат", href: "#certificate" },
  { name: "Умови", href: "#terms" },
  { name: "Контакти", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    const pageRegions = document.querySelectorAll("main, footer");
    pageRegions.forEach((region) => {
      if (isMenuOpen) {
        region.setAttribute("aria-hidden", "true");
        region.setAttribute("inert", "");
      } else {
        region.removeAttribute("aria-hidden");
        region.removeAttribute("inert");
      }
    });

    return () => {
      document.body.style.overflow = "unset";
      pageRegions.forEach((region) => {
        region.removeAttribute("aria-hidden");
        region.removeAttribute("inert");
      });
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-200",
          isScrolled
            ? "border-dark-green/10 bg-primary/95 shadow-sm backdrop-blur-md"
            : "border-primary/10 bg-primary/90 backdrop-blur-md"
        )}
      >
        <nav className="container mx-auto px-6 py-3 md:py-4">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="flex min-h-11 w-28 items-center md:w-32"
              aria-label="V DUMTSI"
            >
              <Image
                src="/brand/v-dumtsi-wordmark-dark.png"
                alt="V DUMTSI"
                width={900}
                height={247}
                priority
                className="h-auto w-full object-contain"
              />
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-normal text-dark-green hover:text-forest"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href={phoneHref}
                className="inline-flex min-h-11 items-center rounded-md border border-dark-green/20 px-4 py-2 text-sm font-normal text-dark-green hover:bg-dark-green hover:text-primary"
              >
                Зателефонувати
              </a>
              <a
                href={instagramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center rounded-md bg-dark-green px-4 py-2 text-sm font-normal text-primary hover:bg-forest"
              >
                Instagram
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen((value) => !value)}
              className="relative z-50 h-11 w-11 rounded-md border border-dark-green/20 text-dark-green lg:hidden"
              aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={isMenuOpen}
            >
              <span
                className={cn(
                  "absolute left-3 block h-0.5 w-5 bg-current transition duration-200",
                  isMenuOpen ? "top-[21px] rotate-45" : "top-4"
                )}
              />
              <span
                className={cn(
                  "absolute left-3 top-[21px] block h-0.5 w-5 bg-current transition duration-200",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-3 block h-0.5 w-5 bg-current transition duration-200",
                  isMenuOpen ? "top-[21px] -rotate-45" : "top-[26px]"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-primary px-6 pt-28 lg:hidden">
          <div className="flex h-full flex-col justify-between pb-10">
            <div className="space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block border-b border-dark-green/10 pb-4 font-display text-4xl font-normal leading-none text-dark-green"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-3">
              <a
                href={instagramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-dark-green px-5 py-4 text-center font-normal text-primary"
              >
                Написати в Instagram
              </a>
              <a
                href={phoneHref}
                className="rounded-md border border-dark-green/20 px-5 py-4 text-center font-normal text-dark-green"
              >
                Зателефонувати
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
