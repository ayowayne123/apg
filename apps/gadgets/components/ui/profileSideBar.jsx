"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUser, FaHeart } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import { RiChatAiFill, RiLogoutCircleRLine } from "react-icons/ri";

export default function ProfileSidebar() {
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
    <aside className="bg-apgLightYellow rounded-[28px] border border-primary lg:w-[278px] w-full p-6 lg:px-10 lg:py-6 flex flex-col justify-between h-[480px]">
      <div className="flex flex-col  divide-y-[0.5px] divide-black">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 py-4 text-xl transition font-semibold ${
              pathname === link.href
                ? " text-primary "
                : "hover:text-primary/70"
            }`}
          >
            <span
              className={`h-12 w-12 flex items-center justify-center rounded-full bg-white border  ${
                pathname === link.href
                  ? " border-primary"
                  : "hover:border-primary/70"
              } `}
            >
              {link.icon}
            </span>
            {link.name}
          </Link>
        ))}
        <button className="text-apgRed flex items-center text-xl justify-between gap-3 font-semibold mt-10">
          <span>Log Out</span>
          <RiLogoutCircleRLine size={22} />
        </button>
      </div>
    </aside>
  );
}
