import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { news } from "@/lib/az";

export const metadata: Metadata = { title: "Новости" };

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageIntro kicker="КЛИНИКА" title="Новости" />
      <ul className="divide-y divide-black/5 rounded-[24px] border border-white bg-white/80 px-5 shadow-[0_16px_40px_rgba(12,40,60,0.05)]">
        {news.map((item) => (
          <li key={item.title} className="py-5">
            <p className="text-xs font-bold tracking-wide text-[#00a9c1] uppercase">{item.date}</p>
            <p className="mt-1 text-lg font-bold">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
