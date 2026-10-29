"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { branches, doctors, services, type CityId } from "@/lib/clinic";
import { cn } from "cn";

export function DoctorBrowser({ initialCity }: { initialCity?: string }) {
  const [city, setCity] = useState<CityId | "">(
    branches.some((branch) => branch.id === initialCity) ? (initialCity as CityId) : ""
  );
  const [service, setService] = useState("");

  const list = doctors.filter((doctor) => {
    const cityOk = !city || doctor.cities.includes(city);
    const serviceOk = !service || doctor.services.includes(service);
    return cityOk && serviceOk;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Город">
        <FilterChip active={city === ""} onClick={() => setCity("")}>
          Все города
        </FilterChip>
        {branches.map((branch) => (
          <FilterChip key={branch.id} active={city === branch.id} onClick={() => setCity(branch.id)}>
            {branch.city}
          </FilterChip>
        ))}
      </div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Направление">
        <FilterChip active={service === ""} onClick={() => setService("")}>
          Все направления
        </FilterChip>
        {services.map((item) => (
          <FilterChip key={item.slug} active={service === item.slug} onClick={() => setService(item.slug)}>
            {item.title}
          </FilterChip>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="rounded-xl border border-dashed p-6 text-sm text-muted-foreground" role="status">
          В этом городе нет врача на выбранное направление. Снимите фильтр или откройте другой город.
        </p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {list.map((doctor) => (
            <li key={doctor.slug}>
              <Link
                href={`/doctors/${doctor.slug}`}
                className="block h-full rounded-2xl bg-card p-5 ring-1 ring-foreground/10 hover:ring-primary/40"
              >
                <p className="text-xl">{doctor.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{doctor.role}</p>
                <p className="mt-3 text-sm">{doctor.focus}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {doctor.cities.map((id) => (
                    <Badge key={id} variant="secondary">
                      {branches.find((branch) => branch.id === id)?.city}
                    </Badge>
                  ))}
                  <Badge variant="outline">{doctor.years} лет</Badge>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:bg-muted"
      )}
    >
      {children}
    </button>
  );
}
