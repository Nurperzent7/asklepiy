import Link from "next/link";
import { branches } from "@/lib/clinic";
import { Mark } from "@/components/mark";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Mark />
            <span className="text-lg">NurlyKoz</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Демонстрационный сайт глазной сети. Это не AsiaKoz и не лицензированная клиника.
            Тексты не заменяют очный осмотр.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Филиалы в макете</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {branches.map((branch) => (
              <li key={branch.id}>
                <Link href={`/branches/${branch.id}`} className="hover:text-foreground">
                  {branch.city}
                </Link>
                <span className="block">{branch.address}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Пациенту</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/booking" className="text-muted-foreground hover:text-foreground">
                Заявка на приём
              </Link>
            </li>
            <li>
              <Link href="/services/ostryy-priem" className="text-muted-foreground hover:text-foreground">
                Острые симптомы
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                Вопросы
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
