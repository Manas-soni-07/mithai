import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import GoldDivider from "./GoldDivider";

export default function ProductGallery() {
  return (
    <section
      id="prasad"
      className="relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF0D8]/30 to-[#FFFDF7] py-14 sm:py-20 md:py-24 border-t border-[#FAF0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with Golden Divider */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B8893C] font-semibold">
            Divine Offerings
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A0715] mt-1">
            Our Churma Prasad
          </h2>
          <GoldDivider />
          <p className="text-sm sm:text-base text-[#5A2B18]/80">
            Crafted with sacred devotion, traditional purity, and timeless Rajasthani flavors.
          </p>
        </div>

        {/* 4 Cards in a row: 4 cols on Desktop, 2 cols on Tablet, 1 col on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {siteConfig.gallery.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#FAF0D8] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Image Container with subtle hover zoom */}
              <div className="relative aspect-4/3 sm:aspect-5/4 w-full overflow-hidden bg-[#FAF0D8]/50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Caption matching screenshot */}
              <div className="p-4 sm:p-5 flex flex-col items-center text-center flex-grow justify-between border-t border-[#FAF0D8]/60 bg-[#FFFDF8]">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#7A0715] group-hover:text-[#8B0D18] transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[1.5px] bg-[#B8893C]/60 mx-auto my-2"></div>
                  {item.subtitle && (
                    <p className="text-xs sm:text-sm text-[#5A2B18]/80 leading-snug">
                      {item.subtitle}
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
