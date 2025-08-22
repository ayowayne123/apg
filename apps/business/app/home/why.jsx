"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import whyImage from "@/public/images/whyImage.webp";
import ribbon from "@/public/icons/ribbon.svg";
import guard from "@/public/icons/guard.svg";
import handStar from "@/public/icons/handStar.svg";

function Why() {
  const listItems = [
    "Trusted by hundreds of customers",
    "Competitive pricing & verified listings",
    "Reliable customer support",
    "Secure transactions",
  ];

  return (
    <section className="flex flex-row bg-grey relative my-12 rounded-[35px]">
      {/* Floating Ribbon */}
      <motion.div
        className="rounded-full h-32 w-32 bg-[#FCF3FF] absolute lg:top-28 -left-7 z-20 p-8"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="h-full w-full relative">
          <Image src={ribbon} alt="ribbon" fill className="object-contain" />
        </div>
      </motion.div>

      {/* Floating Guard */}
      <motion.div
        className="rounded-full h-32 w-32 bg-[#FCF3FF] absolute lg:right-20 -bottom-9 z-20 p-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
      >
        <div className="h-full w-full relative">
          <Image src={guard} alt="guard" fill className="object-contain" />
        </div>
      </motion.div>

      {/* Floating HandStar */}
      <motion.div
        className="rounded-full h-32 w-32 bg-[#EEFFFC] absolute lg:top-24 -right-9 z-20 p-8"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, delay: 1 }}
      >
        <div className="h-full w-full relative">
          <Image
            src={handStar}
            alt="handStar"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <motion.div className="lg:w-[660px] shrink-0 mt-20">
        <div className="w-full h-full min-h-[300px] relative">
          <Image
            src={whyImage}
            alt="man wearing Vr Glasses and a Woman carrying a miniature house"
            className="object-contain object-bottom"
            fill
          />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="text-primary lg:ml-6 xl:ml-20 py-[76px] pr-8 w-full grow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="pr-12 xl:pr-20 lg:text-[30px] text-xl leading-[105%] font-medium mt-3 tracking-tighter">
          Why Choose Us?
        </p>
        <p className="lg:pr-20 xl:pr-24 lg:text-5xl text-2xl leading-[110%] font-bold tracking-tighter">
          Trust. Quality. Convenience.
          <br /> All in One Hub.
        </p>

        {/* Staggered List */}
        <motion.ul
          className="mt-4 lg:text-2xl text-lg leading-[238%] font-medium text-[#656565] tracking-tighter list-disc list-inside"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {listItems.map((item, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <Link
          className="btn pryBtn btnBig lg:w-[198px] lg:mt-5 mt-3 inline-block"
          href="/about"
        >
          Contact Sales
        </Link>
      </motion.div>
    </section>
  );
}

export default Why;
