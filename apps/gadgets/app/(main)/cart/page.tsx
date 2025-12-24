"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";
import { getCart, updateCartItem, removeCartItem } from "@/lib/calls/cartCalls";
import Cookies from "js-cookie";
import { getGuestSessionId } from "@/lib/cart/session";

type CartItem = {
  id: number;
  quantity: string;
  unit_price: string;
  subtotal: number;
  product: {
    id: number;
    title: string;
    currency: string;
    short_description: string;
    color: string;
    cover_photo?: {
      url: string;
      alt?: string | null;
    };
  };
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const [sessionId, setSessionId] = useState<string | undefined>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchCart = async () => {
    try {
      const res = await getCart();
      const cart = res?.data;

      setItems(cart?.items || []);
      setTotal(cart?.total || 0);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load cart");
    }
  };

  useEffect(() => {
    const token = Cookies.get("apg_token");
    const loggedIn = !!token;
    setIsLoggedIn(loggedIn);

    if (!loggedIn) {
      setSessionId(getGuestSessionId());
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, []);

  if (!items.length) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600">Add items to your cart to continue.</p>
      </div>
    );
  }

  const updateQty = async (cartItemId: number, qty: number) => {
    setLoading((p) => ({ ...p, [cartItemId]: true }));
    try {
      if (qty <= 0) {
        await removeCartItem(cartItemId);
      } else {
        await updateCartItem(cartItemId, qty);
      }
      await fetchCart();
    } catch {
      toast.error("Failed to update item");
    } finally {
      setLoading((p) => ({ ...p, [cartItemId]: false }));
    }
  };

  const removeItem = async (cartItemId: number) => {
    setLoading((p) => ({ ...p, [cartItemId]: true }));
    try {
      await removeCartItem(cartItemId);
      await fetchCart();
    } catch {
      toast.error("Failed to remove item");
    } finally {
      setLoading((p) => ({ ...p, [cartItemId]: false }));
    }
  };

  return (
    <div className="container py-6">
      <h4 className="text-3xl font-bold mb-10">Your cart Items</h4>

      <div className="space-y-8 divide-y-[0.2px] divide-[#d5d3d3] tracking-tighter">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-16  pb-8">
            {/* Image */}
            <div className="relative w-84 h-60 bg-red-400 overflow-hidden rounded-lg">
              {item.product.cover_photo?.url && (
                <Image
                  src={item.product.cover_photo.url}
                  alt={item.product.cover_photo.alt || item.product.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* Info */}
            <div className="flex-1 h-60 flex flex-col ">
              <div className="flex flex-row justify-between  items-start">
                {" "}
                <p className="font-bold text-2xl">
                  {item.product.title}
                  <br />
                  <span className="font-medium">
                    {" "}
                    ({item.product.color || "No Colour"})
                  </span>
                </p>
                {/* Quantity */}
                <div className="flex flex-row items-center gap-4">
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      disabled={loading[item.id]}
                      onClick={() =>
                        updateQty(item.id, Number(item.quantity) - 1)
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="w-6 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      disabled={loading[item.id]}
                      onClick={() =>
                        updateQty(item.id, Number(item.quantity) + 1)
                      }
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    disabled={loading[item.id]}
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 mt-3"
                  >
                    <FiTrash2 size={22} />
                  </button>
                </div>
              </div>
              <div>
                <p>Description</p>
                <p>{item?.product?.short_description}</p>
              </div>
              <div className="text-2xl text-black mt-auto tracking-tighter">
                <p className="text-lg">Price:</p>
                <p className="font-semibold">
                  {Number(item.unit_price).toFixed(2)}
                  {item.product.currency}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 pt-6 flex justify-between items-center">
        <p className="text-2xl font-bold">Total: {total.toFixed(2)} USD</p>

        <button
          className="btn pryBtn text-lg px-8 py-3"
          onClick={() => (window.location.href = "/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
