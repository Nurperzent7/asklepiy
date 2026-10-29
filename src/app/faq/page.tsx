import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generalFaqs, services } from "@/lib/clinic";

export const metadata: Metadata = { title: "Вопросы" };

export default function FaqPage() {
  const items = [
    ...generalFaqs,
    ...services.flatMap((service) =>
      service.faqs.map((faq) => ({ q: `${service.title}: ${faq.q}`, a: faq.a }))
    ),
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Вопросы</h1>
      <p className="mt-3 text-muted-foreground">
        Короткие ответы до звонка. Если симптома нет в списке — это не повод ставить себе диагноз по сайту.
      </p>
      <Accordion className="mt-8">
        {items.map((faq) => (
          <AccordionItem key={faq.q} value={faq.q}>
            <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
            <AccordionContent>
              <p>{faq.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
