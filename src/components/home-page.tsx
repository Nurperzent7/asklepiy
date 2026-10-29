"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  Activity,
  ChevronLeft,
  ChevronRight,
  Focus,
  MapPin,
  Scan,
  Stethoscope,
  Users,
  Eye,
  Building2,
  Zap,
} from "lucide-react";
import { branches, doctors, reasons, serviceCards, steps, waLink } from "@/lib/az";
import { useClinic } from "@/components/city-context";
import { Logo, WaIcon } from "@/components/logo";
import { Reveal } from "@/components/reveal";

const serviceIcons = [Zap, Focus, Scan, Eye, Activity, Eye];
const serviceTones = ["bg-[#e7f8fb]", "bg-[#e8f4ff]", "bg-[#eef6ff]", "bg-[#e7fbf3]", "bg-[#f3f7ff]", "bg-[#e7f8fb]"];

export function HomePage() {
  const { city, setCity, lang } = useClinic();
  const branch = branches.find((item) => item.id === city)!;
  const whyRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[#f7fbfd] text-[#0c1222]">
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden px-4 py-10 lg:grid-cols-2 lg:py-16">
        <div className="blob pointer-events-none absolute -top-8 right-[6%] size-72 rounded-full bg-[#00a9c1]/15 blur-3xl" />
        <div
          className="blob pointer-events-none absolute bottom-0 left-[4%] size-56 rounded-full bg-[#8ec4ee]/40 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="relative">
          <p className="rise text-xs font-bold tracking-[0.16em] text-[#00a9c1]">АЛМАТЫ · АКТАУ · ШЫМКЕНТ</p>
          <h1
            className="rise mt-3 text-[34px] leading-[1.12] font-extrabold tracking-[-0.03em] sm:text-[44px]"
            style={{ animationDelay: "80ms" }}
          >
            AsiaKoz — турецкая глазная клиника
          </h1>
          <p className="rise mt-4 max-w-xl text-[17px] leading-relaxed text-[#3d4a5c]" style={{ animationDelay: "150ms" }}>
            Турецкие офтальмохирурги. Диагностика и лечение зрения в Алматы, Актау и Шымкенте
          </p>
          <p className="rise mt-3 text-sm text-[#4a5568]" style={{ animationDelay: "210ms" }}>
            Алматы, Актау и Шымкент. Три филиала в Казахстане.
          </p>
          <div className="rise mt-7" style={{ animationDelay: "280ms" }}>
            <a
              href={waLink(city)}
              className="az-btn pulse-teal inline-flex h-12 items-center gap-2 rounded-full bg-[#00a9c1] px-5 text-sm font-bold text-white"
            >
              <WaIcon />
              {lang === "ru" ? "Записаться в WhatsApp" : "WhatsApp-қа жазылу"}
            </a>
          </div>
        </div>
        <div className="rise relative" style={{ animationDelay: "160ms" }}>
          <ClinicFacade />
          <div
            key={branch.id}
            className="float-card absolute right-4 bottom-4 left-4 rounded-2xl bg-white/95 p-4 shadow-[0_16px_40px_rgba(12,18,34,0.14)] backdrop-blur-sm sm:right-auto sm:w-[280px]"
          >
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#00a9c1]">СЕТЬ ОФТАЛЬМОЛОГИЧЕСКИХ КЛИНИК</p>
            <p className="mt-1 text-lg font-bold">{branch.name}</p>
            <p className="text-sm text-[#4a5568]">{branch.address}</p>
          </div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-[28px] font-extrabold tracking-tight">
            {lang === "ru" ? "Почему выбирают AsiaKoz" : "Неге AsiaKoz"}
          </h2>
          <Arrows target={whyRef} />
        </div>
        <div ref={whyRef} className="flex snap-x gap-3 overflow-x-auto pb-2">
          {reasons.map((item, index) => {
            const Icon = [Stethoscope, Building2, Eye, Users][index];
            return (
              <article
                key={item.n}
                className="lift w-[min(300px,82vw)] shrink-0 snap-start rounded-[1.35rem] border border-black/[0.06] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(12,18,34,0.04)] sm:w-[calc(25%-9px)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-full bg-[#e7f8fb] text-[#00a9c1]">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#8aa0aa]">{item.n}</span>
                </div>
                <h3 className="mt-3 text-[15px] font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-10 text-center" delay={40}>
        <h2 className="text-[32px] font-extrabold">{lang === "ru" ? "Услуги" : "Қызметтер"}</h2>
        <p className="mt-2 text-sm text-[#4a5568]">Диагностика, лечение и сложные операции на глазах</p>
        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = serviceIcons[index] ?? Eye;
            return (
            <article key={service.slug} className="group lift sheen rounded-[1.4rem] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(12,18,34,0.04)]">
              <span className={`grid size-11 place-items-center rounded-2xl text-[#00a9c1] transition-transform duration-300 group-hover:scale-110 ${serviceTones[index]}`}>
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{service.text}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#00a9c1] transition-transform duration-300 group-hover:translate-x-1">
                Подробнее →
              </Link>
            </article>
            );
          })}
        </div>
        <Link
          href="/services"
          className="az-btn mt-8 inline-flex h-11 items-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold"
        >
          Все услуги
        </Link>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-4">
        <div className="grid items-center gap-6 rounded-[28px] border border-[#d7f3e4] bg-gradient-to-r from-[#f3fff8] to-white px-6 py-7 shadow-[0_16px_40px_rgba(37,211,102,0.08)] md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-[#25d366]">ЗАПИСЬ</p>
            <h2 className="mt-2 text-[26px] font-extrabold tracking-tight">
              Получите ответ на вопрос — напишите в WhatsApp
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#4a5568]">
              Колл-центр подскажет направление, ориентир по цене и время. Без звонка, быстрый ответ в рабочие часы.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>• Ориентир по направлению и записи</li>
              <li>• Быстрый ответ колл-центра</li>
              <li>• Запись на приём в одном сообщении</li>
            </ul>
          </div>
          <a
            href={waLink(city)}
            className="az-btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)]"
          >
            <WaIcon />
            Написать в WhatsApp
          </a>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[32px] font-extrabold">Врачи</h2>
            <p className="mt-1 max-w-xl text-sm text-[#4a5568]">
              Специалисты филиалов Алматы, Актау и Шымкента — откройте карточку для подробностей.
            </p>
          </div>
          <Arrows target={docRef} />
        </div>
        <div ref={docRef} className="flex snap-x gap-4 overflow-x-auto pb-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.slug}
              className="lift flex w-[min(560px,88vw)] shrink-0 snap-start overflow-hidden rounded-[1.6rem] border border-black/[0.05] bg-white shadow-[0_12px_30px_rgba(12,18,34,0.05)]"
            >
              <div className={`grid w-[42%] place-items-end ${doctor.tone}`}>
                <Portrait name={doctor.name} />
              </div>
              <div className="flex w-[58%] flex-col p-4 sm:p-5">
                <p className="text-[10px] font-bold tracking-[0.08em] text-[#8aa0aa] uppercase">{doctor.cities}</p>
                <h3 className="mt-1 text-lg font-extrabold">{doctor.name}</h3>
                <p className="text-sm font-semibold">{doctor.role}</p>
                <p className="mt-1 text-xs text-[#4a5568]">{doctor.line}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {doctor.chips.map((chip) => (
                    <span key={chip} className="rounded-full bg-[#f3f7f8] px-2 py-1 text-[11px] font-semibold text-[#245864]">
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5568]">{doctor.text}</p>
                <Link href={`/doctors/${doctor.slug}`} className="mt-2 text-sm font-semibold text-[#00a9c1]">
                  Подробнее →
                </Link>
                <a
                  href={waLink(city, `Врач: ${doctor.name}`)}
                  className="az-btn mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#00a9c1] text-sm font-bold text-white"
                >
                  <WaIcon />
                  Записаться к врачу
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-[32px] font-extrabold">Отзывы пациентов</h2>
            <p className="mt-1 text-sm text-[#4a5568]">Реальные видеоотзывы из Instagram — @asiakoz.clinic.</p>
          </div>
          <Arrows target={reviewRef} />
        </div>
        <div ref={reviewRef} className="flex snap-x gap-4 overflow-x-auto pb-3">
          {["Лечение косоглазия", "После операции", "Приём врача", "Филиал", "Консультация"].map((title) => (
            <a
              key={title}
              href={branch.instagramUrl}
              className="lift group w-[230px] shrink-0 snap-start overflow-hidden rounded-[1.4rem] border border-black/[0.05] bg-white shadow-sm"
            >
              <div className="relative grid h-[300px] place-items-center bg-gradient-to-b from-[#d7eef3] to-[#8fb4c4]">
                <span className="px-4 text-center text-sm font-bold tracking-wide text-white uppercase">{title}</span>
                <span className="play-btn absolute grid size-14 place-items-center rounded-full bg-white text-[#00a9c1] shadow-[0_10px_24px_rgba(12,18,34,0.16)] transition-transform group-hover:scale-110">
                  ▶
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm font-bold">Видеоотзыв пациента</p>
                <p className="text-sm font-semibold text-[#00a9c1]">Открыть в Instagram →</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={branch.instagramUrl}
            className="az-btn inline-flex h-11 items-center rounded-full bg-[#00a9c1] px-5 text-sm font-bold text-white"
          >
            Отзывы в Instagram
          </a>
          <a
            href={branch.map}
            className="az-btn inline-flex h-11 items-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold"
          >
            Отзывы в 2GIS →
          </a>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="text-[32px] font-extrabold">Как записаться</h2>
        <p className="mt-1 text-sm text-[#4a5568]">3 простых шага — без звонка</p>
        <div className="mt-8 grid gap-4 text-center md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="lift rounded-[1.4rem] bg-white px-6 py-7 shadow-[0_10px_30px_rgba(12,18,34,0.04)]">
              <span className="mx-auto grid size-8 place-items-center rounded-full bg-[#00a9c1] text-sm font-bold text-white">
                {step.n}
              </span>
              <h3 className="mt-4 font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-[#4a5568]">{step.text}</p>
            </article>
          ))}
        </div>
        <a
          href={waLink(city)}
          className="az-btn mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#25d366] px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(37,211,102,0.3)]"
        >
          <WaIcon />
          Написать в WhatsApp
        </a>
        <p className="mt-3 text-xs text-[#8b95a5]">Время ответа: 5–15 минут в рабочие часы</p>
      </Reveal>

      <Reveal id="booking" className="mx-auto max-w-3xl px-4 pb-16">
        <div className="rounded-[28px] bg-white px-5 py-8 text-center shadow-[0_16px_40px_rgba(12,18,34,0.06)]">
          <h2 className="text-[30px] font-extrabold">Запишитесь на приём</h2>
          <p className="mt-2 text-sm text-[#4a5568]">Выберите город — откроется WhatsApp филиала.</p>
          <div className="mt-5 flex justify-center gap-2">
            {branches.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCity(item.id)}
                data-on={item.id === city}
                className={
                  item.id === city
                    ? "city-pill h-10 rounded-full bg-[#00a9c1] px-4 text-sm font-bold text-white"
                    : "city-pill h-10 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold hover:border-[#b7e7ef]"
                }
              >
                {item.name}
              </button>
            ))}
          </div>
          <a
            href={waLink(city)}
            className="az-btn pulse-teal mt-4 inline-flex h-12 w-full max-w-xl items-center justify-center gap-2 rounded-full bg-[#00a9c1] text-sm font-bold text-white"
          >
            <WaIcon />
            Отправить в WhatsApp
          </a>
          <p className="mt-3 text-xs text-[#8b95a5]">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <Link href="/privacy" className="underline">
              политикой конфиденциальности
            </Link>
            .
          </p>
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-xl px-4 pb-20 text-center">
        <h2 className="text-[32px] font-extrabold">Контакты</h2>
        <div className="mt-4 flex justify-center gap-2">
          {branches.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCity(item.id)}
                data-on={item.id === city}
                className={
                item.id === city
                  ? "city-pill h-10 rounded-full bg-[#00a9c1] px-4 text-sm font-bold text-white"
                  : "city-pill h-10 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold hover:border-[#b7e7ef]"
              }
            >
              {item.name}
            </button>
          ))}
        </div>
        <div key={branch.id} className="rise mt-5 rounded-[24px] bg-white p-6 text-left shadow-[0_16px_40px_rgba(12,18,34,0.06)]">
          <Info k="Адрес" v={branch.address} />
          {branch.id !== "almaty" ? <Info k="Телефон" v={branch.phone} /> : null}
          <Info k="Режим работы" v={branch.hours} />
          <Info k="Instagram" v={branch.instagram} href={branch.instagramUrl} />
          <a
            href={branch.map}
            className="az-btn mt-4 flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 text-sm font-semibold"
          >
            <MapPin className="size-4" />
            Открыть в 2GIS
          </a>
          <a
            href={waLink(city)}
            className="az-btn mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a9c1] text-sm font-bold text-white"
          >
            <WaIcon />
            Написать в WhatsApp
          </a>
        </div>
      </Reveal>
    </div>
  );
}

