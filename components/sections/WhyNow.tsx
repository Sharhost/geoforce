"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  MotionConfig,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Локальный Reveal (мягкий триггер)                                   */
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
/*  Размер контейнера в пикселях: viewBox совпадает с размером,         */
/*  масштаб 1:1 → непрерывная линия и точная толщина штриха.            */
/* ------------------------------------------------------------------ */
function useElementSize() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 600, h: 224 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      setSize((s) => (s.w === w && s.h === h ? s : { w, h }));
    };

    measure();

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return { ref, size };
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

const GRADIENT_ID = "geo-complexity-gradient";

/* ------------------------------------------------------------------ */
/*  График сложности входа в GEO                                       */
/*  Линия рисуется через pathLength в пиксельном viewBox (без           */
/*  vectorEffect) — непрерывный штрих на всех браузерах.                */
/*  По умолчанию всё видно; анимация — при появлении в viewport.        */
/* ------------------------------------------------------------------ */
function ComplexityChart() {
  const { ref, size } = useElementSize();
  const inView = useInView(ref, {
    once: true,
    amount: "some",
    margin: "0px 0px -10% 0px",
  });
  const reduceMotion = useReducedMotion();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  const play = started && !reduceMotion;
  const { w, h } = size;

  const y0 = h * 0.95;
  const curve = `M 0 ${y0} Q ${w * 0.4} ${y0}, ${w} 0`;
  const area = `${curve} L ${w} ${
