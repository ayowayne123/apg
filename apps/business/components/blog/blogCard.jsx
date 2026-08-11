import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronForward } from "react-icons/io5";

function BlogCard({ blog }) {
  const [loaded, setLoaded] = useState(false);
  const imageUrl = blog?.cover_photo?.url;

  const formattedDate = blog?.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="w-full overflow-hidden rounded-t-2xl bg-grey my-2">
      <div
        className="h-40 lg:h-[206px] relative w-full bg-[#F2F2F2] bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/icons/apg-business.svg')",
        }}
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={blog?.cover_photo?.alt || "Blog Cover"}
            className={`object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            fill
            onLoadingComplete={() => setLoaded(true)}
          />
        )}
      </div>

      <div className="p-7">
        <h4 className="text-xl font-medium mb-1 tracking-tighter leading-[22px] line-clamp-2 min-h-12 ">
          {blog?.title}
        </h4>
        <p className="text-sm text-[#272727] font-light tracking-tighter h-16 line-clamp-3">
          {blog?.description}
        </p>

        <div className="flex text-sm justify-between mt-4 font-light text-[#272727]">
          <p>
            {formattedDate && `${formattedDate}`}
            {formattedDate && blog?.readTimeMinutes ? " | " : ""}
            {blog?.readTimeMinutes && `${blog.readTimeMinutes} min read`}
          </p>
          <Link
            href={`/blog/${blog?.id}`}
            className="text-primary hover:bg-white hover:scale-120 transition ease-in-out duration-500 border border-primary rounded-full h-5 w-5 flex items-center justify-center shrink-0"
          >
            <IoChevronForward />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
