"use client";
import trendyProducts from "@/data/trendyData";
import ProductCard from "@/components/ui/productCard";

export default function TrendyProducts() {
  return (
    <section className="my-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        Trendy Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendyProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
