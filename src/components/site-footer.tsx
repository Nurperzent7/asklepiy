import Link from "next/link";
import { branches } from "@/lib/az";
import { Logo } from "@/components/logo";

const links = [
  ["/about", "О клинике"],
  ["/services", "Услуги"],
  ["/doctors", "Врачи"],
  ["/reviews", "Отзывы"],
  ["/news", "Новости"],
  ["/contacts", "Контакты"],
  ["/privacy", "Политика конфиденциальности"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#071824] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#b7c9d4]">
            AsiaKoz — офтальмологические клиники в Алматы, Актау и Шымкенте.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {branches.map((branch) => (
              <a
                key={branch.id}
                href={branch.instagramUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white transition-colors hover:border-[#00a9c1]/50 hover:bg-white/10"
              >
                <span className="size-4 rounded bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" />
                {branch.instagram}
              </a>
            ))}
          </div>
        </div>
        <ul className="space-y-2.5 text-sm text-[#b7c9d4] md:justify-self-end">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="transition-colors hover:text-white">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs leading-relaxed text-[#8aa0aa]">
        <p>Точный диагноз и метод лечения определяет врач после обследования.</p>
        <p className="mt-1">© {new Date().getFullYear()} ТОО «ASIA KOZ»</p>
      </div>
    </footer>
  );
}
