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
    <footer className="border-t border-black/[0.04] bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_0.8fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4a5568]">
            AsiaKoz — офтальмологические клиники в Алматы, Актау и Шымкенте.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {branches.map((branch) => (
              <a
                key={branch.id}
                href={branch.instagramUrl}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm text-[#0c1222]"
              >
                <span className="size-4 rounded bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" />
                {branch.instagram}
              </a>
            ))}
          </div>
        </div>
        <ul className="space-y-2 text-sm text-[#4a5568] md:justify-self-end">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="hover:text-[#0c1222]">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-black/[0.04] px-4 py-5 text-center text-xs leading-relaxed text-[#8b95a5]">
        <p>Точный диагноз и метод лечения определяет врач после обследования.</p>
        <p className="mt-1">© {new Date().getFullYear()} ТОО «ASIA KOZ»</p>
      </div>
    </footer>
  );
}
