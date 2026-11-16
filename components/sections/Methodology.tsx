"use client";

import { useState } from "react";
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
  "description": "Последовательный процесс GEO-продвижения от аудита до измеримого результата.",
  "step": steps.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.t,
    "text": s.d
  }))
};

export function Methodology() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="methodology" className="section relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="h2 max-w-3xl mb-4">Четыре шага до видимости в ИИ</h2>
          <p className="mb-12 text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Последовательный процесс: от аудита до измеримого результата. Наведите на шаг, чтобы узнать подробности.
          </p>
        </motion.div>
        
        {/* Аккордеон */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[400px]">
          {steps.map((step, i) => {
            const isActive = activeIdx === i;
            return (
              <motion.div
                key={step.n}
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
                className={`relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between p-6 md:p-8 ${
                  isActive 
                    ? "lg:flex-[3] bg-[#151518] border-[var(--red)] shadow-[0_0_30px_rgba(255,45,45,0.1)]" 
                    : "lg:flex-1 bg-[#0c0c0e] border-white/5 hover:border-white/20"
                }`}
              >
                {/* Огромная цифра на фоне */}
                <div 
                  className={`absolute -right-4 -bottom-8 text-[120px] font-bold leading-none mono pointer-events-none select-none transition-opacity duration-700 ${
                    isActive ? "opacity-[0.05]" : "opacity-[0.02]"
                  }`}
                  style={{ color: "var(--red)" }}
                >
                  {step.n}
                </div>

                <div className="relative z-10 flex items-center justify-between lg:items-start lg:flex-col">
                  <div 
                    className={`mono text-xl font-semibold transition-colors duration-500 ${isActive ? "text-[var(--red)]" : "text-white/40"}`}
                  >
                    {step.n}
                  </div>
                  <div className={`h-[1px] w-full my-4 hidden lg:block transition-colors duration-500 ${isActive ? "bg-[var(--red)]" : "bg-white/10"}`} />
                </div>

                <div className="relative z-10 mt-auto">
                  <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${isActive ? "text-white" : "text-white/70"}`}>
                    {step.t}
                  </h3>
                  <div className={`transition-all duration-500 overflow-hidden ${isActive ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:max-h-0"}`}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {step.d}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
