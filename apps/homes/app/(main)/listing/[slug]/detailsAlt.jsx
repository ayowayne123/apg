"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bath, Ruler, Home } from "lucide-react";
import { LuBedDouble } from "react-icons/lu";
import DetailsGallery from "./detailsGallery";
import PropertyMap from "./propertyMap";

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
    parking_spaces,
    listing_type,
    type,
    updatedAt,
  } = listing;

  return (
    <div className="container py-10">
      {/* Back Link */}
      <Link href="/rentals" className="text-secondary hover:underline">
        ← Back to property list
      </Link>

      {/* Title + Price */}
      <div className="mt-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-primary tracking-tight">
          {title}
        </h1>
        <p className="text-greyText text-xl mt-2">
          {type && `${type} •`} {city}, {state}
        </p>

        <div className="text-3xl font-bold mt-3 text-secondary">
          {currency === "USD" ? "$" : "₦"}
          {Number(price).toLocaleString()}
          {listing_type !== "sale" && (
            <span className="text-lg font-medium text-greyText">
              /{listing?.payment_frequency}
            </span>
          )}
        </div>
      </div>

      {/* Gallery */}
      <div className="mt-6">
        <DetailsGallery gallery={gallery} />
        <p className="text-sm text-gray-500 mt-2 text-center">
          Click image to view in fullscreen
        </p>
      </div>

      {/* Quick Facts */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 bg-secondaryLight p-6 rounded-2xl font-medium text-lg">
        {bedrooms ? (
          <div className="flex items-center gap-2">
            <LuBedDouble size={20} className="text-secondary" />
            {bedrooms} Bedroom{bedrooms > 1 && "s"}
          </div>
        ) : null}

        {bathrooms ? (
          <div className="flex items-center gap-2">
            <Bath size={20} className="text-secondary" />
            {bathrooms} Bathroom{bathrooms > 1 && "s"}
          </div>
        ) : null}

        {toilets ? (
          <div className="flex items-center gap-2">
            🚽 {toilets} Toilet{toilets > 1 && "s"}
          </div>
        ) : null}

        {parking_spaces ? (
          <div className="flex items-center gap-2">
            🅿️ {parking_spaces} Parking Space
          </div>
        ) : null}

        {furnishing ? (
          <div className="flex items-center gap-2">
            🪑 {furnishing === "furnished" ? "Furnished" : "Unfurnished"}
          </div>
        ) : null}

        {size ? (
          <div className="flex items-center gap-2">
            <Ruler size={20} className="text-secondary" /> {size} m<sup>2</sup>
          </div>
        ) : null}
      </div>

      {/* Description */}
      <section className="mt-10">
        <h3 className="text-primary font-bold text-2xl tracking-tight">
          Property Description
        </h3>
        <p className="mt-3 text-greyText text-lg leading-relaxed">
          {description || "No description provided."}
        </p>
      </section>

      {/* Amenities */}
      {amenities && amenities.length > 0 && (
        <section className="mt-10">
          <h3 className="text-primary font-bold text-2xl tracking-tight">
            Amenities
          </h3>
          {/* <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 text-greyText text-lg">
            {amenities.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul> */}
        </section>
      )}

      {/* Map */}
      {latitude && longitude && (
        <section className="mt-12">
          <h3 className="text-primary font-bold text-2xl tracking-tight mb-4">
            Location
          </h3>
          <div className="h-[400px] rounded-2xl overflow-hidden">
            <PropertyMap lat={latitude} lng={longitude} />
          </div>
        </section>
      )}

      {/* Meta + Contact */}
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm">
          Property Ref: {listing?._id || "—"} • Last updated:{" "}
          {new Date(updatedAt).toLocaleDateString()}
        </p>
        <Link
          href="/contact"
          className="btn secBtn btnBig mt-4 lg:mt-0 lg:w-[187px]"
        >
          Contact Sales
        </Link>
      </div>
    </div>
  );
}
