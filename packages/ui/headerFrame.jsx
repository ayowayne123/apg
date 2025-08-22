import React from "react";

export default function HeaderFrame({ logo, center, right }) {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow">
      {/* Logo Section */}
      <div className="flex items-center">{logo}</div>

      {/* Center Section */}
      <div className="flex items-center gap-6">{center}</div>

      {/* Right Section */}
      <div className="flex items-center gap-4">{right}</div>
    </header>
  );
}
