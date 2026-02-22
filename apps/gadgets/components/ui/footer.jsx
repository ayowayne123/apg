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
      <div className="container pb-10 pt-20">
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
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li>Suite 4F Mokland Plaza 3-9 Olu Koleosho Street off medical road Ikeja Lagos</li>
              <li> +234 814 007 5596</li>
              <li>apgbusinesshub@gmail.com</li>
              <li style={{ listStyle: "none" }}>
                <a
                  href="https://wa.me/2348140075596?text=Hello%20👋%20Welcome!%20Please%20select%20an%20option%20below:%0A%0A1️⃣%20Business%0A2️⃣%20Investment%0A3️⃣%20Homes%0A4️⃣%20Sublet%20Gadgets%20%26%20Accessories"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#25D366",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "0.3s ease",
                  }}
                >
                  💬 Start WhatsApp Conversation
                </a>
              </li>          
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
                href="https://www.tiktok.com/@articulateplugandgadgets?_r=1&_t=ZS-93GLaCgigbg"
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
