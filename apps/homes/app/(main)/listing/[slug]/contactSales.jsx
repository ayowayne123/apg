"use client";

import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

export default function ContactSalesButton({ listing }) {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "2348123456789"; // replace with your WhatsApp number

  const openWhatsApp = (type) => {
    let message = "";
    switch (type) {
      case "chat":
        message = `Hi! I want to chat about the property: ${listing.title}`;
        break;
      case "book":
        message = `Hi! I want to book the property: ${listing.title}`;
        break;
      case "enquiry":
        message = `Hi! I have an enquiry about the property: ${listing.title}`;
        break;
      default:
        message = "";
    }
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn secBtn btnBig lg:w-[187px] w-32 shrink-0 mt-2 self-end"
      >
        {listing?.listing_type === "shortlet" && "Book Shortlet"}
        {listing?.listing_type === "rent" && "Make Enquires"}
        {listing?.listing_type === "sale" && "Contact Sales"}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-[300px] text-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded cursor-pointer"
              onClick={() => openWhatsApp("chat")}
            >
              <FaWhatsapp size={20} /> Live Chat
            </button>

            <button
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded cursor-pointer"
              onClick={() => openWhatsApp("book")}
            >
              <FaCalendarCheck size={20} /> Book Property
            </button>

            <button
              className="w-full flex items-center justify-center gap-2 bg-gray-500 hover:bg-gray-600  text-white py-2 rounded cursor-pointer"
              onClick={() => openWhatsApp("enquiry")}
            >
              <FaEnvelope size={20} /> Enquiry
            </button>

            <button
              className="mt-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-700 w-full flex items-center justify-center py-2 rounded hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
