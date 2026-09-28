import React from "react";
import { Landmark, Car, Navigation, Train, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";
import { openWhatsApp } from "../utils/whatsapp.ts";

interface ServicesProps {
  lang: "en" | "hi";
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { servicesSection } = SITE_CONFIG;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "local-sightseeing":
        return <Landmark className="w-6 h-6 text-[#7b5800]" />;
      case "basukinath":
        return <Car className="w-6 h-6 text-[#00152f]" />;
      case "outstation":
        return <Navigation className="w-6 h-6 text-[#00152f]" />;
      case "station-airport":
        return <Train className="w-6 h-6 text-[#00152f]" />;
      case "tarapith-circuit":
      default:
        return <Sparkles className="w-6 h-6 text-[#7b5800]" />;
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById("booking-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#eff4ff] text-[#00152f] text-xs font-bold px-3 py-1 rounded-full mb-2 border border-slate-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#febb14]" />
            <span>{isHi ? servicesSection.tagHi : servicesSection.tagEn}</span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight">
            {isHi ? servicesSection.headingHi : servicesSection.headingEn}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-xl mx-auto">
            {isHi ? servicesSection.subheadingHi : servicesSection.subheadingEn}
          </p>
        </motion.div>

        {/* Services Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesSection.items.map((item) => {
            const isFeatured = item.isFeatured;
            const isOnRequest = item.onRequest;

            return (
              <motion.div
                key={item.id}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className={`rounded-2xl p-6 transition-shadow duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? "bg-[#fffdf7] border-2 border-[#febb14] shadow-md hover:shadow-xl relative ring-4 ring-amber-100/50"
                    : isOnRequest
                    ? "bg-slate-50 border border-dashed border-slate-300 hover:border-slate-400 hover:shadow-lg"
                    : "bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-xl"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3 right-6 bg-[#febb14] text-[#00152f] text-xs font-extrabold px-3 py-0.5 rounded-full shadow-xs">
                    {isHi ? "सर्वाधिक लोकप्रिय" : "Featured Pilgrimage Offer"}
                  </div>
                )}

                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      isFeatured
                        ? "bg-[#ffdea5]"
                        : isOnRequest
                        ? "bg-slate-200/70"
                        : "bg-[#e6eeff]"
                    }`}
                  >
                    {getServiceIcon(item.id)}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-extrabold text-[#00152f] text-lg sm:text-xl">
                      {isHi ? item.titleHi : item.titleEn}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {isHi ? item.descHi : item.descEn}
                  </p>

                  {/* Pricing / Status tag */}
                  <div className="mt-4">
                    {item.rateEn && (
                      <span
                        className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold ${
                          isFeatured
                            ? "bg-[#00152f] text-white shadow-2xs"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        {isHi ? item.rateHi : item.rateEn}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    {isOnRequest
                      ? isHi
                        ? "अनुरोध पर उपलब्ध"
                        : "Available on request"
                      : isHi
                      ? item.badgeHi
                      : item.badgeEn}
                  </span>
                  <button
                    onClick={() =>
                      openWhatsApp(
                        isHi
                          ? `नमस्ते नियर सीबीएस सर्विस, मुझे ${item.titleHi} सेवा बुक करनी है।`
                          : `Hello Near Cabs Service, I would like to book ${item.titleEn} service.`
                      )
                    }
                    className={`min-h-[44px] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer py-2 px-1 ${
                      isFeatured
                        ? "text-[#7b5800] hover:text-[#00152f]"
                        : "text-[#00152f] hover:text-[#0f2a4a]"
                    }`}
                  >
                    <span>{isHi ? "बुक करें" : "Book Cab"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
