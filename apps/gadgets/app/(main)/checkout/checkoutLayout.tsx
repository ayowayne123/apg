"use client";

import { useEffect, useState } from "react";
import { getUserFromCookie } from "@/lib/auth/getUserFromCookie";

import CheckoutUserInfo from "./checkoutUserInfo";
import CheckoutShipping from "./checkoutShipping";
import CheckoutPayment from "./checkoutPayment";
import CheckoutSummary from "./checkoutSummary";

export type CheckoutForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;

  billing_house_number: string;
  billing_street: string;
  billing_city: string;
  billing_state: string;
  billing_landmark: string;

  shipping: number;
  tax: number;
};

export default function CheckoutLayout() {
  const [form, setForm] = useState<CheckoutForm | null>(null);

  useEffect(() => {
    const user = getUserFromCookie();

    setForm({
      first_name: user?.first_name ?? "",
      last_name: user?.last_name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",

      billing_house_number: user?.billing_house_number ?? "",
      billing_street: user?.billing_street ?? "",
      billing_city: user?.billing_city ?? "",
      billing_state: user?.billing_state ?? "",
      billing_landmark: user?.billing_landmark ?? "",

      shipping: 0,
      tax: 0,
    });
  }, []);

  if (!form) return null;

  const updateField = (key: keyof CheckoutForm, value: string | number) => {
    setForm((prev) => ({ ...prev!, [key]: value }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT */}
      <div className="lg:col-span-2 space-y-8">
        <CheckoutUserInfo form={form} onChange={updateField} />
        <CheckoutShipping form={form} onChange={updateField} />
        <CheckoutPayment />
      </div>

      {/* RIGHT */}
      <CheckoutSummary form={form} />
    </div>
  );
}
