import React from "react";

function ProductSkeleton() {
  return (
    <div className="border bg-apgGrey rounded-2xl p-4 flex flex-col animate-pulse w-full">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-grey border rounded-2xl overflow-hidden"></div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col flex-grow gap-2">
        <div className=" h-6 w-full bg-grey " />
        <div className=" h-4 bg-grey w-1/2" />
        <div className=" h-4 bg-grey w-full" />
        <div className="mt-2 flex justify-between">
          <div className=" h-6 bg-grey w-1/3" />
          <div className=" h-4 bg-grey w-1/6" />
        </div>
      </div>
    </div>
  );
}

export default ProductSkeleton;
