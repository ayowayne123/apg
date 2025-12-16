"use client";

import Image from "next/image";
import { FaTrash } from "react-icons/fa6";

type ProductImage = {
  url: string;
  alt?: string | null;
};

type Product = {
  id: number;
  title: string;
  color: string;
  price: number | string;
  stock_availability: "in_stock" | "out_of_stock" | string;
  cover_photo?: ProductImage;
};

export default function ProductWishCard({
  product,
  onRemove,
  onAddToCart,
}: {
  product: Product;
  onRemove: (id: number) => void;
  onAddToCart: (id: number) => void;
}) {
  const outOfStock = product.stock_availability !== "in_stock";

  return (
    <div
      className={
        "w-full flex items-center gap-6 p-4 relative h-52 " +
        (outOfStock ? "opacity-50 grayscale" : "")
      }
    >
      <div className="relative h-full w-72">
        <Image
          src={product.cover_photo?.url ?? "/placeholder.png"}
          alt={product.cover_photo?.alt || product.title}
          fill
          className="rounded-lg object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between h-full tracking-tighter">
        <div>
          <h3 className="text-2xl font-bold">{product.title}</h3>
          <p className="text-xl font-medium">({product.color})</p>
        </div>

        {outOfStock ? (
          <p className="mt-1 text-red-600 font-bold">Out of stock</p>
        ) : (
          <div>
            <p className="mt-1 font-semibold">Price:</p>
            <p className="text-gray-800 font-bold text-xl">${product.price}</p>
          </div>
        )}
      </div>

      <div className="self-end flex flex-row gap-2 items-center">
        <button
          disabled={outOfStock}
          onClick={() => onAddToCart(product.id)}
          className={
            "h-12 rounded-full flex items-center justify-center w-[120px] text-sm font-medium tracking-tighter " +
            (outOfStock
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary hover:bg-primary/80 cursor-pointer")
          }
        >
          {outOfStock ? "Out of Stock" : "Add to Cart"}
        </button>

        <button
          onClick={() => onRemove(product.id)}
          className="cursor-pointer text-[#F64E60] bg-[#FFEFF0] h-12 w-12 flex items-center justify-center rounded-full hover:text-red-700"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
}
