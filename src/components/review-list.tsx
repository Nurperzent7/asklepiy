"use client";

import { useState } from "react";
import { branches, reviews, type CityId } from "@/lib/clinic";
import { cn } from "cn";

export function ReviewList() {
  const [city, setCity] = useState<CityId | "">("");
  const list = reviews.filter((review) => !city || review.city === city);

  return (
    <div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-border pb-3">
        <Filter active={city === ""} onClick={() => setCity("")}>
          Все
        </Filter>
        {branches.map((branch) => (
          <Filter key={branch.id} active={city === branch.id} onClick={() => setCity(branch.id)}>
            {branch.city}
          </Filter>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">По этому городу записей нет.</p>
      ) : (
        <ul className="mt-2 divide-y divide-border">
          {list.map((review) => (
            <li key={review.id} className="py-6">
              <p className="max-w-2xl text-lg leading-snug">{review.text}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {review.name}
                {" · "}
                {branches.find((branch) => branch.id === review.city)?.city}
                {" · "}
                {review.service}
                {" · "}
                {review.when}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Filter({
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
        "border-b py-1 text-sm",
        active ? "border-foreground" : "border-transparent text-muted-foreground"
      )}
    >
      {children}
    </button>
  );
}
