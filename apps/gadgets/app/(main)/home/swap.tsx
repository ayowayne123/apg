import React from "react";
import Image from "next/image";
import silverGold from "@/public/images/silverGold.jpg";
import Link from "next/link";

function Swap() {
  return (
    <div className="lg:flex lg:flex-row grid grid-cols-1 md:grid-cols-2 lg:h-[568px] ">
      <div className="lg:w-5/12 py-16">
        <h3 className="lg:text-[48px] text-4xl tracking-tighter lg:leading-[100%] font-bold lg:tracking-[-2.88px]">
          Swap Smart. Upgrade Without the Hassle.
        </h3>
        <p className="text-[#656565] text-2xl md:text-lg lg:text-2xl font-medium tracking-[-1.44px] mt-5">
          Got an old device? Trade it in and get value towards your next
          upgrade. Our Gadget Swap service is fast, transparent, and built to
          give you more—because staying updated shouldn’t break the bank.
        </p>
        <Link
          href="https://wa.me/2348102795605?text=Hi%20APG%20Gadgets%20👋%0A%0AI%E2%80%99d%20like%20to%20use%20your%20Gadget%20Swap%20service.%20I%20have%20an%20old%20device%20I%E2%80%99d%20like%20to%20trade%20in%20and%20upgrade.%0A%0APlease%20let%20me%20know%20the%20next%20steps.%20Thank%20you!"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:mt-[56px] mt-10 w-40 lg:w-[190px] btn pryBtn btnBig"
        >
          Start Swap
        </Link>
      </div>
      <div className="lg:w-7/12 relative min-h-64 row-start-1 ">
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
