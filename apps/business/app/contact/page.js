import React from "react";
import PageHeader from "@/components/ui/pageHeader";
import ContactForm from "@/app/contact/contactForm";

function ContactPage() {
  return (
    <div className="bg-[#ECFFFC]">
      <div className="container">
        <PageHeader type="contact" />
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
