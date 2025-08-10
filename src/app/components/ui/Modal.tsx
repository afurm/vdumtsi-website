"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, className, children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] grid place-items-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className={cn(
          "relative z-[61] w-full max-w-2xl glass rounded-2xl p-6 md:p-8",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h3 className="font-serif text-xl md:text-2xl text-dark-green mb-4">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}


