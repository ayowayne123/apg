"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function ListingCard({ listing }) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg">{listing.title}</h3>
        <p className="text-primary font-semibold">{listing.price}</p>
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin size={14} className="mr-1" /> {listing.location}
        </div>
        <Link href={`/details/${listing.id}`} className="text-blue-600 text-sm">
          View Details →
        </Link>
      </div>
    </div>
  );
}
