"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  MotionConfig,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Локальный Reveal (мягкий триггер, как в исправленных Metrics)       */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Данные карточек                                                     */
/* ------------------------------------------------------------------ */
const REASONS = [
  {
    n: "01",
    t: "Более жесткая конкуренция",
    d: "В поисковых запросах на странице выводится 10 сайтов, в ИИ ответах 3-5 рекомендаций.",
  },
  {
    n: "02",
    t: "Первые закрепляются как ответ по умолчанию",
    d: "Сместить уже рекомендованного конкурента в 3–4 раза дороже, чем войти первым.",
  },
  {
    n: "03",
    t: "Рынок GEO в Беларуси формируется",
    d: "ИИ стремительно развивается, конкуренция за упоминания сейчас в разы ниже, чем будет через один-два года.",
  },
  {
    n: "04",
    t: "Трафик из поиска падает",
    d: "С приходом ИИ в поисковую выдачу, кликабельность обычных сайтов упала на 30%. Клиенты получают ответ сразу и не переходят на сайты.",
    isStat: true,
    stat: "-30%",
  },
];

const CURVE = "M 0 38 Q 40 38, 100 0";
const AREA = "M 0 38 Q 40 38, 100 0 L 100 40 L 0 40 Z";
const GRADIENT_ID = "geo-complexity-gradient";

/* ------------------------------------------------------------------ */
/*  График сложности входа в GEO                                       */
/*  Линия рисуется через pathLength (stroke-dash), без clip-path.       */
/*  По умолчанию всё видно; анимация запускается при появлении в зоне   */
/*  видимости и не ломается, если триггер не сработал.                  */
/* ------------------------------------------------------------------ */
function ComplexityChart() {
  const boxRef = useRef<HTMLDivElement>(null);
  const inView = useInView(boxRef, {
    once: true,
    amount: "some",
    margin: "0px 0px -10% 0px",
  });
  const reduceMotion = useReducedMotion();
  const [started, setStarted] = useState(false);

  // запускаем один раз, когда график реально попал в viewport
  if (inView && !started) setStarted(true);
  const play = started && !reduceMotion;

  return (
    <div
      ref={boxRef}
      className="relative h-48 md:h-56 w-full border-l border-b border-white/20"
    >
      {/* сетка */}
      <svg
        viewBox="0 0 100 40"
        className="absolute inset-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      </svg>

      {/* заливка под кривой */}
      <svg
        viewBox="0 0 100 40"
        className="absolute inset-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={GRADIENT_ID} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--red)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--red)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d={AREA}
          fill={`url(#${GRADIENT_ID})`}
          initial={false}
          animate={play ? { opacity: [0, 1] } : { opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </svg>

      {/* линия: свечение + чёткий штрих, рисуются слева направо */}
      <svg
        viewBox="0 0 100 40"
        className="absolute inset-0 w-full h-full overflow-visible"
        preserveAspectRatio="none"
      >
        <motion.path
          d={CURVE}
          fill="none"
          stroke="var(--red)"
          strokeWidth="8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ filter: "blur(6px)", opacity: 0.6 }}
          initial={false}
          animate={play ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d={CURVE}
          fill="none"
          stroke="var(--red)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={false}
          animate={play ? { pathLength: [0, 1] } : { pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      {/* точка «сейчас» */}
      <motion.div
        className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full bg-[var(--red)] shadow-[0_0_15px_var(--red)] -translate-x-1/2 translate-y-1/2 z-10"
        style={{ bottom: "5%", left: "1%" }}
        initial={false}
        animate={play ? { scale: [0, 1] } : { scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <div className="absolute inset-0 rounded-full bg-[var(--red)] animate-ping opacity-40" />
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Секция «Четыре причины»                                             */
/* ------------------------------------------------------------------ */
export function WhyNow() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="section relative overflow-hidden">
        <div className="container-x">
          <Reveal>
            <h2 className="h2 max-w-3xl mb-4">
              Четыре причины начать с GeoForce прямо сейчас
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Окно возможностей закрывается быстрее, чем кажется.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 mb-16 w-full">
              <div
                className="flex flex-wrap justify-between gap-2 text-[10px] md:text-xs font-mono mb-4"
                style={{ color: "var(--muted)" }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--red)] animate-pulse" />
                  Сейчас (низкая сложность)
                </span>
                <span>Через год (высокая сложность)</span>
              </div>

              <ComplexityChart />

              <div
                className="text-[10px] md:text-xs mt-4 text-center font-mono"
                style={{ color: "var(--muted)" }}
              >
                Сложность входа в GEO
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {REASONS.map((item, i) => (
              <Reveal key={item.n} delay={0.2 + 0.1 * i}>
                <div className="group relative gradient-card p-8 h-full transition-transform hover:-translate-y-1 overflow-hidden">
                  <div
                    className={
                      "absolute -right-2 -bottom-6 font-bold leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08] pointer-events-none select-none mono " +
                      (item.isStat ? "text-[100px] md:text-[120px]" : "text-[120px]")
                    }
                    style={{
                      color: item.isStat ? "rgba(255,45,45,0.15)" : "var(--red)",
                    }}
                  >
                    {item.isStat ? item.stat : item.n}
                  </div>
                  <div className="relative z-10">
                    <div className="h3 mb-3 transition-colors group-hover:text-[var(--red)]">
                      {item.t}
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                      {item.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div
              className="mt-12 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,45,45,0.1) 0%, rgba(17,17,20,1) 100%)",
                border: "1px solid rgba(255,45,45,0.2)",
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--red), transparent)",
                }}
              />
              <p className="h3 !mb-0 text-white relative z-10">
                Сейчас{" "}
                <span style={{ color: "var(--red)" }}>лучший момент </span>
                {" — до того, как это "}
                <span style={{ color: "var(--red)" }}>станет очевидным </span>
                {" для всех."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </MotionConfig>
  );
}

export default WhyNow;
