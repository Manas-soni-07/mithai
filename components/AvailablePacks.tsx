import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import GoldDivider from "./GoldDivider";

export default function AvailablePacks() {
  return (
    <section
      id="packs"
      className="relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF0D8]/40 to-[#FFFDF7] py-14 sm:py-20 md:py-24 border-t border-[#FAF0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B8893C] font-semibold">
            Fresh Packaging
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A0715] mt-1">
            Available Packs
          </h2>
          <GoldDivider />
          <p className="text-sm sm:text-base text-[#5A2B18]/80">
            Prepared fresh to order in sacred, tamper-proof devotional packaging.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {siteConfig.packs.map((pack) => (
            <div
              key={pack.id}
              className="bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#FAF0D8] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group"
            >
              {/* Product Image at Top */}
              <div className="relative aspect-4/3 w-full bg-[#FAF0D8]/40 p-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={pack.image}
                  alt={`Shree Shyam Churma Prasad ${pack.title}`}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col items-center text-center flex-grow justify-between border-t border-[#FAF0D8]/60 bg-[#FFFDF8]">
                <div className="w-full">
                  {/* Centered Product Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#7A0715] group-hover:text-[#8B0D18] transition-colors">
                    {pack.title}
                  </h3>

                  {/* Small Golden Ornamental Divider below title */}
                  <div className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#B8893C] to-transparent mx-auto my-2.5"></div>

                  {/* Subtitle for Bulk Orders */}
                  {pack.subtitle ? (
                    <p className="text-xs sm:text-sm text-[#5A2B18]/80 leading-relaxed mt-1">
                      {pack.subtitle}
                    </p>
                  ) : (
                    <p className="text-xs text-[#5A2B18]/60 uppercase tracking-wider mt-1">
                      Pure Desi Ghee Churma
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
