import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking-wizard";

export const metadata: Metadata = { title: "Запись" };

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; service?: string; doctor?: string }>;
}) {
  const params = await searchParams;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Запись</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Филиал, направление и удобное время. Окно держим, пока администратор не перезвонит и не подтвердит.
      </p>
      <div className="mt-8">
        <BookingWizard
          initialCity={params.city}
          initialService={params.service}
          initialDoctor={params.doctor}
        />
      </div>
    </div>
  );
}
