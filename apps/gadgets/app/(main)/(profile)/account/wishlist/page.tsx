"use client";

import { useState } from "react";
import ProductWishCard from "@/components/ui/productWishCard";
import { demoWishlist } from "@/data/demoWishlist";
import { toast } from "react-hot-toast";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(demoWishlist);

  const addToCart = (id: number) => {
    toast.success("Product added to cart!");
  };

  const addAllToCart = () => {
    wishlist.forEach((item) => addToCart(item.id));
    toast.success("All items added to cart!");
  };

  const removeItem = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast.success("Removed from wishlist");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        {wishlist.length > 0 && (
          <button
            onClick={addAllToCart}
            className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-medium"
          >
            Add all to cart
          </button>
        )}
      </div>

      <div className="space-y-6">
        {wishlist.map((item) => (
          <ProductWishCard
            key={item.id}
            product={item}
            onRemove={removeItem}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
