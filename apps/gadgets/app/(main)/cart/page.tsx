"use client";

import Image from "next/image";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { useCart } from "@/components/context/cartContext";
import { useState } from "react";

export default function CartPage() {
  const { items, total, loading, updateQtyOptimistic } = useCart();
  const [updating, setUpdating] = useState<Record<number, boolean>>({});

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-lg font-medium">Loading cart…</p>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h4 className="text-3xl font-bold mb-4">Your Cart is Empty</h4>
        <p className="text-gray-600">Add items to your cart to continue.</p>
      </div>
    );
  }

  const handleUpdate = async (id: number, qty: number) => {
    setUpdating((p) => ({ ...p, [id]: true }));
    try {
      await updateQtyOptimistic(id, qty);
    } catch {
      toast.error("Failed to update cart");
    } finally {
      setUpdating((p) => ({ ...p, [id]: false }));
    }
  };

  return (
    <div className="container py-6">
      <h4 className="text-3xl font-bold mb-10">Your Cart Items</h4>

      <div className="space-y-8 divide-y">
        {items.map((item) => (
          <div key={item.id} className="flex gap-16 pb-8">
            <div className="relative w-84 h-60">
              <Image
                src={item.product.cover_photo?.url}
                alt={item.product.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-2xl font-bold">{item.product.title}</p>

                <div className="flex gap-4 items-center">
                  <button
                    disabled={updating[item.id]}
                    onClick={() =>
                      handleUpdate(item.id, Number(item.quantity) - 1)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    disabled={updating[item.id]}
                    onClick={() =>
                      handleUpdate(item.id, Number(item.quantity) + 1)
                    }
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleUpdate(item.id, 0)}
                    className="text-red-500"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-gray-600">
                {item.product.short_description}
              </p>

              <div className="mt-4 font-semibold text-xl">
                {item.subtotal.toFixed(2)} {item.product.currency}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between">
        <p className="text-2xl font-bold">Total: {total.toFixed(2)} USD</p>

        <button className="btn pryBtn px-8 py-3">Proceed to Checkout</button>
      </div>
    </div>
  );
}
