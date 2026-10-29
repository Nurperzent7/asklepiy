import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Политика конфиденциальности" };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <PageIntro kicker="ДОКУМЕНТЫ" title="Политика конфиденциальности" />
      <p className="mt-4 leading-relaxed text-[#4a5568]">
        Номер телефона и текст сообщения уходят в WhatsApp выбранного филиала, только если вы сами нажимаете
        кнопку записи. Сайт не хранит заявку на сервере. Cookie запоминает, что вы закрыли уведомление.
      </p>
    </article>
  );
}
