"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#standart", label: "Standart" },
  { href: "#surec", label: "Süreç" },
  { href: "#harita", label: "Harita" },
  { href: "#iletisim", label: "İletişim" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] grid h-11 w-11 place-items-center rounded border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-yellow-300 hover:text-yellow-200"
        aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        aria-expanded={isOpen}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18 18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="fixed left-3 right-3 top-20 z-50 overflow-hidden rounded border border-white/10 bg-zinc-950 shadow-2xl"
            >
              <nav className="flex flex-col p-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded px-4 py-4 text-base font-semibold text-zinc-100 transition hover:bg-yellow-400 hover:text-zinc-950"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
