const WHATSAPP_URL =
  "https://wa.me/233502826749?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Smart%20Dispatch";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-50">
      {/* Pulse ring */}
      <div className="absolute -inset-2 rounded-full animate-ping bg-[#25D366]/25 pointer-events-none" />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
        aria-label="Chat with us on WhatsApp"
      >
        <span
          className="material-symbols-outlined text-[22px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          chat
        </span>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap text-sm">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
