import React from "react";

const testimonials = [
  {
    rating: 4,
    text: "As a first-time renter, I felt completely at ease with Articulate. Their team helped me find a place quickly without any hidden fees.",
    name: "Ruqayyah B.",
    location: "Ibadan",
    bg: "bg-[#E9FEFF] ", // highlighted
  },
  {
    rating: 5,
    text: "The shortlet I booked was exactly as described—clean, stylish, and affordable. I’ll definitely book through Articulate again.",
    name: "Zainab M.",
    location: "Abuja",
    bg: "bg-[#F3F3f3]",
  },
  {
    rating: 5,
    text: "I listed my home on Articulate Homes and got solid leads within a few days. Their process was seamless.",
    name: "Mr Aremu.",
    location: "Property Owner",
    bg: "bg-[#E9FEFF]",
  },
];
function Stories() {
  return (
    <section className="my-20">
      <h2 className="text-primary mx-auto  text-center tracking-tighter pt-8">
        Hear From Our Clients
      </h2>
      <p className="lg:text-2xl text-xl text-center mx-auto md:max-w-[550px] lg:max-w-[660px] tracking-tighter">
        We don’t just promise excellence, we deliver it. Here’s what our happy
        clients have to say about their experience with Us
      </p>
      <section className="flex flex-wrap justify-center gap-6 py-6 lg:py-12 lg:px-9 text-[#656565]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`max-w-80 lg:max-w-88 p-5 rounded-xl  ${t.bg}`}
          >
            {/* Stars */}
            <div className="mb-3 text-[#F1CB00]">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl tracking-tighter font-medium  mb-6">
              {t.text}
            </p>

            {/* Name + Location */}
            <p className="tracking-tighter text-xl ">
              {t.name},{t.location}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Stories;
