"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { useContactModal } from "./ContactModalProvider";
import { IconPhone } from "./icons";

const links = [
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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-[110] transition-colors"
        style={{
          background: scrolled || menuOpen ? "rgba(8,8,10,0.95)" : "transparent",
          borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        }}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20 relative z-[120]">
          <a href="#" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Logo size={26} />
          </a>
          
          <nav className="hidden lg:flex gap-8 text-sm" style={{ color: "var(--muted)" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          
          <div className="flex items-center gap-5">
            
            {/* БЛОК С АНИМАЦИЕЙ ТЕЛЕФОНА */}
            <motion.a 
              href="tel:+375296347174" 
              className="hidden md:flex items-center gap-2 text-sm font-medium relative group"
              style={{ color: "var(--text)" }}
              initial="initial"
              whileHover="hover"
            >
              {/* Иконка телефона (эффект "звонка") */}
              <motion.div
                variants={{
                  initial: { rotate: 0 },
                  hover: { rotate: [0, -15, 15, -15, 15, 0] }, // Покачивание
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative z-10"
              >
                <IconPhone className="w-4 h-4 transition-colors duration-300 group-hover:text-[var(--red)]" />
              </motion.div>

              {/* Текст (сдвиг и изменение цвета) */}
              <motion.span
                className="relative z-10"
                variants={{
                  initial: { x: 0, color: "var(--text)" },
                  hover: { x: 3, color: "var(--red)" }, // Сдвиг вправо на 3px и покраснение
                }}
                transition={{ duration: 0.3 }}
              >
                +375 29 634-71-74
              </motion.span>
            </motion.a>

            <button
              onClick={() => { setMenuOpen(false); open(); }}
              className="hidden md:inline-flex rounded-full px-6 py-2.5 text-sm font-medium"
              style={{ background: "var(--red)", color: "white" }}
            >
              Обсудить проект
            </button>
            
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-white"
              aria-label="Меню"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <>
                  <div className="w-6 h-px bg-white mb-1.5" />
                  <div className="w-6 h-px bg-white" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[100] p-8 pt-24 overflow-y-auto"
            style={{ background: "var(--bg)" }}
          >
            <div className="flex flex-col gap-6 text-2xl mt-4">
              {links.map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  onClick={() => setMenuOpen(false)} 
                  className="text-white hover:text-[var(--red)] transition-colors"
                >
                  {l.label}
                </a>
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
    </>
  );
}
