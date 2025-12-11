import React from "react";
import ComputersSearch from "./computersSearch";

export const metadata = {
  title: "Browse Computers | APG Business Hub",
  description: "Explore laptops, desktops, and computer accessories.",
};

export default function ComputersPage() {
  return (
    <div className="container">
      <ComputersSearch />
    </div>
  );
}
