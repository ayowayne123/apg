"use client";

import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import type { Product } from "@/lib/types/productTypes";
import { addToCart } from "@/lib/calls/cartCalls";
import Cookies from "js-cookie";
import { addToWishlist, removeFromWishlist } from "@/lib/calls/userCalls";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/context/cartContext";
import Link from "next/link";

interface ProductCardProps extends Product {
  index: number;
  sessionId?: string; // optional for guest users
}

export default function ProductCard({
  index,
  id,
  title,
  short_description,
  slug,
  cover_photo,
  price,
  currency,
  discount_percentage,
}: ProductCardProps) {
  const [favourited, setFavourited] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refreshCart } = useCart();

  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currency || "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(price));

  const isLoggedIn = Boolean(Cookies.get("apg_token"));

  const toggleFavourite = async () => {
    if (!isLoggedIn) {
      toast.error("Please log in to use Wishlist");
      router.push(`/login?redirect=/products`);
      return;
    }

    try {
      if (favourited) {
        await removeFromWishlist(String(id));
        toast.success(`${title} removed from Wishlist`);
      } else {
        await addToWishlist(String(id));
        toast.success(`${title} added to WishList`);
      }

      setFavourited((prev) => !prev);
    } catch (error) {
      console.error("Wishlist error:", error);
      toast.error("Could not update favourites");
    }
  };

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      await addToCart({ productId: id, quantity: 1 });
      await refreshCart();
      toast.success(`${title} added to cart`);
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error(`Failed to add ${title} to cart`);
    } finally {
      setLoading(false);
    }
  };

  const hasDiscount =
    discount_percentage && parseFloat(discount_percentage) > 0;

  return (
    <Link
      href={`/${slug}`}
      className={`border border-apgGrey rounded-2xl py-3 px-2 md:py-4 md:px-4 flex flex-col hover:shadow-md transition ${
        index % 2 !== 0 ? "bg-apgGrey" : "bg-apgCream"
      }`}
    >
      {/* Product Image */}
      <div className="relative w-full h-40 md:h-64 lg:h-48 xl:h-64 bg-white border border-borderGrey rounded-2xl overflow-hidden">
        {cover_photo?.url ? (
          <Image
            src={cover_photo.url}
            alt={cover_photo.alt || title}
            fill
            className="object-contain p-2 sm:p-6 lg:p-8"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="font-bold tracking-tight text-base sm:text-lg lg:text-xl line-clamp-2">
          {title}
        </h3>

        <div className="mt-1 flex flex-row gap-2 items-center">
          <p className="tracking-tight font-bold text-sm sm:text-base md:text-lg">
            {formattedPrice}
          </p>

          {hasDiscount && (
            <p className="text-apgRed text-sm font-semibold">
              -{discount_percentage}% off
            </p>
          )}
        </div>

        {short_description && (
          <p className="text-greyText text-sm mt-3 line-clamp-3 tracking-tight ">
            {short_description}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-row gap-3 justify-between items-center mt-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart();
          }}
          disabled={loading}
          className={`btn btnSmall pryBtn w-full sm:w-[134px] ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavourite();
          }}
          className={` rounded-full flex items-center justify-center text-sm sm:text-xl h-9 w-9 sm:h-[53px] sm:w-[53px] shrink-0
            ${favourited ? "bg-apgRed" : "bg-primary"}`}
        >
          <FaHeart className="text-white  " />
        </button>
      </div>
    </Link>
  );
}
