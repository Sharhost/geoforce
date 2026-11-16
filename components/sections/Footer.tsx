import { Logo } from "../Logo";
import { IconPhone, IconMail, IconTelegram } from "../icons";

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
        
        <div className="flex flex-col gap-3" style={{ color: "var(--muted)" }}>
          <a href="#seo-vs-geo" className="hover:text-white transition-colors">Сравнение</a>
          <a href="#metrics" className="hover:text-white transition-colors">Результаты</a>
          <a href="#faq" className="hover:text-white transition-colors">Вопросы</a>
        </div>
        
        {/* БЛОК С КОНТАКТАМИ И ИКОНКАМИ */}
        <div className="flex flex-col gap-4" style={{ color: "var(--muted)" }}>
          <a href="mailto:geoforce.of.by@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
            <IconMail className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:text-[var(--red)] transition-colors" />
            <span>geoforce.of.by@gmail.com</span>
          </a>
          
          <a href="https://t.me/GeoForce_of_by" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
            <IconTelegram className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:text-[var(--red)] transition-colors" />
            <span>@GeoForce_of_by</span>
          </a>
          
          <a href="tel:+375296347174" className="flex items-center gap-3 hover:text-white transition-colors group">
            <IconPhone className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:text-[var(--red)] transition-colors" />
            <span>+375 29 634-71-74</span>
          </a>
          
          <span className="mt-4 text-xs">© {new Date().getFullYear()} GeoForce</span>
        </div>
      </div>
    </footer>
  );
}
