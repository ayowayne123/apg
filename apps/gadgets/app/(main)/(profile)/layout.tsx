"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaHeart } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import { RiChatAiFill, RiLogoutCircleRLine } from "react-icons/ri";
import ProfileSidebar from "@/components/ui/profileSideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navLinks = [
    { name: "My Account", href: "/account", icon: <FaUser size={22} /> },
    {
      name: "WishList",
      href: "/account/wishlist",
      icon: <FaHeart size={22} />,
    },
    {
      name: "My Orders",
      href: "/account/orders",
      icon: <BsBagCheckFill size={22} />,
    },
    {
      name: "Reviews",
      href: "/account/reviews",
      icon: <RiChatAiFill size={22} />,
    },
  ];

  const currentPage =
    navLinks.find((link) => pathname === link.href)?.name || "My Account";

  return (
    <section className=" container py-10 ">
      <h4 className="text-2xl lg:text-3xl font-bold ">{currentPage}</h4>
      <div className="min-h-screen flex flex-col lg:flex-row mt-10 gap-9">
        {/* Side Bar */}
        <ProfileSidebar />

        {/* Main Content */}
        <main className="flex-1 ">{children}</main>
      </div>
    </section>
  );
}
