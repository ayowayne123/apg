"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FilterDropdown({
  label,
  options = [],
  value = null,
  onChange = () => {},
  multi = false,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(multi ? value || [] : value || null);
  const rootRef = useRef(null);

  useEffect(
    () => setInternal(multi ? value || [] : value || null),
    [value, multi]
  );

  useEffect(() => {
    function onDoc(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const toggleOption = (opt) => {
    if (multi) {
      const set = new Set(internal || []);
      if (set.has(opt)) set.delete(opt);
      else set.add(opt);
      const arr = Array.from(set);
      setInternal(arr);
      onChange(arr);
    } else {
      setInternal(opt);
      onChange(opt);
      setOpen(false);
    }
  };

  const clear = () => {
    const empty = multi ? [] : null;
    setInternal(empty);
    onChange(empty);
  };

  const renderLabel = () => {
    if (multi) {
      if (!internal || internal.length === 0) return label;
      return internal.join(", ");
    }
    return internal || label;
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex items-center justify-between cursor-pointer rounded-md px-4 py-2 bg-[#F4F4F4] hover:bg-gray-50 min-w-[120px]"
      >
        <span className="truncate">{renderLabel()}</span>
        <FiChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-white  rounded-md shadow-lg z-50">
          <div className="p-2">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">{label}</div>
              <button
                onClick={clear}
                className="text-xs text-gray-500 hover:underline"
              >
                Clear
              </button>
            </div>
          </div>

          <ul className="max-h-56 overflow-y-auto">
            {options.map((opt, i) => (
              <li
                key={i}
                className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                onClick={() => toggleOption(opt)}
              >
                {multi ? (
                  <input
                    type="checkbox"
                    readOnly
                    checked={(internal || []).includes(opt)}
                    className="w-4 h-4"
                  />
                ) : null}
                <span className="text-sm">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
