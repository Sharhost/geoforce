import { Logo } from "../Logo";

export function Footer() {
  return (
    <footer className="border-t pt-16 pb-24 md:pb-16" style={{ borderColor: "var(--border)" }}>
      <div className="container-x grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <Logo size={24} />
          <p className="mt-4" style={{ color: "var(--muted)" }}>
            GEO-продвижение в ответах искусственного интеллекта.
          </p>
        </div>
        <div className="flex flex-col gap-2" style={{ color: "var(--muted)" }}>
          <a href="#services" className="hover:text-white transition-colors">Услуги</a>
          <a href="#seo-vs-geo" className="hover:text-white transition-colors">Сравнение</a>
          <a href="#metrics" className="hover:text-white transition-colors">Результаты</a>
          <a href="#faq" className="hover:text-white transition-colors">Вопросы</a>
        </div>
        <div className="flex flex-col gap-2" style={{ color: "var(--muted)" }}>
          <a href="mailto:hello@geoforce.ru" className="hover:text-white transition-colors">hello@geoforce.ru</a>
          <a href="#" className="hover:text-white transition-colors">Telegram: @geoforce</a>
          <span className="mt-6 text-xs">© {new Date().getFullYear()} GeoForce</span>
        </div>
      </div>
    </footer>
  );
}