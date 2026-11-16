"use client";

import { motion } from "framer-motion";

// === ВАШИ ТЕКСТЫ ЗДЕСЬ ===
// Меняйте тексты в этом массиве, и разметка HowTo обновится автоматически
const steps = [
  { n: "01", t: "ИИ-аудит видимости", d: "Проверяем, как бренд представлен в ответах языковых моделей. Фиксируем исходную точку — Citation Rate и Share of Voice." },
  { n: "02", t: "Стратегия контента", d: "Формируем семантическое ядро под ИИ-запросы и карту тем, на которые модель должна ссылаться на бренд." },
  { n: "03", t: "Внедрение", d: "Оптимизируем материалы, добавляем структурированные данные, выстраиваем граф знаний бренда." },
  { n: "04", t: "Мониторинг", d: "Отслеживаем упоминания на 7 платформах. Ежемесячный отчёт с динамикой метрик и точками роста." },
];

// Разметка HowTo для нейросетей (генерируется из массива steps)
const methodologyJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Четыре шага до видимости в ИИ",
  "description": "Последовательный процесс GEO-продвижения от аудита до измеримого результата.",
  "step": steps.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.t,
    "text": s.d
  }))
};

const stairOffsets = [
  "lg:mt-0",
  "lg:mt-12",
  "lg:mt-24",
  "lg:mt-36",
];

export function Methodology() {
  return (
    <section id="methodology" className="section relative">
      {/* Разметка для ИИ */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} 
      />
      
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="h2 max-w-3xl mb-4">Четыре шага до видимости в ИИ</h2>
          <p className="mb-16 text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Последовательный процесс: от аудита до измеримого результата.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-white/10 z-0 pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div 
              key={step.n} 
              className={`relative z-10 ${stairOffsets[i] || ""}`}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + i * 0.15, 
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="group relative gradient-card p-8 h-full transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                <div 
                  className="absolute -right-2 -top-6 text-[120px] font-bold leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none select-none mono"
                  style={{ color: "var(--red)" }}
                >
                  {step.n}
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div 
                    className="mono text-2xl font-semibold transition-colors duration-300 group-hover:text-white"
                    style={{ color: "var(--red)", textShadow: "0 0 20px rgba(255,45,45,0.3)" }}
                  >
                    {step.n}
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent transition-colors duration-300 group-hover:from-[var(--red)]" />
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-1">
                    {step.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.d}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
