import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { getWhatsAppUrl, getDefaultWhatsAppMessage } from "../utils/whatsapp.ts";

interface StickyActionsProps {
  lang: "en" | "hi";
}

export const StickyActions: React.FC<StickyActionsProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { business, stickyBottomBar, floatingDesktopWa } = SITE_CONFIG;

  const whatsappUrl = getWhatsAppUrl(getDefaultWhatsAppMessage(isHi));

  return (
    <>
      {/* 
        Mobile Sticky Bottom Bar:
        Fixed at bottom on mobile screens (< 768px).
        All buttons have >= 48px tap height (min-h-[48px]).
      */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center gap-2.5 h-16">
        {/* Call Now Button */}
        <a
          href={`tel:${business.phonePrimaryRaw}`}
          className="flex-1 min-h-[48px] h-12 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-[#00152f] active:bg-[#0f2a4a] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#febb14] flex-shrink-0" />
          <span className="truncate">{isHi ? stickyBottomBar.callNowHi : stickyBottomBar.callNowEn}</span>
        </a>

        {/* Book on WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[48px] h-12 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-[#25D366] active:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-current flex-shrink-0" />
          <span className="truncate">{isHi ? stickyBottomBar.whatsappHi : stickyBottomBar.whatsappEn}</span>
        </a>
      </div>

      {/* 
        Desktop Floating WhatsApp Button:
        Hidden on mobile to NEVER overlap with mobile sticky bottom bar!
        Gentle entrance animation with subtle periodic pulse every few seconds.
      */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.45, ease: "easeOut" }}
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <motion.a
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 4, duration: 1.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all border-2 border-white group"
          aria-label={isHi ? floatingDesktopWa.textHi : floatingDesktopWa.textEn}
        >
          <div className="relative flex-shrink-0">
            <MessageSquare className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-300 rounded-full"></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-white/90 font-medium leading-none">
              {isHi ? floatingDesktopWa.badgeHi : floatingDesktopWa.badgeEn}
            </span>
            <span className="font-extrabold text-sm leading-tight">
              {isHi ? floatingDesktopWa.textHi : floatingDesktopWa.textEn}
            </span>
          </div>
        </motion.a>
      </motion.div>
    </>
  );
};
