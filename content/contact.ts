// ============================================================
// KONTAKTI / КОНТАКТЫ
//
// Nik: put Marina's real WhatsApp number here — international
// format, DIGITS ONLY (no +, spaces or dashes).
// A Latvian mobile +371 2X XXX XXX becomes "3712XXXXXXX".
// This one value powers every "WhatsApp" / "Reserve" button.
// ============================================================

export const whatsappNumber = "37126676969"; // Marina's WhatsApp: +371 26 676 969

// True once a real number (not the placeholder) is set.
export const hasWhatsapp = /^\d{8,15}$/.test(whatsappNumber) && !whatsappNumber.includes("X");

// Build a wa.me link, optionally with a pre-filled message.
export const waLink = (message?: string) =>
  `https://wa.me/${whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
