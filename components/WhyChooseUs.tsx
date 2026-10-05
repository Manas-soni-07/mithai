import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import GoldDivider from "./GoldDivider";
import { Leaf, ShieldCheck, Sparkles, Heart, CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (type: string) => {
    switch (type) {
      case "leaf":
        return <Leaf className="w-6 h-6 text-[#7A0715]" />;
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-[#7A0715]" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-[#7A0715]" />;
      case "heart":
        return <Heart className="w-6 h-6 text-[#7A0715]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#7A0715]" />;
    }
  };

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#FFFDF7] py-14 sm:py-20 md:py-24 border-t border-[#FAF0D8]"
    >
      {/* Background Temple Illustration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <Image
          src="/images/temple-bg.svg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B8893C] font-semibold">
            Purity & Trust
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A0715] mt-1">
            {siteConfig.whyChooseUs.heading}
          </h2>
          <GoldDivider />
          <p className="text-sm sm:text-base text-[#5A2B18]/80">
            Dedicated to maintaining the highest sacred standards of shuddhta, hygiene, and devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Area: 4 Feature Blocks in 2x2 grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {siteConfig.whyChooseUs.features.map((feature) => (
              <div
                key={feature.id}
                className="bg-[#FAF0D8]/70 hover:bg-[#FAF0D8] border border-[#B8893C]/30 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Circular light beige/golden icon container */}
                <div className="w-16 h-16 rounded-full bg-[#FFFDF8] border-2 border-[#B8893C]/40 flex items-center justify-center mb-4 shadow-xs">
                  {getIcon(feature.iconName)}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#7A0715]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Side: Vertical List Card */}
          <div className="lg:col-span-5 bg-[#FAF0D8]/90 backdrop-blur-xs border border-[#B8893C]/40 rounded-3xl p-7 sm:p-9 shadow-xs">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#7A0715] mb-2 text-left">
              Our Sacred Commitment
            </h3>
            <p className="text-xs sm:text-sm text-[#5A2B18]/80 mb-6 text-left">
              Every batch of churma is consecrated with prayers and cooked with authentic ingredients.
            </p>

            <ul className="space-y-4">
              {siteConfig.whyChooseUs.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3.5 bg-[#FFFDF8]/90 p-3.5 rounded-xl border border-[#FAF0D8] shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full bg-[#FAF0D8] flex items-center justify-center flex-shrink-0 text-[#7A0715] border border-[#B8893C]/40">
                    <CheckCircle2 className="w-4 h-4 text-[#7A0715]" />
                  </div>
                  <span className="font-heading text-sm sm:text-base font-semibold text-[#5A2B18]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
