/**
 * @file config.ts
 * Single configuration and data file for Near Cabs Service website.
 * Contains all business details, phone numbers, routes, rates, reviews,
 * fleet options, FAQs, services, and complete English & Hindi (Devanagari) translations.
 * 
 * TO EDIT CONTENT:
 * Simply modify the values in this file. The website will automatically update
 * without having to edit any component code.
 */

export interface NavItem {
  id: string;
  labelEn: string;
  labelHi: string;
}

export interface TrustBadgeItem {
  icon: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  badgeEn?: string;
  badgeHi?: string;
  isFeatured?: boolean;
  rateEn?: string;
  rateHi?: string;
  onRequest?: boolean;
}

export interface RouteItem {
  id: string;
  titleEn: string;
  titleHi: string;
  distanceEn: string;
  distanceHi: string;
  descEn: string;
  descHi: string;
  isFeatured?: boolean;
  badgeEn?: string;
  badgeHi?: string;
  prices?: {
    sedanEn: string;
    sedanHi: string;
    muvEn: string;
    muvHi: string;
  };
  rateNoteEn: string;
  rateNoteHi: string;
}

export interface CarFleetItem {
  id: string;
  nameEn: string;
  nameHi: string;
  categoryEn: string;
  categoryHi: string;
  capacityEn: string;
  capacityHi: string;
  descEn: string;
  descHi: string;
  image: string;
  imageAltEn: string;
  imageAltHi: string;
  amenitiesEn: string[];
  amenitiesHi: string[];
}

