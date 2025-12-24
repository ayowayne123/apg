"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
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

export default function OrderCard({
  order,
  onAddToCart,
}: {
  order: Order;
  onAddToCart: (productId: number) => void;
}) {
  const [showTrack, setShowTrack] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState("");
  const router = useRouter();

  const handleBuyAgain = () => {
    onAddToCart(order.product.id);
    router.push("/cart");
  };

  const handleSendReview = () => {
    console.log("Order ID:", order.id);
    console.log("Rating:", selectedRating);
    console.log("Review:", reviewText);
    toast.success("Review submitted!");
    setShowReview(false);
    setSelectedRating(null);
    setReviewText("");
  };

  const isDelivered = order.status === "Delivered";

  return (
    <div
      className={`w-full flex items-center gap-6 p-4 relative h-52 ${
        order.status === "Cancelled" ? "opacity-50 grayscale" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-full w-72 rounded-xl overflow-hidden bg-apgGrey">
        <Image
          src={order.product.image}
          alt={order.product.title}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between h-full tracking-tighter">
        <div>
          <h3 className="text-2xl font-bold">{order.product.title}</h3>
          <p className="text-sm text-greyText">
            {order.ordered_at} • {order.product.price} {order.product.currency}
          </p>
          <span
            className={`inline-block mt-1 px-3 py-1 text-xs rounded-full font-medium ${
              isDelivered
                ? "bg-green-100 text-green-700"
                : order.status === "Processing"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {order.status}
          </span>
        </div>

        {/* Buttons */}
        <div className="self-end flex flex-row gap-2 items-center">
          {isDelivered ? (
            <>
              <button
                onClick={handleBuyAgain}
                className="h-12 rounded-full flex items-center justify-center w-[120px] text-sm font-medium tracking-tighter bg-primary hover:bg-primary/80"
              >
                Buy Again
              </button>

              <button
                onClick={() => setShowReview(true)}
                className="h-12 rounded-full flex items-center justify-center w-[120px] text-sm font-medium tracking-tighter bg-blue-100 text-blue-700 hover:bg-blue-200"
              >
                Review
              </button>
            </>
          ) : order.status === "Processing" ? (
            <button
              onClick={() => setShowTrack(true)}
              className="h-12 rounded-full flex items-center justify-center w-[120px] text-sm font-medium tracking-tighter bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
            >
              Track
            </button>
          ) : null}
        </div>
      </div>

      {/* Track Modal */}
      {showTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h3 className="font-bold text-xl mb-4">Tracking Info</h3>
            <p>Order #{order.id} is currently in progress.</p>
            <button
              onClick={() => setShowTrack(false)}
              className="mt-4 px-4 py-2 bg-primary rounded-full text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl w-96 flex flex-col gap-4">
            <h3 className="font-bold text-xl">
              How would you rate your experience?
            </h3>

            {/* Emoji Ratings */}
            <div className="flex gap-2 text-2xl justify-center">
              {["😡", "😕", "😐", "🙂", "😍"].map((emoji, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedRating(idx + 1)}
                  className={`${
                    selectedRating === idx + 1 ? "scale-125" : ""
                  } transition-transform`}
                >
                  {emoji}
                </button>
              ))}
            </div>

            {/* Review Text */}
            {selectedRating && (
              <textarea
                placeholder="Add a review (optional)"
                className="border p-2 rounded-md w-full resize-none"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            )}

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowReview(false)}
                className="px-4 py-2 bg-gray-300 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={handleSendReview}
                disabled={!selectedRating}
                className="px-4 py-2 bg-blue-600 text-white rounded-full disabled:bg-blue-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
