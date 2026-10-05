import React from "react";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/data/siteData";
import { Phone, Sparkles, Heart, ShieldCheck, Users } from "lucide-react";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  const featureIcons = [
    <Sparkles key="1" className="w-4 h-4 text-[#B8893C]" />,
    <Heart key="2" className="w-4 h-4 text-[#B8893C]" />,
    <ShieldCheck key="3" className="w-4 h-4 text-[#B8893C]" />,
    <Users key="4" className="w-4 h-4 text-[#B8893C]" />,
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FAF0D8]/40 to-[#FFFDF8] py-10 sm:py-14 md:py-20 lg:py-24"
    >
      {/* Background Temple Silhouette Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <Image
          src="/images/temple-bg.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Devotional Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Devotional Salutation */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0D8] border border-[#B8893C]/40 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#7A0715] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#7A0715]">
                {siteConfig.hero.devotionalGreeting}
              </span>
            </div>

            {/* Main Brand Heading */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight text-[#7A0715]">
              {siteConfig.hero.title}
            </h1>
            <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-[#5A2B18] mt-1 sm:mt-2 mb-4">
              {siteConfig.hero.subtitle}
            </p>

            {/* Sacred Description */}
            <p className="text-base sm:text-lg text-[#5A2B18]/90 max-w-xl leading-relaxed mb-6 sm:mb-8 font-normal">
              {siteConfig.hero.description}
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg mb-8 sm:mb-10">
              {siteConfig.hero.badges.map((badge, idx) => (
                <div
                  key={badge}
                  className="flex items-center gap-2.5 bg-[#FFFDF8]/90 backdrop-blur-xs p-2.5 sm:p-3 rounded-xl border border-[#FAF0D8] shadow-xs"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FAF0D8] flex items-center justify-center flex-shrink-0 border border-[#B8893C]/30 shadow-xs">
                    {featureIcons[idx]}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#5A2B18]">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Primary: WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#7A0715] hover:bg-[#8B0D18] text-white px-7 py-3.5 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-[#991B1B]/40 group"
              >
                <svg
                  className="w-5 h-5 fill-current text-[#25D366] transition-transform group-hover:scale-110"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Order / Enquire on WhatsApp →</span>
              </a>

              {/* Secondary: Call Button */}
              <a
                href={`tel:${siteConfig.phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 bg-[#FFFDF8] hover:bg-[#FAF0D8] text-[#5A2B18] hover:text-[#7A0715] px-6 py-3.5 rounded-full text-base font-semibold border-2 border-[#5A2B18]/30 hover:border-[#7A0715] transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-[#7A0715]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Prasad Bowl & Devotional Side Pillars */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Devotional Glow Ring */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#FFE082]/30 via-[#FAF0D8]/60 to-[#FFD54F]/20 blur-2xl -z-10"></div>

            {/* Churma Prasad Bowl Hero Image */}
            <div className="relative w-full max-w-[460px] aspect-5/4 transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/images/hero-churma.svg"
                alt="Shree Shyam Churma Prasad in a traditional decorative bowl"
                fill
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Subtle Decorative Devotional Badge on the far right */}
            <div className="hidden sm:flex absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 flex-col items-center bg-[#FFF8E8]/90 backdrop-blur-xs border border-[#B8893C]/40 px-3 py-4 rounded-2xl shadow-sm space-y-2 select-none">
              <div className="w-6 h-6 relative mb-1">
                <Image
                  src="/images/logo.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              {siteConfig.hero.sidePillars.map((pillar) => (
                <span
                  key={pillar}
                  className="font-heading text-xs tracking-wider text-[#7A0715] font-semibold"
                >
                  {pillar}
                </span>
              ))}
              <div className="text-[#B8893C] text-xs mt-1">♡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
