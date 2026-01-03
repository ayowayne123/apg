"use client";

import { useEffect, useState } from "react";
import OrderCard from "@/components/ui/orderCard";
import { useRouter } from "next/navigation";
import { getOrders } from "@/lib/calls/userCalls";

type OrderStatus = "Delivered" | "Processing" | "Cancelled";

type Order = {
  id: number;
  product: {
    id: number;
    title: string;
    image: string;
    price: number;
    currency: string;
  };
  status: OrderStatus;
  ordered_at: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<OrderStatus | "All">("All");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrders();
        const rawOrders = res?.data?.data || res?.data || [];

        const mappedOrders: Order[] = rawOrders.flatMap((order: any) =>
          order.items.map((item: any) => ({
            id: order.id,
            product: {
              id: item.product.id,
              title: item.product.title,
              image: item.product.cover_photo_url,
              price: Number(item.unit_price),
              currency: item.product.currency,
            },
            status: mapOrderStatus(order.status),
            ordered_at: new Date(order.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
          }))
        );

        setOrders(mappedOrders);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders =
    activeTab === "All" ? orders : orders.filter((o) => o.status === activeTab);

  const handleAddToCart = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading orders…</p>;
  }

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        {["All", "Delivered", "Processing", "Cancelled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as OrderStatus | "All")}
            className={`px-4 py-2 rounded-full font-medium ${
              activeTab === tab
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders */}
      <div className="flex flex-col gap-4">
        {filteredOrders.length ? (
          filteredOrders.map((order, idx) => (
            <OrderCard
              key={`${order.id}-${idx}`}
              order={order}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

const mapOrderStatus = (status: string): OrderStatus => {
  switch (status) {
    case "completed":
      return "Delivered";
    case "pending":
    case "processing":
      return "Processing";
    case "cancelled":
      return "Cancelled";
    default:
      return "Processing";
  }
};
