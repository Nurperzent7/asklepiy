import type { Metadata } from "next";
import { branches } from "@/lib/az";

export const metadata: Metadata = { title: "Отзывы" };

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold">Отзывы пациентов</h1>
      <p className="mt-3 text-[#4a5568]">Видеоотзывы публикуются в Instagram филиалов.</p>
      <ul className="mt-8 space-y-3">
        {branches.map((branch) => (
          <li key={branch.id}>
            <a href={branch.instagramUrl} className="text-lg font-semibold text-[#00a9c1]">
              {branch.name} · {branch.instagram}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
