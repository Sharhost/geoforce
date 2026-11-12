"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "ИИ-аудит видимости", "Проверяем, как бренд представлен в ответах языковых моделей. Фиксируем исходную точку — Citation Rate и Share of Voice."],
  ["02", "Стратегия контента", "Формируем семантическое ядро под ИИ-запросы и карту тем, на которые модель должна ссылаться на бренд."],
  ["03", "Внедрение", "Оптимизируем материалы, добавляем структурированные данные, выстраиваем граф знаний бренда."],
  ["04", "Мониторинг", "Отслеживаем упоминания на 7 платформах. Ежемесячный отчёт с динамикой метрик и точками роста."],
];

export function Methodology() {
  return (
    <section id="methodology" className="section relative">
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
        
        {/* Горизонтальный список */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          
          {steps.map(([n, t, d], i) => (
            <motion.div 
              key={n} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Верхняя линия (на десктопе) */}
              <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-white/10 transition-colors duration-300 group-hover:bg-[var(--red)]" />
              
              {/* Левая вертикальная линия (на мобильных) */}
              <div className="lg:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />

              <div className="pl-6 lg:pl-0 pt-0 lg:pt-16 pb-8 lg:pr-8 relative">
                {/* Точка на линии (только десктоп) */}
                <div className="hidden lg:flex absolute top-[24px] left-0 w-2 h-2 rounded-full bg-[var(--red)] shadow-[0_0_10px_var(--red)] z-10" />

                {/* Цифра */}
                <div 
                  className="mono text-3xl lg:text-4xl font-semibold mb-4 transition-all duration-300 group-hover:text-white"
                  style={{ color: "var(--red)" }}
                >
                  {n}
                </div>

                {/* Текст */}
                <h3 className="text-xl font-semibold mb-3 transition-transform duration-300 group-hover:translate-x-1">
                  {t}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
