"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SORT_OPTIONS = [
  { label: "Newest", value: "newest" },
  { label: "Rating", value: "rating" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <select
      value={searchParams.get("sort") ?? "newest"}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md p-2"
    >
      {SORT_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
