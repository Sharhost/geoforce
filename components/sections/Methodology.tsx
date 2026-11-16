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
  "step": steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.t, "text": s.d }))
};

export function Methodology() {
  return (
    <section id="methodology" className="section relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="h2 mb-4">Как мы работаем</h2>
          <p className="mb-12 text-lg" style={{ color: "var(--muted)" }}>
            Протокол внедрения GEO.
          </p>
        </motion.div>
        
        {/* Окно терминала */}
        <motion.div 
          className="rounded-xl border border-white/10 bg-[#0A0A0C] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          {/* Шапка терминала */}
          <div className="flex items-center px-4 py-3 bg-[#111114] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/20" />
            </div>
            <span className="ml-4 mono text-xs text-white/30">geoforce@system:~/methodology</span>
          </div>

          {/* Строки кода */}
          <div className="p-6 md:p-8 space-y-8 font-mono">
            {steps.map((step, i) => (
              <motion.div 
                key={step.n}
                initial={{ opacity: 0, x: -10 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-2 text-sm">
                  <span className="text-[var(--red)]">➜</span>
                  <span className="text-white/40">~ step_{step.n}</span>
                  <span className="text-[#27C93F] ml-auto opacity-50 group-hover:opacity-100 transition-opacity">[ OK ]</span>
                </div>
                <div className="pl-6 border-l border-white/10 group-hover:border-[var(--red)] transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-sans">{step.t}</h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/60">{step.d}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Мигающий курсор в конце */}
            <div className="flex items-center gap-2 pt-4">
              <span className="text-[var(--red)]">➜</span>
              <motion.div 
                className="w-2.5 h-4 bg-white/50"
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
