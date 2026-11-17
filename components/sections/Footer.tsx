import Link from "next/link";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { href: "/#methodology", label: "Методология" },
  { href: "/#metrics", label: "Результаты" },
  { href: "/#faq", label: "Вопросы" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 4 3 11l5 2 2 6 3-4 5 3 3-14Z" />
      <path d="m8 13 8-6-5 8" />
    </svg>
  );
}

type Contact = { href: string; label: string; icon: ReactNode; external?: boolean };

const CONTACTS: Contact[] = [
  { href: "tel:+375296347174", label: "+375 29 634-71-74", icon: <PhoneIcon /> },
  { href: "mailto:geoforce.of.by@gmail.com", label: "geoforce.of.by@gmail.com", icon: <MailIcon /> },
  { href: "https://t.me/GeoForce_of_by", label: "Telegram: @GeoForce_of_by", icon: <TelegramIcon />, external: true },
];

// Пропорции колонок одинаковы в обоих рядах => навигация стоит ровно над политикой.
// Увеличьте первую цифру (1.3fr), чтобы сильнее сдвинуть центральную колонку вправо.
const COLS = "md:grid-cols-[1.3fr_1fr_1fr]";

export default function Footer() {
  return (
    <footer
      className="pt-12 md:pt-14 pb-20 md:pb-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-x">
        {/* ВЕРХНИЙ РЯД: лого | навигация | контакты */}
        <div className={`grid gap-10 md:gap-8 ${COLS} md:items-start`}>
          <div>
            <a
              href="/"
              aria-label="GeoForce — на главную"
              className="inline-flex items-baseline"
              style={{
                fontSize: 26,
                lineHeight: 1,
                fontFamily: "var(--font-inter-tight), system-ui, sans-serif",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "var(--red)" }}>Geo</span>
              <span style={{ color: "#F5F5F7" }}>Force</span>
              <span
                style={{
                  display: "inline-block",
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--red)",
                  marginLeft: 1,
                }}
              />
            </a>
            <p className="text-sm mt-3 text-[color:var(--muted)]">
              GEO-продвижение брендов в ответах ИИ в Беларуси
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-[color:var(--muted)] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            {CONTACTS.map((contact) => (
              <a
                key={contact.href}
                href={contact.href}
                {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-2 w-fit md:ml-auto text-[color:var(--muted)] hover:text-[color:var(--red)] transition-colors"
              >
                {contact.icon}
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* НИЖНИЙ РЯД: © | политика | УНП — одна строка grid => выровнена по горизонтали */}
        <div
          className={`mt-10 md:mt-12 grid gap-3 md:gap-8 ${COLS} md:items-center text-xs mono text-[color:var(--muted)]`}
        >
          <span>© {new Date().getFullYear()} GeoForce. Все права защищены.</span>
          <Link href="/privacy" className="w-fit hover:text-white transition-colors">
            Политика конфиденциальности
          </Link>
          <span className="md:text-right">Гапоненко П. Н. - УНП EB2432789</span>
        </div>
      </div>
    </footer>
  );
}