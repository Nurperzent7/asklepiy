import type { Metadata } from "next";
import Link from "next/link";
import { branches, priceLabel, services } from "@/lib/clinic";

export const metadata: Metadata = { title: "Услуги" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Услуги</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Нижняя и верхняя граница. Итог — после измерений, в тот же день.
      </p>
      <ul className="mt-10 divide-y divide-border border-y border-border">
        {services.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-10"
            >
              <span>
                <span className="block text-xl">{service.title}</span>
                <span className="mt-1 block max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {service.short}
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">
                  {service.cities
                    .map((id) => branches.find((branch) => branch.id === id)?.city)
                    .join(", ")}
                </span>
              </span>
              <span className="tabular-nums sm:pt-1 sm:text-right">{priceLabel(service)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
