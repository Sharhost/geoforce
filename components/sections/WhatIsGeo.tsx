"use client";

import { Reveal } from "../Reveal";
import { motion } from "framer-motion";

export function WhatIsGeo() {
  return (
    <section className="section relative">
      <div className="container-x">
        
        {/* ЗАГОЛОВОК И ОПРЕДЕЛЕНИЕ */}
        <div className="max-w-4xl mb-16">
          <Reveal>
            <h2 className="h2 mb-6">Что такое GEO?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-xl md:text-2xl leading-relaxed">
              <span className="text-white font-semibold">GEO (Generative Engine Optimization)</span> — это управление видимостью вашего бренда в генеративных нейросетях. 
              <span className="block mt-4" style={{ color: "var(--muted)" }}>
                ChatGPT, Gemini и Perplexity ежедневно сканируют миллионы страниц. GEO делает так, чтобы на этом радаре ваш бренд горел ярче всех, и ИИ замечал вас первым.
              </span>
            </div>
          </Reveal>
        </div>

        {/* ВИЗУАЛИЗАЦИЯ РАДАРА (Split-Layout) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ЛЕВАЯ ЧАСТЬ: Карточки-факты */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <Reveal delay={0.2}>
              <div className="gradient-card p-6 md:p-8">
                <div className="text-sm mono mb-2" style={{ color: "var(--red)" }}>01 / Сканирование</div>
                <div className="text-xl font-semibold mb-2">Нейросети ищут факты</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  ИИ не гуглит как человек. Он вычитывает данные из тысяч источников, чтобы сформировать базу знаний.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <div className="gradient-card p-6 md:p-8">
                <div className="text-sm mono mb-2" style={{ color: "var(--red)" }}>02 / Анализ</div>
                <div className="text-xl font-semibold mb-2">Кому доверять?</div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  Если ваши данные структурированы и подтверждены авторитетными источниками, ИИ ставит на вас «маячок».
                </p>
              </div>
            </Reveal>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Сам радар */}
          <Reveal delay={0.4} className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-full border border-white/10 bg-[#0A0A0C] overflow-hidden shadow-[0_0_50px_rgba(255,45,45,0.05)]">
              
              {/* Сетка радара (концентрические круги) */}
              <div className="absolute inset-[10%] rounded-full border border-white/5" />
              <div className="absolute inset-[30%] rounded-full border border-white/5" />
              <div className="absolute inset-[50%] rounded-full border border-white/5" />
              <div className="absolute inset-[70%] rounded-full border border-white/5" />
              
              {/* Перекрестие */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5" />

              {/* Сканирующий луч (CSS-анимация) */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(255, 45, 45, 0.3) 100%)",
                  animation: "radar-sweep 4s linear infinite"
                }}
              />

              {/* Точки конкурентов (серые, тусклые) */}
              <div className="absolute top-[25%] left-[30%] w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="absolute top-[70%] left-[20%] w-2 h-2 rounded-full bg-white/10" />
              <div className="absolute top-[35%] left-[80%] w-1.5 h-1.5 rounded-full bg-white/20" />
              <div className="absolute top-[80%] left-[60%] w-1.5 h-1.5 rounded-full bg-white/10" />

              {/* ВАШ БРЕНД (Красная пульсирующая точка) */}
              <div className="absolute top-[45%] left-[60%] flex items-center justify-center">
                {/* Внешнее свечение */}
                <div className="absolute w-12 h-12 rounded-full bg-[var(--red)] opacity-20 animate-ping" style={{ animationDuration: '3s' }} />
                {/* Точка */}
                <div className="relative z-10 w-3 h-3 rounded-full bg-[var(--red)] shadow-[0_0_20px_var(--red)]" />
                {/* Подпись */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-[rgba(255,45,45,0.1)] border border-[rgba(255,45,45,0.3)] rounded text-[10px] text-[var(--red)] font-mono">
                  [Ваш бренд]
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>

      {/* CSS для анимации луча */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}
