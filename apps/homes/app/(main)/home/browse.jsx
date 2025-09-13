import React from "react";

function Browse() {
  return (
    <section className="py-24">
      <div className=" container">
        <div className="flex lg:flex-row flex-col gap-3 justify-between lg:py-12 py-6">
          <h2 className=" text-primary leading-[110%] lg:max-w-[511px] lg:text-left text-center ">
            Your Next Home Could Be Right Here
          </h2>
          <p className="text-greyText lg:max-w-[462px] font-medium text-center lg:text-left   lg:text-2xl tracking-tighter lg:-tracking-[1.4px] lg:leading-[130%]">
            Browse our most recommended listings, carefully chosen based on
            quality, pricing, and demand. Let’s help you find the perfect match.
          </p>
        </div>
      </div>
      <div className="cardWidth sm:overflow-x-auto no-scrollbar ">
        <div className="flex sm:flex-row flex-col gap-6  w-full md:mr-20 mr-10 lg:mr-24">
          {/* {Browse.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px]  p-8 hover:shadow-lg transition shrink-0 sm:w-[331px] sm:h-[394px] flex flex-col z-10"
            >
              <div className="relative h-[90px] w-[90px] self-end  z-10">
                <div
                  className={`rounded-full ${value.srcColor} h-[74px]  w-[74px]  absolute top-0 left-2 z-10`}
                />
                <Image
                  src={value.src}
                  alt="An icon"
                  fill
                  className="object-contain z-20 translate-y-2"
                />
              </div>

              <h3 className="text-2xl mt-16 font-semibold text-primary mb-3 tracking-tight leading-[27px]">
                {value.title}
              </h3>
              <p className="text-sm text-greyText leading-[21px] tracking-tight">
                {value.description}
              </p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Browse;
