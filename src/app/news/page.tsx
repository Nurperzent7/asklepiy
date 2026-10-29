import type { Metadata } from "next";
import { news } from "@/lib/az";

export const metadata: Metadata = { title: "Новости" };

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold">Новости</h1>
      <ul className="mt-8 divide-y divide-black/5 border-y border-black/5">
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
