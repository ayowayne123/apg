import React from "react";
import phoneUp from "@/public/images/phoneSlant.png";
import Image from "next/image";

function Discount() {
  return (
    <section className="my-8 text-greyText xl:py-20 lg:py-16 py-12">
      <div className="bg-primary relative px-12 pt-12 lg:px-12 xl:px-20 flex h-[450px] xl:h-[350px] lg:h-[320px] lg:py-12  xl:py-[60px] lg:mt-32 rounded-[30px]">
        <div className="shrink-0 max-w-[270px]">
          <p className="text-2xl font-semibold uppercase tracking-[1.96px]">
            Happy hour deal
          </p>
          <h3 className="lg:text-[48px] lg:leading-[100%] font-bold lg:tracking-[-2.88px] mt-2 mb-6">
            Samsung Galaxy S24 Series
          </h3>
          <p className="text-2xl font-bold tracking-[-1.26px]">
            20th Oct To 1st Nov
          </p>
        </div>
        <div className="px-2 text-center uppercase bg-white rounded-full h-40 w-40 absolute bottom-16 lg:left-[350px] z-20 flex items-center justify-center lg:text-[48px] lg:leading-[100%] font-bold lg:tracking-[-2.88px] ">
          20% off
        </div>

        {/* Laptop Image view */}
        <div className="absolute lg:flex hidden bottom-0 xl:right-20 lg:right-0 h-96 lg:h-[410px] xl:h-[450px] w-full ">
          <div className="relative h-full w-full ">
            <Image
              src={phoneUp}
              alt="Phone side up"
              className="object-contain  object-bottom-right"
              fill
            />
          </div>
        </div>
        {/* Phone Image View */}
        <div className="absolute flex lg:hidden bottom-0 -left-[3%] -right-[3%]  h-80 w-[106%] ">
          <div className="relative h-full w-full ">
            <Image
              src={phoneUp}
              alt="Phone side up"
              className="object-contain  object-bottom shadow-lg"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
