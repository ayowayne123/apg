"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/icons/apg-business.svg";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-greyText text-base lg:text-xl font-medium tracking-tighter min-h-[100dvh] lg:min-h-fit flex flex-col justify-between">

      <div className="container mx-auto px-10 lg:px-0 pt-10 lg:pt-36 pb-10 flex-1">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 xl:gap-28">

          {/* Logo + Description */}
          <div className="w-full lg:w-[311px] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={logo}
                alt="apg"
                className="w-[105px] h-[54px] object-contain"
              />
            </div>
            <p className="tracking-tight leading-relaxed">
              Articulate Business Hub is Nigeria’s trusted destination for
              premium gadgets and reliable real estate solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://gadgets.apgbusinesshub.com/"
                  className="hover:text-primary transition"
                >
                  Gadgets
                </Link>
              </li>
              <li>
                <Link
                  href="https://homes.apgbusinesshub.com/"
                  className="hover:text-primary transition"
                >
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-primary transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition">
                  Blog/Insights
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
        <hr className="my-8 border-black/30" />

        {/* Bottom Text */}
        <div className="text-sm lg:text-base text-center lg:text-left">
          © 2025 Articulate Business Hub. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
