"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-2 left-0 right-0 z-50 md:hidden px-4 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="glass rounded-2xl p-2 flex gap-2 justify-between max-w-xl mx-auto">
        <Button href="tel:+380734304649" className="flex-1" variant="primary" size="sm">
          📞 Зателефонувати
        </Button>
        <Button
          href="https://instagram.com/vdumtsi.studio.floristry"
          external
          className="flex-1 bg-white"
          variant="secondary"
          size="sm"
        >
          📱 Instagram
        </Button>
      </div>
    </div>
  );
}


