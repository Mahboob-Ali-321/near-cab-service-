import React from "react";
import { Star, MessageSquare, Phone, Clock, UserCheck, Sparkles, ShieldCheck, Car } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { QuickBookingForm } from "./QuickBookingForm.tsx";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  scaleInVariants,
} from "../utils/motion.ts";
import { getWhatsAppUrl, getDefaultWhatsAppMessage } from "../utils/whatsapp.ts";

interface HeroProps {
  lang: "en" | "hi";
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { hero, business, trustFeatures } = SITE_CONFIG;

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-4 h-4 text-[#00152f]" />;
      case "UserCheck":
        return <UserCheck className="w-4 h-4 text-[#00152f]" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-4 h-4 text-[#00152f]" />;
    }
  };

  return (
    <section className="relative bg-[#eff4ff] pt-6 pb-12 md:py-14 border-b border-slate-200 overflow-hidden">
      {/* 
        Subtle ambient road route motif:
        Hidden on mobile below md: to avoid showing through content,
        kept behind content (z-0) with low opacity on desktop.
      */}
      <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:flex justify-around z-0">
        <div className="w-px border-r-2 border-dashed border-[#00152f] h-full"></div>
        <div className="w-px border-r-2 border-dashed border-[#00152f] h-full"></div>
        <div className="w-px border-r-2 border-dashed border-[#00152f] h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading & Trust */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-5"
          >
            {/* Google Rating Trust Badge */}
            <motion.div
              variants={staggerItemVariants}
              className="inline-flex flex-wrap items-center gap-2 bg-white border border-slate-200 rounded-full px-3 sm:px-3.5 py-1.5 shadow-2xs w-fit max-w-full"
            >
              <span className="flex items-center gap-1 font-bold text-amber-600 text-xs sm:text-sm">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-500" />
                <span>{isHi ? "5.0 रेटिंग" : "5.0 Rating"}</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-700">
                {isHi ? "98+ गूगल समीक्षाएं" : "98+ Google Reviews"}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-semibold text-[#00152f] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span>{isHi ? hero.badgeCityHi : hero.badgeCityEn}</span>
              </span>
            </motion.div>

            {/* Exactly One Semantic H1 with Fluid Typography Clamp */}
            <motion.h1
              variants={staggerItemVariants}
              className="text-[clamp(1.45rem,4.8vw,2.65rem)] font-extrabold text-[#00152f] tracking-tight leading-[1.2] sm:leading-tight"
            >
              {isHi ? (
                <>
                  देवघर से बासुकीनाथ, कोलकाता, पटना, रांची —{" "}
                  <span className="text-[#0f2a4a] underline decoration-[#febb14] decoration-4 underline-offset-4">
                    सुरक्षित और किफायती
                  </span>{" "}
                  कैब सेवा
                </>
              ) : (
                <>
                  Deoghar to Basukinath, Kolkata, Patna, Ranchi —{" "}
                  <span className="text-[#0f2a4a] underline decoration-[#febb14] decoration-4 underline-offset-4">
                    Safe and Affordable
                  </span>{" "}
                  Cab Service
                </>
              )}
            </motion.h1>

            {/* Subtitle with soft pulsed ₹1,850 highlight */}
            <motion.p
              variants={staggerItemVariants}
              className="text-xs sm:text-sm md:text-base text-slate-700 max-w-2xl leading-relaxed"
            >
              {isHi ? hero.subtitlePrefixHi : hero.subtitlePrefixEn}
              <motion.strong
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                className="inline-block text-[#00152f] font-bold bg-[#ffdea5] px-1.5 py-0.5 rounded shadow-2xs mx-1"
              >
                {isHi ? hero.subtitleHighlightHi : hero.subtitleHighlightEn}
              </motion.strong>
              {isHi ? hero.subtitleSuffixHi : hero.subtitleSuffixEn}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              variants={staggerItemVariants}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppUrl(getDefaultWhatsAppMessage(isHi))}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{isHi ? hero.ctaWhatsappHi : hero.ctaWhatsappEn}</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${business.phonePrimaryRaw}`}
                className="min-h-[48px] bg-[#00152f] hover:bg-[#0f2a4a] text-white font-bold text-sm sm:text-base px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-5 h-5 text-[#febb14]" />
                <span>{isHi ? hero.ctaCallHi : hero.ctaCallEn}</span>
              </motion.a>
            </motion.div>

            {/* Trust Icons Row - Softened claims per brief */}
            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-300/70 max-w-2xl"
            >
              {trustFeatures.map((feat, index) => (
                <motion.div
                  key={index}
                  variants={scaleInVariants}
                  className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/80 shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e6eeff] flex items-center justify-center flex-shrink-0">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-xs text-[#00152f] truncate">
                      {isHi ? feat.titleHi : feat.titleEn}
                    </span>
                    <span className="text-[11px] text-slate-500 truncate">
                      {isHi ? feat.subtitleHi : feat.subtitleEn}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Fleet Preview Pill with gentle float */}
            <motion.div
              variants={staggerItemVariants}
              className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-3 max-w-xl"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-11 h-11 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#00152f] flex-shrink-0 border border-slate-200"
              >
                <Car className="w-6 h-6 text-[#00152f]" />
              </motion.div>
              <div className="min-w-0">
                <p className="font-bold text-xs sm:text-sm text-[#00152f] leading-tight">
                  {isHi ? hero.availableFleetHi : hero.availableFleetEn}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 truncate">
                  {isHi ? hero.availableFleetSubHi : hero.availableFleetSubEn}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Quick Booking Form */}
          <div className="lg:col-span-5">
            <QuickBookingForm lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};
