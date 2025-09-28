import React from "react";

const testimonials = [
  {
    rating: 5,
    text: "I ordered a smartphone from Articulate and got it delivered the same day, sealed, original, and way more affordable than what I saw elsewhere. These guys are legit!",
    name: "Tunde A.",
    location: "Lagos",
    bg: "bg-[#FFFADF] ", // highlighted
  },
  {
    rating: 4,
    text: "Booking a shortlet for my vacation used to be stressful until I found Articulate. The apartment was spotless, exactly like the pictures, and the process was seamless.",
    name: "Zainab M.",
    location: "Abuja",
    bg: "bg-[#F3F3F3]",
  },
  {
    rating: 5,
    text: "They’re my go-to plug for gadgets. I’ve bought three devices from them now and never had a single issue. Fast responses, honest pricing, and solid after-sales support.",
    name: "Ifeanyi E.",
    location: "Port Harcourt",
    bg: "bg-[#FFFADF]",
  },
];
function Stories() {
  return (
    <section className="my-24">
      <h2 className=" mx-auto  text-center tracking-tighter">
        Real Stories. Real Satisfaction.
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
