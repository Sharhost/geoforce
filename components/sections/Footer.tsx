import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t pb-20 md:pb-0" style={{ borderColor: "var(--border)" }}>
      <div className="container-x py-10 md:py-14 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <div
            className="font-semibold"
            style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}
          >
            <span style={{ color: "var(--red)" }}>Geo</span>
            <span style={{ color: "#F5F5F7" }}>Force</span>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>
            GEO-продвижение брендов в ответах ИИ. Беларусь.
          </p>
        </div>
        <nav className="flex flex-col md:items-end gap-2 text-sm" style={{ color: "var(--muted)" }}>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Политика конфиденциальности
          </Link>
          <a href="mailto:geoforce.of.by@gmail.com" className="hover:text-white transition-colors">
            geoforce.of.by@gmail.com
          </a>
          <a
            href="https://t.me/GeoForce_of_by"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Telegram: @GeoForce_of_by
          </a>
        </nav>
      </div>
      <div className="border-t" style={{ borderColor: "var(--border)" }}>
        <div
          className="container-x py-4 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs mono"
          style={{ color: "var(--muted)" }}
        >
          <span>© {new Date().getFullYear()} GeoForce. Все права защищены.</span>
          {/* ЗАМЕНИТЕ на свои реквизиты: для ИП — ФИО и УНП, для юрлица — название и УНП */}
          <span>Гапоненко П. А., УНП EB2432789</span>
        </div>
      </div>
    </footer>
  );
}