// details.jsx
import Image from "next/image";
import { MapPin, Home, Ruler, Bath } from "lucide-react";
import Link from "next/link";

export default function Details() {
  // static mock data (replace later with dynamic props)
  const property = {
    title: "The Grand Haven",
    location: "Toyin Street, Ikoyi, Lagos",
    price: "₦500,000",
    beds: 3,
    baths: 3,
    size: "740m²",
    description: (
      <>
        The Grand Haven is a luxurious residence that blends elegance, comfort,
        and modern design. Featuring spacious interiors, high-end finishes, and
        breathtaking views, this home offers an unparalleled living experience.
        With top-tier amenities and a prime location, The Grand Haven is the
        perfect retreat for those seeking style and sophistication.
        <br />
        <br />
        Step inside to experience thoughtfully designed interiors with soaring
        ceilings, large windows that flood the home with natural light, and
        premium materials that exude timeless beauty. The open-concept layout
        seamlessly connects the living, dining, and kitchen areas, creating an
        inviting space for relaxation and entertainment.
      </>
    ),
    features: [
      "Luxury Living – Elegant design, spacious interiors, and high-end finishes",
      "Custom Kitchens – Custom cabinetry, premium appliances, and modern layouts",
      "Spacious Bedrooms – Luxurious private retreats with ensuite bathrooms",
      "Outdoor Spaces – Expansive balconies and landscaped gardens",
      "Exclusive Amenities – Swimming pool, gym, and community recreation amenities",
      "Perfect for Entertaining – Open concept design ideal for gatherings",
      "Prime Location – Convenient access to top attractions, dining, and shopping",
    ],
    gallery: [
      "/images/interior1.jpg",
      "/images/interior2.jpg",
      "/images/interior3.jpg",
      "/images/interior4.jpg",
    ],
  };

  return (
    <div className="container">
      <div className="  mx-auto">
        {/* Hero Section */}
        <div className="relative h-80 lg:h-[469px] rounded-2xl overflow-hidden">
          <Image
            src="/images/house-hero.jpg"
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-50% via-[#1F0452]/36 to-black/5 flex items-end">
            <div className="p-6 w-full lg:px-20 lg:py-12 text-white flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <div className="text-white mt-3 lg:text-2xl">
                  Home/Rentals/{property.title}
                </div>
              </div>
              <Link href="/" className="btn secBtn btnBig lg:w-[187px]">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Property Meta Info */}
        <div className="mt-6 flex flex-wrap justify-between items-center w-full bg-secondaryLight lg:p-11 rounded-[15px] font-medium lg:text-2xl">
          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <MapPin size={20} className="text-secondary" />
            </span>
            {property.location}
          </span>

          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <Home size={20} className="text-secondary" />
            </span>
            {property.price}
          </span>

          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <span className="text-secondary text-lg">🛏</span>
            </span>
            {property.beds}bd
          </span>

          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <Bath size={20} className="text-secondary" />
            </span>
            {property.baths}ba
          </span>

          <span className="flex items-center gap-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white">
              <Ruler size={20} className="text-secondary" />
            </span>
            {property.size}
          </span>
        </div>

        {/* About Section */}
        <section className="mt-12">
          <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px] ">
            About the property
          </h3>
          <p className="mt-3 text-2xl text-greyText font-medium lg:tracking-[-1.5px] leading-relaxed">
            {property.description}
          </p>
        </section>

        {/* Key Features */}
        <section className="mt-10">
          <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px] ">
            The Grand Haven – Key Features
          </h3>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600">
            {property.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        <section className="mt-10">
          <h3 className="text-primary font-bold text-xl lg:text-2xl xl:text-[32px] tracking-tighter lg:-tracking-[1.9px]">
            Featured Gallery
          </h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* {property.gallery.map((img, i) => (
            <div key={i} className="relative h-48 rounded-lg overflow-hidden">
              <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover" />
            </div>
          ))} */}
          </div>
          <div className="mt-6 text-center">
            <button className="bg-havenGreen text-white px-6 py-2 rounded-lg">
              Back to Listings
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
