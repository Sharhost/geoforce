"use client";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";
import { IconMail, IconTelegram } from "./icons";

// Иконка телефона
function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type === "email" ? "Адрес скопирован" : "Номер скопирован");
      setTimeout(() => setCopied(null), 2500);
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog" aria-modal="true" aria-label="Обсудим ваш проект"
            className="relative w-full max-w-md rounded-2xl border p-8"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Закрыть"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <h3 className="h3 mb-2">Обсудим ваш проект</h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Ответим в течение рабочего дня.</p>
            
            <div className="space-y-3">
              {/* Telegram */}
              <a
                href="https://t.me/geoforce"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4 hover:border-[var(--red)] hover:bg-white/[0.02] transition-colors group"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-white/60 group-hover:text-[var(--red)] transition-colors">
                  <IconTelegram />
                </div>
                <div>
                  <div className="font-medium">Написать в Telegram</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>@geoforce</div>
                </div>
              </a>

              {/* Телефон */}
              <a
                href="tel:+375296347174"
                onClick={(e) => {
                  if (window.innerWidth > 768) {
                    e.preventDefault();
                    copyToClipboard("+375296347174", "phone");
                  }
                }}
                className="flex items-center gap-3 rounded-xl border p-4 hover:border-[var(--red)] hover:bg-white/[0.02] transition-colors group"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-white/60 group-hover:text-[var(--red)] transition-colors">
                  <IconPhone />
                </div>
                <div>
                  <div className="font-medium">Позвонить</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>+375 29 634-71-74</div>
                </div>
              </a>

              {/* Email */}
              <button
                onClick={() => copyToClipboard("hello@geoforce.ru", "email")}
                className="w-full flex items-center gap-3 rounded-xl border p-4 hover:border-[var(--red)] hover:bg-white/[0.02] transition-colors text-left group"
                style={{ borderColor: "var(--border)" }}
              >
                <div className="text-white/60 group-hover:text-[var(--red)] transition-colors">
                  <IconMail />
                </div>
                <div>
                  <div className="font-medium">Написать на почту</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>hello@geoforce.ru</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Тост */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-lg px-4 py-2 text-sm font-medium shadow-xl z-[110]"
                style={{ background: "var(--red)", color: "white" }}
                role="status"
              >
                {copied}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
