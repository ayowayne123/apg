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
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white  text-greyText text-xl font-medium tracking-tighter">
      <div className="container pb-10 pt-36">
        {/* Top Section */}
        <div className="flex lg:flex-row flex-col justify-between xl:gap-28 gap-8">
          {/* Logo + Description */}
          <div className="max-w-[311px] shrink-0">
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
                <Link href="/shortlets" className="hover:text-primary">
                  Shortlets
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="hover:text-primary">
                  Rentals
                </Link>
              </li>
              <li>
                <Link href="/sales" className="hover:text-primary">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-primary">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/joint-ventures" className="hover:text-primary">
                  Joint Venture
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li>Valley View Plaza 99 Opebi Road Ikeja Lagos</li>
              <li>+234 902 263 8251</li>
              <li>apgbusinesshub@gmail.com</li>
              <li style={{ listStyle: "none" }}>
                <a
                  href="https://wa.me/2349022638251?text=Hello%20👋%20Welcome!%20Please%20select%20an%20option%20below:%0A%0A1️⃣%20Business%0A2️⃣%20Investment%0A3️⃣%20Homes%0A4️⃣%20Sublet%20Gadgets%20%26%20Accessories"
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
            <h3 className="font-semibold mb-3">Stay Connected</h3>
            <p className="mb-4 text-sm lg:text-base">
              Follow us for updates, offers, and new listings
            </p>
            <div className="flex gap-2 text-white">
              {[
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/apgbusinesshub?igsh=MW9jbTgxOGg3eThkMw==",
                },
                {
                  icon: FaTiktok,
                  link: "https://www.tiktok.com/@apgbusinesshub?_r=1&_t=ZS-93GLYMm8XId",
                },
                {
                  icon: FaFacebookF,
                  link: "#"
                },
                {
                  icon: FaTwitter,
                  link: "#"
                }
              ].map(({ icon: Icon, link }, i) => (
                <Link
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary h-9 w-9 flex items-center justify-center rounded-full hover:bg-primary/70 transition"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-black" />

        {/* Bottom Text */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="text-gray-600">Go back to</span>
            <div className="flex gap-2">
              <Link
                href="https://apgbusinesshub.com/"
                className="bg-[#731F8E] text-white px-8 py-5 rounded-full text-sm hover:bg-[#6520c0] transition"
              >
                Articulate Business Hub
              </Link>
              <Link
                href="https://gadgets.apgbusinesshub.com/"
                className="bg-[#F1CB00] text-black px-8 py-5  rounded-full text-sm hover:bg-[#d8aa00] transition"
              >
                Articulate Plugs & Gadgets
              </Link>
            </div>
          </div>
          <div className="">
            © 2025 Articulate Business Hub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}