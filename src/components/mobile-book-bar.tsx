"use client";

import Link from "next/link";
import { WaIcon } from "@/components/logo";

export function MobileBookBar() {
  return (
    <Link
      href="/#booking"
      className="fixed inset-x-4 bottom-4 z-40 flex h-12 items-center justify-center gap-2 rounded-full bg-[#25d366] text-sm font-bold text-white shadow-lg md:hidden"
    >
      <WaIcon />
      Запись
    </Link>
  );
}
