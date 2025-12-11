"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import SearchFilters from "@/components/ui/searchFilters";
import { getSearchedComputers } from "@/lib/calls/productCalls";
import ProductCard from "@/components/ui/productCard";
import type { Product } from "@/lib/types/productTypes";

export default function ComputersSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand")?.split(",") || [];
  const priceFrom = searchParams.get("minPrice") || "";
  const priceTo = searchParams.get("maxPrice") || "";
  const page = Number(searchParams.get("page") || 1);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<any>({});

  useEffect(() => {
    fetchProducts();
  }, [searchParams]);

  const fetchProducts = async () => {
    setLoading(true);

    const res = await getSearchedComputers({
      page,
      brand,
      priceFrom,
      priceTo,
    });

    setProducts(res.data);
    setMeta(res.meta);
    setLoading(false);
  };

  return (
    <div className="flex gap-6 py-6">
      <SearchFilters
        categories={[
          { name: "Laptops", href: "/computers/laptops" },
          { name: "Desktops", href: "/computers/desktops" },
        ]}
        brands={["HP", "Dell", "Lenovo", "Asus", "Apple"]}
        colors={[]}
        showPrice
      />

      <div className="flex-1">
        <h4 className="text-2xl font-semibold mb-1">Computers</h4>

        <p className="text-gray-600 mb-6">
          {loading ? "Loading..." : `${meta.total || 0} results found`}
        </p>

        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No computers found.
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {!loading &&
            products.map((product: any, idx: number) => (
              <ProductCard key={idx} {...product} index={idx} />
            ))}
        </div>
      </div>
    </div>
  );
}
