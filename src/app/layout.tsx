import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileBookBar } from "@/components/mobile-book-bar";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: {
    default: "Нұрлы көз — глазная клиника",
    template: "%s — Нұрлы көз",
  },
  description:
    "Глазная клиника в Алматы, Актау и Шымкенте: диагностика, лазер, катаракта, глаукома и детский приём.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${onest.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileBookBar />
      </body>
    </html>
  );
}
