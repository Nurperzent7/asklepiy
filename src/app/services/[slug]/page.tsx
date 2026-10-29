import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceCards, waLink } from "@/lib/az";

type Params = { slug: string };

export function generateStaticParams() {
  return serviceCards.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: serviceCards.find((service) => service.slug === slug)?.title ?? "Услуга" };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = serviceCards.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/services" className="text-sm text-[#4a5568]">
        Услуги
      </Link>
      <h1 className="mt-3 text-4xl font-extrabold">{service.title}</h1>
      <p className="mt-4 text-lg text-[#3d4a5c]">{service.text}</p>
      <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
        Метод и стоимость врач называет после осмотра. Запись — через WhatsApp выбранного филиала.
      </p>
      <a
        href={waLink("almaty", `Услуга: ${service.title}`)}
        className="mt-8 inline-flex h-12 items-center rounded-full bg-[#00a9c1] px-5 text-sm font-bold text-white"
      >
        Записаться в WhatsApp
      </a>
    </article>
  );
}
