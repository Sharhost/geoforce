"use client";

import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "ИИ-аудит видимости", d: "Проверяем, как бренд представлен в ответах языковых моделей. Фиксируем исходную точку — Citation Rate и Share of Voice.", status: "Анализ данных" },
  { n: "02", t: "Стратегия контента", d: "Формируем семантическое ядро под ИИ-запросы и карту тем, на которые модель должна ссылаться на бренд.", status: "Формирование ядра" },
  { n: "03", t: "Внедрение", d: "Оптимизируем материалы, добавляем структурированные данные, выстраиваем граф знаний бренда.", status: "Оптимизация" },
  { n: "04", t: "Мониторинг", d: "Отслеживаем упоминания на 7 платформах. Ежемесячный отчёт с динамикой метрик и точками роста.", status: "Отслеживание" },
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
  return (
    <section id="methodology" className="section relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x max-w-5xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="h2 mb-4">Протокол внедрения</h2>
          <p className="text-lg mx-auto max-w-2xl" style={{ color: "var(--muted)" }}>
            Последовательность действий от аудита до измеримого результата.
          </p>
        </motion.div>
        
        {/* ПАНЕЛЬ УПРАВЛЕНИЯ (Dashboard) */}
        <div className="rounded-2xl border border-white/10 bg-[#0A0A0C] overflow-hidden shadow-2xl">
          
          {/* Шапка панели */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#111114] border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
              <span className="mono text-xs font-semibold tracking-wider text-white">GEO_PIPELINE_V.1</span>
            </div>
            <div className="mono text-xs hidden md:block" style={{ color: "var(--muted)" }}>
              STATUS: <span className="text-[#27C93F]">ACTIVE</span>
            </div>
          </div>

          {/* Список шагов */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div 
                key={step.n}
                className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Левая колонка: Номер и Статус */}
                <div className="flex items-center gap-4 md:w-[200px] flex-shrink-0">
                  <div 
                    className="mono text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--red)]"
                    style={{ color: "white" }}
                  >
                    {step.n}
                  </div>
                  <div className="mono text-[10px] md:text-xs uppercase px-2 py-1 rounded bg-white/5 border border-white/10" style={{ color: "var(--muted)" }}>
                    {step.status}
                  </div>
                </div>

                {/* Центральная колонка: Текст */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 transition-transform duration-300 group-hover:translate-x-1">
                    {step.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.d}
                  </p>
                </div>

                {/* Правая колонка: Визуальный прогресс */}
                <div className="md:w-[150px] flex-shrink-0 flex flex-col items-start md:items-end justify-center">
                  <div className="mono text-xs mb-2 font-medium" style={{ color: "var(--red)" }}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                    >
                      100%
                    </motion.span>
                  </div>
                  {/* Полоса прогресса */}
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[var(--red)] shadow-[0_0_10px_var(--red)] rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Подвал панели */}
          <div className="px-6 py-4 bg-[#111114] border-t border-white/5 flex items-center justify-between">
            <div className="mono text-[10px] md:text-xs" style={{ color: "var(--muted)" }}>
              SYS_READY_FOR_DEPLOYMENT
            </div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
