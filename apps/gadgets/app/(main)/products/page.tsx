import React from "react";
import ProductsSearch from "./productsSearch";

export const metadata = {
  title: "Browse Products | APG Business Hub",
  description: "Search and explore smartphones, laptops, accessories and more.",
};

export default function ProductsPage() {
  return (
    <div className="container">
      <ProductsSearch />
    </div>
  );
}
