import type { Metadata } from "next";

export const metadata: Metadata = { title: "Политика конфиденциальности" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-4xl font-extrabold">Политика конфиденциальности</h1>
      <p className="mt-4 leading-relaxed text-[#4a5568]">
        Номер телефона и текст сообщения уходят в WhatsApp выбранного филиала, только если вы сами нажимаете
        кнопку записи. Сайт не хранит заявку на сервере. Cookie запоминает, что вы закрыли уведомление.
      </p>
    </article>
  );
}
