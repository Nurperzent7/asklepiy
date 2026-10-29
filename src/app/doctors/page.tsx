import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { doctors, waLink } from "@/lib/az";

export const metadata: Metadata = { title: "Врачи" };

export default function DoctorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageIntro kicker="КОМАНДА" title="Врачи" text="Приём в Алматы, Актау и Шымкенте." />
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {doctors.map((doctor) => (
          <article key={doctor.slug} className="lift rounded-[1.4rem] border border-black/[0.05] bg-white p-5 shadow-[0_10px_30px_rgba(12,18,34,0.04)]">
            <p className="text-[11px] font-bold tracking-wide text-[#8aa0aa] uppercase">{doctor.cities}</p>
            <h2 className="mt-1 text-2xl font-extrabold">{doctor.name}</h2>
            <p className="font-semibold">{doctor.role}</p>
            <p className="mt-2 text-sm text-[#4a5568]">{doctor.text}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href={`/doctors/${doctor.slug}`} className="text-sm font-semibold text-[#00a9c1]">
                Подробнее →
              </Link>
              <a href={waLink("almaty", `Врач: ${doctor.name}`)} className="text-sm font-semibold text-[#00a9c1]">
                Записаться к врачу
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
