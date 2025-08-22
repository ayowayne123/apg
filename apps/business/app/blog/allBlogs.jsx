"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@/components/blog/blogCard";
import { blogData } from "@/components/blog/blogdata";
import { FiSearch } from "react-icons/fi";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setBlogs(blogData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blogs");
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog?.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-9 gap-6">
        {loading ? (
          <p className="col-span-full text-center">Loading blogs...</p>
        ) : error ? (
          <p className="col-span-full text-center text-red-500">{error}</p>
        ) : filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index}>
              <BlogCard blog={blog} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No matches found for "{searchQuery}"
          </p>
        )}
      </div>
    </section>
  );
}

export default AllBlogs;
