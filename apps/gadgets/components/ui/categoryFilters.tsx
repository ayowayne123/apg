"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import FilterCheckbox from "./filterCheckBox";
import { FilterFlags } from "@/app/config/categories";

type Category = {
  name: string;
  href: string;
};

type Props = {
  enabled: FilterFlags;
  brands?: string[];
  colors?: string[];
  storageOptions?: string[];
  ramOptions?: string[];
  sizeOptions?: string[];
  conditionOptions?: string[];
  connectivityOptions?: string[];
  compatibilityOptions?: string[];
  powerOptions?: string[];
  materialOptions?: string[];
  categories?: Category[];
};

export default function SearchFilters({
  enabled,
  categories = [],
  brands = [],
  colors = [],
  storageOptions = [],
  ramOptions = [],
  sizeOptions = [],
  conditionOptions = [],
  connectivityOptions = [],
  compatibilityOptions = [],
  powerOptions = [],
  materialOptions = [],
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const getParams = () => new URLSearchParams(searchParams.toString());

  const goToCategory = (href: string) => {
    const params = getParams().toString();
    const url = params ? `${href}?${params}` : href;
    router.push(url);
  };

  return (
    <aside className="w-64 space-y-6 p-4">
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

      {enabled.brands && (
        <FilterCheckbox title="Brands" paramKey="brand" options={brands} />
      )}

      {enabled.colors && (
        <FilterCheckbox title="Colors" paramKey="color" options={colors} />
      )}

      {enabled.storage && (
        <FilterCheckbox
          title="Storage"
          paramKey="storage"
          options={storageOptions}
        />
      )}

      {enabled.ram && (
        <FilterCheckbox title="RAM" paramKey="ram" options={ramOptions} />
      )}

      {enabled.size && (
        <FilterCheckbox title="Size" paramKey="size" options={sizeOptions} />
      )}
      {enabled.connectivity && (
        <FilterCheckbox
          title="Connectivity"
          paramKey="connectivity"
          options={connectivityOptions}
        />
      )}

      {enabled.compatibility && (
        <FilterCheckbox
          title="Compatibility"
          paramKey="compatibility"
          options={compatibilityOptions}
        />
      )}

      {enabled.material && (
        <FilterCheckbox
          title="Material"
          paramKey="material"
          options={materialOptions}
        />
      )}

      {enabled.power && (
        <FilterCheckbox title="Power" paramKey="power" options={powerOptions} />
      )}

      {enabled.condition && (
        <FilterCheckbox
          title="Condition"
          paramKey="condition"
          options={conditionOptions}
        />
      )}
    </aside>
  );
}
