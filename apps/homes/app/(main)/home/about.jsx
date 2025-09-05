"use client";
import Image from "next/image";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import img1 from "@/public/images/house1.jpg";
import img2 from "@/public/images/living.jpg";
import img3 from "@/public/images/modern3.jpg";
import img4 from "@/public/images/bedroom.jpg";
import user1 from "@/public/images/user1.jpg";
import user2 from "@/public/images/user1.jpg";
import user3 from "@/public/images/user1.jpg";
import user4 from "@/public/images/user1.jpg";

export default function ExperienceSection() {
  return (
    <section className="py-16 lg:py-24 xl:py-32 space-y-12 ">
      <div className="grid lg:grid-cols-2 lg:gap-40 ">
        {/* Left Column */}
        <div className="space-y-12">
          <h4 className="text-2xl md:text-4xl lg:text-5xl  leading-[100%]  text-primary lg:tracking-[-2.5px]">
            We don’t just offer spaces,
            <br />
            <span className="font-extrabold">we create experiences.</span>
          </h4>

          {/* Avatars + Rating */}
          <div className="flex items-end gap-4">
            <div className="flex -space-x-7">
              <Image
                src={user1}
                alt="User"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <Image
                src={user2}
                alt="User"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <Image
                src={user3}
                alt="User"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <Image
                src={user4}
                alt="User"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <Image
                src={user4}
                alt="User"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
            </div>
            <div className="flex flex-col  text-gray-700">
              <div className="flex items-center text-secondary">
                {Array.from({ length: 4 }).map((_, i) => (
                  <IoMdStar key={i} size={24} className=" text-secondary" />
                ))}
                <IoMdStarHalf size={24} className=" text-secondary" />
              </div>
              <span className="lg:text-xl text-primary lg:tracking-[-1.px] font-medium mt-2">
                Trusted by 40+ clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Column (Images Grid) */}
        <div>
          <p className="tracking-tight text-xl">
            Whether you’re booking a luxury shortlet, securing a rental, or
            investing in property, we simplify the process with verified
            listings, transparent deals, and personalized service.
          </p>
          {/* Stats */}
          <div className="flex flex-row items-center justify-between gap-6 mt-12">
            <div>
              <p className="text-2xl lg:text-6xl font-extrabold text-secondary lg:tracking-[-3.6px]">
                56+
              </p>
              <p className="mt-1 text-xl tracking-tight">Unit Already</p>
            </div>
            <div className="w-[0.3px] h-12 bg-greyText" />
            <div>
              <p className="text-2xl lg:text-6xl font-extrabold text-secondary lg:tracking-[-3.6px]">
                25+
              </p>
              <p className="mt-1 text-xl tracking-tight">Customer</p>
            </div>
            <div className="w-[0.3px] h-12 bg-greyText" />
            <div>
              <p className="text-2xl lg:text-6xl font-extrabold text-secondary lg:tracking-[-3.6px]">
                99%
              </p>
              <p className="mt-1 text-xl tracking-tight">Satisfied</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-2">
        <Image
          src={img1}
          alt="House"
          className="rounded-3xl object-cover w-full h-40 lg:h-[320px] hover:grayscale hover:shadow-lg hover:scale-105 transition-all duration-500 overflow-hidden"
        />
        <Image
          src={img2}
          alt="Living Room"
          className="rounded-3xl object-cover w-full h-40 hover:grayscale hover:shadow-lg hover:scale-105 transition-all duration-500 overflow-hidden lg:h-60"
        />
        <Image
          src={img3}
          alt="Modern House"
          className="rounded-3xl object-cover object-right w-full h-40 hover:grayscale hover:shadow-lg hover:scale-105 transition-all duration-500 overflow-hidden lg:h-[320px]"
        />
        <Image
          src={img4}
          alt="Bedroom"
          className="rounded-3xl object-cover w-full h-40 hover:grayscale hover:shadow-lg hover:scale-105 transition-all duration-500 overflow-hidden lg:h-60"
        />
      </div>
    </section>
  );
}
