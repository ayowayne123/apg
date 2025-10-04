"use client";
import { useState } from "react";
import React from "react";
import SearchFilters from "@/components/ui/searchFilters";
import ListingCard from "@/components/ui/listingCard";
import house from "@/public/images/house.jpg";

const rentals = [
  {
    slug: "the-grand-haven",
    title: "The Grand Haven",
    price: "NGN 500,000",
    location: "Toyin Street, Ikoyi, Lagos",
    beds: 3,
    baths: 3,
    size: "740m²",
    image: house,
  },
  {
    slug: "sunset-villa",
    title: "Sunset Villa",
    price: "NGN 850,000",
    location: "Banana Island, Lagos",
    beds: 4,
    baths: 4,
    size: "950m²",
    image: house,
  },
  {
    slug: "lagoon-heights",
    title: "Lagoon Heights",
    price: "NGN 1,200,000",
    location: "Victoria Island, Lagos",
    beds: 5,
    baths: 5,
    size: "1200m²",
    image: house,
  },
  {
    slug: "oakwood-residence",
    title: "Oakwood Residence",
    price: "NGN 700,000",
    location: "Odutola Str, Egbeda, Lagos",
    beds: 3,
    baths: 3,
    size: "800m²",
    image: house,
  },

  {
    slug: "emerald-vista",
    title: "Emerald Vista",
    price: "NGN 950,000",
    location: "Chevron Drive, Lekki, Lagos",
    beds: 4,
    baths: 4,
    size: "1,050m²",
    image: house,
  },

  {
    slug: "palms-residence",
    title: "Palms Residence",
    price: "NGN 600,000",
    location: "Ago Palace Way, Okota, Lagos",
    beds: 2,
    baths: 2,
    size: "680m²",
    image: house,
  },

  {
    slug: "citrine-court",
    title: "Citrine Court",
    price: "NGN 1,400,000",
    location: "Admiralty Way, Lekki Phase 1, Lagos",
    beds: 5,
    baths: 6,
    size: "1,300m²",
    image: house,
  },
];

export default function RentalsPage() {
  const [results, setResults] = useState(rentals);

  const handleSearch = (query) => {
    const filtered = rentals.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  const handleFilter = (key, value) => {
    const filtered = rentals.filter((item) =>
      item[key]?.toString().toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };
  return (
    <div className="  py-6">
      {/* Filters */}
      <SearchFilters onSearch={handleSearch} onFilter={handleFilter} />

      {/* Listings */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container">
        {results.map((listing) => (
          <ListingCard key={listing.slug} listing={listing} />
        ))}
      </div>
    </div>
  );
}
