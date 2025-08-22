"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero2 from "@/public/images/hero2.jpg";
import hero1 from "@/public/images/hero1.jpg";
import hero3 from "@/public/images/hero3.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: (
      <>
        Your Plug for <span className="text-[#F1CB00]">Premium</span>
        <br />
        <span className="text-[#F1CB00]">Gadgets</span>, Delivered Fast
      </>
    ),
    text: "Discover a curated selection of top-tier smartphones, accessories, and electronics, reliable, affordable, and backed by trusted service across Nigeria.",
    gradientClass: "from-black",
  },
  {
    id: 2,
    image: hero2,
    title: (
      <>
        Empowering Entrepreneurs,
        <br />
        <span className="text-[#01AB8E]">Accelerating Growth</span>
      </>
    ),
    text: "From business registration to branding and digital tools, we provide the strategic support you need to build, launch, and scale your ideas confidently in Nigeria’s fast-paced market.",
    gradientClass: "from-primary",
  },
  {
    id: 3,
    image: hero3,

    title: (
      <>
        Where <span className="text-[#19CFDC]">Comfort</span>
        <br />
        Meets Investment
      </>
    ),
    text: "Whether you’re buying, renting, or investing, we help you secure smart real estate solutions in prime locations, built for lifestyle and long-term value.",
    gradientClass: "from-[#17033D]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(1);

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
    <div className="relative  h-[300px] md:h-[500px] lg:h-[590px] overflow-hidden rounded-4xl lg:rounded-[35px] w-full">
      {/* All slides stacked */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-500 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${slide.gradientClass} via-70% via-transparent`}
          ></div>

          {/* Text Content */}
          <div className="absolute bottom-12 left-6 md:left-12 xl:left-24 text-white ">
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tighter">
              {slide.title}
            </h2>
            <p
              className={`mt-3 text-sm md:text-base xl:text-xl text-[#E8E8E8] tracking-tighter leading-[130%] font-medium ${
                slide.id === 2 && "xl:max-w-[568px] max-w-[500px]"
              } ${slide.id === 1 && "max-w-[513px]"} ${
                slide.id === 3 && "max-w-[497px]"
              }`}
            >
              {slide.text}
            </p>
          </div>
        </div>
      ))}

      {/* Buttons */}
      <div className="absolute bottom-12 right-16 flex gap-3 z-20">
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
    </div>
  );
}
