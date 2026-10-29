"use client";

import { createContext, useContext, useState } from "react";
import type { CityId } from "@/lib/az";

type Lang = "ru" | "kk";

const CityContext = createContext<{
  city: CityId;
  setCity: (city: CityId) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);

export function CityProvider({ children }: { children: React.ReactNode }) {
  const [city, setCity] = useState<CityId>("almaty");
  const [lang, setLang] = useState<Lang>("ru");
  return <CityContext.Provider value={{ city, setCity, lang, setLang }}>{children}</CityContext.Provider>;
}

export function useClinic() {
  const value = useContext(CityContext);
  if (!value) throw new Error("useClinic outside provider");
  return value;
}
