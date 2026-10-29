"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { branches } from "@/lib/clinic";
import { cn } from "cn";

const links = [
  { href: "/services", label: "Услуги" },
  { href: "/doctors", label: "Врачи" },
  { href: "/branches", label: "Филиалы" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/faq", label: "Вопросы" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="hidden border-b border-white/10 bg-primary text-primary-foreground md:block">
        <div className="mx-auto grid max-w-6xl grid-cols-3 px-6 text-sm">
          {branches.map((branch) => (
            <a key={branch.id} href={branch.phoneHref} className="truncate py-2 hover:underline">
              <span className="text-primary-foreground/70">{branch.city}</span>
              <span className="ml-2 tabular-nums">{branch.phone}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 sm:px-6">
          <Link href="/" className="leading-tight">
            <span className="block text-[1.15rem] font-medium tracking-tight">Нұрлы көз</span>
            <span className="block text-[11px] text-muted-foreground">глазная клиника</span>
          </Link>
          <nav className="ml-2 hidden items-center gap-5 lg:flex" aria-label="Разделы">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground",
                  pathname.startsWith(link.href) && "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/booking"
            className={cn(buttonVariants({ size: "lg" }), "ml-auto hidden h-10 px-4 md:inline-flex")}
          >
            Запись
          </Link>
          <Sheet>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "outline", size: "icon" }), "ml-auto lg:hidden")}
              aria-label="Открыть меню"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Нұрлы көз</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-4" aria-label="Мобильное меню">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="border-b border-border py-3 text-base">
                    {link.label}
                  </Link>
                ))}
                <Link href="/services/ostryy-priem" className="border-b border-border py-3 text-base">
                  Острая жалоба
                </Link>
                {branches.map((branch) => (
                  <a key={branch.id} href={branch.phoneHref} className="py-2 text-sm text-muted-foreground">
                    {branch.city} · {branch.phone}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
