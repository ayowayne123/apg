/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import SearchFilters from "@/components/ui/searchFilters";
import { getSearchedProducts } from "@/lib/calls/productCalls";
import ProductCard from "@/components/ui/productCard";
import type { Product } from "@/lib/types/productTypes";
import ProductHeader from "@/components/ui/productHeader";

export default function ProductsSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "";
  const search = searchParams.get("search") || "";
  const brand = searchParams.get("brand")?.split(",") || [];
  const color = searchParams.get("color")?.split(",") || [];
  const priceFrom = searchParams.get("priceFrom") || "";
  const priceTo = searchParams.get("priceTo") || "";
  const page = Number(searchParams.get("page") || 1);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<any>({});
  const [showFilters, setShowFilters] = useState(false);

  // --- Fetch products whenever params change ---
  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    setLoading(true);

    const res = await getSearchedProducts({
      page,
      search,
      brand,
      sort,
      color,
      priceFrom,
      priceTo,
    });

    setProducts(res.data);
    setMeta(res.meta);
    setLoading(false);
  };

  // --- Update URL when filters change ---
  const updateFilters = (newParams: Record<string, any>) => {
    const url = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (
        value == null ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        url.delete(key);
        return;
      }

      // ALWAYS convert to string
      if (Array.isArray(value)) {
        url.set(key, value.join(","));
      } else {
        url.set(key, String(value));
      }
    });

    url.set("page", "1");
    router.push(`${pathname}?${url.toString()}`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 py-4 lg:py-6">
      {/* LEFT FILTER SIDEBAR */}
      <div className="hidden lg:block">
        <SearchFilters
          categories={[
            { name: "Phones", href: "/smartphones" },
            { name: "Computers", href: "/computers" },
            { name: "Accessories", href: "/accessories" },
          ]}
          brands={["Apple", "Samsung", "Huawei", "HP", "Dell"]}
          colors={["Black", "White", "Blue", "Pink", "Red"]}
          showPrice
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <ProductHeader
          search={search}
          title="Products"
          loading={loading}
          total={meta.total}
        />
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="w-full border rounded-xl py-2 font-medium"
          >
            Filters
          </button>
        </div>

        {/* No results */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products match your search.
          </div>
        )}

        {/* Product Grid */}
        <div
          className="grid  [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))]
        sm:[grid-template-columns:repeat(2,minmax(0,1fr))]
    lg:[grid-template-columns:repeat(3,minmax(0,1fr))]
    xl:[grid-template-columns:repeat(4,minmax(0,1fr))] gap-2 sm:gap-4 lg:gap-5"
        >
          {!loading &&
            products.map((product: any, idx: number) => (
              <ProductCard key={idx} {...product} index={idx} />
            ))}
        </div>

        {/* Pagination */}
        {!loading && meta.last_page > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            <button
              disabled={!meta.prev_page_url}
              onClick={() => updateFilters({ page: (page - 1).toString() })}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <div className="px-4 py-1 border rounded">
              Page {page} of {meta.last_page}
            </div>

            <button
              disabled={!meta.next_page_url}
              onClick={() => updateFilters({ page: (page + 1).toString() })}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
      {showFilters && (
        <SearchFilters
          categories={[
            { name: "Phones", href: "/smartphones" },
            { name: "Computers", href: "/computers" },
            { name: "Accessories", href: "/accessories" },
          ]}
          brands={["Apple", "Samsung", "Huawei", "HP", "Dell"]}
          colors={["Black", "White", "Blue", "Pink", "Red"]}
          showPrice
          onClose={() => setShowFilters(false)}
        />
      )}
    </div>
  );
}
