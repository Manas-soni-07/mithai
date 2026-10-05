import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="relative bg-[#58050E] text-[#FFF8E8] overflow-hidden border-t-2 border-[#B8893C]/40">
      {/* Subtle Devotional Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/images/temple-bg.svg"
          alt=""
          fill
          className="object-cover object-center invert"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#FAF0D8]/15">
          {/* Left: Peacock Feather Logo & Brand */}
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Shree Shyam Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-heading text-2xl font-bold tracking-tight text-white leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
                {siteConfig.tagline}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7" aria-label="Footer Navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm sm:text-base font-medium text-[#FAF0D8]/80 hover:text-[#D4AF37] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Devotional Greeting */}
          <div className="flex items-center gap-2 bg-[#7A0715]/80 border border-[#B8893C]/40 px-5 py-2.5 rounded-full shadow-inner">
            <span className="font-heading text-sm sm:text-base font-semibold text-[#D4AF37] tracking-wider">
              {siteConfig.footer.devotionalClose}
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Sacred Blessing */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#FAF0D8]/60 gap-4 text-center sm:text-left">
          <p>{siteConfig.footer.copyright}</p>
          <p className="text-[#D4AF37]/90 font-heading text-xs tracking-wider">
            Dedicated with reverence to Shri Khatu Shyam Ji
          </p>
        </div>
      </div>
    </footer>
  );
}
