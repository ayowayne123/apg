"use client";
import React from "react";
import Image from "next/image";
import "./blog.css";

export default function BlogPage({ blog }) {
  return (
    <article className="container py-16 ">
      {/* Cover Photo */}
      {blog?.cover_photo?.url && (
        <div className="h-[400px] rounded-[35px] w-full relative overflow-hidden mb-3">
          <Image
            src={blog.cover_photo.url}
            alt={blog.cover_photo.alt || "Blog cover"}
            className=" object-cover"
            fill
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-primary via-50% via-transparent w-full h-full text-white`}
          >
            <div className="h-full flex justify-end flex-col py-12 px-16">
              <p className="uppercase tracking-wide  mb-4 text-lg lg:text-2xl ">
                Blog
              </p>
              <h4 className="text-4xl font-bold mb-4 capitalize max-w-xl tracking-tighter">
                {blog.title}
              </h4>
            </div>
          </div>
        </div>
      )}

      {/* Meta */}
      <div className="text-gray-500 text-sm mb-8">
        <span>
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>{" "}
        • <span>{blog.readTimeMinutes} min read</span>
      </div>

      {/* Content (inject HTML safely) */}
      <div
        className="prose max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