const facadeWindows = [
  [92, 168], [128, 168], [164, 168],
  [92, 204], [128, 204], [164, 204],
  [92, 240], [128, 240], [164, 240],
  [228, 96], [268, 96], [308, 96], [348, 96], [388, 96],
  [228, 136], [268, 136], [308, 136], [348, 136], [388, 136],
  [228, 176], [268, 176], [308, 176], [348, 176], [388, 176],
  [228, 216], [268, 216], [348, 216], [388, 216],
  [228, 256], [268, 256], [348, 256], [388, 256],
  [452, 198], [488, 198], [524, 198],
  [452, 234], [488, 234], [524, 234],
  [452, 270], [488, 270], [524, 270],
];

function ClinicFacade() {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#8fd0ea] via-[#1a6288] to-[#0b2740] shadow-[0_24px_60px_rgba(12,18,34,0.18)]">
      <div className="absolute top-6 right-10 size-16 rounded-full bg-white/80 blur-[2px]" />
      <div className="absolute top-10 right-16 size-24 rounded-full bg-white/30 blur-2xl" />
      <svg viewBox="0 0 640 440" className="absolute inset-0 h-full w-full" aria-hidden>
        <rect x="0" y="348" width="640" height="92" fill="#071726" />
        <rect x="0" y="348" width="640" height="8" fill="#00a9c1" opacity="0.55" />
        <rect x="78" y="156" width="132" height="192" rx="6" fill="#12324c" />
        <rect x="206" y="72" width="228" height="276" rx="8" fill="#163e5e" />
        <rect x="430" y="186" width="132" height="162" rx="6" fill="#12324c" />
        <rect x="292" y="292" width="56" height="56" rx="2" fill="#0c2438" />
        <rect x="304" y="308" width="32" height="40" rx="2" fill="#7ee0ef" className="win" />
        {facadeWindows.map(([x, y], index) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="26"
            height="18"
            rx="2"
            fill={index % 5 === 0 ? "#6aa4c4" : "#e7f7ff"}
            className={index % 5 === 0 ? undefined : "win"}
            style={index % 5 === 0 ? undefined : { animationDelay: `${(index % 8) * 0.28}s` }}
          />
        ))}
      </svg>
      <div className="absolute top-5 left-5 rounded-2xl bg-white/95 px-3 py-2 text-[#00a9c1] shadow-lg">
        <Logo compact />
      </div>
    </div>
  );
}

