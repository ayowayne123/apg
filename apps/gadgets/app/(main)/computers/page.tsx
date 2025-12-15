import React from "react";
import ComputersSearch from "./computersSearch";
import { Suspense } from "react";

export const metadata = {
  title: "Browse Computers | APG Business Hub",
  description: "Explore laptops, desktops, and computer accessories.",
};

function Fallback() {
  return <>loading...</>;
}

export default function ComputersPage() {
  return (
    <div className="container">
      <Suspense fallback={<Fallback />}>
        <ComputersSearch />
      </Suspense>
    </div>
  );
}
