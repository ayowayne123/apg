"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeCard({ home }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/listing/${home.slug || home.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all bg-white"
    >
      <div className="relative h-52 w-full">
        <Image
          src={home.image || "/images/house.jpg"}
          alt={home.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
          {home.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-1">{home.location}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-primary text-base">
            ₦{home.price?.toLocaleString()}
          </p>
          <div className="flex gap-3 text-sm text-gray-600">
            {home.bedrooms !== undefined && <span>{home.bedrooms} 🛏</span>}
            {home.bathrooms !== undefined && <span>{home.bathrooms} 🛁</span>}
          </div>
        </div>

        {home.type && (
          <div className="mt-3 text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md w-fit capitalize">
            {home.type}
          </div>
        )}
      </div>
    </div>
  );
}
