import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { doctors, waLink } from "@/lib/az";

type Params = { slug: string };

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: doctors.find((doctor) => doctor.slug === slug)?.name ?? "Врач" };
}

export default async function DoctorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/doctors" className="text-sm font-semibold text-[#00a9c1]">
        ← Врачи
      </Link>
      <div className="mt-4">
        <PageIntro kicker={doctor.cities} title={doctor.name} text={doctor.role} />
      </div>
      <p className="mt-2 text-[#4a5568]">{doctor.line}</p>
      <p className="mt-4 leading-relaxed">{doctor.text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {doctor.chips.map((chip) => (
          <span key={chip} className="rounded-full bg-[#f3f7f8] px-3 py-1 text-sm font-semibold">
            {chip}
          </span>
        ))}
      </div>
      <a
        href={waLink("almaty", `Врач: ${doctor.name}`)}
        className="az-btn mt-8 inline-flex h-12 items-center rounded-full bg-[#00a9c1] px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,169,193,0.28)]"
      >
        Записаться к врачу
      </a>
    </article>
  );
}
