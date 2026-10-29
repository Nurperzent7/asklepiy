import type { Metadata } from "next";
import { DoctorBrowser } from "@/components/doctor-browser";

export const metadata: Metadata = { title: "Врачи" };

export default async function DoctorsPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const { city } = await searchParams;
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Врачи</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Сначала город, потом направление. Если врача нет — список пустой, без заглушки.
      </p>
      <div className="mt-8">
        <DoctorBrowser initialCity={city} />
      </div>
    </div>
  );
}
