"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { useContactModal } from "../ContactModalProvider";

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
  const { open } = useContactModal();

  return (
    <section id="faq" className="section relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          
          {/* ЛЕВАЯ КОЛОНКА: Заголовок и CTA (Sticky) */}
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <h2 className="h2 mb-4">Частые вопросы</h2>
              <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>
                Собрали то, о чём спрашивают чаще всего. Если не нашли свой вопрос — напишите нам напрямую.
              </p>
              <button 
                onClick={open}
                className="btn-ghost"
              >
                Задать свой вопрос
              </button>
            </Reveal>
          </div>

          {/* ПРАВАЯ КОЛОНКА: Аккордеон */}
          <div className="flex flex-col gap-4">
            {faq.map(([q, a], i) => {
              const isOpen = openIdx === i;
              return (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <div 
                    className="gradient-card overflow-hidden transition-all duration-300"
                    style={{ 
                      background: isOpen ? "rgba(17,17,20,0.9)" : "var(--surface)",
                    }}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-start gap-4 md:gap-6 p-6 md:p-8 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span 
                        className="mono text-sm mt-1 transition-colors duration-300"
                        style={{ color: isOpen ? "var(--red)" : "var(--muted)" }}
                      >
                        0{i + 1}
                      </span>
                      
                      <span className="flex-1 text-lg md:text-xl font-medium transition-colors duration-300 group-hover:text-white">
                        {q}
                      </span>
                      
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ 
                          background: isOpen ? "var(--red)" : "rgba(255,255,255,0.05)",
                          transform: isOpen ? "rotate(45deg)" : "none"
                        }}
                      >
                        <svg 
                          width="14" height="14" viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={isOpen ? "white" : "var(--text)"} 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 md:pl-[3.5rem] text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                            {a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
