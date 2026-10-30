import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "О клинике" };

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <PageIntro
        kicker="СЕТЬ КЛИНИК"
        title="О клинике"
        text="Асклепий — сеть офтальмологических клиник в Алматы, Актау и Шымкенте. Приём ведут офтальмохирурги: диагностика, лазерная коррекция, катаракта, глаукома, сетчатка и детское зрение."
      />
      <p className="leading-relaxed text-[#4a5568]">
        Запись идёт через WhatsApp филиала. Колл-центр подсказывает направление, ориентир по цене и время.
        Точный диагноз и метод лечения определяет врач после обследования.
      </p>
    </article>
  );
}
