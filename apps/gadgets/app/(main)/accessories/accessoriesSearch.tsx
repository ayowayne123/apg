/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import SearchFilters from "@/components/ui/searchFilters";
import { getSearchedAccessories } from "@/lib/calls/productCalls";
import ProductCard from "@/components/ui/productCard";
import type { Product } from "@/lib/types/productTypes";
import ProductHeader from "@/components/ui/productHeader";

export default function AccessoriesSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const brand = searchParams.get("brand")?.split(",") || [];
  const color = searchParams.get("color")?.split(",") || [];
  const priceFrom = searchParams.get("minPrice") || "";
  const sort = searchParams.get("sort") || "";
  const priceTo = searchParams.get("maxPrice") || "";
  const page = Number(searchParams.get("page") || 1);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<any>({});
  const [links, setLinks] = useState<any>({});
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    setLoading(true);

    const res = await getSearchedAccessories({
      search,
      page,
      brand,
      sort,
      color,
      priceFrom,
      priceTo,
    });

    setProducts(res.data);
    setLinks(res.links);
    setMeta(res.meta);
    setLoading(false);
  };

  const updateFilters = (newParams: Record<string, any>) => {
    const url = new URLSearchParams(searchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) {
        url.delete(key);
      } else {
        url.set(key, Array.isArray(value) ? value.join(",") : String(value));
      }
    });

    url.set("page", "1");
    router.push(`${pathname}?${url.toString()}`);
  };

  return (
    <div className="flex gap-6 py-6">
      <div className="hidden lg:block">
        <SearchFilters
          categories={[
            { name: "All Gadgets", href: "/products" },
            { name: "Chargers", href: "/accessories/chargers" },
            { name: "Cables", href: "/accessories/cables" },
            { name: "Headphones & Earbuds", href: "/accessories/headphones" },
            { name: "Speakers", href: "/accessories/speakers" },
            { name: "Phone Cases", href: "/accessories/phone-cases" },
            {
              name: "Screen Protectors",
              href: "/accessories/screen-protectors",
            },
            { name: "Power Banks", href: "/accessories/power-banks" },
          ]}
          brands={["Apple", "Samsung", "Oraimo", "Anker", "Baseus"]}
          colors={["Black", "White", "Red", "Blue"]}
          showPrice
        />
      </div>

      <div className="flex-1">
        <ProductHeader
          search={search}
          title="Accessories"
          mainCategory="Accessories"
          mainHref="/accessories"
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
        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No accessories found.
          </div>
        )}

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
        {!loading && meta.last_page > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            <button
              disabled={!links.prev}
              onClick={() => updateFilters({ page: page - 1 })}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <div className="px-4 py-1 border rounded">
              Page {page} of {meta.last_page}
            </div>

            <button
              disabled={!links.next}
              onClick={() => updateFilters({ page: page + 1 })}
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
            { name: "All Gadgets", href: "/products" },
            { name: "Chargers", href: "/accessories/chargers" },
            { name: "Cables", href: "/accessories/cables" },
            { name: "Headphones & Earbuds", href: "/accessories/headphones" },
            { name: "Speakers", href: "/accessories/speakers" },
            { name: "Phone Cases", href: "/accessories/phone-cases" },
            {
              name: "Screen Protectors",
              href: "/accessories/screen-protectors",
            },
            { name: "Power Banks", href: "/accessories/power-banks" },
          ]}
          brands={["Apple", "Samsung", "Oraimo", "Anker", "Baseus"]}
          colors={["Black", "White", "Red", "Blue"]}
          showPrice
          onClose={() => setShowFilters(false)}
        />
      )}
    </div>
  );
}
