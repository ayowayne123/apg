"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import SearchFilters from "@/components/ui/searchFilters";
import { getSearchedSmartPhones } from "@/lib/calls/productCalls";
import ProductCard from "@/components/ui/productCard";
import type { Product } from "@/lib/types/productTypes";

export default function PhonesSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand")?.split(",") || [];
  const color = searchParams.get("color")?.split(",") || [];
  const priceFrom = searchParams.get("minPrice") || "";
  const priceTo = searchParams.get("maxPrice") || "";
  const page = Number(searchParams.get("page") || 1);
  const search = searchParams.get("search") || "";

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<any>({});

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    setLoading(true);

    const res = await getSearchedSmartPhones({
      page,
      brand,
      color,
      priceFrom,
      priceTo,
      search,
    });

    setProducts(res.data);
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
      <SearchFilters
        categories={[
          { name: "New Phones", href: "/smartphones/brand-new" },
          { name: "Uk Used Phones", href: "/smartphones/uk-used" },
        ]}
        brands={["Apple", "Samsung", "Tecno", "Infinix", "Xiaomi"]}
        colors={["Black", "White", "Blue", "Gold", "Red"]}
        showPrice
      />

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="text-sm text-gray-500 mb-3">
          <Link href="/">Home</Link> / <span>Phones</span>
        </div>

        <h4 className="text-2xl font-semibold mb-1">Phones</h4>

        <p className="text-gray-600 mb-6">
          {loading ? "Loading..." : `${meta.total || 0} results found`}
        </p>

        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No phones found.
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {!loading &&
            products.map((product: any, idx: number) => (
              <ProductCard key={idx} {...product} index={idx} />
            ))}
        </div>

        {!loading && meta.last_page > 1 && (
          <div className="flex justify-center mt-10 gap-3">
            <button
              disabled={!meta.prev_page_url}
              onClick={() => updateFilters({ page: page - 1 })}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <div className="px-4 py-1 border rounded">
              Page {page} of {meta.last_page}
            </div>

            <button
              disabled={!meta.next_page_url}
              onClick={() => updateFilters({ page: page + 1 })}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
