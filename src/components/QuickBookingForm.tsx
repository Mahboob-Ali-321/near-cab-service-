import React, { useState } from "react";
import { MessageSquare, User, Phone, MapPin, Flag, Calendar, Clock, Users, Car, CheckCircle, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { SITE_CONFIG } from "../data/config.ts";
import { fadeInUpVariants, viewportOnce } from "../utils/motion.ts";
import { openWhatsApp } from "../utils/whatsapp.ts";

interface QuickBookingFormProps {
  lang: "en" | "hi";
}

export const QuickBookingForm: React.FC<QuickBookingFormProps> = ({ lang }) => {
  const isHi = lang === "hi";
  const { bookingForm } = SITE_CONFIG;

  // Form State
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  // Default to blank placeholder "Select pickup location"
  const [pickup, setPickup] = useState("");
  const [customPickup, setCustomPickup] = useState("");
  // Default drop location
  const [drop, setDrop] = useState("");
  const [customDrop, setCustomDrop] = useState("");
  const [date, setDate] = useState(() => {
    // Default to today
    const now = new Date();
    return now.toISOString().split("T")[0];
  });
  const [time, setTime] = useState("08:00");
  const [passengers, setPassengers] = useState("1 to 4 Passengers");
  const [carType, setCarType] = useState<"Sedan" | "7-Seater MUV">("Sedan");

  // Submitted WhatsApp URL for inline success fallback
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  // Error state
  const [errors, setErrors] = useState<{
    name?: string;
    mobile?: string;
    pickup?: string;
    customPickup?: string;
    drop?: string;
    customDrop?: string;
    date?: string;
  }>({});

  const validate = () => {
    const errs: {
      name?: string;
      mobile?: string;
      pickup?: string;
      customPickup?: string;
      drop?: string;
      customDrop?: string;
      date?: string;
    } = {};

    if (!name.trim()) {
      errs.name = isHi
        ? bookingForm.errors.nameRequiredHi
        : bookingForm.errors.nameRequiredEn;
    }

    const cleanMobile = mobile.replace(/[^0-9]/g, "");
    if (cleanMobile.length !== 10) {
      errs.mobile = isHi
        ? bookingForm.errors.phoneInvalidHi
        : bookingForm.errors.phoneInvalidEn;
    }

    if (!pickup) {
      errs.pickup = isHi
        ? bookingForm.errors.pickupRequiredHi
        : bookingForm.errors.pickupRequiredEn;
    } else if (pickup === "Other" && !customPickup.trim()) {
      errs.customPickup = isHi
        ? bookingForm.errors.customPickupRequiredHi
        : bookingForm.errors.customPickupRequiredEn;
    }

    if (!drop) {
      errs.drop = isHi
        ? bookingForm.errors.dropRequiredHi
        : bookingForm.errors.dropRequiredEn;
    } else if (drop === "Other" && !customDrop.trim()) {
      errs.customDrop = isHi
        ? bookingForm.errors.customDropRequiredHi
        : bookingForm.errors.customDropRequiredEn;
    }

    if (!date) {
      errs.date = isHi ? "तारीख चुनें" : "Select travel date";
    } else {
      const selectedDate = new Date(date);
      selectedDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errs.date = isHi
          ? bookingForm.errors.datePastHi
          : bookingForm.errors.datePastEn;
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookingSubmit = () => {
    if (!validate()) {
      return;
    }

    const finalPickup =
      pickup === "Other" ? customPickup.trim() : pickup;
    const finalDrop =
      drop === "Other" ? customDrop.trim() : drop;

    const carTypeFormatted =
      carType === "Sedan" ? "AC Sedan" : "7-Seater MUV";

    // Build prefilled WhatsApp message with \n line breaks as explicitly instructed
    const message = [
      "Hello Near Cabs Service, I would like to book a cab.",
      `Name: ${name.trim()}`,
      `Mobile: ${mobile.trim()}`,
      `Pickup: ${finalPickup}`,
      `Drop: ${finalDrop}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Passengers: ${passengers}`,
      `Car: ${carTypeFormatted}`,
    ].join("\n");

    // Open WhatsApp via shared helper and save URL for inline fallback
    const targetUrl = openWhatsApp(message);
    setSubmittedUrl(targetUrl);
  };

  return (
    <motion.div
      id="booking-form"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl p-4 sm:p-6 lg:p-7 shadow-xl border border-slate-200 relative overflow-hidden"
    >
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00152f] via-[#febb14] to-[#25D366]"></div>

      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 mb-4">
        <div>
          <h2 className="font-extrabold text-[#00152f] text-lg sm:text-2xl tracking-tight">
            {isHi ? bookingForm.titleHi : bookingForm.titleEn}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {isHi ? bookingForm.subtitleHi : bookingForm.subtitleEn}
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#7b5800] border border-amber-200 flex items-center justify-center flex-shrink-0">
          <Car className="w-5 h-5 text-[#febb14]" />
        </div>
      </div>

      {/* Form Fields - using div with onClick, avoiding <form> restriction */}
      <div className="space-y-3 sm:space-y-3.5">
        {/* Name & Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#00152f] mb-1">
              {isHi ? bookingForm.nameLabelHi : bookingForm.nameLabelEn} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder={
                  isHi
                    ? bookingForm.namePlaceholderHi
                    : bookingForm.namePlaceholderEn
                }
                className={`w-full min-h-[46px] pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all duration-200 ${
                  errors.name
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white"
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#00152f] mb-1">
              {isHi ? bookingForm.phoneLabelHi : bookingForm.phoneLabelEn} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              <input
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value.replace(/[^0-9]/g, ""));
                  if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                }}
                placeholder={
                  isHi
                    ? bookingForm.phonePlaceholderHi
                    : bookingForm.phonePlaceholderEn
                }
                className={`w-full min-h-[46px] pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all duration-200 ${
                  errors.mobile
                    ? "border-red-400 bg-red-50/50"
                    : "border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white"
                }`}
              />
            </div>
            {errors.mobile && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.mobile}
              </p>
            )}
          </div>
        </div>

        {/* Pickup & Drop Points with road waypoints visual */}
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3 relative">
          {/* Connecting line */}
          <div className="absolute left-[1.35rem] top-7 bottom-7 w-0.5 border-l-2 border-dashed border-slate-300"></div>

          {/* Pickup Location */}
          <div className="relative pl-7">
            <span className="w-3 h-3 rounded-full bg-[#25D366] ring-4 ring-green-100 absolute left-0 top-3"></span>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-green-600" />
              <span>{isHi ? bookingForm.pickupLabelHi : bookingForm.pickupLabelEn}</span>
              <span className="text-red-500">*</span>
            </label>
            <select
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
                if (errors.pickup) setErrors({ ...errors, pickup: undefined });
              }}
              className={`w-full min-h-[44px] px-3 py-2 rounded-lg border text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all cursor-pointer ${
                errors.pickup ? "border-red-400 bg-red-50/50" : "border-slate-200 bg-white"
              } ${!pickup ? "text-slate-400" : "text-slate-800"}`}
            >
              <option value="" disabled>
                {isHi ? bookingForm.pickupPlaceholderHi : bookingForm.pickupPlaceholderEn}
              </option>
              {bookingForm.pickupOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="text-slate-800">
                  {isHi ? opt.labelHi : opt.labelEn}
                </option>
              ))}
            </select>
            {errors.pickup && (
              <p className="text-red-600 text-xs mt-1 font-medium">{errors.pickup}</p>
            )}

            {pickup === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  value={customPickup}
                  onChange={(e) => {
                    setCustomPickup(e.target.value);
                    if (errors.customPickup) setErrors({ ...errors, customPickup: undefined });
                  }}
                  placeholder={isHi ? "विशिष्ट पिकअप पता लिखें..." : "Type specific pickup location..."}
                  className={`w-full min-h-[42px] px-3 py-2 rounded-lg border text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 ${
                    errors.customPickup ? "border-red-400 bg-red-50/50" : "border-slate-300"
                  }`}
                />
                {errors.customPickup && (
                  <p className="text-red-600 text-xs mt-1 font-medium">{errors.customPickup}</p>
                )}
              </div>
            )}
          </div>

          {/* Drop Location */}
          <div className="relative pl-7">
            <span className="w-3 h-3 rounded-full bg-[#febb14] ring-4 ring-amber-100 absolute left-0 top-3"></span>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
              <Flag className="w-3.5 h-3.5 text-amber-600" />
              <span>{isHi ? bookingForm.dropLabelHi : bookingForm.dropLabelEn}</span>
              <span className="text-red-500">*</span>
            </label>
            <select
              value={drop}
              onChange={(e) => {
                setDrop(e.target.value);
                if (errors.drop) setErrors({ ...errors, drop: undefined });
              }}
              className={`w-full min-h-[44px] px-3 py-2 rounded-lg border text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all cursor-pointer ${
                errors.drop ? "border-red-400 bg-red-50/50" : "border-slate-200 bg-white"
              } ${!drop ? "text-slate-400" : "text-slate-800"}`}
            >
              <option value="" disabled>
                {isHi ? bookingForm.dropPlaceholderHi : bookingForm.dropPlaceholderEn}
              </option>
              {bookingForm.dropOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="text-slate-800">
                  {isHi ? opt.labelHi : opt.labelEn}
                </option>
              ))}
            </select>
            {errors.drop && (
              <p className="text-red-600 text-xs mt-1 font-medium">{errors.drop}</p>
            )}

            {drop === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  value={customDrop}
                  onChange={(e) => {
                    setCustomDrop(e.target.value);
                    if (errors.customDrop) setErrors({ ...errors, customDrop: undefined });
                  }}
                  placeholder={isHi ? "विशिष्ट गंतव्य शहर/स्थान लिखें..." : "Type specific destination..."}
                  className={`w-full min-h-[42px] px-3 py-2 rounded-lg border text-xs sm:text-sm bg-white focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 ${
                    errors.customDrop ? "border-red-400 bg-red-50/50" : "border-slate-300"
                  }`}
                />
                {errors.customDrop && (
                  <p className="text-red-600 text-xs mt-1 font-medium">{errors.customDrop}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 
          Date, Time & Passengers Grid:
          Stacked in ONE column on mobile, 3 columns on tablet and desktop.
          This ensures full visibility of dates and passenger counts without clipping!
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Travel Date */}
          <div>
            <label className="block text-xs font-bold text-[#00152f] mb-1">
              {isHi ? bookingForm.dateLabelHi : bookingForm.dateLabelEn} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  setDate(e.target.value);
                  if (errors.date) setErrors({ ...errors, date: undefined });
                }}
                className={`w-full min-h-[44px] pl-9 pr-2 py-2.5 rounded-xl border text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all ${
                  errors.date ? "border-red-400 bg-red-50/50" : "border-slate-200 bg-white"
                }`}
              />
            </div>
            {errors.date && (
              <p className="text-red-600 text-xs mt-1 font-medium">{errors.date}</p>
            )}
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-xs font-bold text-[#00152f] mb-1">
              {isHi ? bookingForm.timeLabelHi : bookingForm.timeLabelEn}
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full min-h-[44px] pl-9 pr-2 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all"
              />
            </div>
          </div>

          {/* Number of Passengers */}
          <div>
            <label className="block text-xs font-bold text-[#00152f] mb-1">
              {isHi ? bookingForm.passengersLabelHi : bookingForm.passengersLabelEn}
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3.5 pointer-events-none" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full min-h-[44px] pl-9 pr-2 py-2.5 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#febb14] focus:border-amber-400 transition-all cursor-pointer"
              >
                <option value="1 to 2 Passengers">1 to 2 {isHi ? "यात्री" : "Passengers"}</option>
                <option value="3 to 4 Passengers">3 to 4 {isHi ? "यात्री" : "Passengers"}</option>
                <option value="5 to 6 Passengers">5 to 6 {isHi ? "यात्री" : "Passengers"}</option>
                <option value="7+ Passengers (Group)">7+ {isHi ? "यात्री (समूह)" : "Passengers (Group)"}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Car Type Selector: Sedan vs 7-Seater MUV */}
        <div>
          <label className="block text-xs font-bold text-[#00152f] mb-1.5">
            {isHi ? bookingForm.carTypeLabelHi : bookingForm.carTypeLabelEn}
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setCarType("Sedan")}
              className={`min-h-[56px] p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                carType === "Sedan"
                  ? "border-[#00152f] bg-[#eff4ff] ring-2 ring-[#00152f]/10 shadow-xs"
                  : "border-slate-200 bg-slate-50 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-[#00152f]">
                  AC Sedan
                </span>
                {carType === "Sedan" && (
                  <CheckCircle className="w-4 h-4 text-[#00152f]" />
                )}
              </div>
              <span className="text-[11px] text-slate-500 mt-1">
                {isHi ? "1-4 यात्री • सुगम सफर" : "1-4 Pax • Ideal for family"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setCarType("7-Seater MUV")}
              className={`min-h-[56px] p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                carType === "7-Seater MUV"
                  ? "border-[#febb14] bg-amber-50/70 ring-2 ring-[#febb14]/30 shadow-xs"
                  : "border-slate-200 bg-slate-50 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm text-[#00152f]">
                  7-Seater MUV
                </span>
                {carType === "7-Seater MUV" && (
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                )}
              </div>
              <span className="text-[11px] text-slate-500 mt-1">
                {isHi ? "5-7 यात्री • लगेज स्पेस" : "5-7 Pax • Extra Luggage"}
              </span>
            </button>
          </div>
        </div>

        {/* Submit Button with gentle press effect and hover lift */}
        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBookingSubmit}
          className="w-full min-h-[48px] bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span>{isHi ? bookingForm.submitBtnHi : bookingForm.submitBtnEn}</span>
        </motion.button>

        {/* Inline Success Note if opened or blocked */}
        {submittedUrl && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-green-50 border border-green-200 rounded-xl text-center text-xs text-green-900 font-medium flex items-center justify-center flex-wrap gap-1"
          >
            <span>
              {isHi ? bookingForm.successOpeningHi : bookingForm.successOpeningEn}
            </span>
            <a
              href={submittedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-green-800 hover:text-green-950 inline-flex items-center gap-1"
            >
              <span>{isHi ? bookingForm.successTapHereHi : bookingForm.successTapHereEn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}

        {/* Required Note under button */}
        <p className="text-center text-slate-500 text-xs font-medium pt-1">
          {isHi ? bookingForm.noteHi : bookingForm.noteEn}
        </p>
      </div>
    </motion.div>
  );
};
