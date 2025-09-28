"use client";
import React, { createContext, useState } from "react";

export const ListingsContext = createContext();

export function ListingsProvider({ children, initialFilters = {} }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState(initialFilters);

  const updateFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const resetFilters = () => {
    setSearchQuery("");
    setFilters({});
  };

  return (
    <ListingsContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filters,
        updateFilter,
        resetFilters,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
}
