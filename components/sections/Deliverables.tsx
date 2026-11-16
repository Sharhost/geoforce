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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="methodology" className="section relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="h2 max-w-3xl mb-4">Четыре шага до видимости в ИИ</h2>
          <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Наведите на карточку, чтобы увидеть этап на шкале.
          </p>
        </motion.div>

        {/* ================= ЕДИНАЯ ШКАЛА ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-8 relative">
          
          {/* Фоновая линия (серый трек) */}
          <div className="absolute top-[9px] left-0 w-full h-1 bg-white/10 rounded-full" />
          
          {/* Активная линия (красное заполнение) */}
          <div
            className="absolute top-[9px] left-0 h-1 bg-[var(--red)] rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_var(--red)]"
            // Заполняется ровно до центра выбранной карточки
            style={{ width: hoveredIdx !== null ? `${((hoveredIdx + 0.5) / 4) * 100}%` : "0%" }}
          />

          {steps.map((step, i) => {
            const isFilled = hoveredIdx !== null && i <= hoveredIdx;
            
            return (
              // items-center выравнивает точку и цифру ровно по центру колонки
              <div key={step.n} className="relative z-10 flex flex-col items-center gap-3">
                
                {/* Точка на шкале */}
                <div 
                  className={`w-5 h-5 rounded-full border-2 bg-[#0A0A0C] flex items-center justify-center transition-colors duration-300 ${
                    isFilled ? "border-[var(--red)]" : "border-white/20"
                  }`}
                >
                  <div 
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isFilled ? "bg-[var(--red)] shadow-[0_0_8px_var(--red)]" : "bg-transparent"
                    }`} 
                  />
                </div>
                
                {/* Номер (теперь ровно по центру) */}
                <div 
                  className={`mono text-sm font-semibold transition-colors duration-300 ${
                    isFilled ? "text-[var(--red)]" : "text-white/40"
                  }`}
                >
                  {step.n}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= КАРТОЧКИ СНИЗУ ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const isHovered = hoveredIdx === i;
            
            return (
              <div
                key={step.n}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative group gradient-card p-8 h-full flex flex-col overflow-hidden transition-all duration-500 cursor-pointer ${
                  isHovered ? "bg-[#151518] -translate-y-2" : "bg-[var(--surface)] hover:-translate-y-1"
                }`}
              >
                <div 
                  className={`absolute -right-2 -top-6 text-[120px] font-bold leading-none pointer-events-none select-none mono transition-opacity duration-500 ${
                    isHovered ? "opacity-[0.08]" : "opacity-[0.03]"
                  }`}
                  style={{ color: "var(--red)" }}
                >
                  {step.n}
                </div>

                <div className="relative z-10 flex-1">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                    isHovered ? "text-[var(--red)]" : "text-white"
                  }`}>
                    {step.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.d}
                  </p>
                </div>

                {/* Нижняя полоска на карточке */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                  <div 
                    className={`h-full bg-[var(--red)] transition-all duration-500 ${
                      isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                    }`} 
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
