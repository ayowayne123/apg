import React from "react";
import Image from "next/image";
import ceo from "@/public/images/ceo.png";
import user from "@/public/images/placeholder-user.png";
import razaq from "@/public/images/razaq.jpg";
import ajibade from "@/public/images/ajibade.jpg";

function Team() {
  const members = [
    { name: "Oladapo Koiki", position: "Brand Visual Manager", img: ceo },
    {
      name: "Adaranijo S. Ajibade ",
      position: "General Manager",
      img: ajibade,
    },
    { name: "Animashaun Rasaq", position: "Operations Manager  ", img: razaq },
    { name: "Yusuf Balikis", position: "Sales Manager", img: user },
  ];

  return (
    <div className="py-12">
      <h5 className="text-center text-greyText text-xl tracking-[5.4px] uppercase">
        The Team
      </h5>
      <h2 className="text-primary max-w-[390px] mx-auto text-center tracking-tighter leading-[110%] text-2xl font-semibold mb-10">
        The Minds Behind the Mission
      </h2>

      <div
        className="
        grid 
        grid-cols-2 
        md:grid-cols-3 
        gap-8 md:gap-10 
        max-w-5xl 
        mx-auto 
        px-6 
        mb-16 md:mb-20
      "
      >
        {members.map((member, index) => (
          <div key={index} className="text-center">
            <div
              className="
              w-24 h-24 
              sm:w-28 sm:h-28 
              md:w-32 md:h-32 
              lg:w-60 lg:h-60 
              mx-auto relative 
              rounded-full 
              bg-blue-100 
              overflow-hidden
            "
            >
              <Image
                src={member.img}
                alt={member.name}
                className="rounded-full object-cover object-top bg-[#F8E0FF]"
                fill
              />
            </div>

            <h3
              className="
              mt-3 md:mt-4 
              font-semibold 
              text-lg sm:text-xl md:text-2xl 
              text-primary 
              tracking-tight
            "
            >
              {member.name}
            </h3>

            <p className="text-greytext text-xs sm:text-sm tracking-tight">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
