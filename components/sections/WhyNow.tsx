import { Reveal } from "../Reveal";

const points = [
  ["Модели обучаются на текущем контенте", "То, что вы публикуете сейчас, попадёт в следующее поколение моделей. Позже — дольше ждать."],
  ["Первые закрепляются как ответ по умолчанию", "Перебить уже рекомендованного конкурента в 3–4 раза дороже, чем войти первым."],
  ["Рынок GEO только формируется", "Конкуренция за упоминания в разы ниже, чем будет через год."],
  ["Аудитория уже спрашивает ИИ", "Миллионы решений о покупке принимаются в чатах, а не в поиске."],
];

export function WhyNow() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <h2 className="h2 max-w-3xl">Окно возможностей закрывается быстрее, чем кажется</h2>
          <p className="mt-4" style={{ color: "var(--muted)" }}>Четыре причины начать в этом квартале.</p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {points.map(([t, d], i) => (
            <Reveal key={t} delay={0.05 + i * 0.07}>
              <div className="border-t pt-6" style={{ borderColor: "var(--border)" }}>
                <div className="h3 mb-3">{t}</div>
                <p style={{ color: "var(--muted)" }}>{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-16 h3" style={{ color: "var(--red)" }}>
            Лучший момент — до того, как это стало очевидным.
          </p>
        </Reveal>
      </div>
    </section>
  );
}