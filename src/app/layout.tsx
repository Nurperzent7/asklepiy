import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { CityProvider } from "@/components/city-context";
import { CookieBar } from "@/components/cookie-bar";
import { MobileBookBar } from "@/components/mobile-book-bar";
import { SiteFooter } from "@/components/site-footer";
import { PageFade } from "@/components/page-fade";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "AsiaKoz — турецкая глазная клиника в Алматы, Актау и Шымкенте",
    template: "%s — AsiaKoz",
  },
  description:
    "Турецкие офтальмохирурги. Диагностика и лечение зрения в Алматы, Актау и Шымкенте.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${jakarta.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full bg-[#f3fafc] text-[#0c1222] antialiased [background-image:radial-gradient(ellipse_80%_42%_at_100%_-8%,rgba(0,169,193,0.14),transparent_52%),radial-gradient(ellipse_55%_36%_at_-8%_8%,rgba(186,230,240,0.7),transparent_48%)]">
        <CityProvider>
          <SiteHeader />
          <main className="pb-24 md:pb-0">
            <PageFade>{children}</PageFade>
          </main>
          <SiteFooter />
          <MobileBookBar />
          <CookieBar />
        </CityProvider>
      </body>
    </html>
  );
}
