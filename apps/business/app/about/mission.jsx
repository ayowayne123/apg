import React from "react";
import Image from "next/image";
import dart from "@/public/images/dart.jpg";
import binoculars from "@/public/images/binoculars.jpg";

function Mission() {
  return (
    <section className="grid md:grid-cols-2 lg:px-16 xl:px-20 py-16 text-greyText gap-7">
      <div className="lg:h-[640px] w-full bg-white rounded-[30px] overflow-hidden ">
        <div className="w-full h-[360px] relative ">
          <Image
            src={dart}
            alt="dart on a board"
            fill
            className="object-cover"
          />
        </div>
        <div className="py-9 pl-[58px] pr-[108px]">
          <h2 className="text-primary">Our Mission</h2>
          <p className=" tracking-tighter font-medium text-2xl mt-2">
            To make premium gadgets and verified real estate accessible,
            affordable, and reliable across Nigeria and beyond.
          </p>
        </div>
      </div>
      <div className="lg:h-[640px] w-full bg-white rounded-[30px] overflow-hidden ">
        <div className="w-full h-[360px] relative ">
          <Image
            src={binoculars}
            alt="dart on a board"
            fill
            className="object-cover"
          />
        </div>
        <div className="py-9 pl-[58px] pr-[108px]">
          <h2 className="text-primary">Our Vision</h2>
          <p className=" tracking-tighter font-medium text-2xl mt-2">
            To become Nigeria’s most trusted tech and property solutions
            provider.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
