import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  branches,
  doctors,
  priceLabel,
  serviceBySlug,
  services,
} from "@/lib/clinic";
import { cn } from "cn";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return { title: service?.title ?? "Услуга" };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const people = doctors.filter((doctor) => doctor.services.includes(service.slug));

  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-foreground">
            Услуги
          </Link>
        </p>
        <h1 className="mt-3 text-4xl text-balance">{service.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{service.short}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.cities.map((id) => (
            <Badge key={id} variant="secondary">
              {branches.find((branch) => branch.id === id)?.city}
            </Badge>
          ))}
          <Badge variant="outline">{service.visit}</Badge>
        </div>
        <p className="mt-6 text-sm font-medium">{priceLabel(service)}</p>
        <h2 className="mt-10 text-2xl">Кому подходит</h2>
        <p className="mt-2 text-muted-foreground">{service.who}</p>
        <h2 className="mt-8 text-2xl">Как проходит</h2>
        <ol className="mt-3 space-y-3">
          {service.journey.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-medium text-primary">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <h2 className="mt-8 text-2xl">Перед визитом</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          {service.prep.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2 className="mt-8 text-2xl">После</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.after}</p>
        <p className="mt-4 rounded-xl bg-muted px-4 py-3 text-sm">{service.limit}</p>
        {service.lenses ? (
          <>
            <h2 className="mt-8 text-2xl">Какие бывают линзы</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {service.lenses.map((lens) => (
                <li key={lens.name} className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                  <p className="font-medium">{lens.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{lens.note}</p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <h2 className="mt-8 text-2xl">Вопросы</h2>
        <Accordion className="mt-3">
          {service.faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <aside className="h-fit space-y-4 rounded-3xl bg-card p-5 ring-1 ring-foreground/10 lg:sticky lg:top-28">
        <p className="text-sm text-muted-foreground">Заявка по этому направлению</p>
        <p className="text-2xl">{priceLabel(service)}</p>
        <Link
          href={`/booking?service=${service.slug}`}
          className={cn(buttonVariants({ size: "lg" }), "h-11 w-full")}
        >
          Выбрать город и время
        </Link>
        <div>
          <p className="text-sm font-medium">Кто ведёт</p>
          <ul className="mt-2 space-y-2">
            {people.map((doctor) => (
              <li key={doctor.slug}>
                <Link href={`/doctors/${doctor.slug}`} className="text-sm hover:underline">
                  {doctor.name}
                  <span className="text-muted-foreground"> — {doctor.role}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </article>
  );
}
