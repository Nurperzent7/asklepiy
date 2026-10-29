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
import { Mark } from "@/components/mark";

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
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto hidden max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs text-muted-foreground sm:flex sm:px-6">
        <p>Три города · вилка цен до визита · окно выбираете сами</p>
        <p className="truncate">
          {branches.map((branch) => `${branch.city} ${branch.phone}`).join(" · ")}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Mark />
          <span className="text-lg leading-none">
            Nurly<span className="text-primary">Koz</span>
          </span>
        </Link>
        <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Разделы">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                pathname.startsWith(link.href) && "bg-muted text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/booking"
            className={cn(buttonVariants({ size: "lg" }), "hidden h-10 px-4 md:inline-flex")}
          >
            Записаться
          </Link>
          <Sheet>
            <SheetTrigger
              className={cn(buttonVariants({ variant: "outline", size: "icon" }), "lg:hidden")}
              aria-label="Открыть меню"
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Разделы</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4" aria-label="Мобильное меню">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-base hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/services/ostryy-priem" className="rounded-lg px-3 py-3 text-base text-destructive hover:bg-muted">
                  Острый приём
                </Link>
                <Link
                  href="/booking"
                  className={cn(buttonVariants({ size: "lg" }), "mt-3 h-11")}
                >
                  Записаться
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
