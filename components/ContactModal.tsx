"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconMail, IconTelegram } from "./icons";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@geoforce.ru");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
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
              className="absolute top-4 right-4"
              style={{ color: "var(--muted)" }}
              aria-label="Закрыть"
            >✕</button>
            <h3 className="h3 mb-2">Обсудим ваш проект</h3>
            <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Ответим в течение рабочего дня.</p>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 rounded-xl border p-4 hover:border-[var(--red)] transition-colors"
                style={{ borderColor: "var(--border)" }}
              >
                <IconTelegram />
                <div>
                  <div className="font-medium">Написать в Telegram</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>@geoforce</div>
                </div>
              </a>
              <button
                onClick={copyEmail}
                className="w-full flex items-center gap-3 rounded-xl border p-4 hover:border-[var(--red)] transition-colors text-left"
                style={{ borderColor: "var(--border)" }}
              >
                <IconMail />
                <div>
                  <div className="font-medium">Написать на почту</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>hello@geoforce.ru</div>
                </div>
              </button>
            </div>
          </motion.div>
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 rounded-lg px-4 py-2 text-sm"
                style={{ background: "var(--red)", color: "white" }}
                role="status"
              >Адрес скопирован</motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}