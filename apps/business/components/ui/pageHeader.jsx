import React from "react";
import bg from "@/public/icons/contourBg.png";
import Image from "next/image";

function PageHeader({ type }) {
  let content;

  switch (type) {
    case "about":
      content = (
        <div className="text-center text-white px-6 lg:py-0 py-12 lg:max-w-2xl md:max-w-lg">
          <p className="uppercase tracking-wide  mb-6 text-lg lg:text-2xl font-semibold">
            About Us
          </p>
          <h1 className="">
            We <span className="text-secondary">redefine</span> lifestyle{" "}
            <br className="hidden lg:block" /> convenience.
          </h1>
          <p className=" text-sm lg:text-xl xl:text-2xl font-medium tracking-tighter mt-5 px-3 ">
            Whether you’re looking to upgrade your tech game or move into your
            dream space, we’ve got you covered.
          </p>
        </div>
      );
      break;
    case "blog":
      content = (
        <div className="text-center text-white px-6 lg:py-0 py-12 lg:max-w-2xl md:max-w-lg">
          <p className="uppercase tracking-wide  mb-4 text-lg lg:text-2xl font-semibold">
            Blog
          </p>
          <h1 className="">
            Insights, Tips & Trends
            <br className="hidden lg:block" /> That{" "}
            <span className="text-secondary"> Keep You Ahead</span>
          </h1>
          <p className=" text-sm lg:text-xl xl:text-2xl font-medium tracking-tighter mt-3 px-3 ">
            Whether you’re a tech lover or a home seeker, our blog is your go-to
            resource for smart decisions and better living.
          </p>
        </div>
      );

      break;
    case "contact":
      content = (
        <div className="text-center text-white px-6 lg:py-0 py-12 lg:max-w-2xl md:max-w-lg">
          <p className="uppercase tracking-wide  mb-4 text-lg lg:text-2xl font-semibold">
            contact us
          </p>
          <h1 className="">We’d Love to Hear From You</h1>
          <p className=" text-sm lg:text-xl xl:text-2xl font-medium tracking-tighter mt-3 px-3 ">
            Whether you have a question, feedback, or a business inquiry, we’re
            just a message away. Let’s connect.
          </p>
        </div>
      );

      break;
    case "faq":
      content = (
        <div className="text-center text-white px-6 lg:py-0 py-12 lg:max-w-full md:max-w-lg">
          <p className="uppercase tracking-wide mb-4 text-lg lg:text-2xl font-semibold">
            FAQs
          </p>
          <h1 className="">
            Got questions? <br className="hidden lg:block" />
            We sure have the answers
          </h1>
          <p className="text-sm lg:text-xl xl:text-2xl font-medium tracking-tighter mt-3 px-3">
            Explore answers to the concerns you might have below
          </p>
        </div>
      );
      break;
    case "terms":
      content = (
        <div className="text-center text-white px-6 lg:py-0 py-12 lg:max-w-2xl md:max-w-lg">
          <h1>Terms of Service</h1>
          <p className="text-sm lg:text-xl xl:text-2xl font-medium tracking-tighter my-6 px-3 text-[#E8E8E8]">
            Effective Date: July 2025
          </p>
          <p className="text-sm lg:text-xl xl:text-2xl font-medium tracking-tighter my-6 px-3 text-[#E8E8E8]">
            By accessing or using our platform, you agree to be bound by these
            terms.
          </p>
        </div>
      );
      break;

    default:
      content = (
        <div className="text-center text-white px-6 max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold">Default Header</h1>
          <p className="mt-2 text-sm lg:text-base text-gray-200">
            Default content
          </p>
        </div>
      );
  }

  return (
    <div className="w-full lg:h-[470px] sm:min-h-96 h-80 rounded-[35px] bg-cover bg-center relative  overflow-hidden z-10">
      <Image
        src={bg}
        alt="spiral"
        fill
        className="object-cover z-10"
        priority
      />
      <div className="h-full w-full  flex items-center justify-center bg-primary/66 z-20 absolute">
        {content}
      </div>
    </div>
  );
}

export default PageHeader;
