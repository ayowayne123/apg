/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import {
  addGuestItem,
  getGuestCart,
  removeGuestItem,
  updateGuestQuantity,
  clearGuestCart,
} from "./guestCart";
import { addToServerCart, getServerCart } from "../calls/cartCalls";
import { getUserProfile } from "../calls/userCalls";
import { useRouter } from "next/navigation";

export function useCart() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    getUserProfile()
      .then(async () => {
        setLoggedIn(true);
        const serverCart = await getServerCart();
        setItems(serverCart?.items || []);
      })
      .catch(() => {
        setLoggedIn(false);
        setItems(getGuestCart());
      });
  }, []);

  const add = async (product: any, qty = 1) => {
    if (!isLoggedIn) {
      const updated = addGuestItem(product, qty);
      setItems(updated);
      return;
    }

    await addToServerCart(product.id, qty);
    const updated = await getServerCart();
    setItems(updated?.items || []);
  };

  const remove = async (id: number | string) => {
    if (!isLoggedIn) {
      const updated = removeGuestItem(id);
      setItems(updated);
      return;
    }

    const updated = await getServerCart();
    setItems(updated?.items || []);
  };

  const updateQty = async (id: number | string, qty: number) => {
    if (!isLoggedIn) {
      const updated = updateGuestQuantity(id, qty);
      setItems(updated);
      return;
    }

    const updated = await getServerCart();
    setItems(updated?.items || []);
  };

  const clear = async () => {
    if (!isLoggedIn) {
      clearGuestCart();
      setItems([]);
      return;
    }

    setItems([]);
  };

  const total = (items || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const goToCheckout = () => {
    if (!isLoggedIn) {
      router.push("/login?redirect=/checkout");
      return;
    }
    router.push("/checkout");
  };

  return {
    isLoggedIn,
    items,
    total,
    add,
    remove,
    updateQty,
    clear,
    goToCheckout,
  };
}
