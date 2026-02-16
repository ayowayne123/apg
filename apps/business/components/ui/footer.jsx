"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/icons/apg-business.svg";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
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
              <li>Office address here</li>
              <li>+234 XXX XXX XXXX</li>
              <li>hello@articulatehub.ng</li>
              <li>WhatsApp: [Insert link]</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-3">Stay Connected</h3>
            <p className="mb-4 text-sm lg:text-base">
              Follow us for updates, offers, and new listings
            </p>
            <div className="flex gap-2 text-white">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="bg-primary h-9 w-9 flex items-center justify-center rounded-full hover:bg-primary/70 transition"
                  >
                    <Icon size={16} />
                  </Link>
                )
              )}
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
