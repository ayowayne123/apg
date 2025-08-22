"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/icons/apg-homes.png";
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
        <div className="flex flex-row justify-between gap-28">
          {/* Logo + Description */}
          <div className="w-[311px] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={logo}
                alt="apg"
                className="w-[105px] h-[54px] object-contain"
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
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-primary/70 transition"
              >
                <FaFacebookF size={16} />
              </Link>
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-primary/70 transition"
              >
                <FaInstagram size={16} />
              </Link>
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-primary/70 transition"
              >
                <FaLinkedinIn size={16} />
              </Link>
              <Link
                href="#"
                className="bg-primary items-center justify-center h-8 w-8 flex rounded-full hover:bg-primary/70 transition"
              >
                <FaTwitter size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-black" />

        {/* Bottom Text */}
        <div className="">
          © 2025 Articulate Business Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
