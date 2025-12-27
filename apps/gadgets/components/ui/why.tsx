import React from "react";
import Image from "next/image";
import hijab from "@/public/images/hijabLaptop.png";
import vr from "@/public/images/vrMan.png";

function Why() {
  return (
    <section className=" my-12 container">
      <div className="lg:px-16 lg:h-[722px]">
        <div className="bg-[#F5F5F5] rounded-2xl h-full lg;px-24 LG:py-16 items-center relative">
          {/* Text Section */}
          <div className=" mt-3">
            <div>
              <h3 className="text-[32px] font-medium text-[#151515] leading-[105%] tracking-[-1.92px]">
                Why Buy From Us?
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-[#151515] mt-2">
                Trust. Quality. <br />
                Convenience. <br />
                All in One Hub.
              </h2>
            </div>

            <div className="text-2xl tracking-[-1.4px] text-[#656565] leading-[237%] mt-4">
              <p className="flex items-center">Original products only</p>
              <p className="flex items-center">Competitive pricing</p>
              <p className="flex items-center">Delivery available</p>
            </div>

            <button className="btn btnBig pryBtn w-[190px] mt-12 ">
              Contact Sales
            </button>
          </div>

          {/* Image Section */}
          <div className="absolute right-0 bottom-0 w-[490px] h-full  z-20">
            <div className="relative h-full w-full ">
              <Image
                src={hijab}
                alt="Hijab Woman with Laptop"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>
          <div className="absolute right-[200px] bottom-0 w-[560px] h-full ">
            <div className="relative h-full w-full ">
              <Image
                src={vr}
                alt="VR Man"
                fill
                className="object-contain object-bottom-right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
