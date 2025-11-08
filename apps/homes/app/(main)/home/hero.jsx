"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import hero2 from "@/public/images/hero2.jpg";
import hero1 from "@/public/images/hero1.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: 1,
    image: hero1,
    title: (
      <>
        Stay in Style. <br />
        Live Like a Local.
      </>
    ),
    text: "Book fully-furnished shortlet apartments in prime locations—perfect for business trips, vacations, or weekend getaways.",
  },
  {
    id: 2,
    image: hero2,
    title: (
      <>
        Find a Place That <br />
        Feels Like Home
      </>
    ),
    text: "From budget-friendly flats to upscale apartments, we connect you to verified rental spaces that match your lifestyle and budget.",
  },
  {
    id: 3,
    image: hero3,
    title: (
      <>
        Own Your Dream <br />
        Home Today
      </>
    ),
    text: "Explore secure property options in fast-growing neighborhoods—ideal for living, investment, or retirement.",
  },
  {
    id: 4,
    image: hero4,
    title: (
      <>
        Browse. Compare. <br />
        Choose with Confidence.
      </>
    ),
    text: "Search our comprehensive listings to find the right property—filtered by price, location, type, and amenities to suit your exact needs.",
  },
];

export default function HeroSlider() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  // Slide controls
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  // Auto-play every 6s
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [current]);

  // Search state
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Validation: Must select type
    if (!type) {
      setError("Please select a type before searching.");
      return;
    }

    // Build query params
    const params = new URLSearchParams();
    if (location) params.append("address", location);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (bedrooms) params.append("bedrooms", bedrooms);

    // Reset error and redirect
    setError("");
    router.push(`/${type}?${params.toString()}`);
  };

  return (
    <div className="relative h-[300px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-4xl lg:rounded-[35px] w-full">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 w-full h-full text-white">
            <div className="px-8 md:px-16 pt-16 pb-8 flex flex-col h-full">
              <h1 className="text-primary text-3xl md:text-5xl font-semibold">
                {slide.title}
              </h1>
              <p className="mt-3 md:mt-4 text-sm md:text-xl max-w-[600px] text-heroText">
                {slide.text}
              </p>
              <div className="flex gap-4 items-center mt-6 md:mt-9">
                <Link
                  className="btn secBtn btnBig lg:w-[178px]"
                  href="/listings"
                >
                  Browse Listings
                </Link>
                <Link className="btn pryBtn btnBig lg:w-[178px]" href="/about">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Buttons */}
      <div className="absolute lg:bottom-[190px] right-6 md:right-16 flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border-2 border-white hover:bg-white/40 transition"
        >
          <ChevronLeft className="text-white w-7 h-7" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border-2 border-white hover:bg-white/40 transition"
        >
          <ChevronRight className="text-white w-7 h-7" />
        </button>
      </div>

      {/* Search Form */}
      <div className="absolute lg:bottom-8 w-full px-6 lg:px-16 z-20">
        <div className="backdrop-blur-2xl lg:h-[130px] bg-white/20 border border-white/40 rounded-2xl p-4 lg:px-7 lg:py-6 grid lg:grid-cols-4 gap-4">
          {/* Location */}
          <div className="flex flex-col bg-white py-3 px-4 rounded-lg">
            <label className="text-sm text-heroText mb-1">Location</label>
            <input
              type="text"
              placeholder="Enter city or area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="focus:outline-none text-heroText placeholder:text-placeholderText"
            />
          </div>

          {/* Type */}
          <div className="flex flex-col bg-white py-3 px-4 rounded-lg">
            <label className="text-sm text-heroText mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="focus:outline-none text-heroText bg-transparent"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="rentals">Rentals</option>
              <option value="shortlets">Shortlets</option>
              <option value="sales">Sales</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col bg-white py-3 px-4 rounded-lg">
            <label className="text-sm text-heroText mb-1">Bedrooms</label>
            <input
              type="number"
              placeholder="e.g. 2"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="focus:outline-none text-heroText placeholder:text-placeholderText"
            />
          </div>

          {/* Price Range + Search */}
          <div className="flex flex-row gap-2">
            <div className="flex flex-col bg-white py-3 px-4 rounded-lg flex-1">
              <label className="text-sm text-heroText mb-1">Price Range</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="px-2 py-1 rounded-lg focus:outline-none text-heroText placeholder:text-placeholderText"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="px-2 py-1 rounded-lg focus:outline-none text-heroText placeholder:text-placeholderText"
                />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="p-2 rounded-lg bg-primary w-[70px] shrink-0 hover:bg-primary/90 transition flex items-center justify-center"
            >
              <Search width={28} height={28} className="text-white" />
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-2 px-4 lg:px-16">{error}</p>
        )}
      </div>
    </div>
  );
}
