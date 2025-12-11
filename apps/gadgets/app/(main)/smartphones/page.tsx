import React from "react";
import PhonesSearch from "./phonesSearch";

export const metadata = {
  title: "Browse Phones | APG Business Hub",
  description: "Explore smartphones, feature phones, and phone accessories.",
};

export default function PhonesPage() {
  return (
    <div className="container">
      <PhonesSearch />
    </div>
  );
}
