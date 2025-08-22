"use client";
import React, { useState } from "react";
import bg from "@/public/icons/contourBg.png";
import Image from "next/image";

function PluggedIn() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed name:", email);
    // You can also log email if needed
    // console.log("Subscribed email:", email);
    setName("");
    setEmail("");
  };
  return (
    <div className="w-full lg:h-[465px] sm:min-h-96 h-80  relative  overflow-hidden z-10">
      <Image
        src={bg}
        alt="spiral"
        fill
        className="object-cover z-10"
        priority
      />
      <div className="h-full w-full  flex items-center justify-center bg-primary/70 z-20 absolute text-white">
        <div className="container ">
          <div className="grid grid-cols-2 w-full lg:px-36 xl:px-48 lg:gap-12">
            <h2 className="tracking-tighter">
              Stay plugged in. Get deals, listings, and news.
            </h2>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Your Email Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-7 text-xl rounded-md text-white placeholder:text-white focus:outline-none focus:bg-white focus:text-black focus:placeholder:text-black bg-[#F9F9F9]/10 max-w-[353px]"
                  required
                />
                <button
                  type="submit"
                  className="btn secBtn btnBig lg:w-[266px]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PluggedIn;
