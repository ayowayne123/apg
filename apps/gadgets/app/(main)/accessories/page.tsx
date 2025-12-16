import React from "react";
import AccessoriesSearch from "./accessoriesSearch";
import { Suspense } from "react";

export const metadata = {
  title: "Accessories | APG Business Hub",
  description: "Shop chargers, headphones, cases, cables and more.",
};

function Fallback() {
  return <>loading...</>;
}

export default function AccessoriesPage() {
  return (
    <div className="container">
      <Suspense fallback={<Fallback />}>
        <AccessoriesSearch />
      </Suspense>
    </div>
  );
}
