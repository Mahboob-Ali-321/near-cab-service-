import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { BrandLogo } from "./BrandLogo.tsx";
import { drawerVariants, drawerItemVariants } from "../utils/motion.ts";

interface HeaderProps {
  lang: "en" | "hi";
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHi = lang === "hi";
  const { business, navigation, header } = SITE_CONFIG;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/90 backdrop-blur-xs border-b border-slate-200/70 shadow-none"
      }`}
    >
      {/* 
        Below 768px: fixed height of 64px (h-16), single row, flex-nowrap.
        Tablet & Desktop: h-18 (72px)
      */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between flex-nowrap">
        {/* Brand identity: logo + "Near Cabs" on ONE line on mobile, min-w-0 to prevent overflow */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-3 group focus:outline-hidden min-w-0 flex-shrink"
          aria-label={isHi ? business.nameHi : business.nameEn}
        >
          <BrandLogo size="sm" className="md:hidden flex-shrink-0" />
          <BrandLogo size="md" className="hidden md:flex flex-shrink-0" />

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-extrabold text-[#00152f] text-base sm:text-lg md:text-xl tracking-tight leading-none group-hover:text-[#0f2a4a] transition-colors whitespace-nowrap truncate">
                {isHi ? (
                  <>
                    <span>नियर कैब्स</span>
                    <span className="hidden md:inline"> सर्विस</span>
                  </>
                ) : (
                  <>
                    <span>Near Cabs</span>
                    <span className="hidden md:inline"> Service</span>
                  </>
                )}
              </span>

              {/* 5.0 Rating Badge: hidden on mobile below 768px, visible on md+ */}
              <span className="hidden md:inline-flex items-center gap-0.5 bg-[#febb14] text-[#00152f] text-xs font-bold px-1.5 py-0.5 rounded-full shadow-xs flex-shrink-0">
                <span>5.0</span>
                <Star className="w-3 h-3 fill-current" />
              </span>
            </div>

            {/* Subtitle: hidden on mobile below 768px, visible on md+ */}
            <span className="hidden md:block text-xs text-slate-500 font-medium mt-0.5 truncate">
              {isHi ? business.subNameHi : business.subNameEn}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-semibold text-slate-600 hover:text-[#00152f] transition-colors cursor-pointer"
            >
              {isHi ? item.labelHi : item.labelEn}
            </button>
          ))}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Compact Language Switcher Toggle */}
          <button
            onClick={onToggleLang}
            type="button"
            className="flex items-center bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-full p-0.5 sm:p-1 text-[11px] sm:text-xs font-bold transition-all shadow-2xs active:scale-95 cursor-pointer flex-shrink-0"
            title={isHi ? "Switch to English" : "हिंदी में बदलें"}
            aria-label="Language Toggle"
          >
            <span
              className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all ${
                !isHi
                  ? "bg-[#00152f] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              EN
            </span>
            <span
              className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-all ${
                isHi
                  ? "bg-[#00152f] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              हिं
            </span>
          </button>

          {/* Desktop Phone Call Link */}
          <a
            href={`tel:${business.phonePrimaryRaw}`}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#00152f] border border-slate-300 text-xs font-bold transition-all shadow-2xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#febb14]" />
            <span>{business.phonePrimary}</span>
          </a>

          {/* Book Now Primary Button: hidden on mobile below 768px, visible on md+ */}
          <button
            onClick={() => scrollToSection("booking-form")}
            className="hidden md:inline-flex items-center bg-[#febb14] hover:bg-[#e5a70f] text-[#00152f] font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer min-h-[40px]"
          >
            {isHi ? header.bookNowHi : header.bookNowEn}
          </button>

          {/* Mobile Menu Hamburger: kept compact, >=44px tap target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with smooth slide & fade animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-drawer"
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-5 space-y-1.5 shadow-xl overflow-hidden"
          >
            {navigation.map((item) => (
              <motion.button
                key={item.id}
                variants={drawerItemVariants}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-3.5 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#00152f] transition-colors min-h-[48px] flex items-center cursor-pointer"
              >
                {isHi ? item.labelHi : item.labelEn}
              </motion.button>
            ))}

            <motion.div variants={drawerItemVariants} className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${business.phonePrimaryRaw}`}
                className="flex items-center justify-center gap-2 w-full min-h-[48px] py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#00152f] font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#febb14]" />
                <span>
                  {isHi ? header.callHi : header.callEn}: {business.phonePrimary}
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
