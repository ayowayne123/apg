"use client";
import categories from "@/data/categoryData";
import CategoryCard from "@/components/ui/categoryCard";

export default function BrowseCategories() {
  return (
    <section className="my-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Browse by categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} {...cat} />
        ))}
      </div>
    </section>
  );
}
