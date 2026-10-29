import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import {
  branches,
  cityById,
  doctors,
  priceLabel,
  servicesForCity,
  type CityId,
} from "@/lib/clinic";
import { cn } from "cn";

type Params = { city: string };

export function generateStaticParams() {
  return branches.map((branch) => ({ city: branch.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city } = await params;
  return { title: cityById(city)?.city ?? "Филиал" };
}

export default async function BranchPage({ params }: { params: Promise<Params> }) {
  const { city } = await params;
  const branch = cityById(city);
  if (!branch) notFound();
  const cityServices = servicesForCity(branch.id);
  const people = doctors.filter((doctor) => doctor.cities.includes(branch.id as CityId));

  return (
    <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm text-muted-foreground">
        <Link href="/branches" className="hover:text-foreground">
          Филиалы
        </Link>
      </p>
      <h1 className="mt-3 text-4xl">{branch.city}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{branch.note}</p>
      <dl className="mt-6 grid gap-4 rounded-2xl bg-card p-5 ring-1 ring-foreground/10 sm:grid-cols-3">
        <div>
          <dt className="text-xs text-muted-foreground">Адрес</dt>
          <dd className="mt-1">{branch.address}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Часы</dt>
          <dd className="mt-1">{branch.hours}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Телефон макета</dt>
          <dd className="mt-1">
            <a href={branch.phoneHref} className="hover:underline">
              {branch.phone}
            </a>
          </dd>
        </div>
      </dl>
      <Link
        href={`/booking?city=${branch.id}`}
        className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}
      >
        Заявка в {branch.city}
      </Link>
      <h2 className="mt-12 text-3xl">Что есть в этом городе</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {cityServices.map((service) => (
          <li key={service.slug}>
            <Link href={`/services/${service.slug}`} className="block rounded-xl bg-card p-4 ring-1 ring-foreground/10">
              <span className="font-medium">{service.title}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{priceLabel(service)}</span>
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 text-3xl">Кто принимает</h2>
      {people.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">Врачей для этого филиала в макете нет.</p>
      ) : (
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {people.map((doctor) => (
            <li key={doctor.slug}>
              <Link href={`/doctors/${doctor.slug}`} className="block rounded-xl bg-card p-4 ring-1 ring-foreground/10">
                <span className="text-lg">{doctor.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{doctor.role}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