function Info({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <div className="border-b border-black/[0.04] py-3 last:border-0">
      <p className="text-[11px] font-bold tracking-[0.12em] text-[#8aa0aa] uppercase">{k}</p>
      {href ? (
        <a href={href} className="text-sm font-semibold text-[#00a9c1]">
          {v}
        </a>
      ) : (
        <p className="mt-1 text-sm font-semibold">{v}</p>
      )}
    </div>
  );
}

function Arrows({ target }: { target: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="hidden gap-2 sm:flex">
      <button
        type="button"
        aria-label="Назад"
        className="arrow-btn grid size-10 place-items-center rounded-full border border-black/10 bg-white"
        onClick={() => target.current?.scrollBy({ left: -360, behavior: "smooth" })}
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        type="button"
        aria-label="Дальше"
        className="arrow-btn grid size-10 place-items-center rounded-full border border-black/10 bg-white"
        onClick={() => target.current?.scrollBy({ left: 360, behavior: "smooth" })}
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}

function Portrait({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials = (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
  return (
    <svg viewBox="0 0 200 260" className="portrait-idle h-full w-full" aria-hidden>
      <ellipse cx="100" cy="248" rx="70" ry="28" fill="#ffffff" opacity="0.55" />
      <path d="M40 250c8-70 28-92 60-92s52 22 60 92" fill="#f7fbfc" />
      <circle cx="100" cy="92" r="38" fill="#f3d2bd" />
      <path d="M64 96c4-40 24-58 36-58 18 0 34 16 38 48-18 6-30 4-40-2-8 8-22 12-34 12Z" fill="#2c241c" />
      <text x="100" y="102" textAnchor="middle" fontSize="18" fontWeight="700" fill="#6a5346">
        {initials}
      </text>
    </svg>
  );
}
