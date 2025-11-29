"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bath } from "lucide-react";
import { RiRuler2Line } from "react-icons/ri";
import { LuBedDouble } from "react-icons/lu";
import { getFeaturedHome } from "@/utils/calls";
import HomeCardSkeleton from "@/components/ui/homeCardSkeleton";

function Browse() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeaturedHomes() {
      setLoading(true);
      try {
        const res = await getFeaturedHome();
        setHomes(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load featured homes");
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedHomes();
  }, []);

  return (
    <section className="py-24">
      <div className="container">
        {/* Header */}
        <div className="flex lg:flex-row flex-col gap-3 justify-between lg:py-12 py-6">
          <h2 className="text-primary leading-[110%] lg:max-w-[511px] lg:text-left text-center">
            Your Next Home Could Be Right Here
          </h2>
          <p className="text-greyText lg:max-w-[462px] font-medium text-center lg:text-left lg:text-2xl tracking-tighter lg:-tracking-[1.4px] lg:leading-[130%]">
            Browse our most recommended listings, carefully chosen based on
            quality, pricing, and demand. Let’s help you find the perfect match.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="cardWidth sm:overflow-x-auto no-scrollbar py-4">
        <div className="flex sm:flex-row flex-col gap-6 w-full md:mr-20 mr-10 lg:mr-24">
          {loading ? (
            [...Array(4)].map((_, i) => <HomeCardSkeleton />)
          ) : error ? (
            <p className="text-center text-red-500 w-full">{error}</p>
          ) : homes.length > 0 ? (
            homes.map((property, index) => (
              <Link
                key={index}
                href={`/listing/${property?.slug}`}
                className="bg-[#F5F5F5] rounded-[20px] hover:shadow-lg transition shrink-0 sm:w-[300px] sm:h-[480px] flex flex-col overflow-hidden p-4"
              >
                {/* Image */}
                <div className="relative w-full h-[250px] shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={property?.cover_photo?.url || "/images/house.jpg"}
                    alt={
                      property?.cover_photo?.url || property?.title || "A House"
                    }
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Save
                  </span>
                </div>

                {/* Card Content */}
                <div className="mt-5 flex flex-col gap-2">
                  <h3 className="text-2xl line-clamp-2  font-bold text-primary ">
                    {property?.title}
                  </h3>
                  <p className="text-xl font-bold capitalize">
                    {property.currency === "USD" ? "$" : "₦"}
                    {Number(property.price).toLocaleString()}
                    {property?.listing_type !== "sale" &&
                      `/${property?.payment_frequency}`}
                  </p>
                  <p className="text-sm text-greyText flex items-center gap-2">
                    {property.city}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-greyText mt-3">
                    <span className="flex items-center gap-1">
                      <LuBedDouble size={14} /> {property?.bedrooms}bed
                    </span>
                    <div className="h-4 w-px bg-gray-400" />
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {property?.bathrooms}bath
                    </span>
                    <div className="h-4 w-px bg-gray-400" />
                    <span className="flex items-center gap-1">
                      <RiRuler2Line size={14} /> {property?.size}m<sup>2</sup>
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">
              No featured homes available right now.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Browse;
