"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getCart, updateCartItem, removeCartItem } from "@/lib/calls/cartCalls";
import { Product } from "@/lib/types";

type CartItem = {
  id: number;
  quantity: string;
  unit_price: string;
  subtotal: number;
  product: Product;
};

type CartContextType = {
  cartId: number | null;
  items: CartItem[];
  total: number;
  count: number;
  loading: boolean;
  refreshCart: () => Promise<void>;
  updateQtyOptimistic: (id: number, qty: number) => Promise<void>;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

const CART_STORAGE_KEY = "apg_cart_v1";
const CART_ID_STORAGE_KEY = "apg_cart_id_v1";

/* -------------------------
   Storage helpers
--------------------------*/
const loadCartFromStorage = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]) => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
};

export const loadCartIdFromStorage = (): number | null => {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(CART_ID_STORAGE_KEY);
  return raw ? Number(raw) : null;
};

const saveCartIdToStorage = (id: number) => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(CART_ID_STORAGE_KEY, String(id));
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCartFromStorage());
  const [cartId, setCartId] = useState<number | null>(() =>
    loadCartIdFromStorage()
  );

  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(items.length === 0);

  /* -------------------------
     Recalculate + persist
  --------------------------*/
  const recalc = (cartItems: CartItem[]) => {
    setItems(cartItems);

    const qty = cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);
    setCount(qty);

    const totalAmount = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
    setTotal(totalAmount);

    saveCartToStorage(cartItems);
  };

  /* -------------------------
     Background refresh
  --------------------------*/
  const refreshCart = async () => {
    try {
      const res = await getCart();
      const cart = res?.data;
      if (!cart) return;

      setCartId(cart.id);
      saveCartIdToStorage(cart.id); // ✅ important
      recalc(cart.items || []);
    } catch {
      // fallback stays
    } finally {
      setLoading(false);
    }
  };

  /* -------------------------
     Optimistic update
  --------------------------*/
  const updateQtyOptimistic = async (id: number, qty: number) => {
    const prevItems = [...items];

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

    try {
      if (qty <= 0) await removeCartItem(id);
      else await updateCartItem(id, qty);
    } catch {
      recalc(prevItems);
      throw new Error("Cart update failed");
    }
  };
  const clearCart = () => {
    recalc([]);
    setCartId(null);
    sessionStorage.removeItem(CART_ID_STORAGE_KEY);
  };
  /* -------------------------
     Initial background sync
  --------------------------*/
  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartId,
        items,
        total,
        count,
        loading,
        refreshCart,
        updateQtyOptimistic,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
