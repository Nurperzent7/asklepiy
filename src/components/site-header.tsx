"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, MapPin, Menu } from "lucide-react";
import { branches } from "@/lib/az";
import { useClinic } from "@/components/city-context";
import { Logo } from "@/components/logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "cn";

const nav = [
  { href: "/about", ru: "О клинике", kk: "Клиника туралы" },
  { href: "/services", ru: "Услуги", kk: "Қызметтер" },
  { href: "/doctors", ru: "Врачи", kk: "Дәрігерлер" },
  { href: "/reviews", ru: "Отзывы", kk: "Пікірлер" },
  { href: "/news", ru: "Новости", kk: "Жаңалықтар" },
  { href: "/contacts", ru: "Контакты", kk: "Байланыс" },
];

export function SiteHeader() {
  const { city, setCity, lang, setLang } = useClinic();
  const [open, setOpen] = useState(false);
  const current = branches.find((item) => item.id === city)!;

  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.04] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-3 px-4">
        <Link href="/" aria-label="AsiaKoz" className="shrink-0">
          <span className="sm:hidden">
            <Logo compact />
          </span>
          <span className="hidden sm:inline-block">
            <Logo />
          </span>
        </Link>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#d7eef2] bg-[#edfafc]/80 px-3 text-[13px] font-bold text-[#0c1222]"
            aria-expanded={open}
          >
            <MapPin className="size-3.5 text-[#00a9c1]" />
            {current.name}
            <ChevronDown className="size-3.5 text-[#4a5568]" />
          </button>
          {open ? (
            <div className="absolute top-11 left-0 z-50 w-44 rounded-2xl border border-black/5 bg-white p-1 shadow-lg">
              {branches.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={cn(
                    "block w-full rounded-xl px-3 py-2 text-left text-sm",
                    item.id === city ? "bg-[#edfafc] font-semibold" : "hover:bg-[#f7fbfd]"
                  )}
                  onClick={() => {
                    setCity(item.id);
                    setOpen(false);
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <nav className="ml-3 hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[13px] font-medium text-[#4a5568] hover:text-[#0c1222]">
              {lang === "ru" ? item.ru : item.kk}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center rounded-full bg-[#f3f6f8] p-0.5 text-[12px] font-bold sm:flex">
            <button
              type="button"
              onClick={() => setLang("kk")}
              className={cn("rounded-full px-2.5 py-1", lang === "kk" ? "bg-white text-[#0c1222] shadow-sm" : "text-[#4a5568]")}
            >
              ҚАЗ
            </button>
            <button
              type="button"
              onClick={() => setLang("ru")}
              className={cn("rounded-full px-2.5 py-1", lang === "ru" ? "bg-white text-[#0c1222] shadow-sm" : "text-[#4a5568]")}
            >
              РУС
            </button>
          </div>
          <Link
            href="/#booking"
            className="hidden h-10 items-center rounded-full bg-[#00a9c1] px-4 text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(0,169,193,0.28)] sm:inline-flex"
          >
            {lang === "ru" ? "Записаться" : "Жазылу"}
          </Link>
          <Sheet>
            <SheetTrigger
              className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
              aria-label="Меню"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>AsiaKoz</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href} className="border-b border-black/5 py-3 text-base">
                    {lang === "ru" ? item.ru : item.kk}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
