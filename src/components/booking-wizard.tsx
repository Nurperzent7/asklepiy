"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  branches,
  doctorsFor,
  isPhone,
  services,
  upcomingDays,
  type CityId,
} from "@/lib/clinic";
import { cn } from "cn";

const STORAGE_KEY = "nurlykoz-booking";

export type BookingDraft = {
  city: CityId;
  service: string;
  doctor: string;
  day: string;
  time: string;
  name: string;
  phone: string;
  note: string;
  code: string;
};

type Props = {
  initialCity?: string;
  initialService?: string;
  initialDoctor?: string;
};

export function BookingWizard({ initialCity, initialService, initialDoctor }: Props) {
  const router = useRouter();
  const [city, setCity] = useState<CityId | "">(
    branches.some((branch) => branch.id === initialCity) ? (initialCity as CityId) : ""
  );
  const [service, setService] = useState(
    services.some((item) => item.slug === initialService) ? initialService! : ""
  );
  const [doctor, setDoctor] = useState(initialDoctor ?? "");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState("");

  const availableServices = useMemo(
    () => services.filter((item) => !city || item.cities.includes(city)),
    [city]
  );
  const availableDoctors = useMemo(
    () => (city && service ? doctorsFor(city, service) : []),
    [city, service]
  );
  const days = useMemo(() => (city ? upcomingDays(city) : []), [city]);

  useEffect(() => {
    if (!service) return;
    if (city && !availableServices.some((item) => item.slug === service)) {
      setService("");
    }
  }, [availableServices, city, service]);

  useEffect(() => {
    if (doctor && !availableDoctors.some((item) => item.slug === doctor)) {
      setDoctor("");
    }
  }, [availableDoctors, doctor]);

  useEffect(() => {
    if (!city || !service) return;
    setChecking(true);
    setDay("");
    setTime("");
    const timer = window.setTimeout(() => setChecking(false), 450);
    return () => window.clearTimeout(timer);
  }, [city, service]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!city || !service || !day || !time) {
      setError("Выберите город, услугу, день и время.");
      return;
    }
    if (name.trim().length < 2) {
      setError("Как к вам обращаться? Нужно имя.");
      return;
    }
    if (!isPhone(phone)) {
      setError("Телефон в формате +7 и ещё 10 цифр.");
      return;
    }
    if (!consent) {
      setError("Нужно согласие, что это заявка, а не подтверждённый приём.");
      return;
    }
    const code = `NK-${day.slice(5).replace("-", "")}-${Math.floor(1000 + Math.random() * 9000)}`;
    const draft: BookingDraft = {
      city,
      service,
      doctor,
      day,
      time,
      name: name.trim(),
      phone: phone.trim(),
      note: note.trim(),
      code,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    router.push("/booking/done");
  }

  return (
    <form onSubmit={submit} className="space-y-8" noValidate>
      <fieldset className="space-y-3">
        <legend className="text-base font-medium">1. Город</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {branches.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => setCity(branch.id)}
              className={choiceClass(city === branch.id)}
              aria-pressed={city === branch.id}
            >
              <span className="block text-base">{branch.city}</span>
              <span className="mt-1 block text-xs opacity-70">{branch.hours}</span>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3" disabled={!city}>
        <legend className="text-base font-medium">2. Зачем визит</legend>
        {!city ? (
          <p className="text-sm text-muted-foreground">Сначала город — список услуг от него зависит.</p>
        ) : (
          <div className="grid gap-2 sm:grid-cols-2">
            {availableServices.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setService(item.slug)}
                className={choiceClass(service === item.slug)}
                aria-pressed={service === item.slug}
              >
                <span className="block text-base">{item.title}</span>
                <span className="mt-1 block text-xs opacity-70">{item.visit}</span>
              </button>
            ))}
          </div>
        )}
      </fieldset>

      <fieldset className="space-y-3" disabled={!service}>
        <legend className="text-base font-medium">3. Врач</legend>
        {!service ? (
          <p className="text-sm text-muted-foreground">Выберите услугу, чтобы увидеть, кто её ведёт.</p>
        ) : availableDoctors.length === 0 ? (
          <p className="border border-dashed border-border px-4 py-4 text-sm" role="status">
            В этом городе нет врача на выбранную услугу. Смените город или направление — например, линза внутри глаза только в Алматы.
          </p>
        ) : (
          <div className="grid gap-2">
            <button
              type="button"
              onClick={() => setDoctor("")}
              className={choiceClass(doctor === "")}
              aria-pressed={doctor === ""}
            >
              Первый свободный по этому направлению
            </button>
            {availableDoctors.map((item) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setDoctor(item.slug)}
                className={choiceClass(doctor === item.slug)}
                aria-pressed={doctor === item.slug}
              >
                <span className="block text-base">{item.name}</span>
                <span className="mt-1 block text-xs opacity-70">
                  {item.role} · {item.years} лет практики
                </span>
              </button>
            ))}
          </div>
        )}
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-base font-medium">4. Окно</legend>
        {checking ? (
          <div className="grid gap-2 sm:grid-cols-2" aria-busy="true" aria-live="polite">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-16 animate-pulse rounded-xl bg-muted" />
            ))}
            <p className="sr-only">Проверяем ближайшие окна</p>
          </div>
        ) : !city || !service ? (
          <p className="text-sm text-muted-foreground">Окна появятся после города и услуги.</p>
        ) : availableDoctors.length === 0 ? (
          <p className="text-sm text-muted-foreground">Сначала подберите связку, где есть врач.</p>
        ) : (
          <div className="space-y-4">
            {days.map((slotDay) => (
              <div key={slotDay.iso}>
                <p className="mb-2 text-sm text-muted-foreground">{slotDay.label}</p>
                <div className="flex flex-wrap gap-2">
                  {slotDay.times.map((slot) => {
                    const active = day === slotDay.iso && time === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setDay(slotDay.iso);
                          setTime(slot);
                        }}
                        className={cn(
                          "h-10 rounded-lg border px-3 text-sm",
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:bg-muted"
                        )}
                        aria-pressed={active}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </fieldset>

      <fieldset className="grid gap-4 sm:grid-cols-2">
        <legend className="mb-1 text-base font-medium sm:col-span-2">5. Контакты</legend>
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="h-11"
            placeholder="Как к вам обращаться"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="h-11"
            placeholder="+7 700 000 00 00"
            aria-invalid={Boolean(error && phone && !isPhone(phone))}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="note">Что беспокоит</Label>
          <Textarea
            id="note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Например: пелена на правом глазу третий месяц, очки не помогают"
            rows={4}
          />
        </div>
        <label className="flex items-start gap-3 text-sm sm:col-span-2">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 size-4 accent-[var(--primary)]"
          />
          <span>
            Оставляю номер, чтобы подтвердить время. До звонка администратора это ещё не запись.
          </span>
        </label>
      </fieldset>

      {error ? (
        <p role="alert" className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="h-11 px-5">
        Отправить заявку
      </Button>
    </form>
  );
}

function choiceClass(active: boolean) {
  return cn(
    "border px-4 py-3 text-left",
    active ? "border-foreground bg-foreground text-background" : "border-border bg-background hover:bg-muted"
  );
}

export function readBooking(): BookingDraft | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as BookingDraft;
  } catch {
    return null;
  }
}
