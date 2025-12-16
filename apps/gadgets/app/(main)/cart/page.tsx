"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart/useCart";
import { FiTrash2 } from "react-icons/fi";

export default function CartPage() {
  const { items, total, remove, add, goToCheckout } = useCart();

  if (!items || items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600">Add items to your cart to continue.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-xl bg-white shadow-sm"
          >
            {/* Product Image */}
            <div className="relative w-20 h-20">
              {item.cover_photo?.url && (
                <Image
                  src={item.cover_photo.url}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm text-gray-600">
                {item.price} {item.currency}
              </p>

              {/* Quantity Buttons */}
              <div className="flex items-center gap-3 mt-3">
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    item.quantity > 1 ? add(item, -1) : remove(item.id)
                  }
                >
                  -
                </button>

                <span className="font-semibold w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => add(item, 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col items-end">
              <p className="font-bold text-lg">
                {(item.quantity * item.price).toFixed(2)} {item.currency}
              </p>

              {/* Remove Button */}
              <button
                className="text-red-500 mt-3"
                onClick={() => remove(item.id)}
              >
                <FiTrash2 size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Checkout */}
      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total: {total.toFixed(2)} NGN</h2>

        <button className="btn pryBtn text-lg px-8 py-3" onClick={goToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
