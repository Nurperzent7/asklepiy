import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { branches, doctorBySlug, doctors, serviceBySlug } from "@/lib/clinic";
import { cn } from "cn";

type Params = { slug: string };

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: doctorBySlug(slug)?.name ?? "Врач" };
}

export default async function DoctorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const doctor = doctorBySlug(slug);
  if (!doctor) notFound();
  const city = doctor.cities[0];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm text-muted-foreground">
        <Link href="/doctors" className="hover:text-foreground">
          Врачи
        </Link>
      </p>
      <h1 className="mt-3 text-4xl">{doctor.name}</h1>
      <p className="mt-2 text-lg text-muted-foreground">{doctor.role}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {doctor.cities.map((id) => (
          <Badge key={id} variant="secondary">
            {branches.find((branch) => branch.id === id)?.city}
          </Badge>
        ))}
        <Badge variant="outline">{doctor.years} лет практики</Badge>
        {doctor.speaks.map((language) => (
          <Badge key={language} variant="outline">
            {language}
          </Badge>
        ))}
      </div>
      <p className="mt-6 leading-relaxed">{doctor.bio}</p>
      <p className="mt-4 text-sm text-muted-foreground">{doctor.focus}</p>
      <h2 className="mt-8 text-2xl">Направления</h2>
      <ul className="mt-3 space-y-2">
        {doctor.services.map((slug) => {
          const service = serviceBySlug(slug);
          if (!service) return null;
          return (
            <li key={slug}>
              <Link href={`/services/${slug}`} className="hover:underline">
                {service.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        href={`/booking?city=${city}&doctor=${doctor.slug}`}
        className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-5")}
      >
        Заявка к этому врачу
      </Link>
    </article>
  );
}
