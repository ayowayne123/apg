/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilters from "@/components/ui/categoryFilters";
import { getSearchedAccessories } from "@/lib/calls/productCalls";
import ProductCard from "@/components/ui/productCard";
import type { Product } from "@/lib/types/productTypes";
import ProductHeader from "@/components/ui/productHeader";

export default function AccessoriesCategory({ config }: any) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const brand = searchParams.get("brand")?.split(",") || [];
  const color = searchParams.get("color")?.split(",") || [];
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

    const res = await getSearchedAccessories({
      search,
      page,
      brand,
      sort,
      item_subtype: config.item_subtype,
      color,
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
          { name: "All gadgets", href: "/products" },
          { name: "All accessories", href: "/accessories" },
        ]}
        enabled={config.filters}
        brands={["Apple", "Samsung", "Oraimo", "Anker", "Baseus"]}
        colors={["Black", "White", "Red", "Blue"]}
        powerOptions={["5W", "10W", "15W", "20W", "30W", "65W", "100W"]}
        connectivityOptions={[
          "USB-A",
          "USB-C",
          "Lightning",
          "Wireless",
          "Bluetooth",
          "Aux",
        ]}
        materialOptions={[
          "Silicone",
          "Leather",
          "Plastic",
          "Glass",
          "TPU",
          "Fabric",
        ]}
        compatibilityOptions={[
          "iPhone",
          "Samsung",
          "Tecno",
          "Infinix",
          "Universal",
        ]}
      />

      <div className="flex-1">
        <ProductHeader
          search={search}
          title={config.title}
          mainCategory="Accessories"
          mainHref="/accessories"
          subCategory={config.title}
          subHref={config.slug}
          loading={loading}
          total={meta.total}
        />

        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No {config.title} found.
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
