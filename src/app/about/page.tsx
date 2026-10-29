import type { Metadata } from "next";

export const metadata: Metadata = { title: "О клинике" };

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold">О клинике</h1>
      <p className="mt-4 text-lg leading-relaxed text-[#3d4a5c]">
        AsiaKoz — сеть офтальмологических клиник в Алматы, Актау и Шымкенте. Приём ведут турецкие и местные
        офтальмохирурги: диагностика, лазерная коррекция, катаракта, глаукома, сетчатка и детское зрение.
      </p>
      <p className="mt-4 leading-relaxed text-[#4a5568]">
        Запись идёт через WhatsApp филиала. Колл-центр подсказывает направление, ориентир по цене и время.
        Точный диагноз и метод лечения определяет врач после обследования.
      </p>
    </article>
  );
}
