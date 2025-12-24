"use client";

import { useState } from "react";
import OrderCard from "@/components/ui/orderCard";
import { useRouter } from "next/navigation";

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

const demoOrders: Order[] = [
  {
    id: 1,
    product: {
      id: 101,
      title: "AirPods Max",
      image: "/images/airpods.png",
      price: 480,
      currency: "USD",
    },
    status: "Delivered",
    ordered_at: "Oct 12, 2025",
  },
  {
    id: 2,
    product: {
      id: 102,
      title: "Sony WH-1000XM5",
      image: "/images/ps5.png",
      price: 399,
      currency: "USD",
    },
    status: "Processing",
    ordered_at: "Oct 18, 2025",
  },
  {
    id: 3,
    product: {
      id: 132,
      title: "JBL Speakers",
      image: "/images/jblSpeaker.png",
      price: 30000,
      currency: "NGN",
    },
    status: "Cancelled",
    ordered_at: "Jun 18, 2025",
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(demoOrders);
  const [activeTab, setActiveTab] = useState<OrderStatus | "All">("All");
  const router = useRouter();

  const filteredOrders =
    activeTab === "All" ? orders : orders.filter((o) => o.status === activeTab);

  const handleAddToCart = (productId: number) => {
    console.log("Add to cart:", productId);
    router.push("/cart");
  };

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

      {/* Order Cards */}
      <div className="flex flex-col gap-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
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
