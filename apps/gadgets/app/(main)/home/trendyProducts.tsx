"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ui/productCard";
import { getTrendyProducts } from "@/lib/calls/productCalls";
import type { Product } from "@/lib/types/productTypes";

export default function TrendyProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrendy() {
      try {
        const response = await getTrendyProducts();
        setProducts(response.data);
      } catch (err) {
        console.error("Failed to fetch trendy products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendy();
  }, []);

  return (
    <section className="lg:my-16 my-12">
      <h2 className="text-2xl md:text-3xl font-bold lg:mb-12 mb-8 text-center">
        Trendy Products
      </h2>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 xl:gap-6">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard key={index} {...product} index={index} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No trendy products found.
            </p>
          )}
        </div>
      )}
    </section>
  );
}
