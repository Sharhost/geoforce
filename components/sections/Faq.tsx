"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../Reveal";

const faq = [
  ["Чем GEO отличается от SEO?", "SEO приводит на сайт из поисковой выдачи. GEO делает так, чтобы ИИ рекомендовал бренд в ответе. Это разные каналы, они дополняют друг друга."],
  ["Через сколько будут первые результаты?", "Первые упоминания в ответах ИИ — через 4–8 недель после старта работ. Устойчивый рост Citation Rate — на горизонте 3 месяцев."],
  ["Как вы измеряете эффект?", "По двум метрикам: Citation Rate — доля ответов с упоминанием бренда, и Share of Voice — доля относительно конкурентов. Обе — в ежемесячном отчёте."],
  ["Работаете ли с малым бизнесом?", "Да. Начинаем с ИИ-аудита — он показывает исходную картину и точки роста. Дальше объём работ определяем вместе, исходя из задач."],
  ["Что если бренд уже упоминается в ИИ?", "Это хорошая отправная точка. Задача — увеличить частоту, точность и позицию упоминаний в ответе, а также расширить список релевантных запросов."],
  ["Можно ли совмещать с существующим SEO-подрядчиком?", "Да, и это рекомендуемый сценарий. GEO и SEO работают на разные каналы и усиливают друг друга."],
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-x max-w-4xl">
        <Reveal><h2 className="h2 mb-12">Частые вопросы</h2></Reveal>
        <div>
          {faq.map(([q, a], i) => (
            <div key={i} style={{ borderTop: "1px solid var(--border)" }}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={openIdx === i}
              >
                <span className="text-lg md:text-xl font-medium">{q}</span>
                <span style={{ color: "var(--red)", fontSize: 24, transition: "transform .2s", transform: openIdx === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-6 max-w-3xl" style={{ color: "var(--muted)" }}>{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}