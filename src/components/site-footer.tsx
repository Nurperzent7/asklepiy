import Link from "next/link";
import { branches } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-medium tracking-tight">Нұрлы көз</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Взрослые и дети. Алматы, Актау, Шымкент. Цену операции называем после осмотра.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-wide text-primary-foreground/60 uppercase">Филиалы</p>
          <ul className="mt-3 space-y-3 text-sm">
            {branches.map((branch) => (
              <li key={branch.id}>
                <Link href={`/branches/${branch.id}`} className="hover:underline">
                  {branch.city}
                </Link>
                <span className="block text-primary-foreground/70">{branch.address}</span>
                <a href={branch.phoneHref} className="tabular-nums text-primary-foreground/70 hover:underline">
                  {branch.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-wide text-primary-foreground/60 uppercase">Пациенту</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/booking" className="hover:underline">
                Запись на приём
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Услуги и цены
              </Link>
            </li>
            <li>
              <Link href="/services/ostryy-priem" className="hover:underline">
                Острая жалоба
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                Вопросы
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-relaxed text-primary-foreground/60 sm:px-6">
          Образец сайта, не лицензированная клиника и не AsiaKoz. Тексты не заменяют осмотр. При травме или
          резкой потере зрения звоните 103.
        </p>
      </div>
    </footer>
  );
}
