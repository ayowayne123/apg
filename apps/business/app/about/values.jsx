import React from "react";

import excellence from "@/public/icons/excellence.png";
import trust from "@/public/icons/trust.png";
import Image from "next/image";
import innovation from "@/public/icons/innovation.png";
import customer from "@/public/icons/customer.png";

function Values() {
  const values = [
    {
      src: excellence,
      srcColor: "bg-[#F8E0FF]",
      title: "Excellence",
      description:
        "We set a high bar for everything we do, whether it’s a project we source or the properties we sell. Our commitment is top-tier service to ensure every customer interaction benefits from pursuit of quality and professionalism.",
    },
    {
      src: trust,
      srcColor: "bg-[#DFFFFA]",
      title: "Trust",
      description:
        "Trust is the backbone of our business. We deal transparently, deliver original products, verify every listing, and always prioritize your peace of mind. When you choose Articulate, you choose a brand that keeps its word.",
    },
    {
      src: innovation,
      srcColor: "bg-[#F8E0FF]",
      title: "Innovation",
      description:
        "In a fast-paced world, we stay ahead by constantly evolving. From offering the latest tech to modernizing the real estate experience, innovation is not just a buzzword for us—it’s our culture.",
    },
    {
      src: customer,
      srcColor: "bg-[#DFFFFA]",
      title: "Customer-First",
      description:
        "Everything we do begins and ends with you. From personalized support to curated offerings, we go the extra mile to understand your needs and exceed your expectations—every single time.",
    },
  ];

  return (
    <section className="py-24">
      <div className=" container">
        <div className="flex lg:flex-row flex-col gap-3 justify-between lg:py-12 py-6">
          <h2 className=" text-primary leading-[110%] lg:max-w-[437px] lg:text-left text-center ">
            Our Core Values, Your Constant Assurance
          </h2>
          <p className="text-gray-600 lg:max-w-[437px] font-medium text-center lg:text-right   lg:text-2xl tracking-tighter lg:leading-[130%]">
            We don’t just do business, we build relationships. These values
            guide every product we deliver, every space we offer, and every
            interaction we have.
          </p>
        </div>
      </div>
      <div className="cardWidth sm:overflow-x-auto no-scrollbar ">
        <div className="flex sm:flex-row flex-col gap-6  w-full md:mr-20 mr-10 lg:mr-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px]  p-8 hover:shadow-lg transition shrink-0 sm:w-[331px] sm:h-[394px] flex flex-col z-10"
            >
              <div className="relative h-[90px] w-[90px] self-end  z-10">
                <div
                  className={`rounded-full ${value.srcColor} h-[74px]  w-[74px]  absolute top-0 left-2 z-10`}
                />
                <Image
                  src={value.src}
                  alt="An icon"
                  fill
                  className="object-contain z-20 translate-y-2"
                />
              </div>

              <h3 className="text-2xl mt-16 font-semibold text-primary mb-3 tracking-tight leading-[27px]">
                {value.title}
              </h3>
              <p className="text-sm text-greyText leading-[21px] tracking-tight">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
