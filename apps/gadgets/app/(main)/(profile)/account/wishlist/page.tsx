"use client";

import { useEffect, useState } from "react";
import ProductWishCard from "@/components/ui/productWishCard";
import toast from "react-hot-toast";
import { getWishlist, removeFromWishlist } from "@/lib/calls/userCalls";
import { addToCart } from "@/lib/calls/cartCalls";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await getWishlist();
        setWishlist(res.data || res); // depending on API shape
      } catch (err) {
        console.error("Wishlist fetch error:", err);
        toast.error("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // Add single item to cart
  const addItemToCart = async (productId: number) => {
    try {
      await addToCart({ productId, quantity: 1 });
      toast.success("Product added to cart");
    } catch (err) {
      console.error("Add to cart error:", err);
      toast.error("Failed to add product to cart");
    }
  };

  // Add all items to cart
  const addAllToCart = async () => {
    try {
      await Promise.all(
        wishlist.map((item) => addToCart({ productId: item.id, quantity: 1 }))
      );
      toast.success("All items added to cart");
    } catch (err) {
      console.error("Add all to cart error:", err);
      toast.error("Some items could not be added");
    }
  };

  // Remove from wishlist
  const removeItem = async (productId: number) => {
    try {
      await removeFromWishlist(String(productId));
      setWishlist((prev) => prev.filter((item) => item.id !== productId));
      toast.success("Removed from wishlist");
    } catch (err) {
      console.error("Remove wishlist error:", err);
      toast.error("Failed to remove item");
    }
  };

  // Loading
  if (loading) {
    return <p className="text-center">Loading wishlist...</p>;
  }

  // Empty state
  if (!wishlist.length) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium">Your wishlist is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Add all to cart */}
      <div className="flex justify-end">
        <button
          onClick={addAllToCart}
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-medium"
        >
          Add all to cart
        </button>
      </div>

      {/* Wishlist items */}
      <div className="space-y-6">
        {wishlist.map((item) => (
          <ProductWishCard
            key={item.id}
            product={item}
            onRemove={() => removeItem(item.id)}
            onAddToCart={() => addItemToCart(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
