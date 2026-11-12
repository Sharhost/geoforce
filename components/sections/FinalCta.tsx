"use client";
import { useContactModal } from "../ContactModalProvider";

export function FinalCta() {
  const { open } = useContactModal();
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div
          className="rounded-3xl p-10 md:p-20 text-center"
          style={{ background: "linear-gradient(135deg, var(--red-deep) 0%, #7A0B0B 100%)" }}
        >
          <h2 className="h1 max-w-3xl mx-auto">Обсудим видимость вашего бренда?</h2>
          <p className="mt-6 text-lg opacity-80">Ответим в течение рабочего дня. Без брифингов на 40 слайдов.</p>
          <button
            onClick={open}
            className="mt-10 rounded-full px-10 py-4 font-medium"
            style={{ background: "white", color: "var(--red-deep)" }}
          >
            Обсудить проект
          </button>
        </div>
      </div>
    </section>
  );
}