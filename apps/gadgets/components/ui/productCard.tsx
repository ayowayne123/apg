"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import type { Product } from "@/lib/types/productTypes";

export default function ProductCard({
  id,
  title,
  short_description,
  cover_photo,
  price,
  currency,
  discount_percentage,
}: Product) {
  const [favourited, setFavourited] = useState(false);

  const toggleFavourite = () => {
    setFavourited(!favourited);
    if (!favourited) {
      toast.success(`${title} added to favourites`);
    } else {
      toast.error(`${title} removed from favourites`);
    }
  };

  const hasDiscount =
    discount_percentage && parseFloat(discount_percentage) > 0;

  return (
    <div
      className={`border border-apgGrey rounded-2xl p-4 flex flex-col hover:shadow-md transition ${
        id % 2 === 0 ? "bg-apgGrey" : "bg-apgCream"
      }`}
    >
      {/* Image */}
      <div className="relative w-full h-64 bg-white border border-borderGrey rounded-2xl overflow-hidden">
        {cover_photo?.url ? (
          <Image
            src={cover_photo.url}
            alt={cover_photo.alt || title}
            fill
            className="object-contain p-8"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="font-bold tracking-[-1.44px] text-xl line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="mt-1 flex flex-row gap-1">
          <p className="font-bold text-lg tracking-tight">
            {parseFloat(price).toFixed(2)} {currency}
          </p>
          {hasDiscount && (
            <p className="text-apgRed text-sm font-semibold">
              -{discount_percentage}% off
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-greyText text-sm mt-3 line-clamp-3 tracking-tight">
          {short_description}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button className="btn btnSmall pryBtn w-[134px]">Add to Cart</button>
        <button
          onClick={toggleFavourite}
          className={`text-xl rounded-full flex items-center justify-center h-[53px] w-[53px] 
            ${favourited ? "bg-apgRed" : "bg-primary"}`}
        >
          <FaHeart className="text-white" />
        </button>
      </div>
    </div>
  );
}
