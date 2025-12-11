import React from "react";
import AccessoriesSearch from "./accessoriesSearch";

export const metadata = {
  title: "Accessories | APG Business Hub",
  description: "Shop chargers, headphones, cases, cables and more.",
};

export default function AccessoriesPage() {
  return (
    <div className="container">
      <AccessoriesSearch />
    </div>
  );
}
