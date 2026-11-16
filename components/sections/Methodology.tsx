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
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="methodology" className="section relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="h2 mb-4">Архитектура внедрения</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Как мы связываем ваш бренд с нейросетями на уровне данных.
          </p>
        </motion.div>

        {/* ДЕСКТОПНАЯ ВЕРСИЯ (Нейросеть) */}
        <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[600px]">
          
          {/* Фоновые линии (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Линия 01-02 */}
            <motion.path 
              d="M 250 150 Q 500 100 750 150" 
              fill="none" 
              stroke={activeIdx === 0 || activeIdx === 1 ? "var(--red)" : "rgba(255,255,255,0.1)"} 
              strokeWidth="2" 
              className="transition-colors duration-500"
            />
            {/* Линия 02-03 */}
            <motion.path 
              d="M 750 150 Q 800 300 750 450" 
              fill="none" 
              stroke={activeIdx === 1 || activeIdx === 2 ? "var(--red)" : "rgba(255,255,255,0.1)"} 
              strokeWidth="2" 
              className="transition-colors duration-500"
            />
            {/* Линия 03-04 */}
            <motion.path 
              d="M 750 450 Q 500 500 250 450" 
              fill="none" 
              stroke={activeIdx === 2 || activeIdx === 3 ? "var(--red)" : "rgba(255,255,255,0.1)"} 
              strokeWidth="2" 
              className="transition-colors duration-500"
            />
            {/* Линия 04-01 */}
            <motion.path 
              d="M 250 450 Q 200 300 250 150" 
              fill="none" 
              stroke={activeIdx === 3 || activeIdx === 0 ? "var(--red)" : "rgba(255,255,255,0.1)"} 
              strokeWidth="2" 
              className="transition-colors duration-500"
            />
            {/* Центральные пересечения */}
            <motion.path 
              d="M 250 150 L 750 450" 
              fill="none" 
              stroke={activeIdx === 0 || activeIdx === 2 ? "rgba(255,45,45,0.3)" : "rgba(255,255,255,0.03)"} 
              strokeWidth="1" 
              strokeDasharray="4 4"
              className="transition-colors duration-500"
            />
            <motion.path 
              d="M 750 150 L 250 450" 
              fill="none" 
              stroke={activeIdx === 1 || activeIdx === 3 ? "rgba(255,45,45,0.3)" : "rgba(255,255,255,0.03)"} 
              strokeWidth="1" 
              strokeDasharray="4 4"
              className="transition-colors duration-500"
            />
          </svg>

          {/* Узлы (Ноды) */}
          
          {/* Нод 1 (Верхний левый) */}
          <Node 
            step={steps[0]} 
            isActive={activeIdx === 0} 
            onClick={() => setActiveIdx(0)} 
            className="absolute top-[5%] left-[10%]" 
            align="right"
          />
          
          {/* Нод 2 (Верхний правый) */}
          <Node 
            step={steps[1]} 
            isActive={activeIdx === 1} 
            onClick={() => setActiveIdx(1)} 
            className="absolute top-[5%] right-[10%]" 
            align="left"
          />

          {/* Нод 3 (Нижний правый) */}
          <Node 
            step={steps[2]} 
            isActive={activeIdx === 2} 
            onClick={() => setActiveIdx(2)} 
            className="absolute bottom-[5%] right-[10%]" 
            align="left"
          />

          {/* Нод 4 (Нижний левый) */}
          <Node 
            step={steps[3]} 
            isActive={activeIdx === 3} 
            onClick={() => setActiveIdx(3)} 
            className="absolute bottom-[5%] left-[10%]" 
            align="right"
          />

          {/* Центральное ядро */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10 pointer-events-none">
            <div className="w-24 h-24 rounded-full bg-[#0A0A0C] border border-[var(--red)] shadow-[0_0_40px_rgba(255,45,45,0.2)] flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-[var(--red)] opacity-50 animate-ping" style={{ animationDuration: '3s' }} />
              <span className="mono text-sm font-bold text-white">AI</span>
            </div>
          </div>
        </div>

        {/* МОБИЛЬНАЯ ВЕРСИЯ (Вертикальный таймлайн) */}
        <div className="lg:hidden relative border-l border-white/10 ml-4 space-y-8 pb-4">
          {steps.map((step, i) => (
            <motion.div 
              key={step.n}
              className="relative pl-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#0A0A0C] border-2 border-[var(--red)] -translate-x-[6.5px] shadow-[0_0_10px_var(--red)]" />
              <div className="mono text-sm font-semibold mb-1" style={{ color: "var(--red)" }}>{step.n} / ЭТАП</div>
              <h3 className="text-xl font-semibold mb-2">{step.t}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.d}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// Компонент узла (Нода)
function Node({ step, isActive, onClick, className, align }: { step: any, isActive: boolean, onClick: () => void, className: string, align: 'left' | 'right' }) {
  return (
    <motion.div 
      className={`absolute z-20 cursor-pointer ${className}`}
      onMouseEnter={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className={`flex items-center gap-6 ${align === 'right' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
        
        {/* Круглый узел */}
        <div className={`relative flex-shrink-0 w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-500 ${
          isActive 
            ? "bg-[#151518] border-[var(--red)] shadow-[0_0_20px_rgba(255,45,45,0.4)] scale-110" 
            : "bg-[#0A0A0C] border-white/20 hover:border-white/50"
        }`}>
          <span className={`mono text-xl font-bold transition-colors duration-300 ${isActive ? "text-[var(--red)]" : "text-white/50"}`}>
            {step.n}
          </span>
        </div>

        {/* Текст, который раскрывается */}
        <div className={`w-[280px] transition-all duration-500 ${isActive ? "opacity-100 translate-x-0" : "opacity-40 hover:opacity-100"}`}>
          <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isActive ? "text-white" : "text-white/70"}`}>
            {step.t}
          </h3>
          <p className={`text-sm leading-relaxed transition-all duration-500 ${
            isActive ? "max-h-[100px] opacity-100 mt-2" : "max-h-0 opacity-0 overflow-hidden lg:max-h-[100px] lg:opacity-100"
          }`} style={{ color: "var(--muted)" }}>
            {step.d}
          </p>
        </div>

      </div>
    </motion.div>
  );
}
