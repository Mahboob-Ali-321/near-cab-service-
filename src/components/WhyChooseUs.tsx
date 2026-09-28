import React from "react";
import { Sparkles, Banknote, UserCheck, Clock } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";

interface WhyChooseUsProps {
  lang: "en" | "hi";
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { whyChooseUs } = SITE_CONFIG;

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "clean-interior":
        return <Sparkles className="w-6 h-6 text-[#7b5800]" />;
      case "affordable-price":
        return <Banknote className="w-6 h-6 text-[#00152f]" />;
      case "experienced-drivers":
        return <UserCheck className="w-6 h-6 text-[#7b5800]" />;
      case "on-time-pickup":
      default:
        return <Clock className="w-6 h-6 text-[#00152f]" />;
    }
  };

  return (
    <section id="why-us" className="py-12 md:py-16 bg-[#eff4ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <span className="text-xs font-bold text-[#7b5800] uppercase tracking-wider">
            {isHi ? whyChooseUs.tagHi : whyChooseUs.tagEn}
          </span>
          <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight mt-1">
            {isHi ? whyChooseUs.headingHi : whyChooseUs.headingEn}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-xl mx-auto">
            {isHi ? whyChooseUs.subheadingHi : whyChooseUs.subheadingEn}
          </p>
        </motion.div>

        {/* 4 Pillars Grid: 1 on mobile, 2 on tablet, 4 on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {whyChooseUs.pillars.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? "bg-[#ffdea5]" : "bg-[#e6eeff]"
                }`}
              >
                {getPillarIcon(item.id)}
              </div>

              <h3 className="font-extrabold text-[#00152f] text-base sm:text-lg mb-2">
                {isHi ? item.titleHi : item.titleEn}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isHi ? item.descHi : item.descEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
