"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Category = {
  name: string;
  href: string;
};

interface FilterProps {
  categories?: Category[];
  brands?: string[];
  colors?: string[];
  showPrice?: boolean;
  onClose?: () => void;
}

export default function SearchFilters({
  categories = [],
  brands = [],
  colors = [],
  showPrice = false,
  onClose,
}: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const getParams = () => new URLSearchParams(searchParams.toString());

  // --------------------------
  // MULTI SELECT
  // --------------------------
  const toggleMultiValue = (key: string, value: string) => {
    const params = getParams();
    const current = params.get(key)?.split(",").filter(Boolean) || [];

    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    if (updated.length === 0) params.delete(key);
    else params.set(key, updated.join(","));

    router.push(`?${params.toString()}`);
  };

  // --------------------------
  // PRICE RANGE
  // --------------------------
  const updateFilter = (key: string, value: string) => {
    const params = getParams();
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`?${params.toString()}`);
  };

  // --------------------------
  // CATEGORY NAV
  // --------------------------
  const goToCategory = (href: string) => {
    const params = getParams().toString();
    router.push(params ? `${href}?${params}` : href);
    onClose?.();
  };

  return (
    <>
      {/* BACKDROP (mobile + tablet) */}
      {onClose && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* DRAWER / SIDEBAR */}
      <aside
        className="
          fixed bottom-0 inset-x-0 z-50
          bg-white rounded-t-2xl
          max-h-[85vh] md:max-h-full overflow-y-auto
         px-4  space-y-6
          transition-transform duration-300

          md:left-0 md:top-0 md:bottom-0 md:w-72 md:rounded-none
          lg:static lg:w-60 lg:max-h-none lg:rounded-none lg:shadow-none lg:translate-y-0 pb-4
        "
      >
        {/* HEADER (mobile + tablet) */}
        <div className="flex justify-between items-center sticky top-0 bg-white py-4 z-10 lg:hidden ">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button onClick={onClose} className="text-sm font-medium">
            Close
          </button>
        </div>

        {/* ---------------- CATEGORY ---------------- */}
        {categories.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className="text-left hover:font-medium"
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
            <h3 className="font-semibold mb-3">Brands</h3>
            <div className="space-y-2">
              {brands.map((brand) => {
                const selected = searchParams.get("brand")?.split(",") || [];

                return (
                  <label
                    key={brand}
                    className="flex items-center gap-3 text-sm py-1 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(brand)}
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
            <h3 className="font-semibold mb-3">Colors</h3>
            <div className="space-y-2">
              {colors.map((color) => {
                const selected = searchParams.get("color")?.split(",") || [];

                return (
                  <label
                    key={color}
                    className="flex items-center gap-3 text-sm py-1 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(color)}
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
            <h3 className="font-semibold mb-3">Price Range</h3>
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
      </aside>
    </>
  );
}
