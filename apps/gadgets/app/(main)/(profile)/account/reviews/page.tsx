"use client";

import { useEffect, useState } from "react";
import { getMyReviews } from "@/lib/calls/userCalls";
import Image from "next/image";

type Review = {
  id: number;
  rating: number;
  title: string;
  review: string;
  created_at: string;
  product: {
    title: string;
    cover_photo: {
      url: string;
    };
  };
};

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await getMyReviews();
        setReviews(res?.data?.data || res?.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p className="text-center">Loading reviews...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Reviews</h1>

      {reviews.length ? (
        reviews.map((r) => (
          <div key={r.id} className="flex gap-4 p-4  rounded-xl bg-white">
            <div className="relative w-24 h-24">
              <Image
                src={r.product.cover_photo.url}
                alt={r.product.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-bold">{r.product.title}</h3>

              <div className="text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < r.rating ? "★" : "☆"}</span>
                ))}
              </div>

              <p className="font-semibold">{r.title}</p>
              <p className="text-sm text-gray-600">{r.review}</p>

              <p className="text-xs text-gray-400 mt-1">
                {new Date(r.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>You haven't reviewed any products yet.</p>
      )}
    </div>
  );
}
