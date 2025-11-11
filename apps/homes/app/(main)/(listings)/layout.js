"use client";
import React from "react";
import { ListingsProvider } from "@/components/context/listingsContext";
import SearchFilters from "@/components/ui/searchFilters";

export default function ListingsLayout({ children }) {
  return (
    <ListingsProvider>
      {/* listings content */}
      {children}
    </ListingsProvider>
  );
}
