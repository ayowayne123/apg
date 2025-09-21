"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FilterDropdown({ label, options, onChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleSelect = (option) => {
    setSelected(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm min-w-[150px]"
      >
        <span>{selected}</span>
        <FiChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-md z-50">
          <ul className="max-h-60 overflow-y-auto">
            {options.map((option, i) => (
              <li
                key={i}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 hover:bg-primary/10 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
