import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-7">
          <span className="material-symbols-outlined text-white text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            groups
          </span>
          <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
            Onboarding Early Business Partners
          </span>
        </div>

        <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-tight text-white mb-5 leading-tight">
          Ready to stop coordinating<br className="hidden md:block" /> deliveries manually?
        </h2>

        <p className="text-[17px] text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join our early access programme and be among the first businesses to
          run automated delivery operations over WhatsApp — free during the
          pilot period.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button
            to="/contact"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 focus:ring-white border-0"
          >
            Request Early Access
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Button>
          <Button
            href="https://wa.me/233502826749?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Smart%20Dispatch"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-transparent border border-white/40 text-white hover:bg-white/10 focus:ring-white"
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Chat on WhatsApp
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/60">
          No commitment required — we'll set up a pilot and you decide if it's right for your business.
        </p>
      </div>
    </section>
  );
}
