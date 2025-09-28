"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/icons/apg-business.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "homes",
      link: "https://homes.apgbusinesshub.com/",
    },
    {
      label: "gadgets",
      link: "https://gadgets.apgbusinesshub.com/",
    },
    {
      label: "blog",
      link: "/blog",
    },
    {
      label: "consultancy",
      link: "/contact",
    },
  ];
  return (
    <header
      className={`w-full py-6   ${pathname === "/" && "bg-white"} ${
        pathname === "/about" && "bg-grey"
      }   ${
        pathname === "/faqs" || (pathname === "/contact" && "bg-[#ECFFFC]")
      }   `}
    >
      <div className="container">
        <div
          className={`items-center justify-between lg:flex hidden flex-row lg:py-2 lg:px-[30px] w-full h-[98px] rounded-xl ${
            pathname === "/" ? "bg-grey" : "bg-white"
          } `}
        >
          <Link href="/" className="relative lg:h-[54px] lg:w-[106px]">
            <Image src={logo} alt="Logo" className="object-contain" fill />
          </Link>
          <nav className="font-semibold flex gap-3">
            {navLinks.map((nav, index) => (
              <Link
                href={nav.link}
                key={index}
                className={`text-primary py-1.5 px-3 rounded capitalize ${
                  pathname === nav.link ? "bg-apgLightPurple" : ""
                }`}
              >
                {nav.label}
              </Link>
            ))}
          </nav>
          <div>
            <Link className="btn btnSmall pryBtn w-28" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:hidden w-full px-4 py-3 bg-gray-200 rounded-xl">
          <div className="relative h-10 w-20">
            <Image src={logo} alt="Logo" className="object-contain" fill />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="text-primary focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-4/5 sm:w-2/5 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="relative h-[40px] w-[90px]">
              <Image src={logo} alt="Logo" className="object-contain" fill />
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="h-7 w-7 text-primary" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 mt-6 px-6">
            {navLinks.map((nav, index) => (
              <Link
                href={nav.link}
                key={index}
                className={`text-primary font-semibold py-2 px-3 rounded capitalize ${
                  pathname === nav.link ? "bg-apgLightPurple" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {nav.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btnSmall pryBtn w-full text-center"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/70 z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
