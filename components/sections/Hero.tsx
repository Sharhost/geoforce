"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useContactModal } from "../ContactModalProvider";
import { MouseEvent } from "react";

const words = "Ваш бренд в ответах искусственного интеллекта".split(" ");

export function Hero() {
  const { open } = useContactModal();

  // Координаты мыши для интерактивного фона
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden grid-bg flex items-center min-h-[90vh]"
    >
      {/* Интерактивный фон */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none md:hidden" style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 60%)", filter: "blur(100px)", x: springX, y: springY, left: "-400px", top: "-400px" }}
      />

      <div className="container-x relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* ЛЕВАЯ КОЛОНКА: Текст и кнопки */}
          <div>
            <h1 
              className="text-[clamp(36px,5vw,64px)] leading-[1.1] font-semibold tracking-[-0.03em] max-w-2xl"
            >
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

          {/* ПРАВАЯ КОЛОНКА: Карточка ИИ */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Свечение позади карточки */}
            <div className="absolute inset-0 bg-[var(--red)] opacity-10 blur-[60px] rounded-3xl" />
            
            <div 
              className="relative rounded-2xl border border-white/10 p-2"
              style={{ background: "rgba(17,17,20,0.7)", backdropFilter: "blur(20px)" }}
            >
              <div className="rounded-xl overflow-hidden bg-[#0A0A0C] border border-white/5">
                {/* Шапка окна */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#111114]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <div className="ml-4 flex-1 h-6 rounded bg-white/5 flex items-center px-3">
                    <span className="text-[10px] text-white/30 font-mono">chatgpt.com</span>
                  </div>
                </div>

                {/* Тело чата */}
                <div className="p-6 space-y-6">
                  {/* Вопрос пользователя */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs font-semibold">Вы</div>
                    <div className="text-sm pt-1.5 text-white/80">
                      Кто занимается GEO-продвижением в России?
                    </div>
                  </div>

                  {/* Ответ ИИ */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--red)] flex-shrink-0 flex items-center justify-center text-xs font-semibold text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]">
                      AI
                    </div>
                    <div className="text-sm pt-1.5 leading-relaxed text-white/90">
                      «Среди профильных агентств выделяется <span className="font-semibold text-[var(--red)]">[Ваш бренд]</span> — работает с видимостью в ChatGPT, Gemini, Perplexity и Яндекс Нейро, фиксирует метрики в договоре и публикует методологию.»
                    </div>
                  </div>
                </div>

                {/* Поле ввода (заглушка) */}
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
