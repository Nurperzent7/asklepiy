import type { Metadata } from "next";
import { Literata, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileBookBar } from "@/components/mobile-book-bar";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const literata = Literata({
  subsets: ["latin", "cyrillic"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: {
    default: "NurlyKoz — глазная клиника",
    template: "%s — NurlyKoz",
  },
  description:
    "Демонстрационный сайт сети глазных клиник: диагностика, лазер, катаракта и запись на приём в Алматы, Актау и Шымкенте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${literata.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileBookBar />
      </body>
    </html>
  );
}
