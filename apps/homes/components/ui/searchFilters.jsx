"use client";
import React, { useContext, useState } from "react";
import { ListingsContext } from "@/components/context/listingsContext";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import FilterDropdown from "./filterDropdown";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const PAGES = [
  { label: "All listings", href: "/listings", type: "listings" },
  { label: "For rent", href: "/rentals", type: "rent" },
  { label: "For sale", href: "/sales", type: "sale" },
  { label: "Shortlet", href: "/shortlets", type: "shortlet" },
];

export default function SearchFilters({ fields = [] }) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    fetchListings,
    setPageType,
  } = useContext(ListingsContext);

  const [pageOpen, setPageOpen] = useState(false);
  const currentPage =
    PAGES.find((p) => pathname === p.href) ||
    PAGES.find((p) => pathname.startsWith(p.href));

  async function handleSearch(e) {
    e.preventDefault();
    const params = {
      address: searchQuery,
      ...filters,
      listing_type: currentPage?.type,
    };
    const query = new URLSearchParams(params).toString();
    router.push(`${currentPage?.href}?${query}`);
    setPageType(currentPage?.type);
    await fetchListings(params);
  }

  return (
    <div className="sticky top-0 z-40 bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-wrap items-center gap-3">
        {/* Page Selector */}
        <div className="relative">
          <button
            onClick={() => setPageOpen(!pageOpen)}
            className="flex items-center gap-2  bg-[#F4F4F4]  rounded-md px-4 py-2 hover:bg-gray-50"
          >
            <span>{currentPage?.label || "Select page"}</span>
            <FiChevronDown />
          </button>

          {pageOpen && (
            <div className="absolute left-0 mt-2 w-48  bg-[#F4F4F4] rounded-md shadow z-50">
              {PAGES.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="block px-4 py-2 hover:bg-gray-50"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center  rounded-md px-3 py-2  bg-[#F4F4F4] flex-1 max-w-xl"
        >
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by address or keyword"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none"
          />
        </form>

        {/* Filters */}
        <div className="flex items-center gap-2">
          {fields.map((f) => (
            <FilterDropdown
              key={f.key}
              label={f.label}
              options={f.options}
              value={filters[f.key]}
              onChange={(val) =>
                setFilters((prev) => ({ ...prev, [f.key]: val }))
              }
            />
          ))}

          <button
            onClick={() => setFilters({})}
            className=" px-3 py-2  rounded-md bg-primary hover:bg-primary/80 text-white cursor-pointer "
          >
            Reset
          </button>

          <button
            type="submit"
            onClick={handleSearch}
            className="bg-secondary text-black rounded-md px-4 py-2 hover:opacity-95"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
