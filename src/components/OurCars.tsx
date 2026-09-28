import React from "react";
import { CheckCircle, Users, Wind, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { NeutralPlaceholder } from "./NeutralPlaceholder.tsx";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";
import { openWhatsApp } from "../utils/whatsapp.ts";

interface OurCarsProps {
  lang: "en" | "hi";
}

export const OurCars: React.FC<OurCarsProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { fleetSection } = SITE_CONFIG;

  const scrollToBooking = () => {
    const el = document.getElementById("booking-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="fleet" className="py-12 md:py-16 bg-white border-b border-slate-200">
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
            <Wind className="w-3.5 h-3.5 text-[#febb14]" />
            <span>{isHi ? fleetSection.tagHi : fleetSection.tagEn}</span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight">
            {isHi ? fleetSection.headingHi : fleetSection.headingEn}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-xl mx-auto">
            {isHi ? fleetSection.subheadingHi : fleetSection.subheadingEn}
          </p>
        </motion.div>

        {/* Cars Fleet Grid (Only AC Sedan and 7-Seater MUV) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {fleetSection.cars.map((car) => {
            return (
              <motion.div
                key={car.id}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo area with neutral placeholder as instructed */}
                  <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <NeutralPlaceholder
                      type={car.id === "ac-sedan" ? "sedan" : "muv"}
                      title={isHi ? car.nameHi : car.nameEn}
                      subtitle={isHi ? car.capacityHi : car.capacityEn}
                      badgeText={isHi ? "यहाँ क्लाइंट फोटो" : "Client photo here"}
                      className="w-full h-full rounded-none border-0"
                      imageUrl={car.image}
                    />
                    <span className="absolute top-3 right-3 bg-[#00152f] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                      {isHi ? car.categoryHi : car.categoryEn}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-extrabold text-[#00152f] text-xl sm:text-2xl">
                        {isHi ? car.nameHi : car.nameEn}
                      </h3>
                      <span className="inline-flex items-center gap-1 bg-[#ffdea5] text-[#00152f] text-xs font-bold px-2.5 py-1 rounded-full">
                        <Users className="w-3.5 h-3.5" />
                        <span>{isHi ? car.capacityHi : car.capacityEn}</span>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {isHi ? car.descHi : car.descEn}
                    </p>

                    {/* Amenities checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200">
                      {(isHi ? car.amenitiesHi : car.amenitiesEn).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA with min 48px height */}
                <div className="p-5 sm:p-6 pt-0">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      openWhatsApp(
                        isHi
                          ? `नमस्ते नियर सीबीएस सर्विस, मुझे ${car.nameHi} कैब बुक करनी है।`
                          : `Hello Near Cabs Service, I would like to book an ${car.nameEn} cab.`
                      )
                    }
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#00152f] hover:bg-[#0f2a4a] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>
                      {isHi
                        ? `बुक करें (${car.nameHi})`
                        : `Book ${car.nameEn}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
