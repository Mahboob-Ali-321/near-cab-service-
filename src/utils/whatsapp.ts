import { SITE_CONFIG } from "../data/config.ts";

/**
 * Builds the official WhatsApp Web/App URL.
 * Format: https://api.whatsapp.com/send?phone=917970929844&text=<encodeURIComponent(message)>
 */
export function getWhatsAppUrl(message: string): string {
  const phone = SITE_CONFIG.business.whatsappNumber;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}

/**
 * Default prefilled text for general booking inquiries.
 */
export function getDefaultWhatsAppMessage(isHi = false): string {
  return isHi
    ? "नमस्ते नियर सीबीएस सर्विस, मुझे कैब बुक करनी है।"
    : "Hello Near Cabs Service, I would like to book a cab.";
}

/**
 * Opens WhatsApp in a new browser tab/window safely from within the preview environment.
 * NEVER uses window.location, location.href, or iframe-based navigation.
 * If window.open is blocked by popup blockers, it falls back to creating an <a> element and clicking it.
 * Returns the generated URL.
 */
export function openWhatsApp(message: string): string {
  const url = getWhatsAppUrl(message);

  try {
    const popup = window.open(url, "_blank", "noopener,noreferrer");
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      // Popup was blocked: trigger anchor click
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return url;
}
