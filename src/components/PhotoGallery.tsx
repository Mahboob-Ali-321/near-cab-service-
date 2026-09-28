import React from "react";
import { Camera } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { NeutralPlaceholder } from "./NeutralPlaceholder.tsx";
import {
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOnce,
} from "../utils/motion.ts";

interface PhotoGalleryProps {
  lang: "en" | "hi";
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { gallerySection } = SITE_CONFIG;

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
          <div className="inline-flex items-center gap-1.5 bg-[#eff4ff] text-[#00152f] text-xs font-bold px-3 py-1 rounded-full mb-2 border border-slate-200 shadow-2xs">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHi ? gallerySection.tagHi : gallerySection.tagEn}</span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight">
            {isHi ? gallerySection.headingHi : gallerySection.headingEn}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-xl mx-auto">
            {isHi ? gallerySection.subheadingHi : gallerySection.subheadingEn}
          </p>
        </motion.div>

        {/* 6-Photo Neat Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gallerySection.items.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="h-56 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-shadow duration-300 relative"
            >
              <NeutralPlaceholder
                type={item.image}
                title={isHi ? item.titleHi : item.titleEn}
                subtitle={isHi ? item.tagHi : item.tagEn}
                badgeText={isHi ? "यहाँ क्लाइंट फोटो" : "Client photo here"}
                className="w-full h-full rounded-none border-0"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
