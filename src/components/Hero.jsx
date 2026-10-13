import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 px-6 overflow-hidden bg-gradient-to-b from-[#f0faf4] to-white dark:from-on-background dark:to-on-background">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#006d2f 1px, transparent 1px), linear-gradient(90deg, #006d2f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-screen-xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Meta / WhatsApp Business API badge */}
          <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5 mb-7">
            <span
              className="material-symbols-outlined text-primary text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="text-primary text-xs font-semibold tracking-wide uppercase">
              Built on Meta WhatsApp Business Cloud API
            </span>
          </div>

          <h1 className="text-[38px] md:text-[52px] leading-[1.1] font-extrabold tracking-tight text-on-background mb-6">
            Automate Deliveries.{" "}
            <span className="text-primary">Zero extra apps</span> required.
          </h1>

          <p className="text-body-lg text-on-surface-variant mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Smart Dispatch processes orders from WhatsApp, assigns available
            drivers in seconds, and sends real-time delivery updates — all
            through the messaging app your customers already use.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button to="/contact" size="lg">
              Request Early Access
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              size="lg"
            >
              See How It Works
            </Button>
          </div>

          {/* Trust nudge */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              lock
            </span>
            <span>No credit card required &bull; Free pilot for early partners</span>
          </div>
        </div>

        {/* WhatsApp Chat Mockup */}
        <div className="lg:w-1/2 relative w-full flex justify-center">
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/8 via-secondary/5 to-transparent rounded-3xl blur-3xl" />
          <div className="relative w-full max-w-[300px] aspect-[9/16] bg-[#efeae2] rounded-3xl border-[3px] border-on-background/20 shadow-2xl overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold tracking-tight">
                SD
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold">Smart Dispatch</div>
                <div className="text-[#7ae0d6] text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#7ae0d6] rounded-full inline-block" />
                  Online
                </div>
              </div>
              <span className="material-symbols-outlined text-white/70 text-[20px]">more_vert</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 px-3 py-3 space-y-3 overflow-hidden bg-[#e5ddd5]">
              {/* Customer */}
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] px-3 py-2 rounded-2xl rounded-tr-sm max-w-[88%] shadow-sm">
                  <p className="text-[13px] text-[#303030] leading-relaxed">
                    2 jollof rice + 1 chicken, deliver to North Legon
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-0.5">12:30 PM ✓✓</p>
                </div>
              </div>

              {/* Auto-confirmation */}
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm max-w-[88%] shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="material-symbols-outlined text-[#25D366] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <span className="text-[11px] font-bold text-[#075e54]">Order Confirmed</span>
                  </div>
                  <p className="text-[13px] text-[#303030] leading-relaxed">
                    Order #8472 received! Driver assigned. ETA: <strong>18 min</strong>
                  </p>
                  <p className="text-[10px] text-gray-400 text-right mt-0.5">12:30 PM</p>
                </div>
              </div>

              {/* Driver card */}
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm max-w-[88%] shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-secondary text-[15px]">local_shipping</span>
                    <span className="text-[11px] font-bold text-secondary">Driver En Route</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary text-[14px]">person</span>
                    </div>
                    <div>
                      <div className="text-[12px] font-medium text-[#303030]">Kwame • Toyota Corolla</div>
                      <div className="text-[10px] text-gray-400">1.8 km away</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-400 text-right mt-1">12:31 PM</p>
                </div>
              </div>

              {/* Delivery complete */}
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-sm max-w-[88%] shadow-sm border-l-2 border-[#25D366]">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#25D366] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      done_all
                    </span>
                    <span className="text-[11px] font-bold text-[#25D366]">Delivered!</span>
                  </div>
                  <p className="text-[12px] text-[#303030] mt-0.5">Order dropped at your gate.</p>
                  <p className="text-[10px] text-gray-400 text-right mt-0.5">12:49 PM</p>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="bg-[#f0f0f0] px-3 py-2 flex items-center gap-2 flex-shrink-0">
              <span className="material-symbols-outlined text-on-surface-variant/50 text-[20px]">mood</span>
              <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-[13px] text-on-surface-variant/50">
                Type a message...
              </div>
              <span className="material-symbols-outlined text-on-surface-variant/50 text-[20px]">mic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
