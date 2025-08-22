// components/ui/FaqAccordion.jsx
"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "What does Articulate Business Hub specialize in?",
    answer:
      "We specialize in two areas: offering top-tier gadgets including smartphones, laptops, and accessories, and providing reliable real estate solutions – from property sales and rentals to investment and development projects.",
  },
  {
    question: "Are your gadgets brand new and authentic?",
    answer:
      "Yes, all gadgets are 100% brand new, authentic, and sourced directly from trusted manufacturers and distributors.",
  },
  {
    question: "What types of properties do you offer?",
    answer:
      "We offer a wide range of residential and commercial properties across Lagos and beyond.",
  },
  {
    question: "Can I buy a gadget and request delivery outside Lagos?",
    answer:
      "Yes, nationwide delivery is available. We partner with trusted logistics providers to ensure safe delivery.",
  },
  {
    question: "Do you offer installment payment options?",
    answer:
      "Yes, flexible installment payment plans are available for select products and properties.",
  },
  {
    question: "How do I know a property listed is legitimate?",
    answer:
      "Every property undergoes thorough verification and legal checks before listing.",
  },
  {
    question: "Can I schedule a property inspection before making a decision?",
    answer: "Yes, property inspections can be scheduled at your convenience.",
  },
  {
    question: "Do you provide after-sales support for gadgets?",
    answer:
      "Yes, our dedicated support team assists with after-sales service and warranty claims.",
  },
  {
    question: "Can I invest in property through Articulate Business Hub?",
    answer:
      "Yes, we provide investment opportunities in vetted and high-value properties.",
  },
  {
    question: "How can I reach your customer support?",
    answer:
      "You can reach our customer support team via phone, email, or live chat.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-3">
      <div className="max-w-[990px] mx-auto space-y-3 ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow  px-6 py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium text-[#191819]">
                {item.question}
              </h3>
              {openIndex === index ? (
                <FiChevronUp className="text-xl" />
              ) : (
                <FiChevronDown className="text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-[#191819] tracking-tight">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="text-center mt-16 text-3xl">
        Can’t find a question here?{" "}
        <a
          href="/contact"
          className="text-primary font-semibold underline underline-offset-2 align-bottom"
        >
          Contact Us
        </a>
      </p>
    </section>
  );
}

export default FaqAccordion;
