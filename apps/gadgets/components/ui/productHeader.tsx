import React from "react";
import SortSelect from "@/components/ui/sortSelect";
import Link from "next/link";

type Details = {
  title?: string;
  search?: string;
  loading?: boolean;
  total?: number | null;
  mainCategory?: string;
  mainHref?: string;
  subCategory?: string;
  subHref?: string;
};

//title = config.title, total = meta.total

function ProductHeader({
  title,
  search,
  total,
  loading,
  mainCategory,
  mainHref,
  subCategory,
  subHref,
}: Details) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-3">
        <Link href="/" className=" hover:text-primary">
          Home
        </Link>
        /
        <Link href="/products" className=" hover:text-primary">
          All Gadgets
        </Link>
        {mainCategory && (
          <span>
            {" "}
            /
            <Link href={`${mainHref}`} className=" hover:text-primary">
              {mainCategory}
            </Link>
          </span>
        )}
        {subCategory && (
          <span>
            {" "}
            /
            <Link href={`/${subHref}`} className=" hover:text-primary">
              {subCategory}
            </Link>
          </span>
        )}
        {search && <span>/ {search}</span>}
      </div>

      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        {!mainCategory || !subCategory ? (
          <h4 className="text-2xl font-semibold tracking-tighter mb-1">
            Showing Results {search && <>for {search}</>}
          </h4>
        ) : (
          <h4 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1">
            {title}
          </h4>
        )}
        <SortSelect />
      </div>

      {/* Results count */}
      <p className="text-gray-600 mb-6">
        {loading ? "Loading..." : `${total || 0} results found`}
      </p>
    </>
  );
}

export default ProductHeader;
