import React from "react";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl bg-grey my-2">
      <div className="h-40 lg:h-[206px] bg-red-300 w-full">Image</div>

      <div className="p-7 ">
        <h4 className="text-xl font-medium mb-2 tracking-tighter">
          {blog.title}
        </h4>
        <p className="text-sm text-[#272727] font-light tracking-tighter h-16">
          {blog.excerpt}
        </p>
        <div className="flex text-sm  justify-between mt-4 font-light">
          <p>Posted on</p>
          <Link href={`/blog/${blog.slug}`} className="text-primary">
            Go
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
