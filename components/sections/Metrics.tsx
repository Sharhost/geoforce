"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  CountUp: по умолчанию рендерит РЕАЛЬНОЕ значение (видно в SSR/HTML  */
/*  и остаётся верным, даже если анимация не запустилась).              */
/*  От нуля считаем только когда триггер действительно сработал.        */
/* ------------------------------------------------------------------ */
function CountUp({
  to,
  prefix = "",
  suffix = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  // Мягкий триггер: НЕ сжимаем viewport сверху (строка может быть под
  // фиксированной шапкой), только немного снизу. Без once-ловушек на
  // узких мобильных экранах и при инерционной прокрутке.
  const inView = useInView(ref, {
    once: true,
    amount: "some",
    margin: "0px 0px -10% 0px",
  });

  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView) return;

    // Пользователь просил меньше движения — сразу финальное число.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 1600, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    setValue(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Локальный Reveal (копия вашего, но с мягким триггером)              */
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
/*  Данные секции                                                       */
/* ------------------------------------------------------------------ */
const CITATION_RATE = 38;

const SHARE_OF_VOICE = [
  { name: "[Ваш бренд]", value: 50, highlight: true },
  { name: "Конкурент A", value: 27, highlight: false },
  { name: "Конкурент B", value: 22, highlight: false },
  { name: "Конкурент C", value: 20, highlight: false },
];

/* ------------------------------------------------------------------ */
/*  Секция «Метрики»                                                    */
/* ------------------------------------------------------------------ */
export function Metrics() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="metrics" className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="h2 max-w-3xl">
              Две метрики, по которым виден реальный прогресс в GEO
            </h2>
            <p className="mt-4 max-w-2xl" style={{ color: "var(--muted)" }}>
              Citation Rate и Share of Voice - фиксируются в ежемесячном отчёте.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {/* ------------------------- Citation Rate ------------------------- */}
            <Reveal delay={0.1}>
              <div className="gradient-card p-8 h-full">
                <div className="h3 mb-4">
                  Citation Rate{" "}
                  <span
                    style={{
                      color: "var(--muted)",
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    (доля цитирований)
                  </span>
                </div>

                <p className="mb-6" style={{ color: "var(--muted)" }}>
                  Процент ответов ИИ, в которых упоминается ваш бренд, от общего
                  числа релевантных запросов по вашей категории.
                </p>

                <div
                  className="mono text-xs rounded p-3 mb-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--muted)",
                  }}
                >
                  (ответы с упоминанием / всего запросов) × 100%
                </div>

                <div
                  className="mono"
                  style={{
                    color: "var(--red)",
                    fontSize: "clamp(48px, 6vw, 72px)",
                    fontWeight: 600,
                  }}
                >
                  <CountUp to={CITATION_RATE} suffix="%" />
                </div>
              </div>
            </Reveal>

            {/* ------------------------- Share of Voice ------------------------ */}
            <Reveal delay={0.2}>
              <div className="gradient-card p-8 h-full">
                <div className="h3 mb-4">
                  Share of Voice{" "}
                  <span
                    style={{
                      color: "var(--muted)",
                      fontWeight: 400,
                      fontSize: "1rem",
                    }}
                  >
                    (доля голоса)
                  </span>
                </div>

                <p className="mb-6" style={{ color: "var(--muted)" }}>
                  Доля упоминаний вашего бренда относительно всех упоминаний
                  конкурентов в категории.
                </p>

                <div
                  className="mono text-xs rounded p-3 mb-6"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    color: "var(--muted)",
                  }}
                >
                  (упоминания бренда / все упоминания в категории) × 100%
                </div>

                <div className="space-y-3">
                  {SHARE_OF_VOICE.map((row) => (
                    <div key={row.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span
                          style={{
                            color: row.highlight ? "var(--text)" : "var(--muted)",
                          }}
                        >
                          {row.name}
                        </span>
                        <span
                          className="mono"
                          style={{
                            color: row.highlight ? "var(--red)" : "var(--muted)",
                          }}
                        >
                          {row.highlight ? (
                            <CountUp to={row.value} suffix="%" />
                          ) : (
                            `${row.value}%`
                          )}
                        </span>
                      </div>

                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.06)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${row.value}%` }}
                          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                          transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.3,
                          }}
                          style={{
                            background: row.highlight
                              ? "var(--red)"
                              : "rgba(138,138,147,0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
              Дополнительно компания GeoForce отслеживает: тональность упоминаний,
              позицию бренда в ответе, источники, на которые ссылается ИИ.
            </p>
          </Reveal>
        </div>
      </section>
    </MotionConfig>
  );
}

export default Metrics;
