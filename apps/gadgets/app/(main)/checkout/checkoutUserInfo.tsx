"use client";

import { CheckoutForm } from "./checkoutLayout";

type Props = {
  form: CheckoutForm;
  onChange: (key: keyof CheckoutForm, value: string) => void;
};

export default function CheckoutUserInfo({ form, onChange }: Props) {
  return (
    <section className="card">
      <h4 className="section-title">Contact Information</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="input"
          value={form.first_name}
          onChange={(e) => onChange("first_name", e.target.value)}
          placeholder="First name"
        />
        <input
          className="input"
          value={form.last_name}
          onChange={(e) => onChange("last_name", e.target.value)}
          placeholder="Last name"
        />
        <input
          className="input"
          value={form.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="Email"
        />
        <input
          className="input"
          value={form.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Phone"
        />
      </div>
    </section>
  );
}
