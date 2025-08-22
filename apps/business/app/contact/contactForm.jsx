"use client";
import React, { useState } from "react";
import Image from "next/image";
import contact from "@/public/images/contact.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center pt-3 pb-40 lg:px-20 ">
      <div className="max-w-[530px] w-full self-end ">
        <form onSubmit={handleSubmit} className="space-y-4 w-full ">
          <div>
            <label
              htmlFor="name"
              className="block  font-medium text-[#0D141C] mb-3"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white focus:outline-none border border-[#CFDBE8] placeholder:text-[#C6C6C6] focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block  font-medium text-[#0D141C] mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white focus:outline-none border border-[#CFDBE8] placeholder:text-[#C6C6C6] focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block  font-medium text-[#0D141C] mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white focus:outline-none border border-[#CFDBE8] placeholder:text-[#C6C6C6] focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          {/* Button */}
          <button type="submit" className="btn pryBtn btnBig w-54 mt-12">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex relative h-[675px] w-full max-w-[530px] ">
        <Image
          src={contact}
          alt="Contact Us"
          className="object-contain object-bottom z-20"
          fill
        />
        <div className="bg-secondary  flex max-w-[480px] max-h-[540px] shrink  h-full absolute z-10 bottom-0  left-6 right-6 rounded-3xl" />
      </div>
    </div>
  );
}

export default ContactForm;
