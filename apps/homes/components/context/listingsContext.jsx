"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import { getAllHomes } from "@/utils/calls";

export const ListingsContext = createContext();

export function ListingsProvider({ children }) {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({});
  const [pageType, setPageType] = useState("listings");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchListings = useCallback(
    async (extraParams = {}) => {
      setLoading(true);
      try {
        const params = {
          address: searchQuery,
          ...filters,
          listing_type: pageType,
          ...extraParams,
        };

        const res = await getAllHomes(params);
        setListings(res?.data || []);
      } catch (err) {
        console.error("❌ Failed to fetch listings:", err);
      } finally {
        setLoading(false);
      }
    },
    [filters, pageType]
  );

  // Automatically fetch when filters or pageType change
  useEffect(() => {
    fetchListings();
  }, [filters, pageType, fetchListings]);

  return (
    <ListingsContext.Provider
      value={{
        listings,
        setListings,
        filters,
        setFilters,
        pageType,
        setPageType,
        fetchListings,
        loading,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
}
