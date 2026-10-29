"use client";

import { useState } from "react";
import Link from "next/link";
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
    <div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-border pb-3" role="group" aria-label="Город">
        <TextFilter active={city === ""} onClick={() => setCity("")}>
          Все города
        </TextFilter>
        {branches.map((branch) => (
          <TextFilter key={branch.id} active={city === branch.id} onClick={() => setCity(branch.id)}>
            {branch.city}
          </TextFilter>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2" role="group" aria-label="Направление">
        <TextFilter active={service === ""} onClick={() => setService("")}>
          Все направления
        </TextFilter>
        {services.map((item) => (
          <TextFilter key={item.slug} active={service === item.slug} onClick={() => setService(item.slug)}>
            {item.title}
          </TextFilter>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-8 border border-dashed border-border px-4 py-6 text-sm text-muted-foreground" role="status">
          В этом городе это направление не ведут. Выберите другой город или снимите фильтр.
        </p>
      ) : (
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {list.map((doctor, index) => (
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
                  <span className="mt-1 block text-sm">{doctor.focus}</span>
                </span>
                <span className="hidden text-sm text-muted-foreground sm:block">{doctor.years} лет</span>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function TextFilter({
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
        "border-b py-1 text-sm",
        active ? "border-foreground text-foreground" : "border-transparent text-muted-foreground"
      )}
    >
      {children}
    </button>
  );
}
