"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "../ui/Button";

const navigation = [
  { name: "Майстер-класи", href: "#masterclasses" },
  { name: "Послуги", href: "#services" },
  { name: "Галерея", href: "#gallery" },
  { name: "Контакти", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass bg-white/30"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "font-serif text-2xl md:text-3xl font-bold transition-colors",
                isScrolled ? "text-dark-green" : "text-dark-green"
              )}
            >
              V DUMTSI
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-secondary",
                    isScrolled ? "text-dark-green" : "text-dark-green"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="#contact" variant="glass" className="ml-2">Записатися</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "md:hidden relative w-6 h-6 focus:outline-none z-50",
                isScrolled ? "text-dark-green" : "text-dark-green"
              )}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition duration-300",
                  isMenuOpen ? "rotate-45 top-2.5" : "top-1"
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current top-2.5 transition duration-300",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute block h-0.5 w-6 bg-current transform transition duration-300",
                  isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Outside header to prevent transparency issues */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-transform duration-300 backdrop-blur-2xl",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 bg-white/30">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif text-dark-green hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Close menu button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-6 py-2 rounded-full glass glass-hover text-dark-green"
          >
            Закрити меню
          </button>
        </div>
      </div>
    </>
  );
} 