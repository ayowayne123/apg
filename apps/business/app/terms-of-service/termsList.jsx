"use client";
import React from "react";

const terms = [
  {
    title: "Eligibility",
    body: (
      <p>
        You must be at least 18 years old and have the legal capacity to enter
        into contracts to use our services. By using our platform, you confirm
        that the information you provide is accurate and complete.
      </p>
    ),
  },
  {
    title: "Scope of Services",
    body: (
      <>
        <p>
          Articulate Business Hub offers two primary categories of services:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Gadget Sales: We sell authentic, brand-new electronics including
            smartphones, laptops, and accessories.
          </li>
          <li>
            Real Estate Services: We facilitate the sale, rental, and investment
            in verified real estate properties across Nigeria.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Orders and Payments",
    body: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Orders are confirmed only after full or agreed deposit payments are
          received.
        </li>
        <li>Prices are subject to change without prior notice.</li>
        <li>
          We accept payments via bank transfer, online payment gateways, and
          other secure methods.
        </li>
        <li>
          Fraudulent transactions will be reported and legal action may be
          pursued.
        </li>
      </ul>
    ),
  },
  {
    title: "Delivery and Shipping",
    body: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Gadget orders are shipped within [1–3 business days] for in-stock
          items.
        </li>
        <li>
          Delivery timelines may vary based on location and product
          availability..
        </li>
        <li>
          Shipping fees may apply and will be communicated before final
          checkout.
        </li>
      </ul>
    ),
  },
  {
    title: "Returns and Refunds (Gadgets)",
    body: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Items may be eligible for return or exchange within [7] days of
          purchase if unopened and in original condition.
        </li>
        <li>Refunds are processed after inspection and approval.</li>
        <li>
          Certain items (e.g., opened accessories, software) may be
          non-returnable.
        </li>
      </ul>
    ),
  },
  {
    title: "Property Listings and Accuracy",
    body: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          We strive to ensure all property listings are accurate, up-to-date,
          and verified.
        </li>
        <li>Property availability and pricing are subject to change.</li>
        <li>
          Clients are encouraged to schedule inspections before making
          commitments.
        </li>
      </ul>
    ),
  },
  {
    title: "Real Estate Transactions",
    body: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          We act as intermediaries between buyers/sellers or landlords/tenants.{" "}
        </li>
        <li>
          We are not liable for disputes arising after the conclusion of a
          transaction unless caused by gross negligence on our part..
        </li>
        <li>
          All property transactions are subject to legal documentation and
          applicable fees.
        </li>
      </ul>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <p>
        All content on our platform—including text, images, logos, and digital
        assets—is owned or licensed by us. You may not reproduce, distribute, or
        use materials without express written permission.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    body: (
      <p>
        We are not liable for any direct, indirect, incidental, or consequential
        damages arising from use of our services, including delays,
        interruptions, data loss, or issues beyond our reasonable control.
      </p>
    ),
  },
  {
    title: "Changes to Terms",
    body: (
      <p>
        We may update these Terms of Service at any time. Continued use of our
        services after updates constitutes acceptance of the revised terms.
      </p>
    ),
  },
];

export default function TermsList() {
  return (
    <section className="py-20">
      <div className="space-y-12">
        {terms.map((t, i) => (
          <div key={i} className="leading-[130%]">
            <h3 className="flex items-start gap-3">
              <span className="font-bold text-primary text-3xl">{i + 1}.</span>
              <span className="font-bold text-primary text-3xl">{t.title}</span>
            </h3>
            <div className="text-[#767676] mt-3 tracking-tight text-xl">
              {t.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
