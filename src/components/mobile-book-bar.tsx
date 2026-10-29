"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileBookBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/booking")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background md:hidden">
      <Link href="/services/ostryy-priem" className="py-3.5 text-center text-sm">
        Острая жалоба
      </Link>
      <Link href="/booking" className="bg-primary py-3.5 text-center text-sm text-primary-foreground">
        Запись
      </Link>
    </div>
  );
}
