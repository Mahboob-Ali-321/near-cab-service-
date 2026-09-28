import React from "react";
import { Phone, Navigation, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";
import { openWhatsApp } from "../utils/whatsapp.ts";

interface PopularRoutesProps {
  lang: "en" | "hi";
}

export const PopularRoutes: React.FC<PopularRoutesProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { routesSection, business } = SITE_CONFIG;

  const scrollToBooking = () => {
    const el = document.getElementById("booking-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="routes" className="py-12 md:py-16 bg-[#eff4ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-bold text-[#7b5800] uppercase tracking-wider">
              {isHi ? routesSection.tagHi : routesSection.tagEn}
            </span>
            <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight mt-1">
              {isHi ? routesSection.headingHi : routesSection.headingEn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {isHi ? routesSection.subheadingHi : routesSection.subheadingEn}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={`tel:${business.phonePrimaryRaw}`}
              className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00152f] hover:text-[#0f2a4a] bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>{isHi ? routesSection.callForCustomHi : routesSection.callForCustomEn}</span>
            </a>
          </div>
        </motion.div>

        {/* Routes Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {routesSection.routes.map((route) => {
            const isFeatured = route.isFeatured;

            return (
              <motion.div
                key={route.id}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className={`rounded-2xl p-6 transition-shadow duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-white border-2 border-[#febb14] shadow-md hover:shadow-xl ring-4 ring-amber-100/50"
                    : "bg-white border border-slate-200 shadow-xs hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isFeatured
                          ? "bg-[#febb14] text-[#00152f]"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {isFeatured
                        ? isHi
                          ? "सर्वाधिक बुक किया गया"
                          : "Featured Deal"
                        : isHi
                        ? route.distanceHi
                        : route.distanceEn}
                    </span>
                    {isFeatured && (
                      <span className="text-xs text-slate-500 font-medium">
                        {isHi ? route.distanceHi : route.distanceEn}
                      </span>
                    )}
                  </div>

                  <h3 className="font-extrabold text-[#00152f] text-lg sm:text-xl mt-1">
                    {isHi ? route.titleHi : route.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {isHi ? route.descHi : route.descEn}
                  </p>

                  {/* Pricing details */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    {isFeatured && route.prices ? (
                      <>
                        <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <span className="text-xs font-semibold text-slate-700">
                            {isHi ? "एसी सेडान (राउंड-ट्रिप):" : "AC Sedan (Round-trip):"}
                          </span>
                          <span className="font-extrabold text-sm sm:text-base text-[#00152f]">
                            {isHi ? route.prices.sedanHi : route.prices.sedanEn}
                          </span>
                        </div>
                        <div className="flex items-center justify-between bg-amber-50/50 p-2.5 rounded-lg border border-amber-200/60">
                          <span className="text-xs font-semibold text-slate-700">
                            {isHi ? "7-सीटर एमयूवी:" : "7-Seater MUV:"}
                          </span>
                          <span className="font-extrabold text-sm sm:text-base text-[#00152f]">
                            {isHi ? route.prices.muvHi : route.prices.muvEn}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span className="text-xs font-medium text-slate-600">
                          {isHi ? "किराया:" : "Fare Rate:"}
                        </span>
                        <span className="font-bold text-xs sm:text-sm text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">
                          {isHi ? route.rateNoteHi : route.rateNoteEn}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-5">
                  {isFeatured ? (
                    <button
                      onClick={() =>
                        openWhatsApp(
                          isHi
                            ? "नमस्ते नियर सीबीएस सर्विस, मुझे देवघर से बासुकीनाथ धाम के लिए कैब बुक करनी है।"
                            : "Hello Near Cabs Service, I would like to book a cab for Deoghar to Basukinath Dham."
                        )
                      }
                      className="w-full min-h-[44px] text-center bg-[#febb14] hover:bg-[#e5a70f] text-[#00152f] font-bold text-xs sm:text-sm py-2.5 rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer flex items-center justify-center"
                    >
                      {isHi ? "अभी बुक करें" : "Book Now"}
                    </button>
                  ) : (
                    <a
                      href={`tel:${business.phonePrimaryRaw}`}
                      className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-[#00152f] font-bold text-xs sm:text-sm py-2.5 rounded-xl border border-slate-200 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-600" />
                      <span>{isHi ? "दर जानने हेतु कॉल करें" : "Call for Rate"}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Serving Cities Network Chips with stagger animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="mt-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <h4 className="font-extrabold text-sm sm:text-base text-[#00152f]">
              {isHi
                ? routesSection.servingCitiesHeadingHi
                : routesSection.servingCitiesHeadingEn}
            </h4>
          </div>
          <motion.div
            variants={staggerContainerVariants}
            className="flex flex-wrap gap-2"
          >
            {(isHi ? routesSection.citiesHi : routesSection.cities).map((city, idx) => (
              <motion.span
                key={idx}
                variants={staggerItemVariants}
                className="px-3 py-1 rounded-full bg-[#eff4ff] text-[#00152f] text-xs font-semibold border border-slate-200 shadow-2xs hover:bg-[#ffdea5] transition-colors"
              >
                {city}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
