import React from "react";

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export default function GoldDivider({
  className = "",
  width = "w-16 sm:w-24",
}: GoldDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 sm:gap-3 my-3 select-none ${className}`}
      aria-hidden="true"
    >
      <span className={`h-[1px] ${width} bg-gradient-to-r from-transparent via-[#B8893C] to-[#B8893C]`}></span>
      
      {/* Small Golden Ornamental Motif */}
      <div className="flex items-center gap-1 text-[#B8893C]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B8893C]/70"></span>
        <span className="w-2.5 h-2.5 rotate-45 border border-[#B8893C] bg-[#FAF0D8]"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#B8893C]/70"></span>
      </div>

      <span className={`h-[1px] ${width} bg-gradient-to-l from-transparent via-[#B8893C] to-[#B8893C]`}></span>
    </div>
  );
}
