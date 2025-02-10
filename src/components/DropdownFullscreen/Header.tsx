"use client"
import { Category } from "@/app/mocks/categories";
import { Cloud, ChevronDown } from "lucide-react";
import { tv } from 'tailwind-variants';


const header = tv({
  base: "w-72 transition delay-150 duration-300 text-cyan-500 p-4 rounded-xl hover:cursor-pointer text-cyan-500 bg-emerald-900/90 hover:bg-emerald-900",
  variants: {
    open: {
      true: "text-green-50 bg-red-500/90 hover:bg-red-500",
    }
  }
})


export default function Header({ category, open, setOpenCategory }: { category: Category, open: boolean, setOpenCategory: React.Dispatch<React.SetStateAction<Category>>  }) {
  return (
    <>
      <div
        className={header({ open: open })}
        onClick={() => setOpenCategory(category)}
      >
        {/* Header */}
        <div className="flex items-center justify-between text-lg font-bold">
          <div className="flex gap-2 items-center pl-1">
            <Cloud />
            {category.name}
          </div>
          <div className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            <ChevronDown />
          </div>
        </div>

        {/* Content (Dropdown Body) */}
      </div>
      {/* {open && <div
        className={`transition-all duration-300 ${open ? "opacity-100 p-4 overflow-scroll" : "max-h-0 opacity-0"
          }`}
      >
        {children}
      </div>} */}
    </>
  );
}
