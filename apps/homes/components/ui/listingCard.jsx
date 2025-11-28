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
      className="bg-[#F5F5F5] rounded-[20px] hover:shadow-lg transition shrink-0 sm:w-full sm:h-[450px] flex flex-col overflow-hidden p-4"
    >
      {/* Image */}
      <div className="relative w-full h-[250px] max-h-[250px]  rounded-2xl overflow-hidden bg-black shrink-0">
        <Image
          src={listing?.cover_photo?.url || "icons/apg-homes.png"}
          alt={listing?.title || "Image of House"}
          fill
          className={` ${
            listing?.cover_photo?.url
              ? "object-cover"
              : "bg-gray-100 object-contain"
          }`}
        />
      </div>

      {/* Card Content */}
      <div className="mt-5 flex flex-col gap-2 h-full justify-between">
        <>
          <h3 className="text-xl font-bold text-primary tracking-tighter line-clamp-2  leading-tight ">
            {listing.title}
          </h3>
          <p className="text-lg font-bold capitalize">
            {listing.currency === "USD" ? "$" : "₦"}
            {Number(listing.price).toLocaleString()}
            {listing?.listing_type !== "sale" &&
              `/${listing?.payment_frequency}`}
          </p>
          <p className="text-sm text-greyText flex items-center gap-2">
            {listing.city}
          </p>
        </>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-greyText mt-auto ">
          <span className="flex items-center gap-1">
            <LuBedDouble size={14} /> {listing.bedrooms}bd
          </span>
          <div className="h-4 w-px bg-gray-400" />
          <span className="flex items-center gap-1">
            <Bath size={14} /> {listing.bathrooms}ba
          </span>
          <div className="h-4 w-px bg-gray-400" />
          <span className="flex items-center gap-1">
            <RiRuler2Line size={14} /> {listing.size} m<sup>2</sup>
          </span>
        </div>
      </div>
    </Link>
  );
}
