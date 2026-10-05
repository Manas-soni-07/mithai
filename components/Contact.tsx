import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteData";
import GoldDivider from "./GoldDivider";
import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF0D8]/50 to-[#FFFDF7] py-14 sm:py-20 md:py-24 border-t border-[#FAF0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading and Devotional Paragraph */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-xs uppercase tracking-widest text-[#B8893C] font-semibold">
              Reach Out
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#7A0715] mt-1">
              {siteConfig.contact.heading}
            </h2>
            <div className="flex justify-start">
              <GoldDivider className="!my-3 !justify-start" width="w-20" />
            </div>

            <p className="text-base sm:text-lg text-[#5A2B18]/90 leading-relaxed font-normal mb-8 max-w-md">
              {siteConfig.contact.intro}
            </p>

            {/* Devotional Note Badge */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDF8] border border-[#B8893C]/30 shadow-xs max-w-md">
              <p className="font-heading text-sm text-[#7A0715] font-semibold italic">
                “हर घर में पहुंचे बाबा श्याम का पावन प्रसाद”
              </p>
              <p className="text-xs text-[#5A2B18]/70 mt-1">
                Purely hand-crafted in small batches with strict observance of cleanliness and reverence.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Cards Grid (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {/* 1. WhatsApp Card (Green WhatsApp Styling) */}
            <div className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border-2 border-[#25D366]/40 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46] bg-[#D1FAE5] px-2.5 py-1 rounded-full">
                    Instant
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#065F46]">
                  WhatsApp
                </h3>
                <p className="text-base font-semibold text-[#064E3B] mt-1">
                  {siteConfig.phoneDisplay}
                </p>
              </div>

              <div className="mt-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white w-full py-2.5 rounded-xl text-sm font-semibold shadow-xs hover:shadow transition-colors"
                >
                  <span>Chat Now →</span>
                </a>
              </div>
            </div>

            {/* 2. Call Us Card */}
            <div className="bg-[#FFFDF8] border border-[#FAF0D8] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF0D8] text-[#7A0715] flex items-center justify-center mb-4 border border-[#B8893C]/30 shadow-xs">
                  <Phone className="w-5 h-5 text-[#7A0715]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#7A0715]">
                  Call Us
                </h3>
                <p className="text-base font-semibold text-[#5A2B18] mt-1">
                  {siteConfig.phoneDisplay}
                </p>
              </div>
              <div className="mt-5">
                <a
                  href={`tel:${siteConfig.phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF0D8] hover:bg-[#F2E4C4] text-[#7A0715] w-full py-2.5 rounded-xl text-sm font-semibold border border-[#B8893C]/40 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* 3. Instagram Card */}
            <div className="bg-[#FFFDF8] border border-[#FAF0D8] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF0D8] text-[#7A0715] flex items-center justify-center mb-4 border border-[#B8893C]/30 shadow-xs">
                  <svg
                    className="w-5 h-5 fill-current text-[#7A0715]"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#7A0715]">
                  Follow Us
                </h3>
                <p className="text-base font-semibold text-[#5A2B18] mt-1">
                  {siteConfig.instagramHandle}
                </p>
              </div>
              <div className="mt-5">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF0D8] hover:bg-[#F2E4C4] text-[#7A0715] w-full py-2.5 rounded-xl text-sm font-semibold border border-[#B8893C]/40 transition-colors"
                >
                  <span>Visit Instagram →</span>
                </a>
              </div>
            </div>

            {/* 4. Service Area Card */}
            <div className="bg-[#FFFDF8] border border-[#FAF0D8] rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF0D8] text-[#7A0715] flex items-center justify-center mb-4 border border-[#B8893C]/30 shadow-xs">
                  <MapPin className="w-5 h-5 text-[#7A0715]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-[#7A0715]">
                  Our Service Area
                </h3>
                <p className="text-base font-semibold text-[#5A2B18] mt-1">
                  {siteConfig.serviceArea}
                </p>
                <p className="text-xs text-[#5A2B18]/70 mt-0.5">
                  {siteConfig.serviceAreaNote}
                </p>
              </div>
              <div className="mt-5">
                <div className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#B8893C] bg-[#FAF0D8]/60 py-2 rounded-xl w-full border border-[#B8893C]/20">
                  <span>Safely Dispatched with Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
