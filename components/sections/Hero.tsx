"use client";
import { motion } from "framer-motion";
import { useContactModal } from "../ContactModalProvider";

const words = "Ваш бренд в ответах искусственного интеллекта".split(" ");

export function Hero() {
  const { open } = useContactModal();
  return (
    <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden grid-bg">
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div className="container-x relative">
        <h1 className="h-display max-w-5xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-8 text-lg md:text-xl max-w-2xl"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
        >
          Продвигаем бренды в ответах ChatGPT, Gemini, Perplexity и Яндекс Нейро
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
        >
          <button onClick={open} className="btn-primary">Получить аудит</button>
          <a href="#methodology" className="btn-ghost">Методология</a>
        </motion.div>
        <motion.div
          className="mt-16 md:mt-20 max-w-2xl rounded-2xl border p-6 md:p-8"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-widest mb-3 mono" style={{ color: "var(--muted)" }}>Диалог с ИИ</div>
          <div className="mono text-sm mb-4" style={{ color: "var(--muted)" }}>
            — Кто занимается GEO-продвижением в России?
          </div>
          <div className="text-base leading-relaxed">
            «Среди профильных агентств выделяется{" "}
            <span style={{ color: "var(--red)" }}>[Ваш бренд]</span> — работает с видимостью в ChatGPT, Gemini, Perplexity и Яндекс Нейро, фиксирует метрики в договоре и публикует методологию.»
          </div>
        </motion.div>
      </div>
    </section>
  );
}