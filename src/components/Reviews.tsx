import React from "react";
import { Star, ExternalLink, Quote } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";

interface ReviewsProps {
  lang: "en" | "hi";
}

export const Reviews: React.FC<ReviewsProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { reviewsSection, business } = SITE_CONFIG;

  return (
    <section id="reviews" className="py-12 md:py-16 bg-[#eff4ff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4"
        >
          <div>
            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs mb-2">
              <span className="font-extrabold text-[#00152f] text-sm flex items-center gap-0.5">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-800">5.0 / 5.0</span>
            </div>

            <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight">
              {isHi ? reviewsSection.headingHi : reviewsSection.headingEn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {isHi ? reviewsSection.subheadingHi : reviewsSection.subheadingEn}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#00152f] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-2xs transition-all hover:shadow-xs"
            >
              <span>{isHi ? reviewsSection.seeAllTextHi : reviewsSection.seeAllTextEn}</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </motion.div>

        {/* 3 Real Reviews Grid: 1 on mobile, 3 on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviewsSection.reviews.map((rev) => (
            <motion.div
              key={rev.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                  "{isHi ? rev.quoteHi : rev.quoteEn}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#00152f] text-[#febb14] font-extrabold flex items-center justify-center text-sm shadow-2xs flex-shrink-0">
                  {rev.initials}
                </div>
                <div className="flex flex-col min-w-0">
                  <h4 className="font-extrabold text-sm text-[#00152f] truncate">
                    {isHi ? rev.authorHi : rev.authorEn}
                  </h4>
                  <span className="text-xs text-slate-500 font-medium truncate">
                    {isHi ? rev.roleHi : rev.roleEn}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
