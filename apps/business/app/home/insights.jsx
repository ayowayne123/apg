"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "@/components/blog/blogCard";
import { blogData } from "@/components/blog/blogdata";

function Insights() {
  const [blogs, setBlogs] = useState([]);
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
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  console.log(blogs);
  return (
    <section className="my-20">
      <h2 className="text-primary mx-auto lg:max-w-[635px] text-center tracking-tighter">
        Insights, Tips & Trends That Keep You Ahead
      </h2>
      <p className="text-2xl text-center mx-auto lg:max-w-[660px] tracking-tighter">
        Whether you’re a tech lover or a home seeker, our blog is your go-to
        resource for smart decisions and better living.
      </p>
      <div className="grid grid-cols-4 mt-9 gap-6">
        {blogs.map((blog, index) => (
          <div key={index}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Insights;
