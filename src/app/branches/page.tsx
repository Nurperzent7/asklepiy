import type { Metadata } from "next";
import Link from "next/link";
import { branches, servicesForCity } from "@/lib/clinic";

export const metadata: Metadata = { title: "Филиалы" };

export default function BranchesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Филиалы</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Адреса демонстрационные. Часы разные: в Шымкенте суббота полная, в Алматы и Актау — укороченная.
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {branches.map((branch) => (
          <li key={branch.id}>
            <Link
              href={`/branches/${branch.id}`}
              className="block h-full rounded-2xl bg-card p-5 ring-1 ring-foreground/10 hover:ring-primary/40"
            >
              <span className="text-2xl">{branch.city}</span>
              <span className="mt-2 block text-sm text-muted-foreground">{branch.address}</span>
              <span className="mt-3 block text-sm">{branch.hours}</span>
              <span className="mt-3 block text-sm text-muted-foreground">
                {servicesForCity(branch.id).length} направлений
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
