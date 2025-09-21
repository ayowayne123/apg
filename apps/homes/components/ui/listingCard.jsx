"use client";
import Image from "next/image";
import Link from "next/link";
import house from "@/public/images/house.jpg";
import { Bath, Ruler } from "lucide-react";
import { RiRuler2Line } from "react-icons/ri";
import { LuBedDouble } from "react-icons/lu";

export default function ListingCard({ listing }) {
  return (
    <Link
      href={`/listing/${listing.slug}`}
      className="bg-[#F5F5F5] rounded-[20px] hover:shadow-lg transition shrink-0 sm:w-[300px] sm:h-[450px] flex flex-col overflow-hidden p-4"
    >
      {/* Image */}
      <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
        />
        <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
          Save
        </span>
      </div>

      {/* Card Content */}
      <div className="mt-5 flex flex-col gap-2 ">
        <h3 className="text-2xl font-bold text-primary">{listing.title}</h3>
        <p className="text-xl font-bold">{listing.price}</p>
        <p className="text-sm text-greyText flex items-center gap-2">
          {listing.location}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-greyText mt-3 ">
          <span className="flex items-center gap-1">
            <LuBedDouble size={14} /> {listing.beds}bd
          </span>
          <div className="h-4 w-px bg-gray-400" />
          <span className="flex items-center gap-1">
            <Bath size={14} /> {listing.baths}ba
          </span>
          <div className="h-4 w-px bg-gray-400" />
          <span className="flex items-center gap-1">
            <RiRuler2Line size={14} /> {listing.size}
          </span>
        </div>
      </div>
    </Link>
  );
}
