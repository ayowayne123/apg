"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { FaUser, FaHeart } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import { RiChatAiFill, RiLogoutCircleRLine } from "react-icons/ri";
import Cookies from "js-cookie";
import { getGuestSessionId } from "@/lib/cart/session";
import logo from "@/public/icons/apg-gadgets.png";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Login Checker
  useEffect(() => {
    const token = Cookies.get("apg_token");
    setIsLoggedIn(!!token);
  }, []);

  //Session Id Creator
  useEffect(() => {
    const token = Cookies.get("apg_token");
    if (!token) getGuestSessionId();
  }, []);

  const handleSearch = () => {
    if (!searchValue.trim()) return;

    router.push(`/products?search=${encodeURIComponent(searchValue.trim())}`);
  };

  // Close Dropdown
  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  // Logout
  const handleLogout = () => {
    Cookies.remove("apg_token");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    router.push("/login");
  };

  return (
    <header className="w-full py-6 relative">
      <div className="container">
        {/* Desktop Header */}
        <div className="items-center justify-between lg:flex hidden flex-row lg:py-2 lg:px-[30px] w-full h-[98px] rounded-xl bg-grey">
          {/* Logo */}
          <Link href="/" className="relative lg:h-[54px] lg:w-[142px]">
            <Image src={logo} alt="Logo" className="object-contain" fill />
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-6">
            <div className="flex items-center w-full bg-white rounded-xl overflow-hidden">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button onClick={handleSearch} className="px-4 text-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-row items-center gap-3">
            <Link className="btn btnSmall secBtn w-28" href="/contact">
              Contact
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="text-black relative flex items-center justify-center h-11 w-11 bg-primary rounded-full"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-secondary text-xs h-5 w-5 text-white font-medium rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* User dropdown / login */}
            <div className="relative">
              {isLoggedIn ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-center rounded-full h-11 w-11 text-white bg-secondary"
                >
                  <User size={22} />
                </button>
              ) : (
                <Link href="/login" className="btn btnSmall pryBtn w-28">
                  Sign In
                </Link>
              )}
            </div>
          </div>

          {/* Dropdown */}
          {dropdownOpen && isLoggedIn && (
            <div className="absolute inset-0 z-40 container">
              <div
                className="fixed inset-0 z-40 h-screen w-full"
                onClick={() => setDropdownOpen(false)}
              ></div>
              <div className="absolute z-50 right-[21px] top-[142px] w-80 bg-apgCream rounded-[30px] shadow-lg">
                <div className="relative h-full w-max divide-y-[0.5px] divide-black px-11 py-11 flex flex-col">
                  <Link
                    href="/account"
                    className="flex items-center gap-3 py-4.5 hover:text-primary"
                  >
                    <span className="h-11 w-11 border-primary border bg-white rounded-full text-primary flex items-center justify-center">
                      <FaUser size={24} />
                    </span>
                    <span className="text-xl font-semibold text-black">
                      My Account
                    </span>
                  </Link>

                  <Link
                    href="/account/wishlist"
                    className="flex items-center gap-3 py-4.5 hover:text-primary"
                  >
                    <span className="h-11 w-11 border-primary border bg-white rounded-full text-primary flex items-center justify-center">
                      <FaHeart size={24} />
                    </span>
                    <span className="text-xl font-semibold text-black">
                      WishList
                    </span>
                  </Link>

                  <Link
                    href="/account/orders"
                    className="flex items-center gap-3 py-4.5 hover:text-primary"
                  >
                    <span className="h-11 w-11 border-primary border bg-white rounded-full text-primary flex items-center justify-center">
                      <BsBagCheckFill size={24} />
                    </span>
                    <span className="text-xl font-semibold text-black">
                      My Orders
                    </span>
                  </Link>

                  <Link
                    href="/account/reviews"
                    className="flex items-center gap-3 py-4.5 hover:text-primary"
                  >
                    <span className="h-11 w-11 border-primary border bg-white rounded-full text-primary flex items-center justify-center">
                      <RiChatAiFill size={24} />
                    </span>
                    <span className="text-xl font-semibold text-black">
                      Reviews
                    </span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="text-apgRed flex items-center justify-between gap-[90px] py-4.5 font-bold"
                  >
                    <span className="text-xl">Log Out</span>
                    <RiLogoutCircleRLine size={24} />
                  </button>
                </div>
              </div>
            </div>
          )}
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