export interface WhyChooseItem {
  id: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

export interface StepItem {
  step: number;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

export interface ReviewItem {
  id: string;
  quoteEn: string;
  quoteHi: string;
  authorEn: string;
  authorHi: string;
  roleEn: string;
  roleHi: string;
  rating: number;
  initials: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  image: string;
  tagEn: string;
  tagHi: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
}

export const SITE_CONFIG = {
  // Business Core Information
  business: {
    nameEn: "Near Cabs Service",
    nameHi: "नियर सीबीएस सर्विस",
    subNameEn: "Deoghar Taxi Service",
    subNameHi: "देवघर टैक्सी सेवा",
    rating: 5.0,
    reviewCount: 98,
    googleRatingTextEn: "5.0 Rating • 98 Google Reviews",
    googleRatingTextHi: "5.0 रेटिंग • 98 गूगल समीक्षाएं",
    phonePrimary: "079709 29844",
    phonePrimaryRaw: "+917970929844",
    phoneSecondary: "62060 34881",
    phoneSecondaryRaw: "+916206034881",
    whatsappNumber: "917970929844",
    addressEn: "Tower Chowk, Bajla Chowk Road, near Manyavar Shop, Castairs Town, Deoghar, Jharkhand 814112",
    addressHi: "टावर चौक, बाजला चौक रोड, मान्यवर शॉप के पास, कास्टेयर्स टाउन, देवघर, झारखंड 814112",
    googleMapsUrl: "https://www.google.com/maps/place/Near+Cabs+Service/@24.4887645,86.6923155,17z",
    openingHoursEn: "Monday to Sunday (Call to check availability)",
    openingHoursHi: "सोमवार से रविवार (उपलब्धता जानने के लिए कॉल करें)",
    creditByEn: "Website by Mahboob Ali",
    creditByHi: "वेबसाइट: महबूब अली",
    copyrightEn: "© Near Cabs Service, Deoghar. All rights reserved.",
    copyrightHi: "© नियर सीबीएस सर्विस, देवघर। सर्वाधिकार सुरक्षित।",
  },

  // Navigation Links
  navigation: [
    { id: "services", labelEn: "Services", labelHi: "सेवाएं" },
    { id: "routes", labelEn: "Routes & Rates", labelHi: "मार्ग व दरें" },
    { id: "fleet", labelEn: "Our Cars", labelHi: "हमारी गाड़ियाँ" },
    { id: "why-us", labelEn: "Why Choose Us", labelHi: "हमें क्यों चुनें" },
    { id: "reviews", labelEn: "Reviews (98)", labelHi: "समीक्षाएं (98)" },
    { id: "faqs", labelEn: "FAQs", labelHi: "सामान्य प्रश्न" },
    { id: "contact", labelEn: "Contact", labelHi: "संपर्क" },
  ] as NavItem[],

  // Header CTAs
  header: {
    bookNowEn: "Book Cab",
    bookNowHi: "कैब बुक करें",
    callEn: "Call Now",
    callHi: "कॉल करें",
  },

  // Hero Section
  hero: {
    trustPillEn: "5.0 Rated on Google (98 Reviews)",
    trustPillHi: "गूगल पर 5.0 रेटिंग (98 समीक्षाएं)",
    badgeCityEn: "Deoghar Local Cab Service",
    badgeCityHi: "देवघर स्थानीय कैब सेवा",
    h1En: "Deoghar to Basukinath, Kolkata, Patna, Ranchi — Safe and Affordable Cab Service",
    h1Hi: "देवघर से बासुकीनाथ, कोलकाता, पटना, रांची — सुरक्षित और किफायती कैब सेवा",
    subtitlePrefixEn: "Local Deoghar to Basukinath cabs starting at just ",
    subtitlePrefixHi: "देवघर से बासुकीनाथ कैब सिर्फ ",
    subtitleHighlightEn: "₹1,850",
    subtitleHighlightHi: "₹1,850",
    subtitleSuffixEn: ". Comfortable AC Sedan and 7-Seater MUV cars for safe and comfortable travel for pilgrims and families.",
    subtitleSuffixHi: " से शुरू। तीर्थयात्रियों और परिवारों की सुरक्षित और आरामदायक यात्रा हेतु एसी सेडान व 7-सीटर एमयूवी गाड़ियाँ।",
    ctaWhatsappEn: "Book on WhatsApp",
    ctaWhatsappHi: "व्हाट्सएप पर बुक करें",
    ctaCallEn: "Call: 079709 29844",
    ctaCallHi: "कॉल करें: 079709 29844",
    availableFleetEn: "AC Sedan & 7-Seater MUV Available",
    availableFleetHi: "एसी सेडान व 7-सीटर एमयूवी उपलब्ध",
    availableFleetSubEn: "Ready for Baba Dham, Jasidih Station & Outstation travel",
    availableFleetSubHi: "बाबा धाम, जसीडीह स्टेशन व आउटस्टेशन यात्रा के लिए तैयार",
  },

  // Trust Features (Replacing/softening unconfirmed claims)
  trustFeatures: [
    {
      icon: "Clock",
      titleEn: "Call to check availability",
      titleHi: "उपलब्धता हेतु कॉल करें",
      subtitleEn: "Schedule for your trip",
      subtitleHi: "अपनी यात्रा अनुसार बुक करें",
    },
    {
      icon: "UserCheck",
      titleEn: "Polite and Experienced Drivers",
      titleHi: "विनम्र और अनुभवी ड्राइवर",
      subtitleEn: "Familiar with all routes",
      subtitleHi: "सभी मार्गों की पूरी जानकारी",
    },
    {
      icon: "Sparkles",
      titleEn: "Clean Interior",
      titleHi: "साफ-सुथरा इंटीरियर",
      subtitleEn: "Hygienic and comfortable",
      subtitleHi: "स्वच्छ व आरामदायक सफर",
    },
  ] as TrustBadgeItem[],

  // Quick Booking Form
  bookingForm: {
    titleEn: "Quick Cab Booking",
    titleHi: "त्वरित कैब बुकिंग",
    subtitleEn: "Instant WhatsApp dispatch & fare confirmation",
    subtitleHi: "व्हाट्सएप पर त्वरित कैब आवंटन व किराया पुष्टि",
    nameLabelEn: "Your Name",
    nameLabelHi: "आपका नाम",
    namePlaceholderEn: "e.g. Rahul Sharma",
    namePlaceholderHi: "उदा. राहुल शर्मा",
    phoneLabelEn: "Mobile Number (10 digits)",
    phoneLabelHi: "मोबाइल नंबर (10 अंक)",
    phonePlaceholderEn: "e.g. 9876543210",
    phonePlaceholderHi: "उदा. 9876543210",
    pickupLabelEn: "Pickup Location",
    pickupLabelHi: "पिकअप स्थान",
    pickupPlaceholderEn: "Select pickup location",
    pickupPlaceholderHi: "पिकअप स्थान चुनें",
    dropLabelEn: "Drop Location",
    dropLabelHi: "ड्रॉप स्थान",
    dropPlaceholderEn: "Select drop destination",
    dropPlaceholderHi: "गंतव्य स्थान चुनें",
    dateLabelEn: "Travel Date",
    dateLabelHi: "यात्रा की तिथि",
    timeLabelEn: "Pickup Time",
    timeLabelHi: "पिकअप का समय",
    passengersLabelEn: "Number of Passengers",
    passengersLabelHi: "यात्रियों की संख्या",
    carTypeLabelEn: "Car Type",
    carTypeLabelHi: "गाड़ी का प्रकार",
    carOptionSedanEn: "AC Sedan (1 to 4 Passengers)",
    carOptionSedanHi: "एसी सेडान (1 से 4 यात्री)",
    carOptionMuvEn: "7-Seater MUV (5 to 7 Passengers)",
    carOptionMuvHi: "7-सीटर एमयूवी (5 से 7 यात्री)",
    submitBtnEn: "Send Enquiry on WhatsApp",
    submitBtnHi: "व्हाट्सएप पर बुकिंग भेजें",
    noteEn: "Rate and availability will be confirmed on WhatsApp.",
    noteHi: "किराया और उपलब्धता की पुष्टि व्हाट्सएप पर की जाएगी।",
    successOpeningEn: "Opening WhatsApp... If it did not open, ",
    successOpeningHi: "व्हाट्सएप खुल रहा है... यदि नहीं खुला, तो ",
    successTapHereEn: "tap here",
    successTapHereHi: "यहाँ दबाएं",
    errors: {
      nameRequiredEn: "Please enter your name.",
      nameRequiredHi: "कृपया अपना नाम दर्ज करें।",
      phoneInvalidEn: "Please enter a valid 10-digit mobile number.",
      phoneInvalidHi: "कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।",
      pickupRequiredEn: "Please select a pickup location.",
      pickupRequiredHi: "कृपया पिकअप स्थान चुनें।",
      customPickupRequiredEn: "Please enter your pickup location.",
      customPickupRequiredHi: "कृपया अपना पिकअप पता लिखें।",
      dropRequiredEn: "Please select a drop destination.",
      dropRequiredHi: "कृपया गंतव्य स्थान चुनें।",
      customDropRequiredEn: "Please enter your destination.",
      customDropRequiredHi: "कृपया अपना गंतव्य लिखें।",
      datePastEn: "Travel date cannot be in the past.",
      datePastHi: "यात्रा की तिथि पिछली तारीख नहीं हो सकती।",
    },
    pickupOptions: [
      { value: "Jasidih Railway Station", labelEn: "Jasidih Railway Station (जसीडीह जंक्शन)", labelHi: "जसीडीह रेलवे स्टेशन" },
      { value: "Deoghar Airport (DGH)", labelEn: "Deoghar Airport (DGH)", labelHi: "देवघर एयरपोर्ट (DGH)" },
      { value: "Baba Baidyanath Mandir / Clock Tower", labelEn: "Baba Baidyanath Mandir / Clock Tower", labelHi: "बाबा बैद्यनाथ मंदिर / क्लॉक टावर" },
      { value: "Castairs Town / Local Hotel", labelEn: "Castairs Town / Local Hotel", labelHi: "कास्टेयर्स टाउन / स्थानीय होटल" },
      { value: "Other", labelEn: "Other (type below)", labelHi: "अन्य (नीचे लिखें)" },
    ],
    dropOptions: [
      { value: "Basukinath Dham Temple", labelEn: "Basukinath Dham Temple", labelHi: "बासुकीनाथ धाम मंदिर" },
      { value: "Local Deoghar Sightseeing (Full Day)", labelEn: "Local Deoghar Sightseeing (Full Day)", labelHi: "देवघर लोकल दर्शन (पूरा दिन)" },
      { value: "Patna / Patna Airport", labelEn: "Patna / Patna Airport", labelHi: "पटना / पटना एयरपोर्ट" },
      { value: "Ranchi / Ranchi Airport", labelEn: "Ranchi / Ranchi Airport", labelHi: "रांची / रांची एयरपोर्ट" },
      { value: "Kolkata / Howrah", labelEn: "Kolkata / Howrah", labelHi: "कोलकाता / हावड़ा" },
      { value: "Tarapith Temple", labelEn: "Tarapith Temple", labelHi: "तारापीठ मंदिर" },
      { value: "Sultanganj", labelEn: "Sultanganj", labelHi: "सुल्तानगंज" },
      { value: "Other", labelEn: "Other (type below)", labelHi: "अन्य (नीचे लिखें)" },
    ],
  },

  // Services Section
  servicesSection: {
    tagEn: "Our Services",
    tagHi: "हमारी सेवाएं",
    headingEn: "Pilgrimage and Outstation Cab Services",
    headingHi: "तीर्थयात्रा एवं आउटस्टेशन कैब सेवाएं",
    subheadingEn: "Dedicated cabs for every journey from Deoghar's sacred temples to long-distance outstations.",
    subheadingHi: "देवघर के पावन धामों से लेकर दूरस्थ शहरों तक हर यात्रा के लिए समर्पित कैब सेवाएं।",
    items: [
      {
        id: "local-sightseeing",
        titleEn: "Local Deoghar Sightseeing",
        titleHi: "स्थानीय देवघर दर्शन",
        descEn: "Baba Baidyanath Jyotirlinga Darshan, Naulakha Mandir, Tapovan Caves, Trikuta Parvat Ropeway, and Satsang Ashram tour.",
        descHi: "बाबा बैद्यनाथ ज्योतिर्लिंग दर्शन, नौलखा मंदिर, तपोवन गुफाएं, त्रिकुट पर्वत रोपवे व सत्संग आश्रम भ्रमण।",
        badgeEn: "Full Day Sightseeing",
        badgeHi: "पूर्ण दिवस दर्शन",
        rateEn: "Call for rate",
        rateHi: "दर जानने के लिए कॉल करें",
      },
      {
        id: "basukinath",
        titleEn: "Deoghar to Basukinath Dham",
        titleHi: "देवघर से बासुकीनाथ धाम",
        descEn: "After Baba Dham Darshan, visiting Basukinath completes the pilgrimage. Round-trip service with waiting time included at the temple.",
        descHi: "बाबा धाम दर्शन के उपरांत बासुकीनाथ धाम दर्शन आवश्यक है। मंदिर दर्शन प्रतीक्षा समय सहित राउंड-ट्रिप सेवा।",
        badgeEn: "Featured Offer",
        badgeHi: "विशेष ऑफर",
        isFeatured: true,
        rateEn: "Sedan from ₹1,850",
        rateHi: "सेडान ₹1,850 से",
      },
      {
        id: "outstation",
        titleEn: "Outstation Trips",
        titleHi: "आउटस्टेशन यात्राएं",
        descEn: "Round-trip & one-way rides to Patna, Ranchi, Kolkata, Bhagalpur, Dhanbad, and Asansol with transparent communication.",
        descHi: "पटना, रांची, कोलकाता, भागलपुर, धनबाद और आसनसोल के लिए राउंड-ट्रिप व वन-वे यात्राएं।",
        badgeEn: "Inter-City Travel",
        badgeHi: "इंटर-सिटी यात्रा",
        rateEn: "Call for rate",
        rateHi: "दर जानने के लिए कॉल करें",
      },
      {
        id: "station-airport",
        titleEn: "Airport & Station Transfers",
        titleHi: "एयरपोर्ट एवं स्टेशन पिकअप",
        descEn: "Prompt pickup from Jasidih Railway Station and Deoghar Airport (DGH). Available on request with advance booking.",
        descHi: "जसीडीह रेलवे स्टेशन व देवघर एयरपोर्ट (DGH) से समय पर पिकअप। अग्रिम बुकिंग पर उपलब्ध।",
        badgeEn: "On request",
        badgeHi: "अनुरोध पर",
        rateEn: "Call for rate",
        rateHi: "दर जानने के लिए कॉल करें",
        onRequest: true,
      },
      {
        id: "tarapith-circuit",
        titleEn: "Tarapith & Pilgrimage Packages",
        titleHi: "तारापीठ व तीर्थ सर्किट पैकेज",
        descEn: "Multi-destination pilgrimage circuits including Baba Dham, Basukinath, and Tarapith with comfortable travel.",
        descHi: "बाबा धाम, बासुकीनाथ और तारापीठ सहित बहु-दिवसीय तीर्थ सर्किट की आरामदायक यात्रा।",
        badgeEn: "On request",
        badgeHi: "अनुरोध पर",
        rateEn: "Call for rate",
        rateHi: "दर जानने के लिए कॉल करें",
        onRequest: true,
      },
    ] as ServiceItem[],
  },

  // Popular Routes and Rates Section
  routesSection: {
    tagEn: "Transparent Pricing",
    tagHi: "पारदर्शी व्यवस्था",
    headingEn: "Popular Routes and Cab Rates",
    headingHi: "लोकप्रिय मार्ग और कैब दरें",
    subheadingEn: "Featured Basukinath offer and clear estimates for key regional journeys.",
    subheadingHi: "बासुकीनाथ का विशेष पैकेज और प्रमुख मार्गों की स्पष्ट जानकारी।",
    callForCustomEn: "Call for any custom route rate: 079709 29844",
    callForCustomHi: "अन्य किसी भी मार्ग की दर हेतु कॉल करें: 079709 29844",
    routes: [
      {
        id: "basukinath-dham",
        titleEn: "Deoghar ⇄ Basukinath Dham",
        titleHi: "देवघर ⇄ बासुकीनाथ धाम",
        distanceEn: "~45 km (Round-trip)",
        distanceHi: "~45 किमी (राउंड-ट्रिप)",
        descEn: "Round-trip including waiting time for Temple Darshan",
        descHi: "मंदिर दर्शन के लिए प्रतीक्षा समय सहित राउंड-ट्रिप",
        isFeatured: true,
        badgeEn: "Featured Offer",
        badgeHi: "विशेष ऑफर",
        prices: {
          sedanEn: "₹1,850",
          sedanHi: "₹1,850",
          muvEn: "₹2,800",
          muvHi: "₹2,800",
        },
        rateNoteEn: "AC Sedan from ₹1,850 • 7-Seater MUV from ₹2,800",
        rateNoteHi: "एसी सेडान ₹1,850 से • 7-सीटर एमयूवी ₹2,800 से",
      },
      {
        id: "jasidih-junction",
        titleEn: "Jasidih Junction ⇄ Deoghar Town",
        titleHi: "जसीडीह जंक्शन ⇄ देवघर शहर",
        distanceEn: "~8 km (On request)",
        distanceHi: "~8 किमी (अनुरोध पर)",
        descEn: "Station pickup or drop to hotel or direct Baba Mandir",
        descHi: "स्टेशन से होटल अथवा सीधे बाबा मंदिर पिकअप/ड्रॉप",
        rateNoteEn: "Call for rate",
        rateNoteHi: "दर जानने के लिए कॉल करें",
      },
      {
        id: "patna-corridor",
        titleEn: "Deoghar ⇄ Patna (Airport / City)",
        titleHi: "देवघर ⇄ पटना (एयरपोर्ट / शहर)",
        distanceEn: "~250 km",
        distanceHi: "~250 किमी",
        descEn: "Direct highway route via Jamui corridor",
        descHi: "जमुई कॉरिडोर होते हुए सीधा हाइवे मार्ग",
        rateNoteEn: "Call for rate",
        rateNoteHi: "दर जानने के लिए कॉल करें",
      },
      {
        id: "ranchi-highway",
        titleEn: "Deoghar ⇄ Ranchi",
        titleHi: "देवघर ⇄ रांची",
        distanceEn: "~250 km",
        distanceHi: "~250 किमी",
        descEn: "Via Giridih & Bokaro highway route",
        descHi: "गिरिडीह व बोकारो मार्ग होते हुए",
        rateNoteEn: "Call for rate",
        rateNoteHi: "दर जानने के लिए कॉल करें",
      },
      {
        id: "kolkata-expressway",
        titleEn: "Deoghar ⇄ Kolkata / Howrah",
        titleHi: "देवघर ⇄ कोलकाता / हावड़ा",
        distanceEn: "~320 km",
        distanceHi: "~320 किमी",
        descEn: "Via Asansol - Durgapur Expressway",
        descHi: "आसनसोल - दुर्गापुर एक्सप्रेसवे मार्ग",
        rateNoteEn: "Call for rate",
        rateNoteHi: "दर जानने के लिए कॉल करें",
      },
      {
        id: "tarapith-package",
        titleEn: "Deoghar ⇄ Tarapith Mandir",
        titleHi: "देवघर ⇄ तारापीठ मंदिर",
        distanceEn: "~140 km (On request)",
        distanceHi: "~140 किमी (अनुरोध पर)",
        descEn: "Shaktipeeth pilgrimage round-trip package",
        descHi: "शक्तिपीठ तीर्थ दर्शन राउंड-ट्रिप पैकेज",
        rateNoteEn: "Call for rate",
        rateNoteHi: "दर जानने के लिए कॉल करें",
      },
    ] as RouteItem[],
    servingCitiesHeadingEn: "Cities We Serve: We provide pickup and outstation services across:",
    servingCitiesHeadingHi: "सेवा क्षेत्र: हम इन सभी प्रमुख शहरों में पिकअप और आउटस्टेशन सेवा प्रदान करते हैं:",
    cities: [
      "Bhagalpur", "Sultanganj", "Dhanbad", "Bokaro", "Jamui", "Patna", "Ranchi", "Rampurhat", "Giridih", "Dumka", "Tarapith", "Asansol"
    ],
    citiesHi: [
      "भागलपुर", "सुल्तानगंज", "धनबाद", "बोकारो", "जमुई", "पटना", "रांची", "रामपुरहाट", "गिरिडीह", "दुमका", "तारापीठ", "आसनसोल"
    ],
  },

  // Our Cars Section (No specific car models named, only AC Sedan and 7-Seater MUV)
  fleetSection: {
    tagEn: "Verified Fleet",
    tagHi: "सत्यापित वाहन",
    headingEn: "Our Well-Maintained Cab Fleet",
    headingHi: "हमारी सुसज्जित कैब फ्लीट",
    subheadingEn: "Every car is inspected for cleanliness, hygiene, and full passenger comfort before every trip.",
    subheadingHi: "हर यात्रा से पहले प्रत्येक गाड़ी की स्वच्छता और आराम की पूरी जांच की जाती है।",
    cars: [
      {
        id: "ac-sedan",
        nameEn: "AC Sedan",
        nameHi: "एसी सेडान",
        categoryEn: "Sedan Class",
        categoryHi: "सेडान श्रेणी",
        capacityEn: "1 to 4 Passengers",
        capacityHi: "1 से 4 यात्री",
        descEn: "Comfortable and smooth ride with effective air conditioning for couples, families, and local or outstation trips.",
        descHi: "दंपत्तियों, छोटे परिवारों और स्थानीय या आउटस्टेशन यात्रा हेतु आरामदायक व शक्तिशाली एसी से युक्त गाड़ी।",
        image: "placeholder-sedan", // neutral placeholder driven by config
        imageAltEn: "Client photo here - Clean AC Sedan cab",
        imageAltHi: "यहाँ क्लाइंट फोटो - स्वच्छ एसी सेडान कैब",
        amenitiesEn: [
          "Powerful Air Conditioning",
          "Luggage Boot Space",
          "Clean Interior",
          "Mobile Charging Port",
        ],
        amenitiesHi: [
          "शक्तिशाली एयर कंडीशनिंग",
          "पर्याप्त बूट स्पेस",
          "स्वच्छ इंटीरियर",
          "मोबाइल चार्जिंग पोर्ट",
        ],
      },
      {
        id: "muv-7seater",
        nameEn: "7-Seater MUV",
        nameHi: "7-सीटर एमयूवी",
        categoryEn: "MUV Class",
        categoryHi: "एमयूवी श्रेणी",
        capacityEn: "5 to 7 Passengers",
        capacityHi: "5 से 7 यात्री",
        descEn: "Spacious multi-utility vehicle with ample legroom and luggage carrier, ideal for larger family groups and elder pilgrims.",
        descHi: "बड़े परिवारों और बुजुर्ग तीर्थयात्रियों के लिए अधिक लेगस्पेस और लगेज कैरियर युक्त विशाल बहुउद्देशीय वाहन।",
        image: "placeholder-muv", // neutral placeholder driven by config
        imageAltEn: "Client photo here - Clean 7-Seater MUV cab",
        imageAltHi: "यहाँ क्लाइंट फोटो - स्वच्छ 7-सीटर एमयूवी कैब",
        amenitiesEn: [
          "Dual Blower Air Conditioning",
          "Roof Luggage Carrier",
          "Pushback Reclining Seats",
          "Senior-Citizen Friendly",
        ],
        amenitiesHi: [
          "ड्यूल ब्लोअर एसी",
          "छत पर लगेज कैरियर",
          "आरामदायक पुशबैक सीटें",
          "वरिष्ठ नागरिकों हेतु सुविधाजनक",
        ],
      },
    ] as CarFleetItem[],
  },

  // Why Choose Us Section (From real reviews: Clean interior, Affordable price, Polite and experienced drivers who know the routes, On-time pickup)
  whyChooseUs: {
    tagEn: "Unmatched Reliability",
    tagHi: "भरोसेमंद सेवा",
    headingEn: "Why Pilgrims & Families Trust Near Cabs",
    headingHi: "तीर्थयात्री और परिवार नियर सीबीएस पर क्यों भरोसा करते हैं",
    subheadingEn: "Our 4 guiding pillars rooted in real customer experiences and reviews.",
    subheadingHi: "सच्ची ग्राहक समीक्षाओं और अनुभवों पर आधारित हमारे 4 मुख्य सिद्धांत।",
    pillars: [
      {
        id: "clean-interior",
        titleEn: "Clean Interior",
        titleHi: "साफ-सुथरा इंटीरियर",
        descEn: "Every vehicle is thoroughly cleaned, aired, and neatly prepared before every trip. Enjoy a fresh and pleasant ride.",
        descHi: "हर यात्रा से पहले वाहन की गहन सफाई की जाती है ताकि आपका सफर सुखद और स्वच्छ बना रहे।",
      },
      {
        id: "affordable-price",
        titleEn: "Affordable Price",
        titleHi: "किफायती व उचित दरें",
        descEn: "Honest and competitive rates confirmed upfront before your journey begins, ensuring complete peace of mind.",
        descHi: "सफर शुरू होने से पहले तय की गई उचित और पारदर्शी दरें, जिससे आपको मिले पूर्ण मानसिक संतोष।",
      },
      {
        id: "experienced-drivers",
        titleEn: "Polite and Experienced Drivers",
        titleHi: "विनम्र और अनुभवी ड्राइवर",
        descEn: "Our chauffeurs are courteous and know temple timings, local routes, and highway conditions thoroughly.",
        descHi: "हमारे चालक शिष्ट हैं और उन्हें मंदिर के समय, स्थानीय रास्तों तथा हाइवे की पूरी जानकारी है।",
      },
      {
        id: "on-time-pickup",
        titleEn: "On-Time Pickup",
        titleHi: "समय पर पिकअप",
        descEn: "Prompt arrivals at your hotel, home, or Jasidih station gate so your pilgrimage schedule stays smooth.",
        descHi: "होटल, घर या जसीडीह स्टेशन पर तय समय पर आगमन ताकि आपकी यात्रा बिना किसी विलंब के संपन्न हो।",
      },
    ] as WhyChooseItem[],
  },

  // How It Works Section
  howItWorks: {
    tagEn: "Simple & Fast",
    tagHi: "सरल व सुगम",
    headingEn: "How It Works",
    headingHi: "कैब बुक करने की सरल प्रक्रिया",
    subheadingEn: "Book your cab easily in 3 straightforward steps.",
    subheadingHi: "मात्र 3 आसान चरणों में अपनी कैब बुक करें।",
    steps: [
      {
        step: 1,
        titleEn: "WhatsApp or Call Us",
        titleHi: "व्हाट्सएप या कॉल करें",
        descEn: "Contact 079709 29844 on WhatsApp or call with your travel date, pickup location, and destination.",
        descHi: "079709 29844 पर कॉल या व्हाट्सएप करके अपनी यात्रा की तारीख, पिकअप और गंतव्य बताएं।",
      },
      {
        step: 2,
        titleEn: "Confirm Route & Rate",
        titleHi: "मार्ग व किराया तय करें",
        descEn: "Receive confirmed fare and car options promptly on WhatsApp or over phone.",
        descHi: "व्हाट्सएप या फोन पर तत्काल उचित किराया और गाड़ी का विवरण प्राप्त करें।",
      },
      {
        step: 3,
        titleEn: "Cab at Your Doorstep",
        titleHi: "गाड़ी आपके द्वार पर",
        descEn: "Your driver arrives on time at your station, hotel, or residence. Have a safe journey!",
        descHi: "तय समय पर ड्राइवर आपके बताए पते या स्टेशन पर उपस्थित होगा। आपकी यात्रा मंगलमय हो!",
      },
    ] as StepItem[],
  },

  // Reviews Section (Exactly the 3 real reviews requested)
  reviewsSection: {
    tagEn: "Verified Feedback",
    tagHi: "सत्यापित समीक्षाएं",
    headingEn: "What Our Customers Say",
    headingHi: "हमारे ग्राहकों के अनुभव",
    subheadingEn: "5.0 rating from 98 Google reviews by pilgrims and outstation travelers.",
    subheadingHi: "तीर्थयात्रियों और यात्रियों द्वारा गूगल पर दी गई 5.0 रेटिंग (98 समीक्षाएं)।",
    seeAllTextEn: "See all 98 reviews on Google Maps",
    seeAllTextHi: "गूगल मैप्स पर सभी 98 समीक्षाएं देखें",
    reviews: [
      {
        id: "review-1",
        quoteEn: "Excellent outstation experience. The cab arrived on time and the vehicle was immaculately clean.",
        quoteHi: "आउटस्टेशन यात्रा का उत्कृष्ट अनुभव रहा। कैब समय पर आई और गाड़ी बिल्कुल साफ-सुथरी थी।",
        authorEn: "Amit Ranjan",
        authorHi: "अमित रंजन",
        roleEn: "Local Guide",
        roleHi: "लोकल गाइड",
        rating: 5,
        initials: "AR",
      },
      {
        id: "review-2",
        quoteEn: "Our tour was pleasant and he guided us properly. I strongly recommend.",
        quoteHi: "हमारा दौरा बहुत सुखद रहा और उन्होंने हमारा उचित मार्गदर्शन किया। मैं पुरजोर अनुशंसा करता हूँ।",
        authorEn: "Prasanta Kumar Roy",
        authorHi: "प्रशांत कुमार रॉय",
        roleEn: "Google Reviewer",
        roleHi: "गूगल समीक्षक",
        rating: 5,
        initials: "PK",
      },
      {
        id: "review-3",
        quoteEn: "Great service and dependable.",
        quoteHi: "बेहतरीन और भरोसेमंद सेवा।",
        authorEn: "Sudhendu Shekhar",
        authorHi: "सुधेंदु शेखर",
        roleEn: "Local Guide",
        roleHi: "लोकल गाइड",
        rating: 5,
        initials: "SS",
      },
    ] as ReviewItem[],
  },

  // Photo Gallery (No photos showing competitor signboards; neutral placeholders labeled "Client photo here")
  gallerySection: {
    tagEn: "Photo Gallery",
    tagHi: "फोटो गैलरी",
    headingEn: "Fleet & Pilgrimage Moments",
    headingHi: "फ्लीट व तीर्थ दर्शन झलकियां",
    subheadingEn: "Clean vehicles and key destinations around Deoghar and Basukinath.",
    subheadingHi: "देवघर और बासुकीनाथ के दर्शनीय स्थल और हमारी स्वच्छ गाड़ियाँ।",
    items: [
      {
        id: "gal-1",
        titleEn: "AC Sedan Ready for Travel",
        titleHi: "यात्रा हेतु तैयार एसी सेडान",
        image: "placeholder-sedan",
        tagEn: "AC Sedan",
        tagHi: "एसी सेडान",
      },
      {
        id: "gal-2",
        titleEn: "7-Seater MUV for Family Tour",
        titleHi: "पारिवारिक यात्रा हेतु 7-सीटर एमयूवी",
        image: "placeholder-muv",
        tagEn: "7-Seater MUV",
        tagHi: "7-सीटर एमयूवी",
      },
      {
        id: "gal-3",
        titleEn: "Baba Baidyanath Jyotirlinga Dham",
        titleHi: "बाबा बैद्यनाथ ज्योतिर्लिंग धाम",
        image: "placeholder-temple",
        tagEn: "Deoghar Darshan",
        tagHi: "देवघर दर्शन",
      },
      {
        id: "gal-4",
        titleEn: "Basukinath Dham Pilgrimage Route",
        titleHi: "बासुकीनाथ धाम तीर्थ मार्ग",
        image: "placeholder-route",
        tagEn: "Pilgrim Route",
        tagHi: "तीर्थ मार्ग",
      },
      {
        id: "gal-5",
        titleEn: "Jasidih Station Pickup Service",
        titleHi: "जसीडीह स्टेशन पिकअप सेवा",
        image: "placeholder-station",
        tagEn: "Station Pickup",
        tagHi: "स्टेशन पिकअप",
      },
      {
        id: "gal-6",
        titleEn: "Trikuta Parvat Sightseeing Tour",
        titleHi: "त्रिकुट पर्वत दर्शन भ्रमण",
        image: "placeholder-sightseeing",
        tagEn: "Sightseeing",
        tagHi: "पर्यटन",
      },
    ] as GalleryItem[],
  },

  // FAQ Section (Accordion)
  faqSection: {
    tagEn: "Got Questions?",
    tagHi: "कोई प्रश्न?",
    headingEn: "Frequently Asked Questions",
    headingHi: "अक्सर पूछे जाने वाले सवाल",
    subheadingEn: "Everything you need to know before booking your ride with Near Cabs.",
    subheadingHi: "नियर सीबीएस के साथ कैब बुक करने से पहले सभी आवश्यक जानकारियां।",
    faqs: [
      {
        id: "faq-1",
        questionEn: "What are the cab charges from Deoghar to Basukinath Dham?",
        questionHi: "देवघर से बासुकीनाथ धाम का कैब किराया कितना है?",
        answerEn: "Our featured package for Deoghar to Basukinath Dham round-trip in an AC Sedan starts from ₹1,850. For a 7-Seater MUV, the rate starts from ₹2,800. Waiting time during temple darshan is included.",
        answerHi: "देवघर से बासुकीनाथ धाम राउंड-ट्रिप के लिए एसी सेडान का विशेष पैकेज ₹1,850 से शुरू होता है। 7-सीटर एमयूवी के लिए दर ₹2,800 से है। इसमें मंदिर दर्शन के दौरान प्रतीक्षा समय शामिल रहता है।",
      },
      {
        id: "faq-2",
        questionEn: "How do I book a pickup from Jasidih Railway Station or Deoghar Airport?",
        questionHi: "जसीडीह रेलवे स्टेशन या देवघर एयरपोर्ट से पिकअप कैसे बुक करें?",
        answerEn: "Simply send your travel date, train/flight timing, and contact details via WhatsApp or call us at 079709 29844. We will confirm driver availability and fare upfront.",
        answerHi: "बस अपनी यात्रा की तारीख, ट्रेन/फ्लाइट का समय और संपर्क विवरण व्हाट्सएप पर भेजें या हमें 079709 29844 पर कॉल करें। हम उपलब्धता और किराए की पुष्टि कर देंगे।",
      },
      {
        id: "faq-3",
        questionEn: "How are outstation cab rates calculated?",
        questionHi: "आउटस्टेशन कैब का किराया कैसे तय होता है?",
        answerEn: "For outstation journeys to Patna, Ranchi, Kolkata, etc., rates are provided based on whether you need a one-way drop or round-trip. Call 079709 29844 to get an accurate quote for your specific route.",
        answerHi: "पटना, रांची, कोलकाता आदि आउटस्टेशन यात्राओं के लिए वन-वे या राउंड-ट्रिप के आधार पर दर बताई जाती है। अपने रूट का सटीक किराया जानने के लिए 079709 29844 पर कॉल करें।",
      },
      {
        id: "faq-4",
        questionEn: "Which cars are available in your fleet?",
        questionHi: "आपकी फ्लीट में कौन सी गाड़ियाँ उपलब्ध हैं?",
        answerEn: "We maintain clean AC Sedans (comfortable for up to 4 passengers) and 7-Seater MUVs (ideal for 5 to 7 passengers with luggage carrier).",
        answerHi: "हमारे पास स्वच्छ एसी सेडान (4 यात्रियों तक के लिए उपयुक्त) और 7-सीटर एमयूवी (5 से 7 यात्रियों तथा लगेज कैरियर हेतु आदर्श) उपलब्ध हैं।",
      },
      {
        id: "faq-5",
        questionEn: "Is cab service available late night or early morning?",
        questionHi: "क्या देर रात या सुबह जल्दी कैब सेवा मिल सकती है?",
        answerEn: "Yes, we handle early morning and late night station or airport pickups. Please call in advance to check availability and schedule your driver.",
        answerHi: "जी हाँ, सुबह जल्दी या देर रात स्टेशन/एयरपोर्ट पिकअप की व्यवस्था की जाती है। कृपया पहले कॉल करके उपलब्धता जांच लें और समय निर्धारित कराएं।",
      },
      {
        id: "faq-6",
        questionEn: "What payment methods are accepted?",
        questionHi: "भुगतान के कौन-से तरीके स्वीकार किए जाते हैं?",
        answerEn: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer directly to the driver or operator upon trip completion.",
        answerHi: "यात्रा पूर्ण होने पर आप नकद (Cash) अथवा यूपीआई (Google Pay, PhonePe, Paytm) या बैंक ट्रांसफर द्वारा भुगतान कर सकते हैं।",
      },
    ] as FaqItem[],
  },

  // Final CTA Banner
  finalCta: {
    tagEn: "Safe & Reliable Pilgrimage Guarantee",
    tagHi: "सुरक्षित और भरोसेमंद तीर्थयात्रा गारंटी",
    headingEn: "Planning Your Pilgrimage? Book Your Cab on WhatsApp Today!",
    headingHi: "तीर्थयात्रा की योजना बना रहे हैं? आज ही व्हाट्सएप पर कैब बुक करें!",
    subheadingEn: "Deoghar, Basukinath, Patna, Kolkata, Ranchi — join over 98 families who rated our service 5.0 on Google.",
    subheadingHi: "देवघर, बासुकीनाथ, पटना, कोलकाता, रांची — उन 98 से अधिक परिवारों में शामिल हों जिन्होंने हमें गूगल पर 5.0 रेटिंग दी।",
    ctaWhatsappEn: "Instant Dispatch on WhatsApp",
    ctaWhatsappHi: "व्हाट्सएप पर तत्काल संपर्क",
    ctaCallEn: "Call: 079709 29844",
    ctaCallHi: "कॉल करें: 079709 29844",
    perk1En: "Polite Drivers",
    perk1Hi: "विनम्र चालक",
    perk2En: "Clean Interior",
    perk2Hi: "स्वच्छ इंटीरियर",
    perk3En: "Transparent Rates",
    perk3Hi: "पारदर्शी दरें",
  },

  // Contact and Location Section
  contactSection: {
    tagEn: "Locate & Reach Us",
    tagHi: "हमसे संपर्क करें",
    headingEn: "Visit Our Deoghar Office",
    headingHi: "हमारे देवघर कार्यालय से संपर्क करें",
    subheadingEn: "Near Cabs Service operations are centrally located in Castairs Town, Deoghar.",
    subheadingHi: "नियर सीबीएस सर्विस का मुख्य केंद्र कास्टेयर्स टाउन, देवघर में स्थित है।",
    addressTitleEn: "Deoghar Head Office",
    addressTitleHi: "देवघर मुख्य कार्यालय",
    phoneTitleEn: "Direct Helpline Numbers",
    phoneTitleHi: "सीधे संपर्क हेल्पलाइन नंबर",
    hoursTitleEn: "Operating Hours",
    hoursTitleHi: "कार्य समय",
    directionsBtnEn: "Get Directions",
    directionsBtnHi: "दिशा-निर्देश (मैप)",
    instantCallBtnEn: "Call Primary Number",
    instantCallBtnHi: "प्राथमिक नंबर पर कॉल",
  },

  // Mobile Sticky Bottom Bar
  stickyBottomBar: {
    callNowEn: "Call Now",
    callNowHi: "कॉल करें",
    whatsappEn: "Book on WhatsApp",
    whatsappHi: "व्हाट्सएप पर बुक करें",
  },

  // Desktop Floating Button
  floatingDesktopWa: {
    badgeEn: "Need Cab Help?",
    badgeHi: "कैब सहायता चाहिए?",
    textEn: "Book on WhatsApp",
    textHi: "व्हाट्सएप पर बुक करें",
  },
};
