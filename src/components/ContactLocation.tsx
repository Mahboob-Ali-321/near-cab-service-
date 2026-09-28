import React from "react";
import { MapPin, Phone, Clock, Navigation, Star, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { fadeInUpVariants, viewportOnce } from "../utils/motion.ts";
import { getWhatsAppUrl, getDefaultWhatsAppMessage } from "../utils/whatsapp.ts";

interface ContactLocationProps {
  lang: "en" | "hi";
}

export const ContactLocation: React.FC<ContactLocationProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { contactSection, business } = SITE_CONFIG;

  return (
    <section id="contact" className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Contact Details Left */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-bold text-[#7b5800] uppercase tracking-wider">
                {isHi ? contactSection.tagHi : contactSection.tagEn}
              </span>
              <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight mt-1">
                {isHi ? contactSection.headingHi : contactSection.headingEn}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2">
                {isHi ? contactSection.subheadingHi : contactSection.subheadingEn}
              </p>
            </div>

            {/* Address Block */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-start gap-3.5 shadow-2xs">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-[#00152f] text-white flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#febb14]" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#00152f] text-sm sm:text-base">
                  {isHi ? contactSection.addressTitleHi : contactSection.addressTitleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                  {isHi ? business.addressHi : business.addressEn}
                </p>
              </div>
            </div>

            {/* Phone Numbers Block (Both numbers prominently displayed!) */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-start gap-3.5 shadow-2xs">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#00152f] text-sm sm:text-base">
                  {isHi ? contactSection.phoneTitleHi : contactSection.phoneTitleEn}
                </h4>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
                  <a
                    href={`tel:${business.phonePrimaryRaw}`}
                    className="font-extrabold text-sm sm:text-base text-[#00152f] hover:text-[#7b5800] hover:underline"
                  >
                    {business.phonePrimary}
                  </a>
                  <span className="text-slate-300 font-bold">/</span>
                  <a
                    href={`tel:${business.phoneSecondaryRaw}`}
                    className="font-extrabold text-sm sm:text-base text-[#00152f] hover:text-[#7b5800] hover:underline"
                  >
                    {business.phoneSecondary}
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-start gap-3.5 shadow-2xs">
              <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-[#febb14] text-[#00152f] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#00152f] text-sm sm:text-base">
                  {isHi ? contactSection.hoursTitleHi : contactSection.hoursTitleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 mt-1">
                  {isHi ? business.openingHoursHi : business.openingHoursEn}
                </p>
              </div>
            </div>
          </div>

          {/* Location Interactive Card Right */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-col gap-4">
              <div className="relative h-64 sm:h-72 rounded-xl bg-slate-200 overflow-hidden border border-slate-300 flex flex-col items-center justify-center text-center p-5">
                {/* Styled Map Simulation Canvas */}
                <div className="absolute inset-0 bg-[#e7ebf2] opacity-90"></div>

                {/* Decorative Map Grid Lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none flex flex-col justify-around">
                  <div className="w-full border-t border-slate-600"></div>
                  <div className="w-full border-t border-slate-600"></div>
                  <div className="w-full border-t border-slate-600"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-[#00152f] text-[#febb14] shadow-md flex items-center justify-center mb-2 animate-bounce">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#00152f]">
                    {isHi ? business.nameHi : business.nameEn}
                  </h4>
                  <p className="text-xs text-slate-700 max-w-xs mt-1 leading-relaxed">
                    {isHi ? business.addressHi : business.addressEn}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#00152f] shadow-2xs border border-slate-200">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>5.0 Star on Google Maps (98 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with min 48px height */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] bg-[#00152f] hover:bg-[#0f2a4a] text-white text-xs sm:text-sm font-bold py-3 px-3 rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-4 h-4 text-[#febb14]" />
                  <span>{isHi ? contactSection.directionsBtnHi : contactSection.directionsBtnEn}</span>
                </a>

                <a
                  href={`tel:${business.phonePrimaryRaw}`}
                  className="min-h-[48px] bg-[#febb14] hover:bg-[#e5a70f] text-[#00152f] text-xs sm:text-sm font-bold py-3 px-3 rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isHi ? contactSection.instantCallBtnHi : contactSection.instantCallBtnEn}</span>
                </a>

                <a
                  href={getWhatsAppUrl(getDefaultWhatsAppMessage(isHi))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold py-3 px-3 rounded-xl text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{isHi ? "व्हाट्सएप चैट" : "WhatsApp"}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
