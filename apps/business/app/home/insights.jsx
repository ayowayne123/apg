"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@/components/blog/blogCard";
import { getBlogPosts } from "@/utils/calls";
import BlogCardSkeleton from "@/components/blog/blogCardSkeleton";

function Insights() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      try {
        const data = await getBlogPosts();
        setBlogs(data.data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, []);

  return (
    <section className="my-20">
      <h2 className="text-primary mx-auto lg:max-w-[635px] text-center tracking-tighter">
        Insights, Tips & Trends That Keep You Ahead
      </h2>
      <p className="text-2xl text-center mx-auto lg:max-w-[660px] tracking-tighter">
        Whether you’re a tech lover or a home seeker, our blog is your go-to
        resource for smart decisions and better living.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-9 gap-6">
        {loading ? (
          // show 4 skeleton cards while loading
          [...Array(4)].map((_, i) => <BlogCardSkeleton key={i} />)
        ) : error ? (
          <p className="col-span-full text-center text-red-500">{error}</p>
        ) : blogs.length > 0 ? (
          blogs
            .slice(0, 4)
            .map((blog, index) => <BlogCard key={index} blog={blog} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No blogs available
          </p>
        )}
      </div>
    </section>
  );
}

export default Insights;
