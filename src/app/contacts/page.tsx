"use client";

import { MapPin } from "lucide-react";
import { branches, waLink } from "@/lib/az";
import { useClinic } from "@/components/city-context";
import { WaIcon } from "@/components/logo";
import { PageIntro } from "@/components/page-intro";

export default function ContactsPage() {
  const { city, setCity } = useClinic();
  const branch = branches.find((item) => item.id === city)!;

  return (
    <div className="mx-auto max-w-xl px-4 py-12 text-center">
      <PageIntro kicker="ФИЛИАЛЫ" title="Контакты" text="Выберите город — ниже адрес, часы и WhatsApp." />
      <div className="mt-5 flex justify-center gap-2">
        {branches.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCity(item.id)}
            className={
              item.id === city
                ? "h-10 rounded-full bg-[#00a9c1] px-4 text-sm font-bold text-white"
                : "h-10 rounded-full border border-black/10 bg-white px-4 text-sm font-semibold"
            }
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-6 rounded-[24px] bg-white p-6 text-left shadow-[0_16px_40px_rgba(12,18,34,0.06)]">
        <p className="text-[11px] font-bold tracking-[0.12em] text-[#8aa0aa] uppercase">Адрес</p>
        <p className="mt-1 font-semibold">{branch.address}</p>
        <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-[#8aa0aa] uppercase">Режим работы</p>
        <p className="mt-1 font-semibold">{branch.hours}</p>
        <p className="mt-4 text-[11px] font-bold tracking-[0.12em] text-[#8aa0aa] uppercase">Телефон</p>
        <p className="mt-1 font-semibold">{branch.phone}</p>
        <a
          href={branch.map}
          className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 text-sm font-semibold"
        >
          <MapPin className="size-4" />
          Открыть в 2GIS
        </a>
        <a
          href={waLink(city)}
          className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-[#00a9c1] text-sm font-bold text-white"
        >
          <WaIcon />
          Написать в WhatsApp
        </a>
      </div>
    </div>
  );
}
