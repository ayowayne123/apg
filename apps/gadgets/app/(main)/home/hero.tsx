"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero from "@/public/images/heroPhones.png";

const slides = [
  {
    id: 1,
    bgColor: "bg-primary",
    image: hero,
    title: (
      <>
        Smartphones That
        <br /> Keep You Ahead
      </>
    ),
    text: "Explore the latest Android and iOS devices built for performance, style, and productivity,  delivered with speed and trust across Nigeria.",
  },
  {
    id: 2,
    bgColor: "bg-apgCream",
    image: hero,
    title: (
      <>
        Accessories That
        <br />
        Power Your Lifestyle
      </>
    ),
    text: "From fast chargers to wireless earbuds and smartwatches, we’ve got all the extras that enhance your tech experience.",
  },
  {
    id: 3,
    bgColor: "bg-primary",
    image: hero,
    title: (
      <>
        Work Smart. Game Hard.
        <br />
        Stay Connected.
      </>
    ),
    text: "Choose from a reliable range of laptops, desktops, and hybrids—perfect for professionals, creatives, and everyday users alike.",
  },
  {
    id: 4,
    bgColor: "bg-apgCream",
    image: hero,
    title: (
      <>
        Cool Tech.
        <br />
        Smart Living.
      </>
    ),
    text: "Find everyday gadgets that bring convenience and innovation to your life—from smart home tools to on-the-go tech solutions.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Auto-play every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative h-[650px] md:h-[600px] lg:h-[760px] w-full overflow-hidden rounded-3xl lg:rounded-[35px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            slide.bgColor
          } ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Text + Buttons */}
          <div className="relative z-20 flex flex-col h-full items-center pt-16 lg:pt-12">
            <p className="lg:text-2xl md:text-xl text-lg font-semibold tracking-wide lg:tracking-wider">
              ARTICULATE PLUGS & GADGETS
            </p>
            <h3 className="px-1 text-black text-center leading-[100%] text-[30px] md:text-4xl lg:text-5xl font-bold  tracking-[-1.92px] lg:tracking-[-2.88px] mt-5 ">
              {slide.title}
            </h3>
            <p className="md:mt-5 mt-3 text-[18px] sm:text-xl  text-greyText max-w-xl px-1 text-center tracking-[-1.2px]">
              {slide.text}
            </p>
            <div className="flex sm:flex-row flex-col gap-6 mt-6 lg:mt-16">
              <Link
                href="/products"
                className={`btn btnBig  w-40 lg:w-[187px] transition ${
                  slide.id % 2 === 0 ? "pryBtn" : "altBtn"
                }`}
              >
                Shop Now
              </Link>
              <Link
                href="/"
                className="btn btnBig secBtn w-40 lg:w-[187px] transition"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Image at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[320px] lg:h-[350px]">
            <Image
              src={slide.image}
              alt="Hero visual"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 lg:left-12 flex items-center   z-30">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border-2 border-black  hover:bg-black hover:text-white transition"
        >
          <ChevronLeft className="lg:w-6 w-4 h-4 lg:h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 lg:right-12 flex items-center z-30">
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border-2 border-black  hover:bg-black hover:text-white transition"
        >
          <ChevronRight className="lg:w-6 w-4 h-4 lg:h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-black" : "bg-black/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
