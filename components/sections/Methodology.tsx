"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "ИИ-аудит видимости", d: "Проверяем, как бренд представлен в ответах языковых моделей. Фиксируем исходную точку — Citation Rate и Share of Voice." },
  { n: "02", t: "Стратегия контента", d: "Формируем семантическое ядро под ИИ-запросы и карту тем, на которые модель должна ссылаться на бренд." },
  { n: "03", t: "Внедрение", d: "Оптимизируем материалы, добавляем структурированные данные, выстраиваем граф знаний бренда." },
  { n: "04", t: "Мониторинг", d: "Отслеживаем упоминания на 7 платформах. Ежемесячный отчёт с динамикой метрик и точками роста." },
];

const methodologyJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Четыре шага до видимости в ИИ",
  "step": steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.t, "text": s.d }))
};

export function Methodology() {
  return (
    <section id="methodology" className="section relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="h2 mb-4">Дорожная карта внедрения</h2>
          <p className="mb-16 text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Путь от невидимости в ИИ до статуса главного эксперта.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          
          {/* Вертикальная линия пути (на десктопе) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2" />
          
          {/* Анимированная красная линия */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-[var(--red)] -translate-x-1/2 origin-top shadow-[0_0_15px_var(--red)]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={step.n}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.2 }}
                >
                  {/* Текстовая карточка */}
                  <div className={`w-full md:w-[45%] ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="gradient-card p-6 md:p-8 relative group hover:-translate-y-1 transition-transform">
                      <div className="mono text-[var(--red)] text-sm mb-2">{step.n} / ЭТАП</div>
                      <h3 className="text-xl font-semibold mb-3">{step.t}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.d}</p>
                    </div>
                  </div>

                  {/* Точка на линии */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0A0A0C] border-2 border-[var(--red)] flex items-center justify-center z-10 shadow-[0_0_15px_var(--red)] hidden md:flex">
                    <div className="w-2 h-2 rounded-full bg-[var(--red)]" />
                  </div>

                  {/* Пустая колонка для сетки */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
