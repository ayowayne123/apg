"use client";
import { useState } from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import FilterDropdown from "./filterDropdown";

export default function SearchFilters({ onSearch, onFilter }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="sticky top-0 z-40 bg-white  py-5 container shadow-md">
      <div className="flex flex-wrap items-center gap-2 justify-between  ">
        {/* Category dropdown (e.g. For Rent) */}
        <button className="flex items-center gap-1 border rounded-md px-4 py-2 bg-white hover:bg-gray-50">
          For Rent <FiChevronDown size={16} />
        </button>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center border rounded-md px-3 py-2 bg-white flex-1 max-w-md"
        >
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search by PID or address"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none"
          />
        </form>

        {/* Custom Dropdown Filters */}
        <FilterDropdown
          label="Type"
          options={["Apartment", "Duplex", "Bungalow"]}
          onChange={(val) => onFilter("type", val)}
        />

        <FilterDropdown
          label="Beds"
          options={["1", "2", "3", "4+"]}
          onChange={(val) => onFilter("beds", val)}
        />

        <FilterDropdown
          label="Min price"
          options={["₦100k", "₦500k", "₦1M"]}
          onChange={(val) => onFilter("minPrice", val)}
        />

        <FilterDropdown
          label="Max price"
          options={["₦500k", "₦1M", "₦5M+"]}
          onChange={(val) => onFilter("maxPrice", val)}
        />

        {/* Filters Button */}
        <button className="flex items-center gap-2 bg-primary text-white rounded-md px-5 py-2 hover:bg-primary/70">
          <FiFilter /> Filters
        </button>
      </div>
    </div>
  );
}
