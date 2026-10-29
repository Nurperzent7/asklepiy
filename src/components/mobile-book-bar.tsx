"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function MobileBookBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/booking")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Link
          href="/services/ostryy-priem"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 flex-1")}
        >
          Срочно
        </Link>
        <Link href="/booking" className={cn(buttonVariants({ size: "lg" }), "h-11 flex-[1.4]")}>
          Записаться
        </Link>
      </div>
    </div>
  );
}
