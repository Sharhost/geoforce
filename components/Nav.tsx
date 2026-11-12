"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { useContactModal } from "./ContactModalProvider";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#seo-vs-geo", label: "Сравнение" },
  { href: "#methodology", label: "Методология" },
  { href: "#metrics", label: "Результаты" },
  { href: "#faq", label: "Вопросы" },
];

export function Nav() {
  const { open } = useContactModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? "backdrop-blur-md" : ""}`}
      style={{
        background: scrolled ? "rgba(8,8,10,0.75)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center"><Logo size={26} /></a>
        <nav className="hidden lg:flex gap-8 text-sm" style={{ color: "var(--muted)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={open}
            className="hidden md:inline-flex rounded-full px-6 py-2.5 text-sm font-medium"
            style={{ background: "var(--red)", color: "white" }}
          >
            Обсудить проект
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2"
            aria-label="Меню"
          >
            <div className="w-6 h-px bg-white mb-1.5" />
            <div className="w-6 h-px bg-white" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 top-16 z-40 p-8"
            style={{ background: "var(--bg)" }}
          >
            <div className="flex flex-col gap-6 text-2xl">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); open(); }}
                className="mt-4 rounded-full px-6 py-3 text-sm font-medium self-start"
                style={{ background: "var(--red)", color: "white" }}
              >
                Обсудить проект
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}