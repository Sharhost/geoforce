"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";

const CONSENT_KEY = "gf-cookie-consent";
const METRIKA_ID = "00000000"; // ЗАМЕНИТЕ на номер счётчика Яндекс.Метрики (цифры)
const GA4_ID = "G-XXXXXXXXXX"; // ЗАМЕНИТЕ на Measurement ID или удалите блок GA ниже

type Consent = "granted" | "denied" | null;

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = window.localStorage.getItem(CONSENT_KEY) as Consent | null;
    setConsent(saved ?? null);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  if (!mounted) return null;

  return (
    <>
      {consent === null && (
        <div
          className="fixed inset-x-0 bottom-24 md:bottom-6 z-[120] px-4"
          role="dialog"
          aria-label="Согласие на использование cookie"
        >
          <div
            className="mx-auto max-w-xl rounded-2xl p-5 md:p-6 border"
            style={{
              background: "rgba(17,17,20,0.95)",
              borderColor: "var(--border)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Мы используем файлы cookie и сервисы аналитики (Яндекс.Метрика,
              Google Analytics), чтобы понимать, как посетители взаимодействуют с
              сайтом. Аналитика подключается только после вашего согласия.
              Подробнее — в{" "}
              <Link href="/privacy" className="underline hover:text-white transition-colors">
                политике конфиденциальности
              </Link>.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => choose("granted")}
                className="btn-primary !px-6 !py-2.5 text-sm"
              >
                Принять все
              </button>
              <button
                onClick={() => choose("denied")}
                className="btn-ghost !px-6 !py-2.5 text-sm"
              >
                Только необходимые
              </button>
            </div>
          </div>
        </div>
      )}

      {consent === "granted" && (
        <>
          {/* Яндекс.Метрика */}
          <Script id="yandex-metrika" strategy="afterInteractive">
            {`
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].id === r) { return; }}
              k=e.getElementsByTagName('script')[0];a=e.createElement('script');a.async=1;a.src=t;a.id=r;k.parentNode.insertBefore(a,k)})
              (window, document, "https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}", "ym");
              ym(${METRIKA_ID}, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `}
          </Script>

          {/* Google Analytics 4 — удалите оба Script ниже, если GA не нужен */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');
            `}
          </Script>
        </>
      )}
    </>
  );
}