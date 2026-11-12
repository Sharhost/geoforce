import { Reveal } from "../Reveal";

const cards = [
  { n: "01", t: "SEO", d: "Позиция в поисковой выдаче. Приводит на сайт." },
  { n: "02", t: "GEO", d: "Упоминание в ответах ИИ. Приводит клиента." },
  { n: "03", t: "Видимость в ИИ", d: "Новая метрика присутствия бренда там, где принимается решение." },
];

export function WhatIsGeo() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl">Новый канал — новая логика</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            Люди всё чаще спрашивают ИИ, а не поиск.<br />
            ИИ отвечает рекомендацией.<br />
            GeoForce делает так, чтобы в этой рекомендации был ваш бренд — точно, часто и по делу.
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={0.1 + i * 0.08}>
              <div className="gradient-card p-8 h-full transition-transform hover:-translate-y-1">
                <div className="mono text-sm mb-6" style={{ color: "var(--red)" }}>{c.n}</div>
                <div className="h3 mb-3">{c.t}</div>
                <p style={{ color: "var(--muted)" }}>{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
