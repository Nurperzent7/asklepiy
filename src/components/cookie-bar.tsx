"use client";

import { useEffect, useState } from "react";

export function CookieBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(window.localStorage.getItem("az-cookie") !== "1");
  }, []);
  if (!open) return null;
  return (
    <div className="fixed inset-x-0 bottom-20 z-50 border-t border-black/5 bg-white px-4 py-3 text-sm text-[#0c1222] md:bottom-0">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>Мы используем cookie для корректной работы сайта и улучшения сервиса.</p>
        <button
          type="button"
          className="font-semibold text-[#00a9c1]"
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
