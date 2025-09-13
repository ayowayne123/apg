import React from "react";
import Image from "next/image";
import Link from "next/link";
import house from "@/public/images/house.jpg";
import { Bath, Ruler } from "lucide-react";
import { RiRuler2Line } from "react-icons/ri";
import { LuBedDouble } from "react-icons/lu";

const listings = [
  {
    slug: "the-grand-haven",
    title: "The Grand Haven",
    price: "NGN 500,000",
    location: "Toyin Street, Ikoyi, Lagos",
    beds: 3,
    baths: 3,
    size: "740m²",
    image: house,
  },
  {
    slug: "sunset-villa",
    title: "Sunset Villa",
    price: "NGN 850,000",
    location: "Banana Island, Lagos",
    beds: 4,
    baths: 4,
    size: "950m²",
    image: house,
  },
  {
    slug: "lagoon-heights",
    title: "Lagoon Heights",
    price: "NGN 1,200,000",
    location: "Victoria Island, Lagos",
    beds: 5,
    baths: 5,
    size: "1200m²",
    image: house,
  },
  {
    slug: "oakwood-residence",
    title: "Oakwood Residence",
    price: "NGN 700,000",
    location: "Odutola Str, Egbeda, Lagos",
    beds: 3,
    baths: 3,
    size: "800m²",
    image: house,
  },

  {
    slug: "emerald-vista",
    title: "Emerald Vista",
    price: "NGN 950,000",
    location: "Chevron Drive, Lekki, Lagos",
    beds: 4,
    baths: 4,
    size: "1,050m²",
    image: house,
  },

  {
    slug: "palms-residence",
    title: "Palms Residence",
    price: "NGN 600,000",
    location: "Ago Palace Way, Okota, Lagos",
    beds: 2,
    baths: 2,
    size: "680m²",
    image: house,
  },

  {
    slug: "citrine-court",
    title: "Citrine Court",
    price: "NGN 1,400,000",
    location: "Admiralty Way, Lekki Phase 1, Lagos",
    beds: 5,
    baths: 6,
    size: "1,300m²",
    image: house,
  },
];

function Browse() {
  return (
    <section className="py-24">
      <div className="container">
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
          {listings.map((property, index) => (
            <Link
              key={index}
              href={`/listing/${property.slug}`}
              className="bg-[#F5F5F5] rounded-[20px] hover:shadow-lg transition shrink-0 sm:w-[300px] sm:h-[450px] flex flex-col overflow-hidden p-4"
            >
              {/* Image */}
              <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 right-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Save
                </span>
              </div>

              {/* Card Content */}
              <div className="mt-5 flex flex-col gap-2 ">
                <h3 className="text-2xl font-bold text-primary">
                  {property.title}
                </h3>
                <p className="text-xl font-bold">{property.price}</p>
                <p className="text-sm text-greyText flex items-center gap-2">
                  {property.location}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-greyText mt-3 ">
                  <span className="flex items-center gap-1">
                    <LuBedDouble size={14} /> {property.beds}bd
                  </span>
                  <div className="h-4 w-px bg-gray-400" />
                  <span className="flex items-center gap-1">
                    <Bath size={14} /> {property.baths}ba
                  </span>
                  <div className="h-4 w-px bg-gray-400" />
                  <span className="flex items-center gap-1">
                    <RiRuler2Line size={14} /> {property.size}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Browse;
