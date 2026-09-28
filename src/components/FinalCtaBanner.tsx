import React from "react";
import { MessageSquare, Phone, ShieldCheck, Check } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { fadeInUpVariants, viewportOnce } from "../utils/motion.ts";
import { getWhatsAppUrl, getDefaultWhatsAppMessage } from "../utils/whatsapp.ts";

interface FinalCtaBannerProps {
  lang: "en" | "hi";
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { finalCta, business } = SITE_CONFIG;

  return (
    <section className="py-14 md:py-18 bg-[#00152f] text-white relative overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#febb14]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUpVariants}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 bg-[#0f2a4a] px-4 py-1.5 rounded-full text-[#febb14] text-xs font-bold mb-4 border border-[#febb14]/30 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-[#febb14]" />
          <span>{isHi ? finalCta.tagHi : finalCta.tagEn}</span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(1.6rem,4.5vw,2.75rem)] font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {isHi ? finalCta.headingHi : finalCta.headingEn}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
          {isHi ? finalCta.subheadingHi : finalCta.subheadingEn}
        </p>

        {/* Action Buttons with min 48px height */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={getWhatsAppUrl(getDefaultWhatsAppMessage(isHi))}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>{isHi ? finalCta.ctaWhatsappHi : finalCta.ctaWhatsappEn}</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${business.phonePrimaryRaw}`}
            className="min-h-[48px] bg-[#febb14] hover:bg-[#e5a70f] text-[#00152f] font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2.5 active:scale-95"
          >
            <Phone className="w-5 h-5" />
            <span>{isHi ? finalCta.ctaCallHi : finalCta.ctaCallEn}</span>
          </motion.a>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>{isHi ? finalCta.perk1Hi : finalCta.perk1En}</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>{isHi ? finalCta.perk2Hi : finalCta.perk2En}</span>
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#25D366]" />
            <span>{isHi ? finalCta.perk3Hi : finalCta.perk3En}</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
};
