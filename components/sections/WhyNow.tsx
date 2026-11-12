"use client";

import { Reveal } from "../Reveal";
import * as motion from "motion/react-client";

const points = [
  { n: "01", t: "Модели обучаются на текущем контенте", d: "То, что вы публикуете сейчас, попадёт в следующее поколение моделей. Позже — дольше ждать." },
  { n: "02", t: "Первые закрепляются как ответ по умолчанию", d: "Перебить уже рекомендованного конкурента в 3–4 раза дороже, чем войти первым." },
  { n: "03", t: "Рынок GEO только формируется", d: "Конкуренция за упоминания в разы ниже, чем будет через год." },
  { n: "04", t: "Аудитория уже спрашивает ИИ", d: "Миллионы решений о покупке принимаются в чатах, а не в поиске." },
];

export function WhyNow() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        
        {/* ЗАГОЛОВОК */}
        <Reveal>
          <h2 className="h2 max-w-3xl mb-4">Окно возможностей закрывается быстрее, чем кажется</h2>
          <p style={{ color: "var(--muted)" }}>Четыре причины начать в этом квартале.</p>
        </Reveal>

        {/* ГРАФИК */}
        <Reveal delay={0.1}>
          <div className="mt-12 mb-16 w-full">
            <div className="flex justify-between text-xs font-mono mb-4" style={{ color: "var(--muted)" }}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
                Сейчас (низкая сложность)
              </span>
              <span>Через год (высокая сложность)</span>
            </div>
            
            <div className="relative h-32 md:h-48 w-full border-l border-b border-white/10">
              
              {/* 1. СТАТИЧНАЯ СЕТКА */}
              <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </svg>

              {/* 2. КРАСНЫЙ ГРАДИЕНТ ПОД ГРАФИКОМ (плавно проявляется) */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M 0 38 Q 30 38 50 30 T 100 0 L 100 40 L 0 40 Z"
                    fill="url(#gradient)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--red)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--red)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* 3. САМА ЛИНИЯ (рисуется слева направо через clip-path) */}
              <motion.div
                className="absolute inset-0"
                initial={{ clipPath: "inset(0 100% 0 0)" }} // Прячем всё справа
                whileInView={{ clipPath: "inset(0 0% 0 0)" }} // Открываем
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <svg viewBox="0 0 100 40" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M 0 38 Q 30 38 50 30 T 100 0"
                    fill="none"
                    stroke="var(--red)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </motion.div>

              {/* 4. ТОЧКА "СЕЙЧАС" */}
              <motion.div 
                className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--red)] shadow-[0_0_15px_var(--red)] -translate-x-1/2 translate-y-1/2 z-10"
                style={{ bottom: "5%", left: "1%" }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                <div className="absolute inset-0 rounded-full bg-[var(--red)] animate-ping opacity-50" />
              </motion.div>
            </div>
            
            <div className="text-xs mt-4 text-center font-mono" style={{ color: "var(--muted)" }}>
              Сложность входа в GEO
            </div>
          </div>
        </Reveal>

        {/* КАРТОЧКИ */}
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.n} delay={0.2 + i * 0.1}>
              <div className="group relative gradient-card p-8 h-full transition-transform hover:-translate-y-1 overflow-hidden">
                <div className="absolute -right-2 -bottom-6 text-[120px] font-bold leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none select-none mono" style={{ color: "var(--red)" }}>
                  {p.n}
                </div>
                <div className="relative z-10">
                  <div className="h3 mb-3 transition-colors group-hover:text-[var(--red)]">{p.t}</div>
                  <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ФИНАЛЬНЫЙ БАННЕР */}
        <Reveal delay={0.6}>
          <div className="mt-12 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(255,45,45,0.1) 0%, rgba(17,17,20,1) 100%)", border: "1px solid rgba(255,45,45,0.2)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, var(--red), transparent)" }} />
            <p className="h3 !mb-0 text-white relative z-10">
              Сейчас <span style={{ color: "var(--red)" }}>лучший момент </span>— до того, как это <span style={{ color: "var(--red)" }}>станет очевидным </span> для всех.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

