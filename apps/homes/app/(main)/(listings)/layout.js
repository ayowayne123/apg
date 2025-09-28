"use client";
import React from "react";
import { ListingsProvider } from "@/components/contexts/listingsContext";
import SearchFilters from "@/components/ui/searchFilters";

export default function ListingsLayout({
  children,
  pageLabel = "For rent",
  fields = [],
}) {
  return (
    <ListingsProvider>
      {/* The SearchFilters is sticky and will read/write context */}
      <SearchFilters fields={fields} />

      {/* listings content */}
      <div className="container mx-auto px-4 pt-6">{children}</div>
    </ListingsProvider>
  );
}
