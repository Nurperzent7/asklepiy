import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { branches } from "@/lib/az";

export const metadata: Metadata = { title: "Отзывы" };

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <PageIntro kicker="INSTAGRAM" title="Отзывы пациентов" text="Видеоотзывы публикуются в Instagram филиалов." />
      <ul className="space-y-3">
        {branches.map((branch) => (
          <li key={branch.id}>
            <a
              href={branch.instagramUrl}
              className="flex items-center justify-between rounded-2xl border border-white bg-white/85 px-5 py-4 shadow-[0_12px_30px_rgba(12,40,60,0.05)]"
            >
              <span>
                <span className="block font-bold">{branch.name}</span>
                <span className="text-sm text-[#4a5568]">{branch.instagram}</span>
              </span>
              <span className="text-sm font-semibold text-[#00a9c1]">Instagram →</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
