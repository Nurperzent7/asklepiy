import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 sm:px-6">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-4xl">Такой страницы нет</h1>
      <p className="mt-3 text-muted-foreground">
        Проверьте адрес или вернитесь к услугам и филиалам.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>
          На главную
        </Link>
        <Link
          href="/services"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-5")}
        >
          Услуги
        </Link>
      </div>
    </div>
  );
}
