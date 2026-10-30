"use client";

import { useEffect, useState } from "react";

export function CookieBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(window.localStorage.getItem("az-cookie") !== "1");
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-x-3 bottom-24 z-50 md:inset-x-auto md:right-5 md:bottom-5 md:w-[380px]">
      <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 px-4 py-3 text-sm text-[#0c1222] shadow-[0_16px_40px_rgba(12,18,34,0.14)] backdrop-blur">
        <p className="leading-snug">Cookie помогают сайту работать корректно.</p>
        <button
          type="button"
          className="shrink-0 rounded-full bg-[#3559b7] px-3 py-1.5 text-xs font-bold text-white"
          onClick={() => {
            window.localStorage.setItem("az-cookie", "1");
            setOpen(false);
          }}
        >
          Принять
        </button>
      </div>
    </div>
  );
}
