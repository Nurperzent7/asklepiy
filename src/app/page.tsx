import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { branches, doctors, generalFaqs, intents, priceLabel, reviews, services } from "@/lib/clinic";
import { cn } from "cn";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <Badge variant="secondary">Алматы · Актау · Шымкент</Badge>
          <h1 className="mt-4 text-4xl leading-[1.1] text-balance sm:text-6xl">
            Зрение разбираем до ценника, а не после рекламы
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            NurlyKoz показывает вилку, врача и ближайшее окно ещё на сайте. Заявка не считается
            приёмом, пока её не подтвердит администратор. Острый симптом — отдельный короткий путь.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/booking" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
              Выбрать окно
            </Link>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
            >
              Смотреть услуги
            </Link>
          </div>
        </div>
        <aside className="rounded-3xl bg-card p-6 ring-1 ring-foreground/10">
          <p className="text-sm text-muted-foreground">Чем это удобнее очереди в мессенджере</p>
          <ol className="mt-4 space-y-4">
            {[
              ["Город и услуга", "Список врачей сужается сам, пустых обещаний нет."],
              ["Вилка до визита", "Нижняя и верхняя граница. Точная сумма — после измерений."],
              ["Окно на календаре", "Не «напишите, мы перезвоним когда-нибудь»."],
              ["Острый маршрут", "Вспышки и занавеска не стоят в одной очереди с проверкой очков."],
            ].map(([title, text], index) => (
              <li key={title} className="flex gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm text-primary-foreground">
                  {index + 1}
                </span>
                <span>
                  <span className="block font-medium">{title}</span>
                  <span className="text-sm text-muted-foreground">{text}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl">С чего начать</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Выберите ощущение — откроется направление, а не длинная простыня обо всём сразу.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {intents.map((intent) => (
            <li key={intent.href}>
              <Link
                href={intent.href}
                className="block h-full rounded-2xl bg-card p-5 ring-1 ring-foreground/10 hover:ring-primary/40"
              >
                <span className="text-lg">{intent.title}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{intent.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl">Услуги и вилка</h2>
          <Link href="/services" className="text-sm text-primary underline-offset-4 hover:underline">
            Все направления
          </Link>
        </div>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {services.slice(0, 6).map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="flex h-full items-start justify-between gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/10 hover:ring-primary/40"
              >
                <span>
                  <span className="block text-lg">{service.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{service.short}</span>
                </span>
                <span className="shrink-0 text-sm font-medium">{priceLabel(service)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl">Врачи</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {doctors.slice(0, 3).map((doctor) => (
            <li key={doctor.slug}>
              <Link href={`/doctors/${doctor.slug}`} className="block rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
                <span className="text-lg">{doctor.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{doctor.role}</span>
                <span className="mt-3 block text-sm">{doctor.focus}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/doctors" className="mt-4 inline-block text-sm text-primary underline-offset-4 hover:underline">
          Каталог с фильтром по городу
        </Link>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl">Как звучат отзывы в макете</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <li key={review.id} className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
              <p className="text-sm leading-relaxed">{review.text}</p>
              <p className="mt-4 text-sm font-medium">{review.name}</p>
              <p className="text-xs text-muted-foreground">{review.service}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl">Филиалы</h2>
          <ul className="mt-6 space-y-3">
            {branches.map((branch) => (
              <li key={branch.id}>
                <Link href={`/branches/${branch.id}`} className="block rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
                  <span className="text-lg">{branch.city}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{branch.address}</span>
                  <span className="mt-2 block text-sm">{branch.hours}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl">Коротко о записи</h2>
          <Accordion className="mt-6">
            {generalFaqs.slice(0, 4).map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-base">{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
