import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { fadeInUpVariants, viewportOnce } from "../utils/motion.ts";

interface FaqAccordionProps {
  lang: "en" | "hi";
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { faqSection } = SITE_CONFIG;

  // Open the first item by default
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-12 md:py-16 bg-[#eff4ff] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 bg-white text-[#00152f] text-xs font-bold px-3 py-1 rounded-full mb-2 border border-slate-200 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{isHi ? faqSection.tagHi : faqSection.tagEn}</span>
          </div>
          <h2 className="text-[clamp(1.5rem,3.8vw,2.25rem)] font-extrabold text-[#00152f] tracking-tight leading-tight">
            {isHi ? faqSection.headingHi : faqSection.headingEn}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 max-w-xl mx-auto">
            {isHi ? faqSection.subheadingHi : faqSection.subheadingEn}
          </p>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUpVariants}
          className="space-y-3.5"
        >
          {faqSection.faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full min-h-[52px] px-4 sm:px-5 py-4 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-xs sm:text-base text-[#00152f] hover:bg-slate-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="truncate">{isHi ? faq.questionHi : faq.questionEn}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#00152f]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="px-4 sm:px-5 pb-4 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 sm:pl-14">
                        {isHi ? faq.answerHi : faq.answerEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
