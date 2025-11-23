"use client";
import Image from "next/image";
import { MapPin, Home, Ruler, Bath } from "lucide-react";
import { LuBedDouble } from "react-icons/lu";
import Link from "next/link";
import React from "react";
import DetailsGallery from "./detailsGallery";
import PropertyMap from "./propertyMap";
import HouseRules from "./houseRules";

export default function Details({ listing }) {
  const {
    title,
    address,
    price,
    city,
    state,
    country,
    cover_photo,
    bedrooms,
    bathrooms,
    toilets,
    size,
    description,
    amenities,
    furnishing,
    gallery,
    longitude,
    latitude,
    currency,
  } = listing;

  const mergedGallery = cover_photo
    ? [{ url: cover_photo?.url, alt: cover_photo?.alt || title }, ...gallery]
    : gallery;
  return (
    <div className="container">
      <div className="  mx-auto tracking-tighter">
        {/* Hero Section */}
        <div className="relative h-80 lg:h-[469px] rounded-2xl overflow-hidden">
          <Image
            src={cover_photo?.url || "/images/house-hero.jpg"}
            alt={cover_photo?.alt || title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-50% via-[#1F0452]/36 to-black/5 flex items-end">
            <div className="p-6 w-full lg:px-20 lg:py-12 text-white flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="text-white mt-3 lg:text-2xl">
                  Home/Rentals/{title}
                </div>
              </div>
              <Link
                href="/"
                className="btn secBtn btnBig lg:w-[187px] shrink-0"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Property Meta Info */}
        <div className="mt-6 flex flex-wrap justify-between items-center gap-2 w-full bg-secondaryLight lg:px-10 lg:py-7 rounded-[15px] font-medium lg:text-2xl">
          {/* Address */}
          <span className="flex items-center gap-2 max-w-sm">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white flex-shrink-0">
              <MapPin size={20} className="text-secondary" />
            </span>
            <span className="leading-tight lg:text-xl">
              {address}, {city}, {state}
            </span>
          </span>

          {/* Type */}
          <span className="flex items-center gap-2 capitalize">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white ">
              <Home size={20} className="text-secondary" />
            </span>
            {listing?.type}
          </span>

          {/* Price */}
          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              💰
            </span>
            {currency === "USD" ? "$" : "₦"}
            {Number(price).toLocaleString()}{" "}
            {listing?.listing_type !== "sale" &&
              `/${listing?.payment_frequency}`}
          </span>

          {/* Bedrooms */}
          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <LuBedDouble size={20} className="text-secondary" />
            </span>
            {bedrooms} bd
          </span>

          {/* Bathrooms */}
          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <Bath size={20} className="text-secondary" />
            </span>
            {bathrooms} ba
          </span>

          {/* Size */}
          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <Ruler size={20} className="text-secondary" />
            </span>
            {size}m<sup>2</sup>
          </span>

          {/* Last Updated (only for shortlets/rentals) */}
          {["rent", "shortlet"].includes(listing?.listing_type) && (
            <span className="block text-gray-500 text-sm mt-4 w-full text-right">
              Last updated: {new Date(listing?.updatedAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* About Section */}
        <section className="mt-12">
          <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px] ">
            About the property
          </h3>
          <p className="mt-3 text-2xl text-greyText font-medium  leading-relaxed">
            {description}
          </p>
        </section>

        {/* Key Features */}
        <section className="mt-10">
          <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px] ">
            Key Features
          </h3>

          <p className="mt-3 text-2xl text-greyText font-medium  leading-relaxed">
            Amenities available in this property:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-3 text-xl text-greyText font-medium">
            {amenities?.map((feature, i) => (
              <li key={i} className="capitalize">
                {feature.replace(/_/g, " ")}
              </li>
            ))}
          </ul>
        </section>
        <HouseRules rules={listing?.house_rules} />

        {/* Property Details */}
        <section className="mt-10">
          <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px] mb-4">
            Property Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 rounded-2xl text-lg ">
            {listing?._id && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Property Ref:</span>
                <span>{listing?._id}</span>
              </div>
            )}
            {listing?.type && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">
                  Property Type:
                </span>
                <span className="capitalize">{listing?.type}</span>
              </div>
            )}
            {bedrooms && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Bedrooms:</span>
                <span>{bedrooms}</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Bathrooms:</span>
                <span>{bathrooms}</span>
              </div>
            )}
            {toilets && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Toilets:</span>
                <span>{toilets}</span>
              </div>
            )}
            {listing?.parking_spaces && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">
                  Parking Spaces:
                </span>
                <span>{listing?.parking_spaces}</span>
              </div>
            )}
            {furnishing && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Furnishing:</span>
                <span className="capitalize">{furnishing}</span>
              </div>
            )}
            {listing?.servicing && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Servicing:</span>
                <span className="capitalize">{listing?.servicing}</span>
              </div>
            )}
            {listing?.listing_type && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Listing Type:</span>
                <span className="capitalize">{listing?.listing_type}</span>
              </div>
            )}
            {listing?.updatedAt && (
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-medium text-gray-700">Last Updated:</span>
                <span>{new Date(listing?.updatedAt).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </section>

        {/* Gallery */}
        <DetailsGallery gallery={mergedGallery} />

        <PropertyMap lat={latitude} lng={longitude} />

        {/* Back Button */}
        <div className="mt-20 text-center mb-6 lg:mb-32">
          <Link
            href={`/${listing?.listing_type}`}
            className="btn secBtn btnBig w-[220px] cursor-pointer"
          >
            Back to Listings
          </Link>
        </div>
      </div>
    </div>
  );
}
