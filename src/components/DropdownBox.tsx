"use client"

import { ReactNode, useState } from "react";
import { Cloud, ChevronDown } from "lucide-react";

export default function DropdownBox({ text, children }: { text: string, children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-72 bg-emerald-900/90 hover:bg-emerald-900 transition delay-150 duration-300 text-cyan-500 p-4 rounded-xl hover:cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      {/* Header */}
      <div className="flex items-center justify-between text-lg font-bold">
        <div className="flex gap-2 items-center pl-1">
          <Cloud />
          {text}
        </div>
        <div className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          <ChevronDown />
        </div>
      </div>

      {/* Content (Dropdown Body) */}
      <div
        className={`transition-all duration-300 ${
          open ? "opacity-100 p-4 overflow-x-hidden overflow-scroll" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
