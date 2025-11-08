"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchHomes } from "@/utils/calls";
import HomeCard from "@/components/ui/homeCard"; // assuming you already have this
import HomeCardSkeleton from "@/components/ui/homeCardSkeleton";

export default function Rentals() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchHomes() {
      setLoading(true);
      setError(null);

      try {
        const filters = { type: "rentals" };

        searchParams.forEach((value, key) => {
          filters[key] = value;
        });

        const res = await searchHomes(filters);
        setHomes(res?.data || []);
      } catch (err) {
        setError("Failed to load homes.");
      } finally {
        setLoading(false);
      }
    }

    fetchHomes();
  }, [searchParams]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">Rental Listings</h1>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <HomeCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : homes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homes.map((home) => (
            <HomeCard key={home.id} home={home} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No rentals found.</p>
      )}
    </div>
  );
}
