import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import GoldDivider from "./GoldDivider";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFFDF7] py-14 sm:py-20 md:py-24 border-t border-[#FAF0D8]"
    >
      {/* Background Decorative Temple Silhouettes */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <Image
          src="/images/temple-bg.svg"
          alt=""
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Circular/Rounded Devotional Image of Shri Khatu Shyam Ji */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-80 md:w-96 aspect-square rounded-full p-2 bg-gradient-to-tr from-[#B8893C] via-[#FAF0D8] to-[#D4AF37] shadow-xl">
              {/* Inner Glow Frame */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FFFDF8] bg-[#FAF0D8]">
                <Image
                  src="/images/khatu-shyam.svg"
                  alt="Shri Khatu Shyam Ji"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>

              {/* Decorative Corner Mor Pankh Ornament */}
              <div className="absolute -bottom-3 -right-2 w-16 h-16 sm:w-20 sm:h-20 drop-shadow-md pointer-events-none">
                <Image
                  src="/images/peacock-feather.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right: Heading, Divider, Narrative & Quote Card */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest text-[#B8893C] font-semibold">
                Divine Tradition
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A0715] mt-1">
                {siteConfig.about.heading}
              </h2>
              <div className="flex justify-start">
                <GoldDivider className="!my-2.5 !justify-start" width="w-16" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#5A2B18]/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {siteConfig.about.paragraph}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-center">
              {/* CTA Button */}
              <div className="md:col-span-6 flex items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#7A0715] hover:bg-[#8B0D18] text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-[#991B1B]/40 group"
                >
                  <span>{siteConfig.about.ctaText}</span>
                </a>
              </div>

              {/* Soft Beige Quote Card */}
              <div className="md:col-span-6 bg-[#FAF0D8]/90 backdrop-blur-xs border border-[#B8893C]/30 rounded-2xl p-5 sm:p-6 shadow-xs relative">
                <div className="text-3xl text-[#B8893C] font-serif leading-none absolute top-3 left-3 select-none opacity-40">
                  “
                </div>
                <blockquote className="font-heading italic text-sm sm:text-base text-[#7A0715] leading-relaxed relative z-10 pl-3">
                  Prasad is not just food, it is a blessing that connects us to Shri Shyam Ji.
                </blockquote>
                <div className="mt-2 text-right">
                  <span className="text-xs font-semibold tracking-wider text-[#B8893C] uppercase">
                    — Khatu Shyam Seva
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
