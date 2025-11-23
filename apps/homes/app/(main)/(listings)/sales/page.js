"use client";
import React, { useEffect, useState } from "react";
import { getAllHomes } from "@/utils/calls";
import SearchFilters from "@/components/ui/searchFilters";
import ListingCard from "@/components/ui/listingCard";
import ListingCardSkeleton from "@/components/ui/listingCardSkeleton";
import { FILTER_FIELDS } from "@/lib/filtersConfig";
import { useSearchParams } from "next/navigation";

export default function SalesPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  async function fetchListings(params = {}) {
    setLoading(true);
    try {
      const res = await getAllHomes({
        listing_type: "sale", // page type
        ...params,
      });
      setListings(res?.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch listings:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    fetchListings(params);
  }, [searchParams]);

  return (
    <>
      <SearchFilters fields={FILTER_FIELDS.sales} />
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 container">
        {loading ? (
          // Skeletons while loading
          Array.from({ length: 8 }).map((_, i) => (
            <ListingCardSkeleton key={i} />
          ))
        ) : listings.length > 0 ? (
          // Listings
          listings.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))
        ) : (
          // No data fallback
          <p className="col-span-full text-center text-gray-500">
            No listings found.
          </p>
        )}
      </div>
    </>
  );
}
