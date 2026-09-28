import React from "react";
import { Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { BrandLogo } from "./BrandLogo.tsx";
import { fadeInUpVariants, viewportOnce } from "../utils/motion.ts";

interface FooterProps {
  lang: "en" | "hi";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { business } = SITE_CONFIG;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#00152f] text-white border-t border-slate-800 pb-20 md:pb-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUpVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Address */}
          <div className="md:col-span-6 flex flex-col space-y-3">
            <div className="flex items-center gap-3">
              <BrandLogo size="sm" />
              <div>
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white block">
                  {isHi ? business.nameHi : business.nameEn}
                </span>
                <span className="text-xs text-slate-400">
                  {isHi ? business.subNameHi : business.subNameEn}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 flex items-start gap-2 max-w-md pt-1">
              <MapPin className="w-4 h-4 text-[#febb14] flex-shrink-0 mt-0.5" />
              <span>{isHi ? business.addressHi : business.addressEn}</span>
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs font-semibold text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <a href={`tel:${business.phonePrimaryRaw}`} className="hover:text-white transition-colors">
                {business.phonePrimary}
              </a>
              <span className="text-slate-600">/</span>
              <a href={`tel:${business.phoneSecondaryRaw}`} className="hover:text-white transition-colors">
                {business.phoneSecondary}
              </a>
            </div>
          </div>

          {/* Quick Route Links */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-3">
            <span className="text-xs font-bold text-[#febb14] uppercase tracking-wider">
              {isHi ? "महत्वपूर्ण लिंक" : "Quick Links"}
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-300 md:justify-end">
              <button
                onClick={() => scrollTo("routes")}
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isHi ? "बाबा बैद्यनाथ धाम दर्शन" : "Baba Baidyanath Dham Darshan"}
              </button>
              <button
                onClick={() => scrollTo("routes")}
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isHi ? "बासुकीनाथ आउटस्टेशन दर" : "Basukinath Outstation Fare"}
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isHi ? "त्रिकुट पर्वत दर्शन कैब" : "Trikuta Parvat Cab"}
              </button>
              <button
                onClick={() => scrollTo("faqs")}
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isHi ? "सामान्य प्रश्न व नियम" : "FAQs & Pilgrimage Policy"}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>{isHi ? business.copyrightHi : business.copyrightEn}</p>
          <p className="font-medium text-slate-400">
            {isHi ? business.creditByHi : business.creditByEn}
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
