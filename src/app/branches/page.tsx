import type { Metadata } from "next";
import Link from "next/link";
import { branches, servicesForCity } from "@/lib/clinic";

export const metadata: Metadata = { title: "Филиалы" };

export default function BranchesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Филиалы</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        В Шымкенте суббота полный день. В Алматы и Актау — до обеда.
      </p>
      <ul className="mt-10 divide-y divide-border border-y border-border">
        {branches.map((branch) => (
          <li key={branch.id}>
            <Link href={`/branches/${branch.id}`} className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline">
              <span className="text-2xl">{branch.city}</span>
              <span>
                <span className="block">{branch.address}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{branch.hours}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {servicesForCity(branch.id).length} направлений · {branch.note}
                </span>
              </span>
              <span className="tabular-nums">{branch.phone}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
