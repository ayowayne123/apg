/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilters from "@/components/ui/categoryFilters";
import { getSearchedComputers } from "@/lib/calls/productCalls";
import ProductCard from "@/components/ui/productCard";
import type { Product } from "@/lib/types/productTypes";
import ProductHeader from "@/components/ui/productHeader";

export default function ComputersCategory({ config }: any) {
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

    const res = await getSearchedComputers({
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
          { name: "All Computers", href: "/Computers" },
        ]}
        enabled={config.filters}
        brands={["Apple", "HP", "Dell", "Lenovo", "ASUS", "Acer", "MSI"]}
        colors={["Black", "Silver", "Gray", "White", "Blue"]}
        storageOptions={["128GB", "256GB", "512GB", "1TB", "2TB"]}
        ramOptions={["4GB", "8GB", "16GB", "32GB", "64GB"]}
        sizeOptions={['11"', '13"', '14"', '15.6"', '16"', '17"']}
        conditionOptions={["Brand New", "UK Used", "Refurbished"]}
      />

      <div className="flex-1">
        <ProductHeader
          search={search}
          title={config.title}
          mainCategory="Computers"
          mainHref="/computers"
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
