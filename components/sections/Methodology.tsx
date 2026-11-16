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
            Последовательный процесс: от аудита до измеримого результата.
          </p>
        </motion.div>

        {/* ================= ШКАЛА СВЕРХУ (Только десктоп) ================= */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-12 relative">
          {/* Фоновая линия, соединяющая все отрезки */}
          <div className="absolute top-[30px] left-0 w-full h-[1px] bg-white/10 z-0" />

          {steps.map((step, i) => (
            <div key={step.n} className="relative z-10">
              {/* Номер над шкалой */}
              <div className="mono text-sm font-semibold mb-3 transition-colors duration-500 text-white/50">
                {step.n}
              </div>
              
              {/* Сегмент шкалы */}
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[var(--red)] shadow-[0_0_10px_var(--red)]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-100px" }}
                  // Задержка создает эффект постепенного заполнения слева направо
                  transition={{ duration: 1.5, delay: i * 0.4, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ================= КАРТОЧКИ СНИЗУ ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={step.n} 
              className="relative group gradient-card p-8 h-full flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              // Появление карточек синхронизировано с заполнением шкалы
              transition={{ duration: 0.6, delay: 0.2 + i * 0.4 }}
            >
              {/* Огромная цифра на фоне */}
              <div 
                className="absolute -right-2 -top-6 text-[120px] font-bold leading-none opacity-[0.03] pointer-events-none select-none mono transition-opacity duration-500 group-hover:opacity-[0.08]"
                style={{ color: "var(--red)" }}
              >
                {step.n}
              </div>

              <div className="relative z-10 flex-1">
                <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-[var(--red)]">
                  {step.t}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {step.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
