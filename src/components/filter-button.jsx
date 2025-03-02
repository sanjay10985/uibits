"use client";

import { useState } from "react";

export function FilterButton({ label, isActive = false, onClick }) {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick(label);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-2 text-sm whitespace-nowrap transition-colors ${
        active
          ? "relative text-gray-900 font-medium after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
          : "text-gray-500 hover:text-gray-900"
      }`}
    >
      {label}
    </button>
  );
}
