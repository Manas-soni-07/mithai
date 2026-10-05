import React from "react";
import { siteConfig } from "@/data/siteData";
import GoldDivider from "./GoldDivider";
import { MessageSquare, FileText, Truck, ArrowRight, ArrowDown } from "lucide-react";

export default function HowToOrder() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "whatsapp":
        return (
          <svg
            className="w-7 h-7 fill-current text-[#25D366]"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        );
      case "message":
        return <MessageSquare className="w-7 h-7 text-[#7A0715]" />;
      case "fileText":
        return <FileText className="w-7 h-7 text-[#7A0715]" />;
      case "truck":
        return <Truck className="w-7 h-7 text-[#7A0715]" />;
      default:
        return <MessageSquare className="w-7 h-7 text-[#7A0715]" />;
    }
  };

  return (
    <section
      id="how-to-order"
      className="relative bg-[#FFFDF7] py-14 sm:py-20 md:py-24 border-t border-[#FAF0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#B8893C] font-semibold">
            Simple & Easy Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A0715] mt-1">
            {siteConfig.howToOrder.heading}
          </h2>
          <GoldDivider />
          <p className="text-sm sm:text-base text-[#5A2B18]/80">
            Order sacred prasad effortlessly directly through WhatsApp with home delivery.
          </p>
        </div>

        {/* 4-Step Process: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative items-start">
          {siteConfig.howToOrder.steps.map((item, index) => {
            const isLast = index === siteConfig.howToOrder.steps.length - 1;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Desktop Arrow Indicator to next step */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-10 left-[62%] w-[76%] items-center justify-center pointer-events-none z-0">
                    <div className="w-full border-t-2 border-dashed border-[#B8893C]/40"></div>
                    <ArrowRight className="w-4 h-4 text-[#B8893C] -ml-1 flex-shrink-0" />
                  </div>
                )}

                {/* Mobile Down Arrow Indicator */}
                {!isLast && (
                  <div className="flex md:hidden my-3 items-center justify-center text-[#B8893C]">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                )}

                {/* Circular Cream/Golden Icon Container */}
                <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#FAF0D8] border-2 border-[#B8893C] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-[#FFF8E8] group-hover:border-[#7A0715]">
                  {getStepIcon(item.iconName)}

                  {/* Step Number Tag */}
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#7A0715] text-white text-xs font-bold flex items-center justify-center border border-[#FAF0D8] shadow-xs">
                    {item.step}
                  </span>
                </div>

                {/* Step Title / Text */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#5A2B18] mt-5 max-w-[220px] leading-snug group-hover:text-[#7A0715] transition-colors">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
