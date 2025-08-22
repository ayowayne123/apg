"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/apg-homes.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`w-full py-6  bg-white `}>
      <div className="container">
        <div
          className={`items-center justify-between lg:flex hidden flex-row lg:py-2 lg:px-[30px] w-full h-[98px] rounded-xl bg-[#F4F4F4] `}
        >
          <Link href="/" className="relative lg:h-[54px] lg:w-[106px]">
            <Image src={logo} alt="Logo" className="object-contain" fill />
          </Link>

          <div>
            <Link className="btn btnSmall pryBtn w-28" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
