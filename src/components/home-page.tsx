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
const serviceTones = ["bg-[#e8eef8]", "bg-[#e8f4ff]", "bg-[#eef6ff]", "bg-[#e7fbf3]", "bg-[#f3f7ff]", "bg-[#e8eef8]"];
const serviceAccents = ["#3559b7", "#3d6fd4", "#2f4f9a", "#5d99d8", "#6a7ec8", "#243e86"];
const stories = [
  { title: "Лечение косоглазия", wash: "from-[#082033] via-[#0e4f66] to-[#14919b]" },
  { title: "После операции", wash: "from-[#102a43] via-[#1d4e6f] to-[#3559b7]" },
  { title: "Приём врача", wash: "from-[#0b3a4a] via-[#146c80] to-[#7ec4de]" },
  { title: "Филиал", wash: "from-[#071824] via-[#123246] to-[#1d6a86]" },
  { title: "Консультация", wash: "from-[#12324c] via-[#245864] to-[#3aa0c4]" },
];

export function HomePage() {
  const { city, setCity, lang } = useClinic();
  const branch = branches.find((item) => item.id === city)!;
  const whyRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  return (
    <div className="text-[#0c1222]">
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 overflow-hidden px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="blob pointer-events-none absolute -top-8 right-[6%] size-72 rounded-full bg-[#3559b7]/15 blur-3xl" />
        <div
          className="blob pointer-events-none absolute bottom-0 left-[4%] size-56 rounded-full bg-[#8ec4ee]/40 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="relative">
          <p className="rise text-xs font-bold tracking-[0.18em] text-[#3559b7]">АЛМАТЫ · АКТАУ · ШЫМКЕНТ</p>
          <h1
            className="rise mt-3 text-[36px] leading-[1.08] font-extrabold tracking-[-0.035em] sm:text-[52px]"
            style={{ animationDelay: "80ms" }}
          >
            Глазная клиника <span className="text-[#3559b7]">Асклепий</span>
          </h1>
          <p className="rise mt-4 max-w-xl text-[17px] leading-relaxed text-[#3d4a5c]" style={{ animationDelay: "150ms" }}>
            Диагностика и лечение зрения в Алматы, Актау и Шымкенте.
          </p>
          <div className="rise mt-6 flex flex-wrap gap-2" style={{ animationDelay: "210ms" }}>
            {branches.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCity(item.id)}
                className={
                  item.id === city
                    ? "h-9 rounded-full bg-[#0c1222] px-3.5 text-xs font-bold text-white"
                    : "h-9 rounded-full bg-white/80 px-3.5 text-xs font-semibold text-[#245864] ring-1 ring-[#d5deef] hover:ring-[#3559b7]"
                }
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="rise mt-7" style={{ animationDelay: "280ms" }}>
            <a
              href={waLink(city)}
              className="az-btn pulse-teal inline-flex h-12 items-center gap-2 rounded-full bg-[#3559b7] px-5 text-sm font-bold text-white"
            >
              <WaIcon />
              {lang === "ru" ? "Записаться в WhatsApp" : "WhatsApp-қа жазылу"}
            </a>
            <p className="mt-3 text-xs text-[#4a5568]">Пн–Пт 09:00–17:00 · Сб до 14:00</p>
          </div>
        </div>
        <div className="rise relative" style={{ animationDelay: "160ms" }}>
          <ClinicFacade />
          <div
            key={branch.id}
            className="float-card absolute right-4 bottom-4 left-4 rounded-2xl bg-white/95 p-4 shadow-[0_16px_40px_rgba(12,18,34,0.14)] backdrop-blur-sm sm:right-auto sm:w-[280px]"
          >
            <p className="text-[11px] font-bold tracking-[0.12em] text-[#3559b7]">СЕТЬ ОФТАЛЬМОЛОГИЧЕСКИХ КЛИНИК</p>
            <p className="mt-1 text-lg font-bold">{branch.name}</p>
            <p className="text-sm text-[#4a5568]">{branch.address}</p>
          </div>
        </div>
      </section>

      <div className="border-y border-[#e5f4f7] bg-white/75 py-8 backdrop-blur-sm">
      <Reveal className="mx-auto max-w-6xl px-4">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-[28px] font-extrabold tracking-tight sm:text-[32px]">
            {lang === "ru" ? "Почему выбирают Асклепий" : "Неге Асклепий"}
          </h2>
          <Arrows target={whyRef} />
        </div>
        <div ref={whyRef} className="flex snap-x gap-3 overflow-x-auto pb-2">
          {reasons.map((item, index) => {
            const Icon = [Stethoscope, Building2, Eye, Users][index];
            return (
              <article
                key={item.n}
                className="lift relative w-[min(300px,82vw)] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-[#e7f3f6] bg-white px-5 py-5 shadow-[0_16px_40px_rgba(12,40,60,0.05)] sm:w-[calc(25%-9px)]"
              >
                <div className="relative flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-2xl bg-[#e8eef8] text-[#3559b7]">
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
      </div>

      <Reveal className="mx-auto max-w-6xl px-4 py-14 text-center" delay={40}>
        <h2 className="text-[32px] font-extrabold">{lang === "ru" ? "Услуги" : "Қызметтер"}</h2>
        <p className="mt-2 text-sm text-[#4a5568]">Диагностика, лечение и сложные операции на глазах</p>
        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = serviceIcons[index] ?? Eye;
            return (
            <article key={service.slug} className="group lift sheen relative overflow-hidden rounded-[1.5rem] border border-[#e7f3f6] bg-white p-6 shadow-[0_16px_40px_rgba(12,40,60,0.05)]">
              <span className="absolute inset-x-0 top-0 h-1" style={{ background: serviceAccents[index] }} />
              <span className={`grid size-12 place-items-center rounded-2xl text-[#3559b7] transition-transform duration-300 group-hover:scale-110 ${serviceTones[index]}`}>
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">{service.text}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#3559b7] transition-transform duration-300 group-hover:translate-x-1">
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
        <div className="relative grid items-center gap-6 overflow-hidden rounded-[32px] border border-[#d7f3e4] bg-gradient-to-br from-[#f3fff8] via-white to-[#e7fbf3] px-6 py-8 shadow-[0_18px_50px_rgba(37,211,102,0.1)] md:grid-cols-[1fr_auto] md:px-8">
          <div className="pointer-events-none absolute -right-8 -bottom-10 size-40 rounded-full bg-[#25d366]/15 blur-2xl" />
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

      <div className="border-y border-[#e5f4f7] bg-white/75 py-12">
      <Reveal className="mx-auto max-w-6xl px-4">
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
              className="lift flex w-[min(560px,88vw)] shrink-0 snap-start overflow-hidden rounded-[1.7rem] border border-[#e7f3f6] bg-white shadow-[0_18px_44px_rgba(12,40,60,0.06)]"
            >
              <div className={`relative grid w-[42%] place-items-end ${doctor.tone}`}>
                <Portrait slug={doctor.slug} />
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
                <Link href={`/doctors/${doctor.slug}`} className="mt-2 text-sm font-semibold text-[#3559b7]">
                  Подробнее →
                </Link>
                <a
                  href={waLink(city, `Врач: ${doctor.name}`)}
                  className="az-btn mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#3559b7] text-sm font-bold text-white"
                >
                  <WaIcon />
                  Записаться к врачу
                </a>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
      </div>

      <Reveal className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-[32px] font-extrabold">Отзывы пациентов</h2>
            <p className="mt-1 text-sm text-[#4a5568]">Видеоотзывы пациентов в Instagram.</p>
          </div>
          <Arrows target={reviewRef} />
        </div>
        <div ref={reviewRef} className="flex snap-x gap-4 overflow-x-auto pb-3">
          {stories.map((story) => (
            <a
              key={story.title}
              href={branch.instagramUrl}
              className="lift group w-[230px] shrink-0 snap-start overflow-hidden rounded-[1.6rem] border border-[#e7f3f6] bg-white shadow-[0_16px_40px_rgba(12,40,60,0.06)]"
            >
              <div className={`relative h-[280px] overflow-hidden bg-gradient-to-b ${story.wash}`}>
                <span className="pointer-events-none absolute top-14 left-1/2 size-36 -translate-x-1/2 rounded-full border border-white/25" />
                <span className="pointer-events-none absolute top-20 left-1/2 size-20 -translate-x-1/2 rounded-full border border-white/40" />
                <span className="absolute top-[4.5rem] left-1/2 -translate-x-1/2">
                  <span className="play-btn grid size-14 place-items-center rounded-full bg-white/95 pl-0.5 text-lg text-[#3559b7] shadow-[0_10px_24px_rgba(12,18,34,0.16)]">
                    ▶
                  </span>
                </span>
                <span className="absolute inset-x-4 bottom-4 text-center text-[13px] font-bold tracking-wide text-white uppercase">
                  {story.title}
                </span>
              </div>
              <div className="p-3">
                <p className="text-sm font-bold">Видеоотзыв пациента</p>
                <p className="text-sm font-semibold text-[#3559b7]">Открыть в Instagram →</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href={branch.instagramUrl}
            className="az-btn inline-flex h-11 items-center rounded-full bg-[#3559b7] px-5 text-sm font-bold text-white"
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
        <div className="relative mt-10 grid gap-4 text-center md:grid-cols-3">
          <div aria-hidden className="pointer-events-none absolute top-[52px] right-[16%] left-[16%] hidden border-t border-dashed border-[#3559b7]/40 md:block" />
          {steps.map((step) => (
            <article key={step.n} className="lift relative rounded-[1.6rem] border border-white bg-white/90 px-6 py-8 shadow-[0_16px_40px_rgba(12,40,60,0.05)]">
              <span className="relative z-10 mx-auto grid size-12 place-items-center rounded-2xl bg-[#3559b7] text-lg font-extrabold text-white shadow-[0_10px_24px_rgba(53, 89, 183,0.35)]">
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
        <div className="rounded-[32px] bg-gradient-to-br from-[#3559b7] via-[#9eb0e4] to-white p-px shadow-[0_24px_60px_rgba(53, 89, 183,0.16)]">
        <div className="rounded-[31px] bg-white px-5 py-10 text-center">
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
                    ? "city-pill h-10 rounded-full bg-[#3559b7] px-4 text-sm font-bold text-white"
                    : "city-pill h-10 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold hover:border-[#b7c4e8]"
                }
              >
                {item.name}
              </button>
            ))}
          </div>
          <a
            href={waLink(city)}
            className="az-btn pulse-teal mt-4 inline-flex h-12 w-full max-w-xl items-center justify-center gap-2 rounded-full bg-[#3559b7] text-sm font-bold text-white"
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
                  ? "city-pill h-10 rounded-full bg-[#3559b7] px-4 text-sm font-bold text-white"
                  : "city-pill h-10 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold hover:border-[#b7c4e8]"
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
            className="az-btn mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-[#3559b7] text-sm font-bold text-white"
          >
            <WaIcon />
            Написать в WhatsApp
          </a>
        </div>
      </Reveal>
    </div>
  );
}

function panes(x0: number, y0: number, cols: number, rows: number) {
  const items: Array<[number, number]> = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      items.push([x0 + col * 34, y0 + row * 32]);
    }
  }
  return items;
}

function ClinicFacade() {
  const windows = [...panes(88, 188, 3, 4), ...panes(236, 104, 5, 6), ...panes(448, 210, 3, 3)];
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(8,30,48,0.22)] ring-1 ring-white/50">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#e7f7fb_0%,#8ecfe4_26%,#1a6d93_58%,#071824_100%)]" />
      <div className="absolute top-7 right-14 size-16 rounded-full bg-[#fff6d4] shadow-[0_0_46px_rgba(255,246,212,0.95)]" />
      <svg viewBox="0 0 640 440" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="tower" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1b5270" />
            <stop offset="1" stopColor="#0d2c40" />
          </linearGradient>
          <linearGradient id="wing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#24597a" />
            <stop offset="1" stopColor="#102c40" />
          </linearGradient>
        </defs>
        <ellipse cx="130" cy="78" rx="78" ry="16" fill="white" opacity="0.45" />
        <ellipse cx="176" cy="86" rx="42" ry="12" fill="white" opacity="0.3" />
        <path d="M0 332h640v108H0z" fill="#06141f" />
        <path d="M0 332h640v26H0z" fill="#9fd4ea" opacity="0.18" />
        <rect x="228" y="348" width="184" height="64" fill="#14384f" opacity="0.28" />
        <rect x="64" y="176" width="156" height="156" rx="12" fill="url(#wing)" />
        <rect x="214" y="86" width="212" height="246" rx="16" fill="url(#tower)" />
        <rect x="420" y="196" width="156" height="136" rx="12" fill="url(#wing)" />
        <path d="M230 100h28v214h-28z" fill="white" opacity="0.08" />
        <path d="M268 332h104l-10 12H278z" fill="#3559b7" />
        <rect x="292" y="286" width="56" height="46" rx="4" fill="#07141f" />
        <rect x="302" y="294" width="36" height="38" rx="3" fill="#9aeff8" className="win" />
        {windows.map(([x, y], index) => (
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width="22"
            height="14"
            rx="2"
            fill={index % 4 === 0 ? "#6aa4c4" : "#f3fbff"}
            className={index % 4 === 0 ? undefined : "win"}
            style={index % 4 === 0 ? undefined : { animationDelay: `${(index % 9) * 0.25}s` }}
          />
        ))}
        <rect x="40" y="300" width="3" height="32" fill="#0c2434" />
        <circle cx="41.5" cy="296" r="5" fill="#fff4c2" className="win" />
        <rect x="596" y="300" width="3" height="32" fill="#0c2434" />
        <circle cx="597.5" cy="296" r="5" fill="#fff4c2" className="win" style={{ animationDelay: "1.1s" }} />
      </svg>
      <div className="absolute top-5 left-5 rounded-2xl bg-white/95 px-3 py-2 text-[#3559b7] shadow-lg">
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
        <a href={href} className="text-sm font-semibold text-[#3559b7]">
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

function Portrait({ slug }: { slug: string }) {
  const longHair = slug === "aliya";
  const hair = slug === "orel" ? "#4a3428" : slug === "musay" ? "#1c1a19" : "#241c18";
  return (
    <svg viewBox="0 0 200 280" className="portrait-idle h-full w-full" aria-hidden>
      <ellipse cx="100" cy="262" rx="62" ry="16" fill="#ffffff" opacity="0.45" />
      <path d="M38 280c6-78 28-108 62-108s56 30 62 108" fill="#f7fbfc" />
      <path d="M78 176c6 18 38 22 44 0" fill="none" stroke="#3559b7" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="176" r="4" fill="#3559b7" />
      <path d="M86 150h28v22c0 8-6 14-14 14s-14-6-14-14z" fill="#f0c3aa" />
      <ellipse cx="100" cy="108" rx="34" ry="40" fill="#f3d2bd" />
      {longHair ? (
        <path d="M62 118c2-52 22-74 38-74 22 0 40 20 42 58 2 36-6 78-14 104h-18c4-28 6-58 2-78-10 8-24 10-36 4-4 22-2 48 2 74H60c-6-28-8-70 2-88z" fill={hair} />
      ) : (
        <path d="M66 112c2-46 20-66 34-66 20 0 36 18 38 52-16 8-28 6-38-2-10 10-24 12-34 8z" fill={hair} />
      )}
      <ellipse cx="88" cy="110" rx="3" ry="3.4" fill="#3d2c26" />
      <ellipse cx="114" cy="110" rx="3" ry="3.4" fill="#3d2c26" />
      <path d="M94 126c4 4 10 4 14 0" fill="none" stroke="#c48b78" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
