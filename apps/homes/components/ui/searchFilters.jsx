"use client";
import React, { useContext, useState } from "react";
import { ListingsContext } from "@/components/context/listingsContext";
import FilterDropdown from "./filterDropdown";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PAGES = [
  { label: "For rent", href: "/listings/rentals" },
  { label: "For sale", href: "/listings/sales" },
  { label: "Shortlet", href: "/listings/shortlets" },
];

export default function SearchFilters({
  fields = [],
  showFiltersButton = true,
}) {
  const { searchQuery, setSearchQuery, filters, updateFilter, resetFilters } =
    useContext(ListingsContext);
  const pathname = usePathname() || "";
  const [pageOpen, setPageOpen] = useState(false);

  const currentPage =
    PAGES.find((p) => pathname.includes(p.href.replace("/listings", ""))) ||
    PAGES[0];

  return (
    <div className="sticky top-0 z-40 bg-white py-4 border-b shadow-sm">
      <div className="container mx-auto px-4 flex items-center gap-3">
        {/* Left: Page selector */}
        <div className="relative">
          <button
            onClick={() => setPageOpen((s) => !s)}
            className="flex items-center gap-2 border rounded-md px-4 py-2 bg-white hover:bg-gray-50"
          >
            <span>{currentPage.label}</span>
            <FiChevronDown />
          </button>

          {pageOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow z-50">
              <ul>
                {PAGES.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="block px-4 py-2 hover:bg-gray-50"
                      onClick={() => setPageOpen(false)}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex items-center border rounded-md px-3 py-2 bg-white flex-1 max-w-xl"
        >
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by PID or address"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none"
          />
        </form>

        {/* Filters area (render dynamic fields) */}
        <div className="flex items-center gap-2">
          {fields.map((f) => (
            <FilterDropdown
              key={f.key}
              label={f.label}
              options={f.options}
              multi={!!f.multi}
              value={filters[f.key]}
              onChange={(val) => updateFilter(f.key, val)}
            />
          ))}

          <button
            onClick={() => resetFilters()}
            className="text-sm px-3 py-2 border rounded-md bg-white hover:bg-gray-50"
            title="Reset filters"
          >
            Reset
          </button>

          {showFiltersButton && (
            <button className="flex items-center gap-2 bg-primary text-white rounded-md px-4 py-2 hover:opacity-95">
              <FiFilter /> Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
