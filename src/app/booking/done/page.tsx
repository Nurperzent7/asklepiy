"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { readBooking, type BookingDraft } from "@/components/booking-wizard";
import { cityById, doctorBySlug, serviceBySlug } from "@/lib/clinic";
import { cn } from "cn";

export default function BookingDonePage() {
  const [draft, setDraft] = useState<BookingDraft | null | undefined>(undefined);

  useEffect(() => {
    setDraft(readBooking());
  }, []);

  if (draft === undefined) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6" aria-busy="true">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />
        <div className="mt-4 h-24 animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (!draft) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <h1 className="text-4xl">Заявки нет</h1>
        <p className="mt-3 text-muted-foreground">
          В этой вкладке пусто. Если вы уже отправляли форму, она осталась в том же браузере — откройте
          подтверждение там или заполните заново.
        </p>
        <Link href="/booking" className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}>
          К заявке
        </Link>
      </div>
    );
  }

  const city = cityById(draft.city);
  const service = serviceBySlug(draft.service);
  const doctor = doctorBySlug(draft.doctor);

  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <p className="text-sm text-muted-foreground">Номер заявки</p>
      <h1 className="mt-1 text-4xl">{draft.code}</h1>
      <p className="mt-4 text-muted-foreground">
        {draft.name}, окно {draft.day} в {draft.time}. В рабочей клинике администратор перезвонил бы на{" "}
        {draft.phone}. Здесь заявка остаётся только в этом браузере.
      </p>
      <dl className="mt-6 space-y-3 border border-border p-5 text-sm">
        <Row label="Имя" value={draft.name} />
        <Row label="Город" value={city?.city ?? draft.city} />
        <Row label="Услуга" value={service?.title ?? draft.service} />
        <Row label="Врач" value={doctor?.name ?? "Первый свободный"} />
        <Row label="Окно" value={`${draft.day}, ${draft.time}`} />
        <Row label="Адрес" value={city?.address ?? "—"} />
        {draft.note ? <Row label="Комментарий" value={draft.note} /> : null}
      </dl>
      <Link href="/" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 h-11 px-5")}>
        На главную
      </Link>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="max-w-[65%] text-right break-words">{value}</dd>
    </div>
  );
}
