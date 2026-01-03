"use client";

import { CheckoutForm } from "./checkoutLayout";

type Props = {
  form: CheckoutForm;
  onChange: (key: keyof CheckoutForm, value: string) => void;
};

export default function CheckoutShipping({ form, onChange }: Props) {
  return (
    <section className="card">
      <h4 className="section-title">Shipping Address</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="input"
          value={form.billing_house_number}
          onChange={(e) => onChange("billing_house_number", e.target.value)}
          placeholder="House number"
        />
        <input
          className="input"
          value={form.billing_street}
          onChange={(e) => onChange("billing_street", e.target.value)}
          placeholder="Street"
        />
        <input
          className="input"
          value={form.billing_city}
          onChange={(e) => onChange("billing_city", e.target.value)}
          placeholder="City"
        />
        <input
          className="input"
          value={form.billing_state}
          onChange={(e) => onChange("billing_state", e.target.value)}
          placeholder="State"
        />
        <input
          className="input sm:col-span-2"
          value={form.billing_landmark}
          onChange={(e) => onChange("billing_landmark", e.target.value)}
          placeholder="Landmark"
        />
      </div>
    </section>
  );
}
