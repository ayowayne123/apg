import React from "react";
import ProductsSearch from "./productsSearch";
import { Suspense } from "react";

export const metadata = {
  title: "Browse Products | APG Business Hub",
  description: "Search and explore smartphones, laptops, accessories and more.",
};

function Fallback() {
  return <>loading...</>;
}

export default function ProductsPage() {
  return (
    <div className="container">
      <Suspense fallback={<Fallback />}>
        <ProductsSearch />
      </Suspense>
    </div>
  );
}
