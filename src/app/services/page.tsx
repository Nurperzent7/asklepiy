import type { Metadata } from "next";
import Link from "next/link";
import { Eye } from "lucide-react";
import { serviceCards } from "@/lib/az";

export const metadata: Metadata = { title: "Услуги" };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold">Услуги</h1>
      <p className="mt-2 text-center text-sm text-[#4a5568]">Диагностика, лечение и сложные операции на глазах</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((service) => (
          <article key={service.slug} className="lift sheen rounded-[1.4rem] border border-black/[0.05] bg-white p-6 shadow-[0_10px_30px_rgba(12,18,34,0.04)]">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#e7f8fb] text-[#00a9c1]">
              <Eye className="size-5" />
            </span>
            <h2 className="mt-4 text-lg font-bold">{service.title}</h2>
            <p className="mt-2 text-sm text-[#4a5568]">{service.text}</p>
            <Link href={`/services/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#00a9c1]">
              Подробнее →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
