import React from "react";
import Image from "next/image";

import { BsClipboard2CheckFill, BsFileEarmarkLockFill } from "react-icons/bs";
import { FaHandshakeSimple, FaShapes } from "react-icons/fa6";
import { BiSupport, BiSolidZap } from "react-icons/bi";

import integrity from "@/public/images/integrity.jpg";

const features = [
  { id: 1, icon: BsClipboard2CheckFill, text: "Verified Listings Only" },
  { id: 2, icon: FaHandshakeSimple, text: "Transparent Deals" },
  { id: 3, icon: FaShapes, text: "Diverse Property Options" },
  { id: 4, icon: BiSupport, text: "Personalized Support" },
  { id: 5, icon: BiSolidZap, text: "Fast & Reliable Service" },
  { id: 6, icon: BsFileEarmarkLockFill, text: "Safe & Confidential Process" },
];

export default function Integrity() {
  return (
    <section className="w-full">
      <div className="relative w-full lg:h-[850px] h-[1000px]  overflow-hidden">
        <Image
          src={integrity}
          alt="Integrity"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute left-0 right-0 top-0 w-full h-full">
          <div className="container  h-full py-12 flex flex-col justify-between">
            <div className="bg-[#F1EAFF] rounded-3xl p-10 max-w-[430px]">
              <h4 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-5 mt-4 xl:tracking-[-2.92px]">
                Where Integrity <br /> Meets Comfort
              </h4>
              <p className="text-xl mb-7 leading-relaxed tracking-[-1.2px] ">
                We’re not just selling homes, we’re offering peace of mind. With
                Articulate Homes, you’ll experience professionalism with a
                personal touch.
              </p>
              <button className="btn pryBtn btnSmall w-[182px]">
                Contact Sales
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {features.map(({ id, icon: Icon, text }) => (
                <div
                  key={id}
                  className="flex items-center gap-3 bg-[#E9FEFF] border-3 border-white rounded-2xl py-2 px-2"
                >
                  <div className="bg-white h-[75px] w-[75px] p-2 rounded-lg flex items-center justify-center">
                    <Icon className="w-11 h-11 text-secondary" />
                  </div>
                  <span className="font-semibold text-primary whitespace-nowrap text-2xl tracking-[-0.5px] px-2">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
