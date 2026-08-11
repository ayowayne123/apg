"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@/components/blog/blogCard";
import BlogCardSkeleton from "@/components/blog/blogCardSkeleton";
import { getBlogPosts } from "@/utils/calls";
import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      setError(null);
      try {
        const data = await getBlogPosts({
          published: "published",
          page: currentPage,
        });
        setBlogs(data.data);
        setLastPage(data?.meta?.last_page || 1);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, [currentPage]);

  // Filter blogs based on search query (within current page's results)
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog?.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToPage = (page) => {
    if (page < 1 || page > lastPage || page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build a compact page number list, e.g. 1 2 3 ... 7
  const getPageNumbers = () => {
    const pages = [];
    const delta = 1;

    for (let i = 1; i <= lastPage; i++) {
      if (
        i === 1 ||
        i === lastPage ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <section className="my-20">
      {/* Search bar */}
      <div className="flex mt-6 ">
        <div className="relative w-full max-w-md bg-[#F9FAFB]">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary text-xl" />
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-4 text-[#737791] placeholder:text-[#737791]  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Blog grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-9 gap-6 items-stretch">
        {loading ? (
          [...Array(16)].map((_, i) => <BlogCardSkeleton key={i} />)
        ) : error ? (
          <p className="col-span-full text-center text-red-500">{error}</p>
        ) : filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index}>
              <BlogCard blog={blog} />
            </div>
          ))
        ) : (
          searchQuery && (
            <p className="col-span-full text-center text-gray-500">
              No matches found for "{searchQuery}"
            </p>
          )
        )}
      </div>

      {/* Pagination */}
      {!loading && !error && !searchQuery && lastPage > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition"
          >
            <FiChevronLeft />
          </button>

          {getPageNumbers().map((page, i) =>
            page === "..." ? (
              <span key={`ellipsis-${i}`} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`h-9 w-9 flex items-center justify-center rounded-full text-sm transition ${
                  page === currentPage
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === lastPage}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:border-primary hover:text-primary transition"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default AllBlogs;
