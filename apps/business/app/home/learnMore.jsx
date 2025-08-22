import React from "react";
import Image from "next/image";
import learn1 from "@/public/images/learn1.jpg";
import learn2 from "@/public/images/learn2.jpg";
import learn3 from "@/public/images/learn3.jpg";
import learn4 from "@/public/images/learn4.jpg";
import Link from "next/link";

function LearnMore() {
  return (
    <section className="grid lg:grid-cols-2 lg:py-20 py-16 xl:px-8 lg:px-4 relative">
      <div className="grid grid-cols-2 lg:px-6 px-4 sm:px-9 gap-5  relative">
        <div className="md:w-[179px] md:h-[179px] h-40 w-40  bg-primary absolute top-[50px] lg:top-[110px] rounded-full blur-[230px] " />
        <div className="md:w-[179px] md:h-[179px] h-40 w-40 bg-primary absolute bottom-[50px] lg:bottom-[100px] right-0 rounded-full blur-[230px]" />
        <div className="flex flex-col gap-5 z-20">
          <div className="relative w-full lg:h-[267px] h-[225px] sm:h-[300px] overflow-hidden rounded-[30px]">
            <Image
              src={learn1}
              fill
              alt="Man wearing VR Headset"
              className="object-cover"
            />
          </div>
          <div className="relative w-full lg:h-[193px] h-[150px] sm:h-[200px] overflow-hidden rounded-[30px]">
            <Image
              src={learn2}
              fill
              alt="Man wearing VR Headset"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-8 sm:pt-12 z-20">
          <div className="relative w-full lg:h-[298px] h-[250px] sm:h-[315px] overflow-hidden rounded-[30px]">
            <Image
              src={learn3}
              fill
              alt="Man wearing VR Headset"
              className="object-cover"
            />
          </div>
          <div className="relative w-full lg:h-[217px] h-[180px] sm:h-[230px] overflow-hidden rounded-[30px]">
            <Image
              src={learn4}
              fill
              alt="Man wearing VR Headset"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-primary lg:ml-6 xl:ml-20 pt-12 ">
        <p className="pr-12 xl:pr-20 lg:text-[30px] text-xl leading-[105%] font-medium mt-3 tracking-tighter">
          Articulate Business Hub is your one-stop destination for
        </p>
        <p className=" lg:text-5xl text-2xl leading-[110%] font-bold tracking-tighter">
          high-quality gadgets and trusted real estate solutions
        </p>
        <p className="pr-12 xl:pr-20 mt-4 lg:text-2xl text-lg leading-[130%] font-medium text-[#656565] tracking-tighter">
          With a focus on innovation, integrity, and lifestyle enhancement, we
          bridge the gap between tech and property.”
        </p>
        <Link
          className="btn pryBtn btnBig lg:w-[178px] lg:mt-11 mt-8"
          href="/about"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default LearnMore;
