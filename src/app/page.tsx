import Link from "next/link";
import { branches, doctors, intents, priceLabel, reviews, services } from "@/lib/clinic";

export default function HomePage() {
  const quote = reviews[0];

  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-12">
          <div className="px-4 py-12 sm:px-6 lg:col-span-7 lg:py-16">
            <p className="text-sm text-muted-foreground">Алматы, Актау, Шымкент</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-[1.05] sm:text-5xl">
              Глазная клиника для взрослых и детей
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Диагностика, лазер, катаракта, глаукома и сетчатка. Точную сумму называем после осмотра — до согласия на операцию.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/booking"
                className="inline-flex h-11 items-center bg-primary px-5 text-sm text-primary-foreground"
              >
                Запись на приём
              </Link>
              <Link href="/services/ostryy-priem" className="text-sm underline underline-offset-4">
                Вспышки, пелена, травма
              </Link>
            </div>
          </div>
          <div className="border-t border-border bg-primary px-4 py-8 text-primary-foreground sm:px-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:border-white/10">
            <p className="text-xs tracking-wide text-primary-foreground/60 uppercase">Куда ехать</p>
            <ul className="mt-4 divide-y divide-white/15">
              {branches.map((branch) => (
                <li key={branch.id} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <Link href={`/branches/${branch.id}`} className="text-lg hover:underline">
                      {branch.city}
                    </Link>
                    <a href={branch.phoneHref} className="text-sm tabular-nums hover:underline">
                      {branch.phone}
                    </a>
                  </div>
                  <p className="mt-1 text-sm text-primary-foreground/70">{branch.address}</p>
                  <p className="text-sm text-primary-foreground/70">{branch.hours}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 className="text-2xl lg:col-span-4">С чем приходят</h2>
          <ul className="divide-y divide-border border-y border-border lg:col-span-8">
            {intents.map((intent) => (
              <li key={intent.href}>
                <Link href={intent.href} className="flex items-baseline justify-between gap-6 py-3.5">
                  <span>
                    <span className="block">{intent.title}</span>
                    <span className="text-sm text-muted-foreground">{intent.text}</span>
                  </span>
                  <span className="text-sm text-muted-foreground" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl">Цены</h2>
            <Link href="/services" className="text-sm underline underline-offset-4">
              Все услуги
            </Link>
          </div>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {services
              .filter((service) => service.slug !== "ostryy-priem")
              .map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
                  >
                    <span>
                      <span className="block">{service.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {service.cities
                          .map((id) => branches.find((branch) => branch.id === id)?.city)
                          .join(", ")}
                      </span>
                    </span>
                    <span className="tabular-nums sm:text-right">{priceLabel(service)}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            Детский осмотр от 16 000 ₸, полная диагностика от 18 500 ₸. Операцию одной цифрой без осмотра не считаем.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl">Врачи</h2>
          <Link href="/doctors" className="text-sm underline underline-offset-4">
            По городу
          </Link>
        </div>
        <ol className="mt-6 divide-y divide-border border-y border-border">
          {doctors.map((doctor, index) => (
            <li key={doctor.slug}>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 sm:grid-cols-[3rem_1fr_auto]"
              >
                <span className="pt-1 text-sm tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-lg">{doctor.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {doctor.role}
                    {" · "}
                    {doctor.cities
                      .map((id) => branches.find((branch) => branch.id === id)?.city)
                      .join(", ")}
                  </span>
                </span>
                <span className="hidden text-sm text-muted-foreground sm:block">{doctor.years} лет</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12">
          <p className="text-sm text-muted-foreground lg:col-span-3">
            {branches.find((branch) => branch.id === quote.city)?.city} · {quote.service}
          </p>
          <blockquote className="lg:col-span-9">
            <p className="text-2xl leading-snug">{quote.text}</p>
            <footer className="mt-4 text-sm text-muted-foreground">
              {quote.name}, {quote.when}
              {" · "}
              <Link href="/reviews" className="underline underline-offset-4">
                остальные
              </Link>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
