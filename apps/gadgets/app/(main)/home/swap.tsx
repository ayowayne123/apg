import React from "react";
import Image from "next/image";
import silverGold from "@/public/images/silverGold.jpg";
import Link from "next/link";

function Swap() {
  return (
    <div className="flex flex-row h-[568px] ">
      <div className="w-5/12 py-16">
        <h3 className="lg:text-[48px] lg:leading-[100%] font-bold lg:tracking-[-2.88px]">
          Swap Smart. Upgrade Without the Hassle.
        </h3>
        <p className="text-[#656565] text-2xl font-medium tracking-[-1.44px] mt-5">
          Got an old device? Trade it in and get value towards your next
          upgrade. Our Gadget Swap service is fast, transparent, and built to
          give you more—because staying updated shouldn’t break the bank.
        </p>
        <Link href="/" className="mt-[56px] w-[190px] btn pryBtn btnBig">
          Contact Sales
        </Link>
      </div>
      <div className="w-7/12 relative">
        <Image
          src={silverGold}
          alt="silver and Gold revolving arrows"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Swap;
