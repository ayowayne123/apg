import React from "react";
import Link from "next/link";
import Image from "next/image";

function BlogCard({ blog }) {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl bg-grey my-2">
      <div className="h-40 lg:h-[206px] relative bg-red-300 w-full">
        <Image
          src={blog?.cover_photo?.url}
          alt={blog?.cover_photo?.alt || "Blog Cover"}
          className="object-cover"
          fill
        />
      </div>

      <div className="p-7 ">
        <h4 className="text-xl font-medium mb-1 tracking-tighter leading-[22px] line-clamp-2  h-12  ">
          {blog?.title}
        </h4>
        <p className="text-sm text-[#272727] font-light tracking-tighter h-16 line-clamp-3">
          {blog?.description}
        </p>
        <div className="flex text-sm  justify-between mt-4 font-light">
          <p>Posted on</p>
          <Link href={`/blog/${blog?.id}`} className="text-primary">
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
