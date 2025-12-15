import React from "react";
import PhonesSearch from "./phonesSearch";
import { Suspense } from "react";

export const metadata = {
  title: "Browse Phones | APG Business Hub",
  description: "Explore smartphones, feature phones, and phone accessories.",
};

function Fallback() {
  return <>loading...</>;
}

export default function PhonesPage() {
  return (
    <div className="container">
      <Suspense fallback={<Fallback />}>
        <PhonesSearch />
      </Suspense>
    </div>
  );
}
