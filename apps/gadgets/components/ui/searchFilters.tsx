"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Category = {
  name: string;
  href: string; // ex: "/smartphones"
};

interface FilterProps {
  categories?: Category[];
  brands?: string[];
  colors?: string[];
  showPrice?: boolean;
}

export default function SearchFilters({
  categories = [],
  brands = [],
  colors = [],
  showPrice = false,
}: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Convert searchParams into editable URLSearchParams
  const getParams = () => new URLSearchParams(searchParams.toString());

  // --------------------------
  // MULTI SELECT CHECKBOX HELPERS
  // --------------------------

  const toggleMultiValue = (key: string, value: string) => {
    const params = getParams();

    const current = params.get(key)?.split(",").filter(Boolean) || [];

    let updated: string[] = [];

    if (current.includes(value)) {
      updated = current.filter((v) => v !== value);
    } else {
      updated = [...current, value];
    }

    if (updated.length === 0) {
      params.delete(key);
    } else {
      params.set(key, updated.join(","));
    }

    router.push(`?${params.toString()}`);
  };

  // --------------------------
  // PRICE RANGE
  // --------------------------

  const updateFilter = (key: string, value: string) => {
    const params = getParams();

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  // --------------------------
  // CATEGORY NAVIGATION
  // --------------------------

  const goToCategory = (href: string) => {
    const params = getParams().toString();
    const url = params ? `${href}?${params}` : href;
    router.push(url);
  };

  return (
    <div className="space-y-6 p-4 w-60">
      {/* ---------------- CATEGORY ---------------- */}
      {categories.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Categories</h3>

          <div className="flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                className="cursor-pointer hover:font-medium text-left"
                onClick={() => goToCategory(cat.href)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- BRANDS ---------------- */}
      {brands.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Brands</h3>

          <div className="space-y-2">
            {brands.map((brand) => {
              const selectedBrands =
                searchParams.get("brand")?.split(",") || [];

              return (
                <label key={brand} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleMultiValue("brand", brand)}
                  />
                  {brand}
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* ---------------- COLORS ---------------- */}
      {colors.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Colors</h3>

          <div className="space-y-2">
            {colors.map((color) => {
              const selectedColors =
                searchParams.get("color")?.split(",") || [];

              return (
                <label key={color} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleMultiValue("color", color)}
                  />
                  {color}
                </label>
              );
            })}
          </div>
        </div>
      )}

      {/* ---------------- PRICE ---------------- */}
      {showPrice && (
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>

          <input
            type="number"
            placeholder="Min Price"
            className="border p-2 rounded w-full mb-2"
            onChange={(e) => updateFilter("minPrice", e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price"
            className="border p-2 rounded w-full"
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
