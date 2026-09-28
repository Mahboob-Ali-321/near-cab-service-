import React from "react";
import { MessageSquare, CheckCircle, Car } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";

interface HowItWorksProps {
  lang: "en" | "hi";
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { howItWorks } = SITE_CONFIG;

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <MessageSquare className="w-5 h-5 text-[#00152f]" />;
      case 2:
        return <CheckCircle className="w-5 h-5 text-[#00152f]" />;
      case 3:
      default:
        return <Car className="w-5 h-5 text-[#00152f]" />;
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <span className="text-xs font-bold text-[#7b5800] uppercase tracking-wider">
            {isHi ? howItWorks.tagHi : howItWorks.tagEn}
          </span>
          <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight mt-1">
            {isHi ? howItWorks.headingHi : howItWorks.headingEn}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-xl mx-auto">
            {isHi ? howItWorks.subheadingHi : howItWorks.subheadingEn}
          </p>
        </motion.div>

        {/* 3 Steps: 1 col on mobile, 3 col on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
        >
          {howItWorks.steps.map((item) => (
            <motion.div
              key={item.step}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-shadow duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#febb14] text-[#00152f] font-extrabold text-base flex items-center justify-center shadow-xs">
                    {item.step}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-200/60 flex items-center justify-center">
                    {getStepIcon(item.step)}
                  </div>
                </div>

                <h3 className="font-extrabold text-[#00152f] text-lg sm:text-xl mb-2">
                  {isHi ? item.titleHi : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isHi ? item.descHi : item.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
