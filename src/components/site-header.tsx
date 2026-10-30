"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const current = branches.find((item) => item.id === city)!;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-black/[0.06] shadow-[0_10px_30px_rgba(12,18,34,0.06)]" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center gap-3 px-4">
        <Link href="/" aria-label="Асклепий" className="shrink-0">
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
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#d5deef] bg-[#eef1fa]/80 px-3 text-[13px] font-bold text-[#0c1222]"
            aria-expanded={open}
          >
            <MapPin className="size-3.5 text-[#3559b7]" />
            {current.name}
            <ChevronDown className={cn("size-3.5 text-[#4a5568] transition-transform duration-200", open && "rotate-180")} />
          </button>
          {open ? (
            <div className="menu-pop absolute top-11 left-0 z-50 w-44 rounded-2xl border border-black/5 bg-white p-1 shadow-lg">
              {branches.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={cn(
                    "block w-full rounded-xl px-3 py-2 text-left text-sm",
                    item.id === city ? "bg-[#eef1fa] font-semibold" : "hover:bg-[#f7fbfd]"
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
            <Link key={item.href} href={item.href} className="nav-link text-[13px] font-medium text-[#4a5568] transition-colors hover:text-[#0c1222]">
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
            className="az-btn pulse-teal hidden h-10 items-center rounded-full bg-[#3559b7] px-4 text-[13px] font-bold text-white sm:inline-flex"
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
                <SheetTitle>Асклепий</SheetTitle>
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
