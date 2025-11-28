"use client";
import React, { useEffect, useState } from "react";
import { getAllHomes } from "@/utils/calls";
import SearchFilters from "@/components/ui/searchFilters";
import ListingCard from "@/components/ui/listingCard";
import ListingCardSkeleton from "@/components/ui/listingCardSkeleton";
import { FILTER_FIELDS } from "@/lib/filtersConfig";
import { useSearchParams } from "next/navigation";

export default function ListingsPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const searchParams = useSearchParams();

  async function fetchListings(params = {}, page = 1) {
    setLoading(true);
    try {
      const res = await getAllHomes({
        page,
        ...params, // no listing_type
      });

      setListings(res?.data || []);
      setTotalPages(res?.meta?.last_page || 1);
    } catch (err) {
      console.error("❌ Failed to fetch listings:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    fetchListings(params, currentPage);
  }, [searchParams, currentPage]);

  return (
    <div className="container">
      <SearchFilters fields={FILTER_FIELDS.listings} />

      {/* Listings Grid */}
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <ListingCardSkeleton key={i} />
          ))
        ) : listings.length > 0 ? (
          listings.map((listing) => (
            <ListingCard key={listing.slug || listing.id} listing={listing} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No listings found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? "text-gray-400 border-gray-300"
                : "text-gray-700 border-gray-400 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-600">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300"
                : "text-gray-700 border-gray-400 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
