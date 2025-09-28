"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/public/icons/apg-gadgets.png";
import Link from "next/link";

export default function AuthHeader() {
  const pathname = usePathname();

  return (
    <header className={`w-full py-16 relative`}>
      <div className="container  ">
        <div className={` items-center justify-center flex `}>
          <Link href="/" className="relative lg:h-[54px] lg:w-[142px]">
            <Image src={logo} alt="Logo" className="object-contain" fill />
          </Link>
        </div>
      </div>
    </header>
  );
}
