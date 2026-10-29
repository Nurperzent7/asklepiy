"use client";

import { useState } from "react";
import { branches, reviews, type CityId } from "@/lib/clinic";
import { cn } from "cn";

export function ReviewList() {
  const [city, setCity] = useState<CityId | "">("");
  const list = reviews.filter((review) => !city || review.city === city);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Chip active={city === ""} onClick={() => setCity("")}>
          Все
        </Chip>
        {branches.map((branch) => (
          <Chip key={branch.id} active={city === branch.id} onClick={() => setCity(branch.id)}>
            {branch.city}
          </Chip>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="text-sm text-muted-foreground">В этом городе примеров пока нет.</p>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {list.map((review) => (
            <li key={review.id} className="rounded-2xl bg-card p-5 ring-1 ring-foreground/10">
              <p className="text-sm leading-relaxed">{review.text}</p>
              <p className="mt-4 text-sm font-medium">{review.name}</p>
              <p className="text-xs text-muted-foreground">
                {branches.find((branch) => branch.id === review.city)?.city} · {review.service} · {review.when}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Chip({
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
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"
      )}
    >
      {children}
    </button>
  );
}
