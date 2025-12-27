"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getCart, updateCartItem, removeCartItem } from "@/lib/calls/cartCalls";

type CartItem = {
  id: number;
  quantity: string;
  unit_price: string;
  subtotal: number;
  product: any;
};

type CartContextType = {
  items: CartItem[];
  total: number;
  count: number;
  loading: boolean;
  refreshCart: () => Promise<void>;
  updateQtyOptimistic: (id: number, qty: number) => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const recalc = (cartItems: CartItem[]) => {
    setItems(cartItems);

    const qty = cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);
    setCount(qty);

    const totalAmount = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    setTotal(totalAmount);
  };

  const refreshCart = async () => {
    setLoading(true);
    try {
      const res = await getCart();
      const cartItems = res?.data?.items || [];
      recalc(cartItems);
    } catch {
      recalc([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * 🔥 OPTIMISTIC UPDATE
   */
  const updateQtyOptimistic = async (id: number, qty: number) => {
    // Snapshot (rollback safety)
    const prevItems = [...items];

    // 1️⃣ Update UI immediately
    let nextItems: CartItem[];

    if (qty <= 0) {
      nextItems = items.filter((item) => item.id !== id);
    } else {
      nextItems = items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: String(qty),
              subtotal: qty * Number(item.unit_price),
            }
          : item
      );
    }

    recalc(nextItems);

    // 2️⃣ Sync with server
    try {
      if (qty <= 0) await removeCartItem(id);
      else await updateCartItem(id, qty);
    } catch {
      // ❌ rollback if server fails
      recalc(prevItems);
      throw new Error("Cart update failed");
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        count,
        loading,
        refreshCart,
        updateQtyOptimistic,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
