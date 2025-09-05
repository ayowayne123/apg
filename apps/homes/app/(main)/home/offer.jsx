"use client";
import Image from "next/image";
import Link from "next/link";
import offer1 from "@/public/images/offer1.jpg";
import offer2 from "@/public/images/offer2.jpg";
import offer3 from "@/public/images/offer3.jpg";
import offer4 from "@/public/images/offer4.jpg";
import person from "@/public/images/person.png";

function Offer() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-secondaryLight" />
        <div className="bg-[#F1EAFF]" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center relative container ">
        {/* Left Side */}
        <div className="pt-12 pb-16">
          <div className="flex items-center justify-between mb-6 mt-1">
            <h2 className="text-3xl font-bold text-primary">What We Offer</h2>
            <Link href="/" className="btn pryBtn btnBig lg:w-[178px]">
              Contact Sales
            </Link>
          </div>

          <div className="mt-3 grid sm:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="px-4 py-3 min-h-[372px] bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src={offer1}
                alt="Shortlets"
                className="rounded-xl border border-[#DEDEDE] object-cover w-full h-48"
              />
              <h3 className="mt-4 mb-1.5  font-bold lg:text-2xl lg:tracking-[-1.2px] text-primary">
                Shortlets
              </h3>
              <p className="tracking-[-0.32px] text-gray-600">
                Fully furnished and stylish apartments for flexible short-term
                stays—ideal for travel, work, or leisure.
              </p>
            </div>

            {/* Card 2 */}
            <div className="px-4 py-3 min-h-[372px] bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src={offer2}
                alt="Rentals"
                className="rounded-xl border border-[#DEDEDE] object-cover w-full h-48"
              />
              <h3 className="mt-4 mb-1.5  font-bold lg:text-2xl lg:tracking-[-1.2px] text-primary">
                Rentals
              </h3>
              <p className="tracking-[-0.32px] text-gray-600">
                Affordable and upscale long-term homes tailored to different
                lifestyles and budgets.
              </p>
            </div>

            {/* Card 3 */}
            <div className="px-4 py-3 min-h-[372px] bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src={offer3}
                alt="Properties for Sale"
                className="rounded-xl border border-[#DEDEDE] object-cover w-full h-48"
              />
              <h3 className="mt-4 mb-1.5  font-bold lg:text-2xl lg:tracking-[-1.2px] text-primary">
                Properties for Sale
              </h3>
              <p className="tracking-[-0.32px] text-gray-600">
                Invest in verified residential or commercial properties with
                full support from our trusted team.
              </p>
            </div>

            {/* Card 4 */}
            <div className="px-4 py-3 min-h-[372px] bg-white rounded-2xl shadow hover:shadow-lg transition">
              <Image
                src={offer4}
                alt="Properties for Listings"
                className="rounded-xl border border-[#DEDEDE] object-cover w-full h-48"
              />
              <h3 className="mt-4 mb-1.5  font-bold lg:text-2xl lg:tracking-[-1.2px] text-primary">
                Properties for Listings
              </h3>
              <p className="tracking-[-0.32px] text-gray-600">
                Property owners and agents can list with us for fast, targeted
                exposure and reliable leads.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-end h-full">
          <Image
            src={person}
            alt="Happy customer holding house"
            className="w-full max-w-sm lg:max-w-md xl:max-w-xl  object-contain object-bottom translate-y-[2px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Offer;
