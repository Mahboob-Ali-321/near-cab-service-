/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { Services } from "./components/Services.tsx";
import { PopularRoutes } from "./components/PopularRoutes.tsx";
import { OurCars } from "./components/OurCars.tsx";
import { WhyChooseUs } from "./components/WhyChooseUs.tsx";
import { HowItWorks } from "./components/HowItWorks.tsx";
import { Reviews } from "./components/Reviews.tsx";
import { PhotoGallery } from "./components/PhotoGallery.tsx";
import { FaqAccordion } from "./components/FaqAccordion.tsx";
import { FinalCtaBanner } from "./components/FinalCtaBanner.tsx";
import { ContactLocation } from "./components/ContactLocation.tsx";
import { Footer } from "./components/Footer.tsx";
import { StickyActions } from "./components/StickyActions.tsx";

export default function App() {
  // English is the default on first load, persisted in localStorage upon user choice
  const [lang, setLang] = useState<"en" | "hi">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("near_cabs_lang");
      if (saved === "hi" || saved === "en") {
        return saved;
      }
    }
    return "en";
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === "en" ? "hi" : "en";
      if (typeof window !== "undefined") {
        localStorage.setItem("near_cabs_lang", next);
      }
      return next;
    });
  };

  useEffect(() => {
    // Synchronize HTML lang attribute
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#121c2a] flex flex-col font-sans selection:bg-[#ffdea5] selection:text-[#00152f] overflow-x-hidden w-full relative pb-18 md:pb-0">
      {/* 1. Header with Language Toggle (EN | हिं) */}
      <Header lang={lang} onToggleLang={toggleLanguage} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section + 3. Quick Booking Form */}
        <Hero lang={lang} />

        {/* 4. Services */}
        <Services lang={lang} />

        {/* 5. Popular Routes and Rates */}
        <PopularRoutes lang={lang} />

        {/* 6. Our Cars */}
        <OurCars lang={lang} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs lang={lang} />

        {/* 8. How It Works */}
        <HowItWorks lang={lang} />

        {/* 9. Reviews */}
        <Reviews lang={lang} />

        {/* 10. Photo Gallery */}
        <PhotoGallery lang={lang} />

        {/* 11. FAQ (Accordion) */}
        <FaqAccordion lang={lang} />

        {/* 12. Final CTA Banner */}
        <FinalCtaBanner lang={lang} />

        {/* 13. Contact and Location */}
        <ContactLocation lang={lang} />
      </main>

      {/* 14. Footer */}
      <Footer lang={lang} />

      {/* Sticky Actions: Mobile Bottom Bar + Desktop Floating WhatsApp Button */}
      <StickyActions lang={lang} />
    </div>
  );
}
