import type { Metadata } from "next";
import Link from "next/link";
import { branches, priceLabel, services } from "@/lib/clinic";

export const metadata: Metadata = { title: "Услуги" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Услуги</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Цена на карточке — ориентир. Итоговую сумму называем после диагностики, когда ясен объём.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="flex h-full flex-col rounded-2xl bg-card p-5 ring-1 ring-foreground/10 hover:ring-primary/40"
            >
              <span className="text-2xl">{service.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</span>
              <span className="mt-4 text-sm font-medium">{priceLabel(service)}</span>
              <span className="mt-1 text-xs text-muted-foreground">
                {service.cities
                  .map((id) => branches.find((branch) => branch.id === id)?.city)
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
