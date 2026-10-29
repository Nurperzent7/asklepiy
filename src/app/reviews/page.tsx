import type { Metadata } from "next";
import { ReviewList } from "@/components/review-list";

export const metadata: Metadata = { title: "Отзывы" };

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl">Отзывы</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Город, что делали и совпала ли цена с тем, что сказали на осмотре.
      </p>
      <div className="mt-8">
        <ReviewList />
      </div>
    </div>
  );
}
