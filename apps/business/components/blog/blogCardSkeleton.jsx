// components/blog/BlogSkeleton.tsx
import React from "react";

function BlogCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl bg-grey my-2 animate-pulse">
      {/* Image placeholder */}
      <div className="h-40 lg:h-[206px] w-full bg-gray-300"></div>

      <div className="p-7">
        {/* Title placeholder */}
        <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>

        {/* Description placeholder */}
        <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>

        {/* Footer placeholder */}
        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
          <div className="h-4 bg-gray-300 rounded w-10"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogCardSkeleton;
