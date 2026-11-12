"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { useContactModal } from "./ContactModalProvider";

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

  // Блокировка прокрутки страницы при открытом меню
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled || menuOpen ? "backdrop-blur-md" : ""}`}
      style={{
        background: scrolled || menuOpen ? "rgba(8,8,10,0.95)" : "transparent",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20 relative z-50">
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
          
          {/* Кнопка мобильного меню (Бургер / Крестик) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 relative z-50 text-white"
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

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed inset-0 top-16 z-40 p-8 bg-[#08080A]"
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
    </header>
  );
}
