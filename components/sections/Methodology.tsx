"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const containerRef = useRef(null);
  // Отслеживаем, когда блок появится на экране
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Состояние для постепенного заполнения (0 - не началось, 1-4 - этапы)
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Запускаем последовательное заполнение с задержкой
    const timers = steps.map((_, i) => {
      return setTimeout(() => {
        setActiveStep(i + 1);
      }, i * 1200); // Каждая карточка активируется через 1.2 секунды после предыдущей
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section id="methodology" className="section relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x" ref={containerRef}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="h2 max-w-3xl mb-4">Четыре шага до видимости в ИИ</h2>
          <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Последовательный процесс: от аудита до измеримого результата.
          </p>
        </motion.div>
        
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, i) => {
            const isActive = activeStep > i;
            
            return (
              <div 
                key={step.n} 
                className="relative group gradient-card p-8 h-full flex flex-col overflow-hidden transition-all duration-700"
                style={{
                  // При активации карточка получает легкое свечение
                  boxShadow: isActive ? "0 0 30px rgba(255,45,45,0.05)" : "none"
                }}
              >
                
                {/* Огромная цифра на фоне */}
                <div 
                  className={`absolute -right-2 -top-6 text-[120px] font-bold leading-none pointer-events-none select-none mono transition-opacity duration-700 ${
                    isActive ? "opacity-[0.06]" : "opacity-[0.02]"
                  }`}
                  style={{ color: "var(--red)" }}
                >
                  {step.n}
                </div>

                {/* Номер и линия */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div 
                    className={`mono text-2xl font-semibold transition-all duration-500 ${
                      isActive ? "text-[var(--red)] scale-110 origin-left" : "text-white/30"
                    }`}
                    style={{ textShadow: isActive ? "0 0 20px rgba(255,45,45,0.4)" : "none" }}
                  >
                    {step.n}
                  </div>
                  <div 
                    className={`h-[1px] flex-1 transition-colors duration-500 ${
                      isActive ? "bg-[var(--red)]" : "bg-white/10"
                    }`} 
                  />
                </div>

                {/* Текст */}
                <div className="relative z-10 flex-1">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
                    isActive ? "text-white" : "text-white/50"
                  }`}>
                    {step.t}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed transition-colors duration-500" 
                    style={{ color: isActive ? "var(--muted)" : "rgba(138,138,147,0.4)" }}
                  >
                    {step.d}
                  </p>
                </div>

                {/* ПОЛОСА ПРОГРЕССА ВНИЗУ КАРТОЧКИ */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                  <motion.div 
                    className="h-full bg-[var(--red)] shadow-[0_0_10px_var(--red)]"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
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
