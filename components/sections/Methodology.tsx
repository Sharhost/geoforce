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
    <section id="methodology" className="section relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodologyJsonLd) }} />
      
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="h2 mb-4">Орбита внедрения GEO</h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Четыре этапа, которые превращают ваш бренд в главный источник для нейросетей.
          </p>
        </motion.div>
        
        {/* ДЕСКТОПНАЯ ВЕРСИЯ (Круг) */}
        <div className="hidden lg:flex justify-center items-center relative w-full aspect-square max-w-[800px] mx-auto">
          
          {/* Фоновое кольцо (Орбита) */}
          <motion.div 
            className="absolute inset-[15%] rounded-full border border-white/10"
            initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Пунктирное свечение на кольце */}
            <div className="absolute inset-0 rounded-full border border-[var(--red)] opacity-20 blur-sm" />
            
            {/* Вращающаяся точка на орбите */}
            <motion.div 
              className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[var(--red)] shadow-[0_0_15px_var(--red)] -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            />
          </motion.div>

          {/* Центральный узел */}
          <motion.div 
            className="relative z-10 w-48 h-48 rounded-full bg-[#0A0A0C] border border-white/10 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,45,45,0.1)]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="absolute inset-0 rounded-full border border-[var(--red)] opacity-30 animate-ping" style={{ animationDuration: '4s' }} />
            <span className="mono text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>Процесс</span>
            <span className="text-3xl font-bold text-white tracking-tight">GeoForce</span>
          </motion.div>

          {/* Карточки шагов по кругу */}
          {/* Верхняя (01) */}
          <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[340px]">
            <StepCard step={steps[0]} isHovered={hoveredIdx === 0} onHover={() => setHoveredIdx(0)} delay={0.2} />
          </div>
          
          {/* Правая (02) */}
          <div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-[340px]">
            <StepCard step={steps[1]} isHovered={hoveredIdx === 1} onHover={() => setHoveredIdx(1)} delay={0.4} />
          </div>
          
          {/* Нижняя (03) */}
          <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[340px]">
            <StepCard step={steps[2]} isHovered={hoveredIdx === 2} onHover={() => setHoveredIdx(2)} delay={0.6} />
          </div>
          
          {/* Левая (04) */}
          <div className="absolute top-1/2 left-[2%] -translate-y-1/2 w-[340px]">
            <StepCard step={steps[3]} isHovered={hoveredIdx === 3} onHover={() => setHoveredIdx(3)} delay={0.8} />
          </div>
        </div>

        {/* МОБИЛЬНАЯ ВЕРСИЯ (Вертикальный таймлайн) */}
        <div className="lg:hidden relative border-l border-white/10 ml-4 md:ml-8 space-y-8 pb-4">
          {steps.map((step, i) => (
            <motion.div 
              key={step.n}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Точка на линии */}
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

// Выносим карточку в отдельный компонент для чистоты кода
function StepCard({ step, isHovered, onHover, delay }: { step: any, isHovered: boolean, onHover: () => void, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseEnter={onHover}
      onMouseLeave={() => onHover()} // Сброс при уходе (можно доработать логику)
      className={`gradient-card p-6 relative transition-all duration-500 cursor-default ${
        isHovered ? "scale-105 shadow-[0_0_30px_rgba(255,45,45,0.15)] bg-[#151518]" : "hover:scale-105"
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="mono text-xl font-bold" style={{ color: "var(--red)" }}>{step.n}</div>
        <div className={`h-[1px] flex-1 transition-colors duration-300 ${isHovered ? "bg-[var(--red)]" : "bg-white/10"}`} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{step.t}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.d}</p>
    </motion.div>
  );
}
