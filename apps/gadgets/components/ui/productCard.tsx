"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
}

export default function ProductCard({
  id,
  name,
  price,
  currency,
  image,
  description,
}: ProductCardProps) {
  const [favourited, setFavourited] = useState(false);

  const toggleFavourite = () => {
    setFavourited(!favourited);
    if (!favourited) {
      toast.success(`${name} added to favourites`);
    } else {
      toast.error(`${name} removed from favourites`);
    }
  };

  return (
    <div
      className={`border border-apgGrey rounded-2xl p-4 flex flex-col hover:shadow-md transition ${
        id % 2 === 0 ? "bg-apgGrey" : "bg-apgCream"
      }`}
    >
      <div className="relative w-full h-64 bg-white border border-borderGrey rounded-2xl">
        <Image src={image} alt={name} fill className="object-contain py-12" />
      </div>

      <div className="mt-4 flex flex-col flex-grow">
        <h3 className="font-bold tracking-[-1.44px] text-2xl">{name}</h3>
        <p className="font-bold tracking-[-1.44px] text-2xl ">
          {price.toFixed(2)} {currency}
        </p>
        <p className="text-greyText text-sm mt-3 line-clamp-3  tracking-tight">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="btn btnSmall pryBtn w-[134px]">Add to Cart</button>
        <button
          onClick={toggleFavourite}
          className={`text-xl rounded-full flex items-center justify-center h-[53px] w-[53px] 
            ${favourited ? "bg-apgRed" : "bg-primary"}`}
        >
          <FaHeart className="text-white" />
        </button>
      </div>
    </div>
  );
}
