"use client";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useContactModal } from "../ContactModalProvider";
import { MouseEvent, useEffect, useRef, useState } from "react";

const words = "Ваш бренд в ответах искусственного интеллекта".split(" ");

const aiTextPart1 = "«Среди профильных агентств выделяется ";
const aiTextPart2 = "[GeoForce]";
const aiTextPart3 = " — работает с видимостью в ChatGPT, Gemini, Perplexity и Яндекс Нейро, фиксирует метрики в договоре и публикует методологию.»";
const fullAiText = aiTextPart1 + aiTextPart2 + aiTextPart3;

export function Hero() {
  const { open } = useContactModal();
  const chatRef = useRef<HTMLDivElement>(null);
  
  // Убрали once: true, чтобы анимация останавливалась, если пользователь ушел вниз, и возобновлялась при возврате
  const isInView = useInView(chatRef, { margin: "-100px" });

  // Состояния: 1 (Вопрос) -> 2 (Думает) -> 3 (Печатает) -> Сброс -> 1
  const [stage, setStage] = useState(1);
  const [charIndex, setCharIndex] = useState(0);

  // Координаты мыши
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // БЕСКОНЕЧНЫЙ ЦИКЛ АНИМАЦИИ
  useEffect(() => {
    if (!isInView) return;

    let timer: NodeJS.Timeout;

    if (stage === 1) {
      // Показываем вопрос, ждем 2 секунды
      timer = setTimeout(() => setStage(2), 2000);
    } else if (stage === 2) {
      // ИИ "думает", ждем 1.5 секунды
      timer = setTimeout(() => setStage(3), 1500);
    } else if (stage === 3) {
      if (charIndex < fullAiText.length) {
        // Печатаем по одному символу каждые 25мс
        timer = setTimeout(() => setCharIndex(prev => prev + 1), 25);
      } else {
        // Текст напечатан. Ждем 6 секунд, чтобы пользователь прочитал, и сбрасываем
        timer = setTimeout(() => {
          setCharIndex(0);
          setStage(1);
        }, 6000);
      }
    }

    return () => clearTimeout(timer);
  }, [stage, charIndex, isInView]);

  const renderAiText = () => {
    const currentText = fullAiText.slice(0, charIndex);
    if (currentText.includes(aiTextPart2)) {
      const parts = currentText.split(aiTextPart2);
      return (
        <>
          {parts[0]}
          <span className="font-semibold text-[var(--red)]">{aiTextPart2}</span>
          {parts[1]}
        </>
      );
    }
    return currentText;
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden grid-bg flex items-center min-h-[90vh]"
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none md:hidden" style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 60%)", filter: "blur(100px)", x: springX, y: springY, left: "-400px", top: "-400px" }}
      />

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          <div>
            <h1 className="text-[clamp(36px,5vw,64px)] leading-[1.1] font-semibold tracking-[-0.03em] max-w-2xl">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.25em]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              ))}
            </h1>
            
            <motion.p
              className="mt-6 text-lg md:text-xl max-w-lg"
              style={{ color: "var(--muted)" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            >
              Продвигаем бренды в ответах ChatGPT, Gemini, Perplexity и Яндекс Нейро
            </motion.p>
            
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            >
              <button onClick={open} className="btn-primary">Получить аудит</button>
              <a href="#methodology" className="btn-ghost">Методология</a>
            </motion.div>
          </div>

          {/* ЧАТ */}
          <motion.div
            ref={chatRef}
            className="relative"
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-[var(--red)] opacity-10 blur-[60px] rounded-3xl" />
            
            <div className="relative rounded-2xl border border-white/10 p-2" style={{ background: "rgba(17,17,20,0.7)", backdropFilter: "blur(20px)" }}>
              {/* Зафиксировали высоту min-h-[340px], чтобы окно не прыгало при сбросе */}
              <div className="rounded-xl overflow-hidden bg-[#0A0A0C] border border-white/5 min-h-[340px] flex flex-col">
                
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#111114]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <div className="ml-4 flex-1 h-6 rounded bg-white/5 flex items-center px-3">
                    <span className="text-[10px] text-white/30 font-mono">chatgpt.com</span>
                  </div>
                </div>

                <div className="p-6 space-y-6 flex-1">
                  
                  {/* Вопрос пользователя всегда виден после старта */}
                  {stage >= 1 && (
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs font-semibold">Вы</div>
                      <div className="text-sm pt-1.5 text-white/80">
                        Кто занимается GEO-продвижением в Беларуси?
                      </div>
                    </motion.div>
                  )}

                  {/* Точки */}
                  {stage === 2 && (
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[var(--red)] flex-shrink-0 flex items-center justify-center text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]">AI</div>
                      <div className="flex items-center gap-1.5 h-8 pt-2">
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-white/50" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-white/50" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                        <motion.span className="w-1.5 h-1.5 rounded-full bg-white/50" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                      </div>
                    </motion.div>
                  )}

                  {/* Печать текста */}
                  {stage === 3 && (
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[var(--red)] flex-shrink-0 flex items-center justify-center text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]">AI</div>
                      <div className="text-sm pt-1.5 leading-relaxed text-white/90">
                        {renderAiText()}
                        {charIndex < fullAiText.length && (
                          <motion.span 
                            className="inline-block w-1.5 h-4 ml-1 bg-[var(--red)] align-middle"
                            animate={{ opacity: [1, 0] }} 
                            transition={{ repeat: Infinity, duration: 0.8 }}
                          />
                        )}
                      </div>
                    </motion.div>
                  )}

                </div>

                <div className="p-4 border-t border-white/5">
                  <div className="h-10 rounded-lg bg-white/5 border border-white/10 flex items-center px-4">
                    <span className="text-xs text-white/30">Написать сообщение...</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
