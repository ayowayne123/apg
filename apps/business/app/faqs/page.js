// app/faq/page.jsx
import React from "react";
import PageHeader from "@/components/ui/pageHeader";
import FaqAccordion from "@/app/faqs/faqAccordion";

function FaqPage() {
  return (
    <div className="bg-[#ECFFFC]">
      <div className="container">
        <PageHeader type="faq" />
        <FaqAccordion />
      </div>
    </div>
  );
}

export default FaqPage;
