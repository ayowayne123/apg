"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/icons/apg-gadgets.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white  text-greyText text-xl font-medium tracking-tighter">
      <div className="container pb-10 pt-36">
        {/* Top Section */}
        <div className="flex lg:flex-row flex-col justify-between xl:gap-28 gap-8 lg:gap-16">
          {/* Logo + Description */}
          <div className="w-[311px] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={logo}
                alt="apg"
                className="w-[201px] h-[75px] object-contain"
              />
            </div>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Blog/Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1">
              <li>Office address here</li>
              <li>+234 XXX XXX XXXX</li>
              <li>hello@articulatehub.ng</li>
              <li>WhatsApp: [Insert link]</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-2">Stay Connected</h3>
            <p className="mb-3">
              Follow us for updates, offers, and new listings
            </p>
            <div className="flex gap-1 text-white">
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-secondary/70 transition"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-secondary/70 transition"
              >
                <FaInstagram size={16} />
              </Link>
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-secondary/70 transition"
              >
                <FaLinkedinIn size={16} />
              </Link>
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-secondary/70 transition"
              >
                <FaTwitter size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="lg:my-8 my-6 border-black" />

        {/* Bottom Text */}
        {/* Bottom Text */}
        <div className="flex lg:flex-row flex-col justify-between items-center gap-3">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-gray-600">Go back to :</span>
            <div className="flex gap-2">
              <Link
                href="https://apgbusinesshub.com/"
                className="bg-[#731F8E] text-white lg:px-8 px-5 py-3 lg:py-5 rounded-full text-sm hover:bg-[#6520c0] transition"
              >
                Articulate Business Hub
              </Link>
              <Link
                href="https://homes.apgbusinesshub.com/"
                className="bg-[#3e07a3] text-white lg:px-8 px-5 py-3 lg:py-5  rounded-full text-sm hover:bg-[#2f057c] transition"
              >
                Articulate Homes
              </Link>
            </div>
          </div>
          <div className="lg:text-base text-sm">
            © 2025 Articulate Business Hub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
